import { create } from "zustand"
import { authService } from "@/lib/auth"
import { login as apiLogin, logout as apiLogout } from "@/lib/api"

interface AuthState {
  user: any
  isLoggedIn: boolean
  isLoading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  initAuth: () => void
  clearError: () => void
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null })

    try {
      const response = await apiLogin(email, password)

      // Store token and user data
      authService.setToken(response.token)
      authService.setUser(response.user)

      set({
        user: response.user,
        isLoggedIn: true,
        isLoading: false,
        error: null,
      })
    } catch (error: any) {
      set({
        error: error.message || "Login failed",
        isLoading: false,
        isLoggedIn: false,
        user: null,
      })
      throw error
    }
  },

  logout: async () => {
    set({ isLoading: true })

    try {
      await apiLogout()
    } catch (error) {
      // Ignore logout errors from API
      console.warn("Logout API call failed:", error)
    }

    // Always clear local auth state
    authService.logout()
    set({
      user: null,
      isLoggedIn: false,
      isLoading: false,
      error: null,
    })

    // Redirect to login
    window.location.href = "/login"
  },

  initAuth: () => {
    const token = authService.getToken()
    const user = authService.getUser()

    if (token && user && authService.isTokenValid()) {
      set({
        user,
        isLoggedIn: true,
        isLoading: false,
        error: null,
      })
    } else {
      // Clear invalid auth data
      authService.logout()
      set({
        user: null,
        isLoggedIn: false,
        isLoading: false,
        error: null,
      })
    }
  },

  clearError: () => {
    set({ error: null })
  },
}))

interface User {
    id: string
    email: string
    name: string
    role: "admin" | "mod" | "user"
}

class AuthService {
    private readonly TOKEN_KEY = "auth_token"
    private readonly USER_KEY = "auth_user"

    setToken(token: string): void {
        if (typeof window !== "undefined") {
            localStorage.setItem(this.TOKEN_KEY, token)
        }
    }

    getToken(): string | null {
        if (typeof window !== "undefined") {
            return localStorage.getItem(this.TOKEN_KEY)
        }
        return null
    }

    setUser(user: User): void {
        if (typeof window !== "undefined") {
            localStorage.setItem(this.USER_KEY, JSON.stringify(user))
        }
    }

    getUser(): User | null {
        if (typeof window !== "undefined") {
            const userStr = localStorage.getItem(this.USER_KEY)
            if (userStr) {
                try {
                    return JSON.parse(userStr)
                } catch {
                    return null
                }
            }
        }
        return null
    }

    isTokenValid(): boolean {
        const token = this.getToken()
        if (!token) return false

        try {
            // Basic JWT validation - check if token is expired
            const payload = JSON.parse(atob(token.split(".")[1]))
            const currentTime = Date.now() / 1000

            return payload.exp > currentTime
        } catch {
            return false
        }
    }

    logout(): void {
        if (typeof window !== "undefined") {
            localStorage.removeItem(this.TOKEN_KEY)
            localStorage.removeItem(this.USER_KEY)
        }
    }

    getAuthHeaders(): Record<string, string> {
        const token = this.getToken()
        return token ? { Authorization: `Bearer ${token}` } : {}
    }
}

export const authService = new AuthService()

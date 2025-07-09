import { authService } from "./auth"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/v1"

class ApiError extends Error {
    constructor(
        message: string,
        public status: number,
        public code?: string,
    ) {
        super(message)
        this.name = "ApiError"
    }
}

const apiRequest = async (endpoint: string, options: any = {}) => {
    const token = authService.getToken()

    const config = {
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options.headers,
        },
        ...options,
    }

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, config)

        // Handle different response types
        let data
        const contentType = response.headers.get("content-type")

        if (contentType && contentType.includes("application/json")) {
            data = await response.json()
        } else {
            data = await response.text()
        }

        if (!response.ok) {
            // Handle 401 Unauthorized
            // if (response.status === 401) {
            //     authService.logout()
            //     window.location.href = "/login"
            //     throw new ApiError("Session expired. Please login again.", 401, "UNAUTHORIZED")
            // }

            // Extract error message from response
            let errorMessage = "An error occurred"
            let errorCode = "UNKNOWN_ERROR"

            if (typeof data === "object" && data !== null) {
                errorMessage = data.message || data.error || errorMessage
                errorCode = data.code || errorCode
            } else if (typeof data === "string") {
                errorMessage = data
            }

            throw new ApiError(errorMessage, response.status, errorCode)
        }

        return data
    } catch (error) {
        if (error instanceof ApiError) {
            throw error
        }

        // Handle network errors
        if (error instanceof TypeError && error.message.includes("fetch")) {
            throw new ApiError("Network error. Please check your connection.", 0, "NETWORK_ERROR")
        }

        throw new ApiError("An unexpected error occurred", 500, "UNKNOWN_ERROR")
    }
}

export const login = async (email: string, password: string) => {
    return apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    })
}

export const logout = async () => {
    try {
        await apiRequest("/auth/logout", { method: "POST" })
    } catch (error) {
        // Ignore logout errors - we'll clear local state anyway
        console.warn("Logout API call failed:", error)
    }
}

export const getTickets = async () => {
    return apiRequest("/tickets")
}

export const createTicket = async (ticket: any) => {
    return apiRequest("/tickets", {
        method: "POST",
        body: JSON.stringify(ticket),
    })
}

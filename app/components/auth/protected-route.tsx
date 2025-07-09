"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/stores/auth-store"

interface ProtectedRouteProps {
    children: React.ReactNode
    allowedRoles?: string[]
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
    const { isLoggedIn, user, initAuth } = useAuthStore()
    const [isInitialized, setIsInitialized] = useState(false)
    const router = useRouter()

    useEffect(() => {
        // Initialize auth on mount
        initAuth()
        setIsInitialized(true)
    }, [initAuth])

    useEffect(() => {
        if (!isInitialized) return

        if (!isLoggedIn) {
            router.push("/login")
            return
        }

        if (allowedRoles && user && !allowedRoles.includes(user.role)) {
            // Redirect based on user role
            switch (user.role) {
                case "admin":
                    router.push("/dashboard/admin")
                    break
                case "mod":
                    router.push("/dashboard/mod")
                    break
                default:
                    router.push("/dashboard")
            }
        }
    }, [isInitialized, isLoggedIn, user, allowedRoles, router])

    if (!isInitialized || !isLoggedIn) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
            </div>
        )
    }

    if (allowedRoles && user && !allowedRoles.includes(user.role)) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-white text-center">
                    <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
                    <p className="text-gray-400">You don't have permission to access this page.</p>
                </div>
            </div>
        )
    }

    return <>{children}</>
}

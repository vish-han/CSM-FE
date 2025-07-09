"use client"

import { useEffect, type ReactNode } from "react"
import Sidebar from "./common/sidebar"
import { useAuthStore } from "@/stores/auth-store"

interface DashboardLayoutProps {
    children: ReactNode
    userRole: "admin" | "mod" | "user"
    userEmail: string
}
export default function DashboardLayout({ children, userRole, userEmail }: DashboardLayoutProps) {
    const { user, initAuth } = useAuthStore()
    useEffect(() => {
        initAuth()
    }, [])

    if (!user) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Background Effects */}
            <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-gray-900/30 pointer-events-none"></div>

            <Sidebar userRole={user?.role} userEmail={user?.email} />

            {/* Main Content */}
            <div className="ml-64 relative z-10">
                <main className="p-8">{children}</main>
            </div>
        </div>
    )
}

"use client"

import type { ReactNode } from "react"
import Sidebar from "./common/sidebar"

interface DashboardLayoutProps {
    children: ReactNode
    userRole: "admin" | "mod" | "user"
    userEmail: string
}

export default function DashboardLayout({ children, userRole, userEmail }: DashboardLayoutProps) {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Background Effects */}
            <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-gray-900/30 pointer-events-none"></div>

            <Sidebar userRole={userRole} userEmail={userEmail} />

            {/* Main Content */}
            <div className="ml-64 relative z-10">
                <main className="p-8">{children}</main>
            </div>
        </div>
    )
}

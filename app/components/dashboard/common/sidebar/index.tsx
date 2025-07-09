"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Headphones, Plus, Ticket, User, LogOut, Settings, Bell, Home, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
    userRole: "admin" | "mod" | "user"
    userEmail: string
}

export default function Sidebar({ userRole, userEmail }: SidebarProps) {
    const pathname = usePathname()
    const [showLogoutModal, setShowLogoutModal] = useState(false)

    const handleLogout = () => {
        // Implement logout logic here
        console.log("User logged out")
        setShowLogoutModal(false)
    }

    const userRoutes = [
        {
            name: "Dashboard",
            href: "/dashboard",
            icon: <Home className="w-5 h-5" />,
        },
        {
            name: "Create Ticket",
            href: "/dashboard/create-ticket",
            icon: <Plus className="w-5 h-5" />,
        },
        {
            name: "My Tickets",
            href: "/dashboard/my-tickets",
            icon: <Ticket className="w-5 h-5" />,
        },
        {
            name: "Profile",
            href: "/dashboard/profile",
            icon: <User className="w-5 h-5" />,
        },
    ]

    const modRoutes = [
        {
            name: "Dashboard",
            href: "/dashboard/mod",
            icon: <Home className="w-5 h-5" />,
        },
        {
            name: "Create Ticket",
            href: "/dashboard/create-ticket",
            icon: <Plus className="w-5 h-5" />,
        },
        {
            name: "My Tickets",
            href: "/dashboard/my-tickets",
            icon: <Ticket className="w-5 h-5" />,
        },
        {
            name: "Assigned Tickets",
            href: "/dashboard/mod/assigned-tickets",
            icon: <Bell className="w-5 h-5" />,
        },
        {
            name: "Profile",
            href: "/dashboard/profile",
            icon: <User className="w-5 h-5" />,
        },
    ]

    const adminRoutes = [
        {
            name: "Dashboard",
            href: "/dashboard/admin",
            icon: <Home className="w-5 h-5" />,
        },
        {
            name: "Create Ticket",
            href: "/dashboard/create-ticket",
            icon: <Plus className="w-5 h-5" />,
        },
        {
            name: "My Tickets",
            href: "/dashboard/admin/my-tickets",
            icon: <Ticket className="w-5 h-5" />,
        },
        {
            name: "All Tickets",
            href: "/dashboard/admin/all-tickets",
            icon: <Settings className="w-5 h-5" />,
        },
        {
            name: "Moderators",
            href: "/dashboard/admin/moderators",
            icon: <User className="w-5 h-5" />,
        },
        {
            name: "Users",
            href: "/dashboard/admin/users",
            icon: <User className="w-5 h-5" />,
        },
        {
            name: "Profile",
            href: "/dashboard/profile",
            icon: <User className="w-5 h-5" />,
        },
    ]

    const getRoutes = () => {
        switch (userRole) {
            case "admin":
                return adminRoutes
            case "mod":
                return modRoutes
            default:
                return userRoutes
        }
    }

    const routes = getRoutes()

    return (
        <>
            <motion.div
                className="fixed left-0 top-0 h-full w-64 bg-black/95 backdrop-blur-xl border-r border-white/10 z-40"
                initial={{ x: -256 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                {/* Header */}
                <div className="p-6 border-b border-white/10">
                    <motion.div
                        className="flex items-center space-x-3"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                            <Headphones className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <span className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                SupportHub Pro
                            </span>
                            <p className="text-xs text-purple-400 capitalize">{userRole} Dashboard</p>
                        </div>
                    </motion.div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4">
                    <div className="space-y-2">
                        {routes.map((route, index) => {
                            const isActive = pathname === route.href
                            return (
                                <motion.div
                                    key={route.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                >
                                    <Link href={route.href}>
                                        <motion.div
                                            className={`flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all cursor-pointer ${isActive
                                                    ? "bg-gradient-to-r from-purple-600/20 to-purple-700/20 border border-purple-500/30 text-white"
                                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                                }`}
                                            whileHover={{ scale: 1.02, x: 5 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <motion.div className={isActive ? "text-purple-400" : ""} whileHover={{ scale: 1.1 }}>
                                                {route.icon}
                                            </motion.div>
                                            <span className="font-medium">{route.name}</span>
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </div>
                </nav>

                {/* User Info & Logout */}
                <div className="p-4 border-t border-white/10">
                    <div className="mb-4 p-3 bg-white/5 rounded-2xl">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-bold">{userEmail.charAt(0).toUpperCase()}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-white text-sm font-medium truncate">{userEmail}</p>
                                <p className="text-gray-400 text-xs capitalize">{userRole}</p>
                            </div>
                        </div>
                    </div>

                    <motion.button
                        onClick={() => setShowLogoutModal(true)}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-2xl transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Logout</span>
                    </motion.button>
                </div>
            </motion.div>

            {/* Logout Confirmation Modal */}
            <AnimatePresence>
                {showLogoutModal && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowLogoutModal(false)}
                    >
                        <motion.div
                            className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-md w-full"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-white">Confirm Logout</h3>
                                <motion.button
                                    onClick={() => setShowLogoutModal(false)}
                                    className="text-gray-400 hover:text-white transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X className="w-5 h-5" />
                                </motion.button>
                            </div>

                            <p className="text-gray-400 mb-8">
                                Are you sure you want to logout? You'll need to sign in again to access your dashboard.
                            </p>

                            <div className="flex space-x-4">
                                <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        onClick={() => setShowLogoutModal(false)}
                                        variant="outline"
                                        className="w-full border-gray-600 text-gray-300 hover:text-white hover:bg-white/10 hover:border-gray-400"
                                    >
                                        Cancel
                                    </Button>
                                </motion.div>
                                <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        onClick={handleLogout}
                                        className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
                                    >
                                        Logout
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

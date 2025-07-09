"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { User, Mail, Save, Edit } from "lucide-react"

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
}

interface ProfileProps {
    userEmail: string
    userRole: string
}

export default function Profile({ userEmail, userRole }: ProfileProps) {
    const [email, setEmail] = useState(userEmail)
    const [isEditing, setIsEditing] = useState(false)
    const [isSaving, setIsSaving] = useState(false)

    const handleSave = async () => {
        setIsSaving(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setIsSaving(false)
        setIsEditing(false)
    }

    const handleCancel = () => {
        setEmail(userEmail)
        setIsEditing(false)
    }

    return (
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
                <p className="text-gray-400">Manage your account information and preferences</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Card */}
                <motion.div
                    className="lg:col-span-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
                        <motion.div
                            className="w-24 h-24 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <User className="w-12 h-12 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-white mb-2">{email}</h3>
                        <p className="text-purple-400 capitalize font-medium">{userRole} Account</p>
                        <div className="mt-6 p-4 bg-white/5 rounded-2xl">
                            <p className="text-sm text-gray-400">Member since</p>
                            <p className="text-white font-medium">January 2024</p>
                        </div>
                    </div>
                </motion.div>

                {/* Settings Form */}
                <motion.div
                    className="lg:col-span-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-white">Account Information</h2>
                            {!isEditing && (
                                <motion.button
                                    onClick={() => setIsEditing(true)}
                                    className="flex items-center space-x-2 px-4 py-2 bg-purple-600/20 text-purple-300 rounded-2xl hover:bg-purple-600/30 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Edit className="w-4 h-4" />
                                    <span>Edit</span>
                                </motion.button>
                            )}
                        </div>

                        <div className="space-y-6">
                            {/* Email Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={!isEditing}
                                        className={`w-full px-4 py-3 pl-12 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all ${!isEditing ? "opacity-60 cursor-not-allowed" : ""
                                            }`}
                                    />
                                    <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                </div>
                            </div>

                            {/* Role Field (Read-only) */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Account Role</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={userRole}
                                        disabled
                                        className="w-full px-4 py-3 pl-12 bg-white/5 border border-white/10 rounded-2xl text-white opacity-60 cursor-not-allowed capitalize"
                                    />
                                    <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Contact an administrator to change your role</p>
                            </div>

                            {/* Action Buttons */}
                            {isEditing && (
                                <motion.div
                                    className="flex space-x-4 pt-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            onClick={handleSave}
                                            disabled={isSaving || email === userEmail}
                                            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 font-semibold rounded-2xl shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-50"
                                        >
                                            {isSaving ? (
                                                <motion.div
                                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                                />
                                            ) : (
                                                <Save className="w-5 h-5 mr-2" />
                                            )}
                                            {isSaving ? "Saving..." : "Save Changes"}
                                        </Button>
                                    </motion.div>
                                    <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            onClick={handleCancel}
                                            variant="outline"
                                            className="w-full border-gray-600 text-gray-300 hover:text-white hover:bg-white/10 hover:border-gray-400 py-3 font-semibold rounded-2xl bg-transparent"
                                        >
                                            Cancel
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

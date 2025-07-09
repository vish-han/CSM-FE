"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Headphones, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
}

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setIsLoading(false)
    }

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-gray-900/30"></div>
            <motion.div
                className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            ></motion.div>
            <motion.div
                className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            ></motion.div>

            {/* Header */}
            <motion.header
                className="relative z-10 p-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <motion.div
                            className="flex items-center space-x-3"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                                <Headphones className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                SupportHub Pro
                            </span>
                        </motion.div>
                        <motion.div whileHover={{ x: -5 }}>
                            <Link href="/" className="flex items-center text-gray-400 hover:text-white transition-colors group">
                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                Back to Home
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.header>

            {/* Main Content */}
            <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-6">
                <motion.div className="w-full max-w-md" variants={fadeInUp} initial="initial" animate="animate">
                    {/* Login Card */}
                    <motion.div
                        className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <motion.div
                            className="text-center mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
                            <p className="text-gray-400">Sign in to your SupportHub Pro account</p>
                        </motion.div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email Field */}
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 pt-6 pb-2 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-transparent focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all peer"
                                        placeholder="Email address"
                                        required
                                    />
                                    <label
                                        htmlFor="email"
                                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${email
                                                ? "top-2 text-xs text-purple-400"
                                                : "top-4 text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-400"
                                            }`}
                                    >
                                        Email address
                                    </label>
                                </div>
                            </motion.div>

                            {/* Password Field */}
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 pt-6 pb-2 pr-12 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-transparent focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all peer"
                                        placeholder="Password"
                                        required
                                    />
                                    <label
                                        htmlFor="password"
                                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${password
                                                ? "top-2 text-xs text-purple-400"
                                                : "top-4 text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-400"
                                            }`}
                                    >
                                        Password
                                    </label>
                                    <motion.button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </motion.button>
                                </div>
                            </motion.div>

                            {/* Forgot Password */}
                            <motion.div
                                className="text-right"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                <Link href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                                    Forgot your password?
                                </Link>
                            </motion.div>

                            {/* Submit Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-50"
                                    >
                                        {isLoading ? (
                                            <motion.div
                                                className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                            />
                                        ) : (
                                            "Sign in"
                                        )}
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </form>

                        {/* Sign Up Link */}
                        <motion.div
                            className="text-center mt-8 pt-6 border-t border-white/10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                        >
                            <p className="text-gray-400">
                                {"Don't have an account? "}
                                <Link href="/signup" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                                    Sign up
                                </Link>
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                        className="text-center mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <p className="text-gray-500 text-sm">
                            By signing in, you agree to our{" "}
                            <Link href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                                Privacy Policy
                            </Link>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

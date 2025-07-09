"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Headphones, ArrowLeft, Check } from "lucide-react"
import { motion } from "framer-motion"

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
}

export default function SignupPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [acceptTerms, setAcceptTerms] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert("Passwords don't match!")
            return
        }
        setIsLoading(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setIsLoading(false)
    }

    const passwordStrength = (password: string) => {
        let strength = 0
        if (password.length >= 8) strength++
        if (/[A-Z]/.test(password)) strength++
        if (/[0-9]/.test(password)) strength++
        if (/[^A-Za-z0-9]/.test(password)) strength++
        return strength
    }

    const getStrengthColor = (strength: number) => {
        if (strength <= 1) return "bg-red-500"
        if (strength <= 2) return "bg-yellow-500"
        if (strength <= 3) return "bg-blue-500"
        return "bg-green-500"
    }

    const getStrengthText = (strength: number) => {
        if (strength <= 1) return "Weak"
        if (strength <= 2) return "Fair"
        if (strength <= 3) return "Good"
        return "Strong"
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
            <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-6 py-8">
                <motion.div className="w-full max-w-md" variants={fadeInUp} initial="initial" animate="animate">
                    {/* Signup Card */}
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
                            <h1 className="text-3xl font-bold mb-2">Create your account</h1>
                            <p className="text-gray-400">Start your 14-day free trial today</p>
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

                                {/* Password Strength Indicator */}
                                {password && (
                                    <motion.div
                                        className="mt-2"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="flex items-center space-x-2">
                                            <div className="flex-1 bg-gray-700 rounded-full h-2">
                                                <motion.div
                                                    className={`h-2 rounded-full transition-all duration-300 ${getStrengthColor(passwordStrength(password))}`}
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${(passwordStrength(password) / 4) * 100}%` }}
                                                />
                                            </div>
                                            <span
                                                className={`text-xs ${getStrengthColor(passwordStrength(password)).replace("bg-", "text-")}`}
                                            >
                                                {getStrengthText(passwordStrength(password))}
                                            </span>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>

                            {/* Confirm Password Field */}
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        id="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="w-full px-4 pt-6 pb-2 pr-12 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-transparent focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all peer"
                                        placeholder="Confirm password"
                                        required
                                    />
                                    <label
                                        htmlFor="confirmPassword"
                                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${confirmPassword
                                                ? "top-2 text-xs text-purple-400"
                                                : "top-4 text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-400"
                                            }`}
                                    >
                                        Confirm password
                                    </label>
                                    <motion.button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </motion.button>
                                </div>

                                {/* Password Match Indicator */}
                                {confirmPassword && (
                                    <motion.div
                                        className="mt-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div
                                            className={`flex items-center space-x-2 text-xs ${password === confirmPassword ? "text-green-400" : "text-red-400"
                                                }`}
                                        >
                                            <Check className="w-3 h-3" />
                                            <span>{password === confirmPassword ? "Passwords match" : "Passwords don't match"}</span>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>

                            {/* Terms Checkbox */}
                            <motion.div
                                className="flex items-start space-x-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                <motion.button
                                    type="button"
                                    onClick={() => setAcceptTerms(!acceptTerms)}
                                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${acceptTerms ? "bg-purple-600 border-purple-600" : "border-gray-400 hover:border-purple-400"
                                        }`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {acceptTerms && <Check className="w-3 h-3 text-white" />}
                                </motion.button>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    I agree to the{" "}
                                    <Link href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                                        Terms of Service
                                    </Link>{" "}
                                    and{" "}
                                    <Link href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                                        Privacy Policy
                                    </Link>
                                </p>
                            </motion.div>

                            {/* Submit Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.6 }}
                            >
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        type="submit"
                                        disabled={isLoading || !acceptTerms || password !== confirmPassword}
                                        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-50"
                                    >
                                        {isLoading ? (
                                            <motion.div
                                                className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                            />
                                        ) : (
                                            "Create account"
                                        )}
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </form>

                        {/* Sign In Link */}
                        <motion.div
                            className="text-center mt-8 pt-6 border-t border-white/10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <p className="text-gray-400">
                                Already have an account?{" "}
                                <Link href="/login" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                                    Sign in
                                </Link>
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                        className="text-center mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                    >
                        <div className="backdrop-blur-sm bg-purple-500/10 border border-purple-500/20 rounded-2xl px-6 py-4">
                            <p className="text-purple-300 font-semibold text-sm">
                                🚀 14-day free trial • No credit card required • Cancel anytime
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

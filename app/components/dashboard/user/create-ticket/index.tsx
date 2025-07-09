"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
}

export default function CreateTicket() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        // Reset form
        setTitle("")
        setDescription("")
    }

    return (
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Create New Ticket</h1>
                <p className="text-gray-400">Submit a support request and get help from our team</p>
            </div>

            <motion.div
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                    >
                        <div className="relative">
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-4 pt-6 pb-2 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-transparent focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all peer"
                                placeholder="Ticket title"
                                required
                            />
                            <label
                                htmlFor="title"
                                className={`absolute left-4 transition-all duration-200 pointer-events-none ${title
                                        ? "top-2 text-xs text-purple-400"
                                        : "top-4 text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-400"
                                    }`}
                            >
                                Ticket Title
                            </label>
                        </div>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <div className="relative">
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={6}
                                className="w-full px-4 pt-6 pb-2 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-transparent focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all peer resize-none"
                                placeholder="Describe your issue"
                                required
                            />
                            <label
                                htmlFor="description"
                                className={`absolute left-4 transition-all duration-200 pointer-events-none ${description
                                        ? "top-2 text-xs text-purple-400"
                                        : "top-4 text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-400"
                                    }`}
                            >
                                Description
                            </label>
                        </div>
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
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    <motion.div
                                        className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full mr-2"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                    />
                                ) : (
                                    <Plus className="w-5 h-5 mr-2" />
                                )}
                                {isSubmitting ? "Creating Ticket..." : "Create Ticket"}
                            </Button>
                        </motion.div>
                    </motion.div>
                </form>
            </motion.div>
        </motion.div>
    )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, User, AlertCircle, CheckCircle, XCircle, ArrowUp } from "lucide-react"

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
}

// Mock ticket data
const mockTickets = {
    open: [
        {
            id: "1234",
            title: "Login issues with new account",
            createdAt: "2024-01-15",
            description: "Unable to login after creating new account...",
        },
        {
            id: "1235",
            title: "Feature request for dark mode",
            createdAt: "2024-01-14",
            description: "Would love to have a dark mode option...",
        },
    ],
    assigned: [
        {
            id: "1236",
            title: "Billing inquiry about subscription",
            createdAt: "2024-01-13",
            assignedTo: "John Smith",
            description: "Question about my monthly subscription...",
        },
    ],
    resolved: [
        {
            id: "1237",
            title: "Password reset not working",
            createdAt: "2024-01-12",
            resolvedAt: "2024-01-13",
            resolvedBy: "Sarah Johnson",
            description: "Password reset email not being received...",
        },
    ],
    escalated: [
        {
            id: "1238",
            title: "Critical system outage",
            createdAt: "2024-01-11",
            escalatedAt: "2024-01-11",
            escalatedTo: "Senior Support",
            description: "System completely down for all users...",
        },
    ],
    closed: [
        {
            id: "1239",
            title: "Account deletion request",
            createdAt: "2024-01-10",
            closedAt: "2024-01-11",
            description: "Please delete my account and all data...",
        },
    ],
}

const getStatusIcon = (status: string) => {
    switch (status) {
        case "open":
            return <Clock className="w-4 h-4" />
        case "assigned":
            return <User className="w-4 h-4" />
        case "resolved":
            return <CheckCircle className="w-4 h-4" />
        case "escalated":
            return <ArrowUp className="w-4 h-4" />
        case "closed":
            return <XCircle className="w-4 h-4" />
        default:
            return <AlertCircle className="w-4 h-4" />
    }
}

interface TicketCardProps {
    ticket: any
    status: string
}

function TicketCard({ ticket, status }: TicketCardProps) {
    return (
        <Link href={`/dashboard/ticket/${ticket.id}`}>
            <motion.div
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                        <div className="text-purple-400">{getStatusIcon(status)}</div>
                        <div>
                            <h3 className="font-semibold text-white hover:text-purple-300 transition-colors">{ticket.title}</h3>
                            <p className="text-sm text-gray-400">#{ticket.id}</p>
                        </div>
                    </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{ticket.description}</p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Created: {ticket.createdAt}</span>
                    {ticket.assignedTo && <span>Assigned to: {ticket.assignedTo}</span>}
                    {ticket.resolvedBy && <span>Resolved by: {ticket.resolvedBy}</span>}
                    {ticket.escalatedTo && <span>Escalated to: {ticket.escalatedTo}</span>}
                </div>
            </motion.div>
        </Link>
    )
}

export default function MyTickets() {
    const [activeTab, setActiveTab] = useState("open")

    const getTicketCount = (status: string) => {
        return mockTickets[status as keyof typeof mockTickets]?.length || 0
    }

    return (
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">My Tickets</h1>
                <p className="text-gray-400">Track and manage all your support requests</p>
            </div>

            <motion.div
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
                whileHover={{ scale: 1.005 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-5 bg-white/5 border border-white/10 rounded-2xl p-1">
                        {Object.keys(mockTickets).map((status) => (
                            <TabsTrigger
                                key={status}
                                value={status}
                                className="capitalize data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-300 text-gray-400 hover:text-white transition-all rounded-xl"
                            >
                                <div className="flex items-center space-x-2">
                                    {getStatusIcon(status)}
                                    <span>{status}</span>
                                    <Badge variant="secondary" className="ml-1 bg-white/10 text-xs">
                                        {getTicketCount(status)}
                                    </Badge>
                                </div>
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {Object.entries(mockTickets).map(([status, tickets]) => (
                        <TabsContent key={status} value={status} className="mt-6">
                            <div className="space-y-4">
                                {tickets.length > 0 ? (
                                    tickets.map((ticket, index) => (
                                        <motion.div
                                            key={ticket.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.6 }}
                                        >
                                            <TicketCard ticket={ticket} status={status} />
                                        </motion.div>
                                    ))
                                ) : (
                                    <motion.div
                                        className="text-center py-12"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <div className="text-gray-400 mb-4">{getStatusIcon(status)}</div>
                                        <h3 className="text-lg font-semibold text-gray-300 mb-2">No {status} tickets</h3>
                                        <p className="text-gray-500">You don't have any {status} tickets at the moment.</p>
                                    </motion.div>
                                )}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </motion.div>
        </motion.div>
    )
}

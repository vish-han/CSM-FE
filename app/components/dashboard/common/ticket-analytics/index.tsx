"use client"

import { motion } from "framer-motion"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Bar, BarChart } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Calendar, TrendingUp, Clock, CheckCircle } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

// Mock data that matches your API structure (just creation_date and closing_date)
const mockTicketData = [
  { id: 1, creation_date: "2024-01-01", closing_date: "2024-01-03" },
  { id: 2, creation_date: "2024-01-02", closing_date: "2024-01-05" },
  { id: 3, creation_date: "2024-01-03", closing_date: null }, // Still open
  { id: 4, creation_date: "2024-01-04", closing_date: "2024-01-06" },
  { id: 5, creation_date: "2024-01-05", closing_date: "2024-01-08" },
  { id: 6, creation_date: "2024-01-06", closing_date: null }, // Still open
  { id: 7, creation_date: "2024-01-07", closing_date: "2024-01-10" },
  { id: 8, creation_date: "2024-01-08", closing_date: "2024-01-12" },
  { id: 9, creation_date: "2024-01-09", closing_date: null }, // Still open
  { id: 10, creation_date: "2024-01-10", closing_date: "2024-01-15" },
  { id: 11, creation_date: "2024-01-11", closing_date: "2024-01-14" },
  { id: 12, creation_date: "2024-01-12", closing_date: null }, // Still open
  { id: 13, creation_date: "2024-01-13", closing_date: "2024-01-16" },
  { id: 14, creation_date: "2024-01-14", closing_date: "2024-01-18" },
  { id: 15, creation_date: "2024-01-15", closing_date: "2024-01-20" },
]

// Function to process your API data into chart format
const processTicketData = (tickets: any[]) => {
  // Group tickets by date for daily counts
  const dailyStats: { [key: string]: { created: number; closed: number } } = {}

  tickets.forEach((ticket) => {
    const createdDate = ticket.creation_date
    const closedDate = ticket.closing_date

    // Count created tickets
    if (createdDate) {
      if (!dailyStats[createdDate]) {
        dailyStats[createdDate] = { created: 0, closed: 0 }
      }
      dailyStats[createdDate].created += 1
    }

    // Count closed tickets
    if (closedDate) {
      if (!dailyStats[closedDate]) {
        dailyStats[closedDate] = { created: 0, closed: 0 }
      }
      dailyStats[closedDate].closed += 1
    }
  })

  // Convert to array format for charts
  return Object.entries(dailyStats)
    .map(([date, stats]) => ({
      date,
      created: stats.created,
      closed: stats.closed,
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(-14) // Last 14 days
}

// Calculate basic metrics
const calculateMetrics = (tickets: any[]) => {
  const totalTickets = tickets.length
  const closedTickets = tickets.filter((t) => t.closing_date).length
  const openTickets = totalTickets - closedTickets

  // Calculate average resolution time (in days)
  const resolvedTickets = tickets.filter((t) => t.closing_date)
  const avgResolutionTime =
    resolvedTickets.length > 0
      ? resolvedTickets.reduce((sum, ticket) => {
          const created = new Date(ticket.creation_date)
          const closed = new Date(ticket.closing_date)
          const diffDays = Math.ceil((closed.getTime() - created.getTime()) / (1000 * 60 * 60 * 24))
          return sum + diffDays
        }, 0) / resolvedTickets.length
      : 0

  return {
    totalTickets,
    openTickets,
    closedTickets,
    avgResolutionTime: Math.round(avgResolutionTime * 10) / 10, // Round to 1 decimal
    resolutionRate: totalTickets > 0 ? Math.round((closedTickets / totalTickets) * 100) : 0,
  }
}

export default function TicketAnalytics() {
  const chartData = processTicketData(mockTicketData)
  const metrics = calculateMetrics(mockTicketData)

  return (
    <motion.div variants={fadeInUp} initial="initial" animate="animate" className="space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <Card className="backdrop-blur-xl bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total Tickets</p>
                  <p className="text-2xl font-bold text-white">{metrics.totalTickets}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Card className="backdrop-blur-xl bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Open Tickets</p>
                  <p className="text-2xl font-bold text-white">{metrics.openTickets}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Card className="backdrop-blur-xl bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Resolved</p>
                  <p className="text-2xl font-bold text-white">{metrics.closedTickets}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Card className="backdrop-blur-xl bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Avg Resolution</p>
                  <p className="text-2xl font-bold text-white">{metrics.avgResolutionTime}d</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Activity Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Card className="backdrop-blur-xl bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Daily Ticket Activity</CardTitle>
              <CardDescription className="text-gray-400">
                Tickets created and closed over the last 14 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  created: {
                    label: "Created",
                    color: "hsl(var(--chart-1))",
                  },
                  closed: {
                    label: "Closed",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis
                      dataKey="date"
                      stroke="rgba(255,255,255,0.5)"
                      fontSize={12}
                      tickFormatter={(value) =>
                        new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })
                      }
                    />
                    <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} />
                    <ChartTooltip
                      content={<ChartTooltipContent />}
                      labelFormatter={(value) => new Date(value).toLocaleDateString()}
                    />
                    <Line
                      type="monotone"
                      dataKey="created"
                      stroke="var(--color-created)"
                      strokeWidth={2}
                      dot={{ fill: "var(--color-created)", strokeWidth: 2, r: 4 }}
                      name="Created"
                    />
                    <Line
                      type="monotone"
                      dataKey="closed"
                      stroke="var(--color-closed)"
                      strokeWidth={2}
                      dot={{ fill: "var(--color-closed)", strokeWidth: 2, r: 4 }}
                      name="Closed"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Resolution Rate Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Card className="backdrop-blur-xl bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Weekly Summary</CardTitle>
              <CardDescription className="text-gray-400">Ticket volume by day of week</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  count: {
                    label: "Tickets",
                    color: "hsl(var(--chart-3))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData.slice(-7)}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis
                      dataKey="date"
                      stroke="rgba(255,255,255,0.5)"
                      fontSize={12}
                      tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { weekday: "short" })}
                    />
                    <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} />
                    <ChartTooltip
                      content={<ChartTooltipContent />}
                      labelFormatter={(value) => new Date(value).toLocaleDateString()}
                    />
                    <Bar dataKey="created" fill="var(--color-count)" radius={[4, 4, 0, 0]} name="Created Tickets" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Resolution Rate Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <Card className="backdrop-blur-xl bg-white/5 border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Resolution Rate</h3>
                <p className="text-gray-400 text-sm">Percentage of tickets resolved</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">{metrics.resolutionRate}%</p>
                <p className="text-sm text-gray-400">
                  {metrics.closedTickets} of {metrics.totalTickets}
                </p>
              </div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-purple-600 to-purple-700 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${metrics.resolutionRate}%` }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

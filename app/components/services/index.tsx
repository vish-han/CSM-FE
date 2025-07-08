import { fadeInUp, scaleIn, staggerContainer } from "@/consts/FRAMER";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Headphones,
  Shield,
  Zap,
  Users,
  Mail,
  BarChart3,
  Clock,
  AlertTriangle,
  BookOpen,
  MessageSquare,
  Settings,
} from "lucide-react"
export function Services() {
  return (
    <motion.section
      className="relative z-10 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-purple-400 font-semibold mb-4 tracking-wider uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            CORE FEATURES
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl font-black mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Everything you need for{" "}
            <span className="italic font-thin bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              exceptional support
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            From intelligent ticket routing to advanced analytics, we've built the complete support management
            solution for any organization.
          </motion.p>
        </motion.div>
        <div className="space-y-8">
          {/* Row 1: Smart Ticket Management */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-10 gap-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="lg:col-span-7 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Zap className="text-2xl text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">Smart Ticket Management</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    AI-powered routing automatically assigns tickets to the right team members based on skills,
                    workload, and priority. Auto-escalation ensures critical issues never get missed with real-time
                    feedback loops.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Auto-routing", "Smart Escalation", "Real-time Feedback"].map((tag, i) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, type: "spring", stiffness: 500, damping: 15 }}
                        viewport={{ once: true }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
              <motion.div
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-3">
                  {[
                    {
                      id: "#1234",
                      title: "System Access Issue - Critical",
                      priority: "High",
                      assignee: "John D.",
                      status: "In Progress",
                      type: "IT",
                    },
                    {
                      id: "#1235",
                      title: "Course Material Question",
                      priority: "Low",
                      assignee: "Sarah M.",
                      status: "Resolved",
                      type: "Education",
                    },
                    {
                      id: "#1236",
                      title: "Product Feature Request",
                      priority: "Medium",
                      assignee: "Mike R.",
                      status: "Pending",
                      type: "Support",
                    },
                  ].map((ticket, i) => (
                    <motion.div
                      key={ticket.id}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-purple-400 font-mono text-sm">{ticket.id}</span>
                        <span className="text-white text-sm">{ticket.title}</span>
                        <span className="text-xs px-2 py-1 bg-gray-600/30 text-gray-300 rounded">{ticket.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`px-2 py-1 rounded text-xs ${ticket.priority === "High"
                            ? "bg-red-500/20 text-red-300"
                            : ticket.priority === "Medium"
                              ? "bg-yellow-500/20 text-yellow-300"
                              : "bg-green-500/20 text-green-300"
                            }`}
                        >
                          {ticket.priority}
                        </span>
                        <span className="text-gray-400 text-xs">{ticket.assignee}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="lg:col-span-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Shield className="text-2xl text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">Role-Based Security</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Advanced permission system with granular access controls for different user types and departments.
              </p>
              <div className="space-y-3">
                {["Admin Access", "Agent Permissions", "User Portal", "Department Controls"].map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center text-green-400 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <span className="mr-2">✓</span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Row 2: Communication & Analytics */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-10 gap-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="lg:col-span-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <BarChart3 className="text-2xl text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">Real-time Analytics</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Live insights into team performance, response times, user satisfaction, and feedback trends.
              </p>
              <motion.div
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-3xl font-bold text-pink-400 mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  1.8min
                </motion.div>
                <div className="text-gray-400 text-sm">Avg Response Time</div>
              </motion.div>
            </motion.div>
            <motion.div
              className="lg:col-span-7 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <MessageSquare className="text-2xl text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">Unified Communication Hub</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Multi-channel support with email integration, live chat, knowledge base, and automated responses.
                    Perfect for customer support, IT helpdesk, and educational institutions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Multi-channel", "Auto-responses", "Knowledge Base", "Live Chat"].map((tag, i) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, type: "spring", stiffness: 500, damping: 15 }}
                        viewport={{ once: true }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
              <motion.div
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white text-sm">Communication Channels</span>
                  <motion.span
                    className="text-green-400 text-xs"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    All Active
                  </motion.span>
                </div>
                <div className="space-y-2">
                  {[
                    { name: "Email Support", status: "42 new tickets", color: "purple", icon: "📧" },
                    { name: "Live Chat", status: "8 active chats", color: "green", icon: "💬" },
                    { name: "Knowledge Base", status: "156 articles viewed", color: "blue", icon: "📚" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.name}
                      className="flex items-center justify-between text-sm p-2 bg-white/5 rounded"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center space-x-2">
                        <span>{item.icon}</span>
                        <span className="text-gray-400">{item.name}</span>
                      </div>
                      <span className={`text-${item.color}-400`}>{item.status}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
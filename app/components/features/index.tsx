import { fadeInUp, staggerContainer } from "@/consts/FRAMER";
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
export function Features() {
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
            PERFECT FOR ANY ORGANIZATION
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl font-black mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Built for{" "}
            <span className="italic font-thin bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              every industry
            </span>
          </motion.h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            {
              title: "IT & Tech Companies",
              description:
                "Internal helpdesk for technical support, system issues, and infrastructure management. Perfect for IT teams handling employee requests.",
              features: ["Technical ticket routing", "System monitoring alerts", "Asset management"],
              icon: <Settings className="w-6 h-6" />,
              tickets: [
                { id: "#1234", priority: "High", status: "Server Down", type: "Infrastructure" },
                { id: "#1235", priority: "Medium", status: "Software Install", type: "Request" },
                { id: "#1236", priority: "Low", status: "Password Reset", type: "Access" },
              ],
            },
            {
              title: "Educational Institutions",
              description:
                "Student support system for academic queries, course doubts, and administrative requests. Streamline communication between students and faculty.",
              features: ["Student query management", "Course support", "Faculty collaboration"],
              icon: <BookOpen className="w-6 h-6" />,
              students: [
                { name: "Alex Johnson", query: "Assignment Help", status: "Answered" },
                { name: "Sarah Wilson", query: "Course Material", status: "In Progress" },
                { name: "Mike Chen", query: "Exam Schedule", status: "Resolved" },
              ],
            },
            {
              title: "Customer Support Teams",
              description:
                "Complete customer service solution with multi-channel support, knowledge base, and satisfaction tracking for any business.",
              features: ["Multi-channel support", "Customer satisfaction", "Knowledge base"],
              icon: <Headphones className="w-6 h-6" />,
              channels: [
                { name: "📧 Email Support", count: "24 tickets", status: "Active" },
                { name: "💬 Live Chat", count: "8 conversations", status: "Online" },
                { name: "📞 Phone Support", count: "12 calls", status: "Available" },
              ],
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {service.icon}
              </motion.div>
              <motion.h3
                className="text-2xl font-bold text-white mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-gray-400 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {service.description}
              </motion.p>
              {service.features.length > 0 && (
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      className="flex items-center text-green-400"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <span className="mr-3">✓</span>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              )}
              {service.tickets && (
                <motion.div
                  className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {service.tickets.map((ticket, i) => (
                    <motion.div
                      key={ticket.id}
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-purple-400 font-mono text-sm">{ticket.id}</span>
                        <span className="text-white text-sm">{ticket.status}</span>
                      </div>
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
                    </motion.div>
                  ))}
                </motion.div>
              )}
              {service.students && (
                <motion.div
                  className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {service.students.map((student, i) => (
                    <motion.div
                      key={student.name}
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full"></div>
                        <div>
                          <span className="text-white text-sm block">{student.name}</span>
                          <span className="text-gray-400 text-xs">{student.query}</span>
                        </div>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded ${student.status === "Answered" || student.status === "Resolved"
                            ? "bg-green-500/20 text-green-300"
                            : "bg-yellow-500/20 text-yellow-300"
                          }`}
                      >
                        {student.status}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
              {service.channels && (
                <div className="space-y-3">
                  {service.channels.map((channel, i) => (
                    <motion.div
                      key={channel.name}
                      className="flex items-center justify-between backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div>
                        <span className="text-white text-sm block">{channel.name}</span>
                        <span className="text-gray-400 text-xs">{channel.count}</span>
                      </div>
                      <span className="text-green-400 text-xs">{channel.status}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
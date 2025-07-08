import { fadeInUp, staggerContainer } from "@/consts/FRAMER";
import { motion } from "framer-motion";
import { Headphones } from "lucide-react";

export function DashboardPreview() {
  return (
    <motion.section
      className="relative z-10 py-16"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <motion.div
            className="flex items-center space-x-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
              <Headphones className="text-white text-lg font-bold" />
            </div>
            <span className="text-white font-semibold">
              <span className="italic font-thin">Support</span> Dashboard
            </span>
          </motion.div>
          <motion.div
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl"></div>
                <span className="text-gray-300">Search tickets, users, knowledge base...</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-500 text-sm font-mono bg-gray-800/50 px-2 py-1 rounded">⌘K</span>
                <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">42</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">5</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full shadow-lg"></div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { title: "Open Tickets", value: "42", color: "purple" },
              { title: "Urgent", value: "5", color: "red" },
              { title: "Resolved Today", value: "28", color: "green" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 h-40"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm">{stat.title}</span>
                  <div className={`w-3 h-3 rounded-full bg-${stat.color}-500`}></div>
                </div>
                <div className={`text-3xl font-bold text-${stat.color}-400 mb-2`}>{stat.value}</div>
                <div className="text-gray-500 text-xs">Last 24 hours</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>)
}
import { Button } from "@/components/ui/button";
import { fadeInLeft, fadeInUp, scaleIn, staggerContainer } from "@/consts/FRAMER";
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
export function HowItWork() {
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
            HOW IT WORKS
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl font-black mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ship fast, iterate{" "}
            <span className="italic font-thin bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              faster
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our streamlined setup process gets your support system running quickly, so you can start providing better
            service immediately and gather real-time feedback.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                number: "1",
                title: "Setup Your Support Hub",
                description:
                  "Configure your team, roles, and basic settings in under 5 minutes - no complex requirements needed",
              },
              {
                number: "2",
                title: "Connect & Integrate",
                description:
                  "Link your existing tools, email, and communication channels seamlessly with one-click integrations",
              },
              {
                number: "3",
                title: "Start Supporting & Iterating",
                description:
                  "Begin managing requests with intelligent routing, get real-time user feedback, and iterate fast",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                className="flex items-start space-x-6"
                variants={fadeInLeft}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {step.number}
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                <Headphones className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold">SupportHub Pro Setup</span>
            </motion.div>
            <div className="space-y-4">
              <motion.div
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium">Quick Setup Progress</span>
                  <span className="text-green-400 text-sm">92% Complete</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                  <motion.div
                    className="bg-gradient-to-r from-purple-600 to-purple-700 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    transition={{ delay: 0.6, duration: 1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
                <motion.div
                  className="grid grid-cols-2 gap-3"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {[
                    { label: "Team Setup", status: "✓" },
                    { label: "Integrations", status: "✓" },
                    { label: "Permissions", status: "✓" },
                    { label: "Go Live", status: "..." },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="bg-white/5 rounded-lg p-3 flex items-center justify-between"
                      variants={scaleIn}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="text-gray-300 text-sm">{item.label}</span>
                      <span className={`text-sm ${item.status === "✓" ? "text-green-400" : "text-gray-500"}`}>
                        {item.status}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>)
}
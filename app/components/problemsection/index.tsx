import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeInUp, scaleIn, staggerContainer } from "@/consts/FRAMER";
import { motion } from "framer-motion";
import Link from "next/link";
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
export function ProblemSection() {
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
          <motion.div
            className="inline-block"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold mb-4">PROBLEM</Badge>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl font-black mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Support Management is{" "}
            <span className="italic font-thin bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              Chaotic!
            </span>
          </motion.h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            {
              icon: <AlertTriangle className="w-8 h-8" />,
              title: "Requests Get Lost",
              description: "Important queries slip through the cracks without proper tracking and follow-up systems.",
            },
            {
              icon: <Clock className="w-8 h-8" />,
              title: "Slow Response Times",
              description:
                "Manual processes and scattered communication lead to delayed responses and frustrated users.",
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Poor Team Coordination",
              description: "Lack of visibility into workload distribution creates confusion and duplicated efforts.",
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Security & Privacy Issues",
              description: "Without proper access controls, sensitive information can be exposed to wrong people.",
            },
            {
              icon: <Mail className="w-8 h-8" />,
              title: "Communication Chaos",
              description:
                "Support requests scattered across emails, chats, and multiple platforms create confusion.",
            },
            {
              icon: <BarChart3 className="w-8 h-8" />,
              title: "No Performance Insights",
              description:
                "Difficult to measure team performance, user satisfaction, and identify improvement areas.",
            },
          ].map((problem, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="text-red-400 mb-4 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {problem.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">{problem.title}</h3>
              <p className="text-gray-400 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>)
}
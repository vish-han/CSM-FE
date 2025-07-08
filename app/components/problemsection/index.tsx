import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeInUp, scaleIn, staggerContainer } from "@/consts/FRAMER";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProblemSection(){
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
              <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold mb-4">
                PROBLEM
              </Badge>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-6xl font-black mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Business Management is a{" "}
              <span className="italic font-thin bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                Hassle!
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
                icon: "📅",
                title: "Complicated Management Software",
                description: "Most tools are bloated, confusing, and hard to learn.",
              },
              {
                icon: "⚙️",
                title: "Lack of Technical Skills",
                description: "Not everyone has the time to master professional tools.",
              },
              {
                icon: "💰",
                title: "High Implementation Costs",
                description: "Hiring consultants or agencies can burn your budget fast.",
              },
              {
                icon: "🔧",
                title: "Heavy Software Requirements",
                description: "Installing and setting up traditional tools is a pain.",
              },
              {
                icon: "⚡",
                title: "Slow Setup Time",
                description: "Business setup is often too slow for fast-moving teams.",
              },
              {
                icon: "❤️",
                title: "Inconsistent Branding",
                description: "Keeping every touchpoint on-brand is tough across teams.",
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
                  className="text-4xl mb-4 group-hover:scale-110 transition-transform"
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
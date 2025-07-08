import { fadeInUp, staggerContainer } from "@/consts/FRAMER";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
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
          <motion.h2
            className="text-4xl md:text-6xl font-black mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Frequently asked{" "}
            <span className="italic font-thin bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              questions
            </span>
          </motion.h2>
        </motion.div>
        <motion.div
          className="max-w-4xl mx-auto space-y-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            {
              question: "Can SupportHub Pro work for different types of organizations?",
              answer:
                "Our platform is designed for versatility - from IT helpdesks and customer support teams to educational institutions managing student queries. The role-based permissions and customizable workflows adapt to any organization's needs.",
            },
            {
              question: "How does the 'ship fast, iterate fast' approach work?",
              answer:
                "You can get started in minutes without worrying about complex user requirements upfront. Our real-time feedback system captures user insights as you go, allowing you to iterate and improve your support processes continuously based on actual usage data.",
            },
            {
              question: "What makes the auto-escalation feature special?",
              answer:
                "Our intelligent escalation monitors ticket priority, response times, and SLA requirements. When thresholds are exceeded, tickets automatically escalate to appropriate team members with instant notifications, ensuring critical issues never get missed.",
            },
            {
              question: "Is the platform suitable for educational institutions?",
              answer:
                "Yes! Educational institutions love our platform for managing student queries, course doubts, and administrative requests. The knowledge base reduces repetitive questions, and faculty can collaborate efficiently on student support.",
            },
            {
              question: "How secure is the role-based access system?",
              answer:
                "We provide enterprise-grade security with granular permission controls. You can set different access levels for admins, agents, departments, and end-users, ensuring sensitive information is only accessible to authorized personnel.",
            },
            {
              question: "Can I migrate from my current support system?",
              answer:
                "Yes! We provide free migration assistance for all plans. Our team helps transfer your tickets, users, and configurations from systems like Zendesk, Freshdesk, ServiceNow, and others with minimal downtime.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-colors">
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <motion.div animate={{ rotate: 0 }} whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                  </motion.div>
                </summary>
                <motion.div
                  className="px-6 pb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </motion.div>
              </details>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>)
}
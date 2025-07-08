import { fadeInUp, staggerContainer } from "@/consts/FRAMER";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ(){
return ( <motion.section
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
                question: "What is YourProduct?",
                answer:
                  "YourProduct is an all-in-one business platform that combines analytics, CRM, automation, and more to help you streamline your operations and grow your business.",
              },
              {
                question: "How does it work?",
                answer:
                  "Simply sign up for a free account, choose from our templates, customize with your branding, and launch your business solution in minutes.",
              },
              {
                question: "What types of businesses can use this?",
                answer:
                  "Our platform is perfect for startups, SaaS products, agencies, consultants, and any business looking to streamline their operations.",
              },
              {
                question: "Is there a limit on usage?",
                answer:
                  "We offer different plans to suit various business sizes. Our free plan includes basic features, while paid plans offer unlimited usage and advanced features.",
              },
              {
                question: "Do you offer customer support?",
                answer:
                  "Yes! We provide 24/7 customer support through chat, email, and phone. Our team is always ready to help you succeed.",
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
import { fadeInUp, staggerContainer } from "@/consts/FRAMER";
import { motion } from "framer-motion";

export function Features(){
    return (<motion.section
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
              ALL-IN-ONE BUSINESS STACK
            </motion.p>
            <motion.h2
              className="text-4xl md:text-6xl font-black mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Perfect for{" "}
              <span className="italic font-thin bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                startups, SaaS
              </span>
              <br />
              products, agencies, and teams
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
                title: "Analytics",
                description:
                  "Connect to your data sources and start tracking performance in minutes with a beautifully optimized dashboard experience.",
                features: ["Real-time tracking", "Custom dashboards", "Advanced reports"],
                customers: [],
              },
              {
                title: "CRM",
                description:
                  "All of your customer data in one place. Simplify your stack and stop jumping between tools.",
                features: [],
                customers: [
                  { name: "Sarah Johnson", status: "Active" },
                  { name: "Mike Chen", status: "Pending" },
                  { name: "Emma Davis", status: "Active" },
                  { name: "Alex Rodriguez", status: "Trial" },
                ],
              },
              {
                title: "Automation",
                description:
                  "Marketing, transactional, product workflows, and notifications in the same platform—with 99% deliverability.",
                features: [],
                automations: [
                  { name: "⚡ Welcome sequence", status: "Active" },
                  { name: "📧 Weekly newsletter", status: "Scheduled" },
                  { name: "🔔 Payment reminders", status: "Active" },
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
                  <div className="space-y-3">
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

                {service.customers && service.customers.length > 0 && (
                  <motion.div
                    className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {service.customers.map((customer, i) => (
                      <motion.div
                        key={customer.name}
                        className="flex items-center justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full"></div>
                          <span className="text-white text-sm">{customer.name}</span>
                        </div>
                        <span className="text-xs text-gray-400">{customer.status}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {service.automations && (
                  <div className="space-y-3">
                    {service.automations.map((automation, i) => (
                      <motion.div
                        key={automation.name}
                        className="flex items-center justify-between backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-white text-sm">{automation.name}</span>
                        <span className="text-green-400 text-xs">{automation.status}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>)
}
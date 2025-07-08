import { fadeInUp, scaleIn, staggerContainer } from "@/consts/FRAMER";
import { motion } from "framer-motion";

export function Services(){
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
            <motion.p
              className="text-purple-400 font-semibold mb-4 tracking-wider uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              SERVICES & FEATURES
            </motion.p>
            <motion.h2
              className="text-4xl md:text-6xl font-black mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Everything you need to{" "}
              <span className="italic font-thin bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                scale your business
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              From analytics to automation, we've got all the tools you need to grow your business efficiently.
            </motion.p>
          </motion.div>

          <div className="space-y-8">
            {/* Row 1: 70% + 30% */}
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
                      <span className="text-2xl">📊</span>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Advanced Analytics Dashboard</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      Get real-time insights into your business performance with our comprehensive analytics suite.
                      Track KPIs, monitor user behavior, and make data-driven decisions with beautiful, customizable
                      dashboards.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Real-time Data", "Custom Reports", "Data Export"].map((tag, i) => (
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
                  className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 h-32 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-3 gap-4 w-full">
                    {[8, 12, 6].map((height, i) => (
                      <motion.div
                        key={i}
                        className="bg-purple-500/30 rounded-lg h-16 flex items-end p-2"
                        initial={{ height: 0 }}
                        whileInView={{ height: 64 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="bg-purple-400 rounded w-full"
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height * 4}px` }}
                          transition={{ delay: 0.7 + i * 0.1, duration: 0.8 }}
                          viewport={{ once: true }}
                        ></motion.div>
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
                  className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl">🔒</span>
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Bank-level security with end-to-end encryption, SSO integration, and compliance certifications.
                </p>
                <div className="space-y-3">
                  {["256-bit Encryption", "SOC 2 Compliant", "GDPR Ready"].map((item, i) => (
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

            {/* Row 2: 30% + 70% */}
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
                  className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl">⚡</span>
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">Lightning Fast</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Optimized for speed with global CDN and edge computing for instant loading worldwide.
                </p>
                <motion.div
                  className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 text-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="text-3xl font-bold text-green-400 mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    99.9%
                  </motion.div>
                  <div className="text-gray-400 text-sm">Uptime SLA</div>
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
                      className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-2xl">🤖</span>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Automation</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      Leverage artificial intelligence to automate repetitive tasks, predict customer behavior, and
                      optimize your workflows. Our AI learns from your data to provide personalized recommendations and
                      insights.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Smart Workflows", "Predictive Analytics", "Auto-optimization"].map((tag, i) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
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
                    <span className="text-white text-sm">AI Workflow Status</span>
                    <motion.span
                      className="text-green-400 text-xs"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      Active
                    </motion.span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: "Email Automation", status: "Running", color: "blue" },
                      { name: "Lead Scoring", status: "Processing", color: "blue" },
                      { name: "Content Optimization", status: "Complete", color: "green" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.name}
                        className="flex items-center justify-between text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-gray-400">{item.name}</span>
                        <span className={`text-${item.color}-400`}>{item.status}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Row 3: 70% + 30% */}
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
                      className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-2xl">🔗</span>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Seamless Integrations</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      Connect with over 1000+ popular tools and services. From CRM systems to payment processors, social
                      media platforms to email marketing tools - we integrate with everything you already use.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["1000+ Apps", "API Access", "Webhooks"].map((tag, i) => (
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
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="grid grid-cols-6 gap-3"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    {Array.from({ length: 12 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center border border-gray-600 hover:border-orange-500 transition-colors"
                        variants={scaleIn}
                        whileHover={{ scale: 1.1, borderColor: "#f97316" }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg"></div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>

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
                  <span className="text-2xl">📱</span>
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">Mobile First</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Fully responsive design that works perfectly on all devices. Native mobile apps coming soon.
                </p>
                <motion.div
                  className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center space-x-2 mb-3">
                    <motion.div
                      className="w-8 h-12 bg-gradient-to-b from-pink-500 to-pink-600 rounded-lg"
                      initial={{ height: 0 }}
                      whileInView={{ height: 48 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      viewport={{ once: true }}
                    ></motion.div>
                    <motion.div
                      className="w-12 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg"
                      initial={{ width: 0 }}
                      whileInView={{ width: 48 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                  <div className="text-center text-gray-400 text-xs">All Devices Supported</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>)
}
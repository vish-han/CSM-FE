import { fadeInUp } from "@/consts/FRAMER";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <motion.section
      className="relative z-10 py-24 overflow-hidden"
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
            TESTIMONIALS
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl font-black mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Loved by{" "}
            <span className="italic font-thin bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              organizations
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            See how different organizations are transforming their support operations with SupportHub Pro.
          </motion.p>
        </motion.div>
        {/* First Row - Moving Left */}
        <div className="relative mb-8">
          <div className="flex animate-scroll-left space-x-8">
            {/* First set of testimonials */}
            {[
              {
                name: "David Martinez",
                title: "IT Director, TechFlow Solutions",
                content:
                  "SupportHub Pro transformed our internal IT helpdesk. Response times dropped by 65% and our team can finally focus on strategic projects instead of chasing tickets.",
                avatar: "DM",
              },
              {
                name: "Dr. Sarah Chen",
                title: "Dean of Student Affairs, Metro University",
                content:
                  "Perfect for educational institutions! Students can easily submit queries about courses, assignments, and administrative issues. Faculty collaboration has never been smoother.",
                avatar: "SC",
              },
              {
                name: "Michael Rodriguez",
                title: "Customer Success Manager, CloudFirst",
                content:
                  "The multi-channel support is incredible. Email, chat, knowledge base - everything in one place. Our customer satisfaction scores improved by 40%.",
                avatar: "MR",
              },
              {
                name: "Jennifer Park",
                title: "Operations Manager, StartupHub",
                content:
                  "Ship fast, iterate fast - that's exactly what we needed. The real-time feedback system helps us understand user needs instantly and improve continuously.",
                avatar: "JP",
              },
              {
                name: "Robert Kim",
                title: "Help Desk Supervisor, Enterprise Corp",
                content:
                  "The role-based security is enterprise-grade. Different departments have appropriate access levels, and sensitive information stays protected.",
                avatar: "RK",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
              </motion.div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              {
                name: "David Martinez",
                title: "IT Director, TechFlow Solutions",
                content:
                  "SupportHub Pro transformed our internal IT helpdesk. Response times dropped by 65% and our team can finally focus on strategic projects instead of chasing tickets.",
                avatar: "DM",
              },
              {
                name: "Dr. Sarah Chen",
                title: "Dean of Student Affairs, Metro University",
                content:
                  "Perfect for educational institutions! Students can easily submit queries about courses, assignments, and administrative issues. Faculty collaboration has never been smoother.",
                avatar: "SC",
              },
              {
                name: "Michael Rodriguez",
                title: "Customer Success Manager, CloudFirst",
                content:
                  "The multi-channel support is incredible. Email, chat, knowledge base - everything in one place. Our customer satisfaction scores improved by 40%.",
                avatar: "MR",
              },
              {
                name: "Jennifer Park",
                title: "Operations Manager, StartupHub",
                content:
                  "Ship fast, iterate fast - that's exactly what we needed. The real-time feedback system helps us understand user needs instantly and improve continuously.",
                avatar: "JP",
              },
              {
                name: "Robert Kim",
                title: "Help Desk Supervisor, Enterprise Corp",
                content:
                  "The role-based security is enterprise-grade. Different departments have appropriate access levels, and sensitive information stays protected.",
                avatar: "RK",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
              </motion.div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              {
                name: "David Martinez",
                title: "IT Director, TechFlow Solutions",
                content:
                  "SupportHub Pro transformed our internal IT helpdesk. Response times dropped by 65% and our team can finally focus on strategic projects instead of chasing tickets.",
                avatar: "DM",
              },
              {
                name: "Dr. Sarah Chen",
                title: "Dean of Student Affairs, Metro University",
                content:
                  "Perfect for educational institutions! Students can easily submit queries about courses, assignments, and administrative issues. Faculty collaboration has never been smoother.",
                avatar: "SC",
              },
              {
                name: "Michael Rodriguez",
                title: "Customer Success Manager, CloudFirst",
                content:
                  "The multi-channel support is incredible. Email, chat, knowledge base - everything in one place. Our customer satisfaction scores improved by 40%.",
                avatar: "MR",
              },
              {
                name: "Jennifer Park",
                title: "Operations Manager, StartupHub",
                content:
                  "Ship fast, iterate fast - that's exactly what we needed. The real-time feedback system helps us understand user needs instantly and improve continuously.",
                avatar: "JP",
              },
              {
                name: "Robert Kim",
                title: "Help Desk Supervisor, Enterprise Corp",
                content:
                  "The role-based security is enterprise-grade. Different departments have appropriate access levels, and sensitive information stays protected.",
                avatar: "RK",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-80 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Second Row - Moving Right */}
        <div className="relative">
          <div className="flex animate-scroll-right space-x-8">
            {/* Second set of testimonials */}
            {[
              {
                name: "Lisa Thompson",
                title: "Student Services Coordinator, Tech Institute",
                content:
                  "Students love the knowledge base feature. Common questions about enrollment, courses, and campus services are answered instantly, reducing our workload by 50%.",
                avatar: "LT",
              },
              {
                name: "James Wilson",
                title: "Support Team Lead, SaaS Company",
                content:
                  "The auto-escalation ensures no customer issue gets forgotten. Critical problems reach the right people immediately, and our SLA compliance is now 99.8%.",
                avatar: "JW",
              },
              {
                name: "Amanda Foster",
                title: "IT Manager, Healthcare Group",
                content:
                  "Security and compliance are crucial in healthcare. The role-based permissions and audit trails give us the control and visibility we need.",
                avatar: "AF",
              },
              {
                name: "Carlos Mendez",
                title: "Customer Experience Director, E-commerce",
                content:
                  "Real-time feedback collection helps us understand customer pain points immediately. We can iterate and improve our service continuously.",
                avatar: "CM",
              },
              {
                name: "Rachel Green",
                title: "Academic Support Manager, Online University",
                content:
                  "Managing student queries across multiple courses and programs was chaotic. Now everything is organized, tracked, and resolved efficiently.",
                avatar: "RG",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-700 rounded-full flex items-center justify-center text-white font-bold"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
              </motion.div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              {
                name: "Lisa Thompson",
                title: "Student Services Coordinator, Tech Institute",
                content:
                  "Students love the knowledge base feature. Common questions about enrollment, courses, and campus services are answered instantly, reducing our workload by 50%.",
                avatar: "LT",
              },
              {
                name: "James Wilson",
                title: "Support Team Lead, SaaS Company",
                content:
                  "The auto-escalation ensures no customer issue gets forgotten. Critical problems reach the right people immediately, and our SLA compliance is now 99.8%.",
                avatar: "JW",
              },
              {
                name: "Amanda Foster",
                title: "IT Manager, Healthcare Group",
                content:
                  "Security and compliance are crucial in healthcare. The role-based permissions and audit trails give us the control and visibility we need.",
                avatar: "AF",
              },
              {
                name: "Carlos Mendez",
                title: "Customer Experience Director, E-commerce",
                content:
                  "Real-time feedback collection helps us understand customer pain points immediately. We can iterate and improve our service continuously.",
                avatar: "CM",
              },
              {
                name: "Rachel Green",
                title: "Academic Support Manager, Online University",
                content:
                  "Managing student queries across multiple courses and programs was chaotic. Now everything is organized, tracked, and resolved efficiently.",
                avatar: "RG",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={`duplicate-right-${index}`}
                className="flex-shrink-0 w-80 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-700 rounded-full flex items-center justify-center text-white font-bold"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
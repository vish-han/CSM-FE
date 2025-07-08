import { fadeInUp } from "@/consts/FRAMER";
import { motion } from "framer-motion";

export function Testimonials(){
    return (<motion.section
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
              Wall of{" "}
              <span className="italic font-thin bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                Love!
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Hear what our clients have to say. Our testimonials reflect the satisfaction our clients have in our
              services.
            </motion.p>
          </motion.div>

          {/* First Row - Moving Left */}
          <div className="relative mb-8">
            <div className="flex animate-scroll-left space-x-8">
              {/* First set of testimonials */}
              {[
                {
                  name: "Sarah Wilson",
                  title: "Founder and CEO, TechStart",
                  content:
                    "We're loving YourProduct. We've walked away from multiple tools and have replaced them with this all-in-one solution. Our team can now focus on developing our core value offering.",
                  avatar: "SW",
                },
                {
                  name: "Mike Rodriguez",
                  title: "Creator and Entrepreneur",
                  content:
                    "Thinking about launching a new product? YourProduct is your tool. A complete business platform with everything you need at an extremely fair price.",
                  avatar: "MR",
                },
                {
                  name: "Emma Thompson",
                  title: "@emma_thompson",
                  content:
                    "I can't believe how simple it is to implement YourProduct. So many features out of the box and an amazing team behind it. Client is happy, client's clients are onboarded and happy.",
                  avatar: "ET",
                },
                {
                  name: "Alex Chen",
                  title: "Product Manager, StartupCo",
                  content:
                    "The integration process was seamless. Within hours, we had everything set up and running. The support team is incredibly responsive and helpful.",
                  avatar: "AC",
                },
                {
                  name: "Lisa Park",
                  title: "Marketing Director",
                  content:
                    "Finally, a platform that actually delivers on its promises. The analytics dashboard alone has saved us countless hours of manual reporting.",
                  avatar: "LP",
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
                  name: "Sarah Wilson",
                  title: "Founder and CEO, TechStart",
                  content:
                    "We're loving YourProduct. We've walked away from multiple tools and have replaced them with this all-in-one solution. Our team can now focus on developing our core value offering.",
                  avatar: "SW",
                },
                {
                  name: "Mike Rodriguez",
                  title: "Creator and Entrepreneur",
                  content:
                    "Thinking about launching a new product? YourProduct is your tool. A complete business platform with everything you need at an extremely fair price.",
                  avatar: "MR",
                },
                {
                  name: "Emma Thompson",
                  title: "@emma_thompson",
                  content:
                    "I can't believe how simple it is to implement YourProduct. So many features out of the box and an amazing team behind it. Client is happy, client's clients are onboarded and happy.",
                  avatar: "ET",
                },
                {
                  name: "Alex Chen",
                  title: "Product Manager, StartupCo",
                  content:
                    "The integration process was seamless. Within hours, we had everything set up and running. The support team is incredibly responsive and helpful.",
                  avatar: "AC",
                },
                {
                  name: "Lisa Park",
                  title: "Marketing Director",
                  content:
                    "Finally, a platform that actually delivers on its promises. The analytics dashboard alone has saved us countless hours of manual reporting.",
                  avatar: "LP",
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
                  name: "David Kumar",
                  title: "Freelance Consultant",
                  content:
                    "As a solo entrepreneur, I needed something powerful yet simple. YourProduct fits perfectly - it's like having an entire business team in one tool.",
                  avatar: "DK",
                },
                {
                  name: "Jessica Lee",
                  title: "Operations Manager",
                  content:
                    "The automation features have transformed how we handle customer onboarding. What used to take days now happens in minutes.",
                  avatar: "JL",
                },
                {
                  name: "Robert Smith",
                  title: "Tech Lead, InnovateCorp",
                  content:
                    "Integration was a breeze. The API documentation is excellent and the support team helped us get everything connected quickly.",
                  avatar: "RS",
                },
                {
                  name: "Maria Garcia",
                  title: "Small Business Owner",
                  content:
                    "Finally found a platform that grows with my business. Started with basic features and now using advanced analytics - all seamlessly.",
                  avatar: "MG",
                },
                {
                  name: "Tom Anderson",
                  title: "Digital Agency Founder",
                  content:
                    "We've implemented this for multiple clients and the results speak for themselves. Increased efficiency across the board.",
                  avatar: "TA",
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
                      className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center text-white font-bold"
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
                  name: "David Kumar",
                  title: "Freelance Consultant",
                  content:
                    "As a solo entrepreneur, I needed something powerful yet simple. YourProduct fits perfectly - it's like having an entire business team in one tool.",
                  avatar: "DK",
                },
                {
                  name: "Jessica Lee",
                  title: "Operations Manager",
                  content:
                    "The automation features have transformed how we handle customer onboarding. What used to take days now happens in minutes.",
                  avatar: "JL",
                },
                {
                  name: "Robert Smith",
                  title: "Tech Lead, InnovateCorp",
                  content:
                    "Integration was a breeze. The API documentation is excellent and the support team helped us get everything connected quickly.",
                  avatar: "RS",
                },
                {
                  name: "Maria Garcia",
                  title: "Small Business Owner",
                  content:
                    "Finally found a platform that grows with my business. Started with basic features and now using advanced analytics - all seamlessly.",
                  avatar: "MG",
                },
                {
                  name: "Tom Anderson",
                  title: "Digital Agency Founder",
                  content:
                    "We've implemented this for multiple clients and the results speak for themselves. Increased efficiency across the board.",
                  avatar: "TA",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={`duplicate-right-${index}`}
                  className="flex-shrink-0 w-80 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center text-white font-bold"
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
      </motion.section>)
}
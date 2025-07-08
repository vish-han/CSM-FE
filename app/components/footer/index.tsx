import { fadeInUp, staggerContainer } from "@/consts/FRAMER";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export function Footer(){
   return ( <motion.footer
        className="relative z-10 py-16 border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Brand Section */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  YourProduct
                </span>
              </motion.div>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                Build stunning business solutions in minutes with AI-powered tools and automation.
              </p>
            </motion.div>

            {/* Product Links */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h3 className="text-lg font-semibold text-white">Product</h3>
              <div className="space-y-3">
                {["Features", "How it Works", "Pricing", "Integrations"].map((link, i) => (
                  <motion.div
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Legal Links */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h3 className="text-lg font-semibold text-white">Legal</h3>
              <div className="space-y-3">
                {["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"].map((link, i) => (
                  <motion.div
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="pt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-center text-gray-500">© 2025 YourProduct. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>)
}
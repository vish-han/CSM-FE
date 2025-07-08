import { Button } from "@/components/ui/button";
import { scaleIn, staggerContainer } from "@/consts/FRAMER";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative z-10 py-24">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.h1
          className="text-5xl md:text-7xl mb-8 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="font-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Build
          </motion.span>{" "}
          <motion.span
            className="italic font-thin bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            business solutions
          </motion.span>{" "}
          <motion.span
            className="font-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            for
          </motion.span>
          <br />
          <motion.span
            className="font-black"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1,
              duration: 0.6,
              type: "spring",
              stiffness: 100,
            }}
          >
            your Products
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Analytics, automation, CRM, payments, marketing—it's all here. Ditch
          the fragmented tools and streamline your{" "}
          <span className="italic font-medium text-white underline decoration-purple-500/50 decoration-2 underline-offset-4">
            business operations
          </span>
          ,{" "}
          <span className="italic font-medium text-white underline decoration-purple-500/50 decoration-2 underline-offset-4">
            workflow
          </span>
          ,{" "}
          <span className="italic font-medium text-white underline decoration-purple-500/50 decoration-2 underline-offset-4">
            customer management
          </span>
          , and{" "}
          <span className="italic font-medium text-white underline decoration-purple-500/50 decoration-2 underline-offset-4">
            sales pipeline
          </span>{" "}
          using your favorite integrations.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-12 py-6 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all"
            >
              Start free trial
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-600 text-gray-300 hover:text-white hover:bg-white/10 hover:border-gray-400 px-12 py-6 text-lg font-bold rounded-2xl bg-transparent backdrop-blur-sm transition-all"
            >
              Is this right for me?
            </Button>
          </motion.div>
        </motion.div>

        {/* Integration Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <motion.p
            className="text-gray-500 mb-6 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            Integrate with nearly any tool or framework under the sun
            <Link
              href="#"
              className="ml-4 text-gray-300 hover:text-white flex items-center transition-colors group"
            >
              <span className="font-semibold">View all</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700 hover:border-gray-600 transition-all shadow-lg"
                variants={scaleIn}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

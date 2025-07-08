import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function MigrationBanner(){
    return ( 
    <motion.div
        className="relative z-10 pt-32 pb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-end">
            <motion.div whileHover={{ x: 5 }}>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-white flex items-center transition-colors group"
              >
                Migrating from <span className="font-semibold ml-1 text-purple-400">Competitor?</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
)
}
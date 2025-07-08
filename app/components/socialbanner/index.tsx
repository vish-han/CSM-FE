import { motion } from "framer-motion";

export function SocialBanner(){
    return ( 
         <motion.div
        className="relative z-10 pb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-center">
            <motion.div
              className="flex items-center space-x-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-full px-6 py-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full border-2 border-black"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 500, damping: 15 }}
                  ></motion.div>
                ))}
              </div>
              <span className="text-gray-300 font-medium">1000+ users are using YourProduct</span>
            </motion.div>
          </div>
        </div>
      </motion.div>)
}
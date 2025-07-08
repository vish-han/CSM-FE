import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronDown, Sparkles, Headphones } from "lucide-react"

export function NavBar (){
    return (
      <motion.header
      className="fixed top-0 left-0 right-0 z-50 p-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl px-6 py-4 shadow-2xl">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                <Headphones className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                SupportHub Pro
              </span>
            </motion.div>
            <nav className="hidden md:flex items-center space-x-8">
              {["Features", "Pricing", "Integrations", "Resources", "Company", "Blog"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ y: -2 }}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white cursor-pointer transition-colors"
                >
                  <span className="font-medium">{item}</span>
                  {(item === "Features" || item === "Resources") && <ChevronDown className="w-4 h-4" />}
                </motion.div>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10 font-medium">
                  Log in
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold shadow-lg hover:shadow-purple-500/25 transition-all">
                  Start Free Trial
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>)
}
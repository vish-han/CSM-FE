"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { NavBar } from "./components/header"
import { SocialBanner } from "./components/socialbanner"
import { MigrationBanner } from "./components/migrationBanner"
import { Hero } from "./components/herosection"
import { fadeInLeft, fadeInUp, scaleIn, staggerContainer } from "@/consts/FRAMER"
import { ProblemSection } from "./components/problemsection"
import { DashboardPreview } from "./components/dashboardpreview"
import { Services } from "./components/services"
import { Features } from "./components/features"
import { HowItWork } from "./components/HowItWork"
import { Testimonials } from "./components/Testimonials"
import { FAQ } from "./components/FAQ"
import { Footer } from "./components/footer"



export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-gray-900/30"></div>
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-gray-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      ></motion.div>

  
     <NavBar/>
     {/* <MigrationBanner/> */}
     <SocialBanner/>
     <Hero/>
    <DashboardPreview/>  
     <ProblemSection/>
     <Services/> 
      <Features/>  
     <HowItWork/>
      <Testimonials/>
     <FAQ/>   
    <Footer/>
    
      <style jsx global>{`
      @keyframes scroll-left {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      
      @keyframes scroll-right {
        0% {
          transform: translateX(-50%);
        }
        100% {
          transform: translateX(0);
        }
      }
      
      .animate-scroll-left {
        animation: scroll-left 60s linear infinite;
      }
      
      .animate-scroll-right {
        animation: scroll-right 60s linear infinite;
      }
      
      .animate-scroll-left:hover,
      .animate-scroll-right:hover {
        animation-play-state: paused;
      }
    `}</style>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { ArrowDown, Code, Github, Linkedin, Twitter ,Download} from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import img1 from "./public/images/img1.jpg"

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 grid-pattern opacity-30"></div>
      <div className="absolute inset-0 z-0 hero-gradient"></div>
      
      <div className="container relative z-20 px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div className="flex items-center space-x-2">
              <div className="h-1 w-12 bg-primary rounded"></div>
              <p className="text-primary font-medium">Software Developer</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Hi, I &apos; m <span className="code-gradient">Annu Kumari</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Building elegant solutions to complex problems
            </h2>
            
            <p className="text-muted-foreground max-w-[600px]">
              Full-stack developer specializing in React, Python(DRF), and cloud architecture.
              I create scalable, high-performance applications with clean, maintainable code.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" onClick={scrollToContact} className="gap-2">
                <Code className="h-4 w-4" />
                Hire Me
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://drive.google.com/file/d/1fdXwZz4CdM1z8cAl6E5HjxQYyTTwjsYM/view?usp=drive_link"  className="bg-[#1e293b] hover:bg-[#334155] text-gray-300 border border-[#334155] px-6 py-3 rounded-md transition-colors duration-300 flex items-center gap-2 gradient-border">
                <Download size={18} />
                  Download Resume</a>
              </Button>
            </div>
            
           
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
              <div className="absolute inset-0 blob bg-primary/10 -z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-background shadow-xl">
                  <Image
                    src={img1}
                    alt="David Chen - Software Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 md:bottom-0 md:-left-10 bg-background rounded-lg shadow-lg p-4 border"
            >
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Available for work</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-4 -right-4 md:-top-10 md:right-0 bg-background rounded-lg shadow-lg p-4 border"
            >
              <div className="flex items-center space-x-2">
                <Code className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">1+ years experience</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      
    </section>
  )
}
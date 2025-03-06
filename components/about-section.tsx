"use client"

import { motion } from "framer-motion"
import { FileText, Github, Laptop, Server, Zap } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import img3 from "./public/images/img3.png"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-4">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            My Journey as a <span className="code-gradient">Developer</span>
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            I&apos;m passionate about creating efficient, scalable software solutions that solve real-world problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={img3}
                alt="Developer working on code"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
            
           
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Who I Am</h3>
            <div className="space-y-4">
              <p>
                I&apos;m a Full Stack Developer with expertise in modern JavaScript frameworks and cloud technologies.
                My journey in software development began 1 years ago, and I&apos;ve been passionate about creating
                elegant solutions to complex problems ever since.
              </p>
              <p>
                I specialize in building responsive web applications, RESTful APIs, and scalable backend systems.
                My approach combines technical excellence with a deep understanding of user needs and business goals.
              </p>
            </div>
            
            <h3 className="text-2xl font-bold pt-4">What I Do</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Laptop className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Frontend Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Creating responsive, accessible, and performant user interfaces with React and modern CSS.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Backend Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Building robust APIs and services with Django Rest Framework,Java, and various database technologies.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Performance Optimization</h4>
                  <p className="text-sm text-muted-foreground">
                    Improving application speed, responsiveness, and resource efficiency.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">DevOps & CI/CD</h4>
                  <p className="text-sm text-muted-foreground">
                    Setting up automated testing, deployment pipelines, and infrastructure as code.
                  </p>
                </CardContent>
              </Card>
            </div>
            
          
          </motion.div>
        </div>
      </div>
    </section>
  )
}
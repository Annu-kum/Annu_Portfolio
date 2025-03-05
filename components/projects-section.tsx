"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github,Calendar } from "lucide-react"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "./ui/card"

const projects = [
  {
    id: 1,
    period: "April 2024 - September 2024",
    title: "Inventory Management System",
    description: [
      "Developed a full-stack web application using Django and React for managing inventory in real time",
      "Featured role-based authentication, CRUD functionality, and deployment on AWS using Apache and Ubuntu servers",
      "Improved inventory management efficiency by 40%"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Django", "AWS", "Apache", "Ubuntu"],
    liveUrl: "https://ims.digitaaz.com/",
    featured: true
  },
  {
    id: 2,
    period: "July 2023 - October 2023",
    title:  "Polling Party Formation System",
    description: [
      "Developed a Polling Party Formation System during internship using Django and React.js",
      "Transitioned data management from manual Excel sheets to an automated system",
      "Streamlined operations and improved performance by 50%, while enabling data export to Excel for compatibility"
    ],
    image:  "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React.js", "Django", "Excel Integration", "Automation"],
    featured: true
  },
]

export function ProjectsSection() {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)
  
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-4">
            My Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Featured <span className="code-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            A selection of my recent work, showcasing my skills in full-stack development,
            system architecture, and problem-solving.
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex items-center text-gray-400 text-sm">
            <Calendar size={14} className="mr-1" />
            <span>{project.period}</span>
          </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="gap-1" asChild>
                    <a  target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="gap-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
         </div>
    </section>
  )
}
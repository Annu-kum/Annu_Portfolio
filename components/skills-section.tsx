"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "Python", "Java", "SQL", "pySpark"],
    delay: 100,
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Django", "Material-UI", "RESTful APIs"],
    delay: 200,
  },
  {
    title: "Database Technologies",
    skills: ["MySQL", "SQLite"],
    delay: 300,
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub"],
    delay: 400,
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "Material-UI", "RESTful APIs"],
    delay: 500,
  },
  {
    title: "Cloud Services",
    skills: ["AWS (S3)"],
    delay: 600,
  },
  {
    title: "Tools",
    skills: [
      "Visual Studio Code",
      "Postman",
      "Docker",
      "Jenkins",
      "IntelliJ",
      "Anaconda",
      "ELK stack",
    ],
    delay: 700,
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Technical <span className="code-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            Here’s an overview of my technical skills categorized for clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: category.delay / 1000 }}
            >
              <Card className="p-4 border rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-indigo-300 mb-4">{category.title}</h3>
                <CardContent className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-0.5 bg-gray-400 text-black text-sm font-small rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

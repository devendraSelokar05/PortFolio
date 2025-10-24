"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import ScrollReveal from "@/components/animations/scroll-reveal"
import HoverCard from "@/components/animations/hover-card"

// Sample skills data - in a real app, this would come from a database
const skillsData = {
  frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Redux", level: 80 },
    { name: "Framer Motion", level: 75 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 90 },
    { name: "MongoDB", level: 80 },
    { name: "REST API Design", level: 85 },
    { name: "GraphQL", level: 70 },
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 },
    { name: "CI/CD", level: 80 },
    { name: "Jest", level: 75 },
  ],
}

export default function Skills() {
  const categories = [
    { id: "frontend", title: "Frontend", description: "Technologies for building modern user interfaces" },
    { id: "backend", title: "Backend", description: "Server-side technologies and databases" },
    { id: "tools", title: "Tools & DevOps", description: "Development tools and deployment technologies" },
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <section id="skills" className="container py-24 scroll-mt-16">
      <motion.div ref={containerRef} style={{ opacity, scale }} className="space-y-12">
        <ScrollReveal className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My proficiency in various technologies and tools.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, categoryIndex) => (
            <ScrollReveal
              key={category.id}
              direction={categoryIndex === 1 ? "up" : categoryIndex === 2 ? "left" : "right"}
              delay={categoryIndex * 0.1}
            >
              <HoverCard scale={1.02} shadow>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {skillsData[category.id as keyof typeof skillsData].map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "auto" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 + categoryIndex * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <Progress value={0} className="h-2" />
                          <motion.div
                            className="absolute top-0 left-0 h-2 bg-primary rounded-full"
                            initial={{ width: "0%" }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.6,
                              delay: Math.min(skillIndex * 0.05 + categoryIndex * 0.1, 0.3),
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </HoverCard>
            </ScrollReveal>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

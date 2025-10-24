"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import ScrollReveal from "@/components/animations/scroll-reveal"
import HoverCard from "@/components/animations/hover-card"

// Sample project data - in a real app, this would come from a database
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment integration.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Full Stack", "React", "Node.js", "MongoDB", "Redux"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality and real-time updates.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Frontend", "React", "TypeScript", "Redux"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "Frontend",
  },
  {
    id: 3,
    title: "RESTful API Service",
    description: "A comprehensive RESTful API for a social media platform with authentication and data validation.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Backend", "Node.js", "Express", "MongoDB"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "API",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Frontend", "Next.js", "Tailwind CSS"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "Frontend",
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description: "A real-time chat application with private messaging and group chat functionality.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Full Stack", "React", "Node.js", "Socket.io"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "Full Stack",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data from multiple APIs.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Frontend", "React", "API Integration"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "Frontend",
  },
]

const categories = ["All", "Frontend", "Full Stack", "Backend", "API"]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projectsData : projectsData.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="container py-24 scroll-mt-16">
      <ScrollReveal className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects showcasing my skills in frontend and backend development.
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-2 pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait" initial={false}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
                layout="position"
              >
                <HoverCard scale={1.03} shadow border>
                  <Card className="h-full flex flex-col overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button asChild variant="outline" size="sm" className="group">
                          <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                            Live Demo
                          </Link>
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button asChild variant="outline" size="sm" className="group">
                          <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                            Code
                          </Link>
                        </Button>
                      </motion.div>
                    </CardFooter>
                  </Card>
                </HoverCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </ScrollReveal>
    </section>
  )
}

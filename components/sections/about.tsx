"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"
import ScrollReveal from "@/components/animations/scroll-reveal"
import StaggeredChildren from "@/components/animations/staggered-children"

export default function About() {
  const techStack = ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Redux"]

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Adaptability",
    "Time Management",
    "Critical Thinking",
  ]

  return (
    <section id="about" className="container py-24 scroll-mt-16">
      <div className="flex flex-col md:flex-row gap-12">
        <ScrollReveal className="flex-1 space-y-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <motion.div
              className="mt-1 h-1 w-20 bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground">
              I'm a passionate Full Stack Developer with expertise in building modern web applications using the MERN
              stack. With a strong foundation in both frontend and backend technologies, I create seamless,
              user-friendly experiences that solve real-world problems.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground">
              My journey in web development began 5 years ago, and since then, I've worked on various projects ranging
              from e-commerce platforms to real-time collaboration tools. I'm constantly learning and adapting to new
              technologies to stay at the forefront of web development.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div>
              <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
              <StaggeredChildren className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </StaggeredChildren>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div>
              <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
              <StaggeredChildren className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </StaggeredChildren>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="gap-2 relative overflow-hidden group">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <Eye className="h-4 w-4 group-hover:animate-pulse" />
                    <span className="relative z-10">View Resume</span>
                    <motion.span
                      className="absolute inset-0 bg-primary/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" asChild className="gap-2 relative overflow-hidden group">
                  <a href="/resume.pdf" download="Rishabh_Luthra_Resume.pdf">
                    <Download className="h-4 w-4 group-hover:animate-bounce" />
                    <span className="relative z-10">Download Resume</span>
                    <motion.span
                      className="absolute inset-0 bg-primary/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
        </ScrollReveal>

        <ScrollReveal className="flex-1 flex justify-center items-center" direction="right">
          <motion.div
            className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="About Rishabh Luthra"
              fill
              className="object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";
import ScrollReveal from "@/components/animations/scroll-reveal";
import StaggeredChildren from "@/components/animations/staggered-children";
export default function About() {
  const techStack = ["Node.js", "Express.js", "MongoDB", "React.js", "Redis", "Docker", "Razorpay", "JavaScript"];
  const expertise = ["Backend Architecture & REST APIs", "Authentication & RBAC", "Razorpay Payment Integration", "Wallet & Transaction Management", "Driver & Order Management", "Redis Caching & Docker", "MongoDB Design & Optimization", "Real-Time Scalable Systems"];
  return <section id="about" className="container py-24 scroll-mt-16">
      <div className="flex flex-col md:flex-row gap-12">
        <ScrollReveal className="flex-1 space-y-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <motion.div className="mt-1 h-1 w-20 bg-primary" initial={{
            width: 0
          }} whileInView={{
            width: 80
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} />
          </div>

          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground">
              Hi, I'm Devendra Selokar, a passionate Node.js Backend & MERN Stack Developer with 1.3+ year of
              professional experience in building scalable web applications and production-ready backend systems.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground">
              I specialize in designing secure, high-performance REST APIs using Node.js, Express.js, MongoDB, and
              React.js. Throughout my professional journey, I have worked on real-world applications including a
              Taxi Booking Platform, Multi-Vendor Delivery Platform, and Dairy Delivery Management System.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-muted-foreground">
              I enjoy solving complex backend challenges, optimizing application performance, and building scalable
              software that delivers an excellent user experience.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div>
              <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
              <StaggeredChildren className="flex flex-wrap gap-2">
                {techStack.map(tech => <motion.span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm" whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                    {tech}
                  </motion.span>)}
              </StaggeredChildren>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div>
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <StaggeredChildren className="flex flex-wrap gap-2">
                {expertise.map(skill => <motion.span key={skill} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm" whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                    {skill}
                  </motion.span>)}
              </StaggeredChildren>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button asChild className="gap-2 relative overflow-hidden group">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Eye className="h-4 w-4 group-hover:animate-pulse" />
                    <span className="relative z-10">View Resume</span>
                    <motion.span className="absolute inset-0 bg-primary/20" initial={{
                    x: "-100%"
                  }} whileHover={{
                    x: "0%"
                  }} transition={{
                    duration: 0.3
                  }} />
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button variant="outline" asChild className="gap-2 relative overflow-hidden group">
                  <a href="/resume.pdf" download="Devendra_Selokar_Resume.pdf">
                    <Download className="h-4 w-4 group-hover:animate-bounce" />
                    <span className="relative z-10">Download Resume</span>
                    <motion.span className="absolute inset-0 bg-primary/20" initial={{
                    x: "-100%"
                  }} whileHover={{
                    x: "0%"
                  }} transition={{
                    duration: 0.3
                  }} />
                  </a>
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
        </ScrollReveal>

        <ScrollReveal className="flex-1 flex justify-center items-center" direction="right">
          <motion.div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden" whileHover={{
          scale: 1.02
        }} transition={{
          duration: 0.3
        }}>
            <Image src="/placeholder.svg?height=600&width=600" alt="About Devendra Selokar" fill className="object-cover" />
            <motion.div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} />
          </motion.div>
        </ScrollReveal>
      </div>
    </section>;
}
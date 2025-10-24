"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import TypingEffect from "@/components/animations/typing-effect"
import GradientText from "@/components/animations/gradient-text"
import ParallaxSection from "@/components/animations/parallax-section"

export default function Hero() {
  return (
    <section className="container py-24 md:py-32 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <GradientText text="Devendra Selokar" className="font-bold" />
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mt-2 h-8">
            <TypingEffect text="Full Stack Developer & MERN Specialist" speed={70} delay={800} />
          </div>
        </motion.div>

        <motion.p
          className="text-muted-foreground max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I build modern, responsive web applications with React, Next.js, and Node.js. Passionate about creating
          seamless user experiences and scalable backend solutions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="relative overflow-hidden group">
              <Link href="#projects">
                <span className="relative z-10">View My Work</span>
                <motion.span
                  className="absolute inset-0 bg-primary/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="#contact">
                <span>Hire Me</span>
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    duration: 1,
                    repeatDelay: 1,
                  }}
                >
                  👋
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <ParallaxSection speed={0.1} className="flex-1 flex justify-center">
        <motion.div
          className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: "tween",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 animate-pulse" />
          <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-primary">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Rishabh Luthra"
              fill
              className="object-cover"
              priority
            />
          </div>
          <motion.div
            className="absolute inset-0 border-4 border-primary rounded-full"
            animate={{
              boxShadow: ["0 0 0 0 rgba(var(--primary), 0.2)", "0 0 0 20px rgba(var(--primary), 0)"],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: "easeOut",
            }}
          />
        </motion.div>
      </ParallaxSection>
    </section>
  )
}

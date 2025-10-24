"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  once?: boolean
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })

  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { y: 50, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "down":
        return {
          hidden: { y: -50, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "left":
        return {
          hidden: { x: 50, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "right":
        return {
          hidden: { x: -50, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "none":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
      default:
        return {
          hidden: { y: 50, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
    }
  }

  const variants = getDirectionVariants()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: duration * 0.8, delay, ease: "easeOut" }}
      className={`${className} motion-safe`}
    >
      {children}
    </motion.div>
  )
}

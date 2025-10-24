"use client"

import { type ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
  direction?: "up" | "down"
}

export default function ParallaxSection({
  children,
  speed = 0.2,
  className = "",
  direction = "up",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Adjust the transform based on direction
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [100 * speed, -100 * speed] : [-100 * speed, 100 * speed],
  )

  return (
    <motion.div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </motion.div>
  )
}

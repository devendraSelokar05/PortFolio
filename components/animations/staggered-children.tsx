"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface StaggeredChildrenProps {
  children: ReactNode
  delay?: number
  staggerDelay?: number
  duration?: number
  threshold?: number
  className?: string
  once?: boolean
  direction?: "up" | "down" | "left" | "right" | "none"
}

export default function StaggeredChildren({
  children,
  delay = 0,
  staggerDelay = 0.1,
  duration = 0.5,
  threshold = 0.1,
  className = "",
  once = true,
  direction = "up",
}: StaggeredChildrenProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })

  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "down":
        return {
          hidden: { y: -20, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "left":
        return {
          hidden: { x: 20, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "right":
        return {
          hidden: { x: -20, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "none":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
      default:
        return {
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
    }
  }

  const childVariants = getDirectionVariants()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: duration * 0.8,
        delay,
        staggerChildren: staggerDelay * 0.8,
        delayChildren: delay,
        staggerDirection: 1,
      }}
      className={`${className} motion-safe`}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={childVariants} transition={{ duration }}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={childVariants} transition={{ duration }}>
          {children}
        </motion.div>
      )}
    </motion.div>
  )
}

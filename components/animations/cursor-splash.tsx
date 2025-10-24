"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SplashProps {
  x: number
  y: number
  id: number
  color?: string
}

const Splash = ({ x, y, id, color = "hsl(var(--primary))" }: SplashProps) => {
  return (
    <motion.div
      key={id}
      className="fixed pointer-events-none"
      initial={{ scale: 0, opacity: 0.7 }}
      animate={{
        scale: [0, 1.5],
        opacity: [0.7, 0],
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      style={{
        left: x,
        top: y,
        translateX: "-50%",
        translateY: "-50%",
        zIndex: 9999,
      }}
    >
      <div
        className="rounded-full mix-blend-screen"
        style={{
          width: "150px",
          height: "150px",
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        }}
      />
    </motion.div>
  )
}

export default function CursorSplash() {
  const [splashes, setSplashes] = useState<SplashProps[]>([])
  const [isEnabled, setIsEnabled] = useState(true)

  // Disable on mobile devices
  useEffect(() => {
    const checkIfMobile = () => {
      setIsEnabled(window.innerWidth > 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  useEffect(() => {
    if (!isEnabled) return

    const handleClick = (e: MouseEvent) => {
      // Don't add splash if clicking on interactive elements
      if (
        e.target instanceof Element &&
        (e.target.tagName === "BUTTON" ||
          e.target.tagName === "A" ||
          e.target.closest("button") ||
          e.target.closest("a"))
      ) {
        return
      }

      const colors = ["hsl(var(--primary))", "hsl(var(--primary) / 0.8)", "hsl(var(--secondary))"]

      const newSplash = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
        color: colors[Math.floor(Math.random() * colors.length)],
      }

      setSplashes((prev) => [...prev, newSplash])

      // Remove splash after animation completes
      setTimeout(() => {
        setSplashes((prev) => prev.filter((splash) => splash.id !== newSplash.id))
      }, 1000)
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [isEnabled])

  if (!isEnabled) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {splashes.map((splash) => (
          <Splash key={splash.id} {...splash} />
        ))}
      </AnimatePresence>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TrailDotProps {
  x: number
  y: number
  index: number
  id: number
}

const TrailDot = ({ x, y, index, id }: TrailDotProps) => {
  const size = Math.max(8 - index * 1, 3)
  const opacity = Math.max(0.6 - index * 0.08, 0.1)

  return (
    <motion.div
      key={id}
      className="fixed pointer-events-none rounded-full bg-primary"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity,
        x,
        y,
      }}
      exit={{ scale: 0, opacity: 0 }}
      style={{
        width: size,
        height: size,
        x: -size / 2,
        y: -size / 2,
        zIndex: 9998,
      }}
    />
  )
}

export default function CursorTrail() {
  const [trail, setTrail] = useState<TrailDotProps[]>([])
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

    const handleMouseMove = (e: MouseEvent) => {
      const newDot = {
        x: e.clientX,
        y: e.clientY,
        index: 0,
        id: Date.now(),
      }

      setTrail((prev) => {
        // Update indices of existing dots
        const updatedTrail = prev
          .map((dot) => ({
            ...dot,
            index: dot.index + 1,
          }))
          .filter((dot) => dot.index < 10) // Keep only the last 10 dots

        return [newDot, ...updatedTrail]
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isEnabled])

  if (!isEnabled) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998]">
      <AnimatePresence>
        {trail.map((dot) => (
          <TrailDot key={dot.id} {...dot} />
        ))}
      </AnimatePresence>
    </div>
  )
}

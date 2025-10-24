"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypingEffectProps {
  text: string
  speed?: number
  delay?: number
  className?: string
}

export default function TypingEffect({ text, speed = 50, delay = 0, className = "" }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    // For very short text, just display it immediately
    if (text.length < 10) {
      setDisplayedText(text)
      setCurrentIndex(text.length)
      return
    }

    let timeout: NodeJS.Timeout

    // Initial delay before starting
    const initialDelay = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    if (isTyping && currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
    }

    return () => {
      clearTimeout(timeout)
      clearTimeout(initialDelay)
    }
  }, [currentIndex, text, speed, delay, isTyping])

  return (
    <motion.span className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      {displayedText}
      {isTyping && currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
          className="inline-block ml-1 w-[2px] h-[1em] bg-primary"
        />
      )}
    </motion.span>
  )
}

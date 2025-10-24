"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type CursorContextType = {
  cursorType: string
  setCursorType: (type: string) => void
}

const CursorContext = createContext<CursorContextType>({
  cursorType: "default",
  setCursorType: () => {},
})

export const useCursor = () => useContext(CursorContext)

export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorType, setCursorType] = useState("default")
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  useEffect(() => {
    if (isMobile) return

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
        setCursorType("hover")
      }
    }

    const handleMouseLeave = () => {
      setCursorType("default")
    }

    document.addEventListener("mouseover", handleMouseEnter)
    document.addEventListener("mouseout", handleMouseLeave)

    return () => {
      document.removeEventListener("mouseover", handleMouseEnter)
      document.removeEventListener("mouseout", handleMouseLeave)
    }
  }, [isMobile])

  return <CursorContext.Provider value={{ cursorType, setCursorType }}>{children}</CursorContext.Provider>
}

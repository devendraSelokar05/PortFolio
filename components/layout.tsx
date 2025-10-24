// Add a layout component to ensure proper width constraints
// Create a new layout component:

"use client"

import type { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return <div className="max-w-[100vw] overflow-x-hidden">{children}</div>
}

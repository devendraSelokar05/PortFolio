"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCursor } from "./cursor-context";
export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [isEnabled, setIsEnabled] = useState(false);
  const {
    cursorType
  } = useCursor();
  useEffect(() => {
    const checkIfMobile = () => {
      setIsEnabled(window.innerWidth > 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);
  useEffect(() => {
    if (!isEnabled) return;
    const handleMouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Hide the default cursor
    document.body.style.cursor = "none";
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
    };
  }, [isEnabled]);
  if (!isEnabled) return null;
  return <>
      {/* Main cursor */}
      <motion.div className="fixed pointer-events-none z-[10000] rounded-full bg-primary mix-blend-difference" animate={{
      x: mousePosition.x,
      y: mousePosition.y,
      scale: cursorType === "hover" ? 1.5 : 1
    }} transition={{
      type: "spring",
      mass: 0.2,
      stiffness: 800,
      damping: 30,
      scale: {
        duration: 0.15
      }
    }} style={{
      left: -8,
      top: -8,
      width: 16,
      height: 16
    }} />

      {/* Secondary cursor (ring) */}
      <motion.div className="fixed pointer-events-none z-[10000] rounded-full border-2 border-primary mix-blend-difference" animate={{
      x: mousePosition.x,
      y: mousePosition.y,
      scale: cursorType === "hover" ? 1.2 : 1
    }} transition={{
      type: "spring",
      mass: 0.5,
      stiffness: 400,
      damping: 28,
      scale: {
        duration: 0.15
      }
    }} style={{
      left: -24,
      top: -24,
      width: 48,
      height: 48
    }} />
    </>;
}
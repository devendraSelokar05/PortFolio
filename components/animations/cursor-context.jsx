"use client";

import { createContext, useContext, useState, useEffect } from "react";
const CursorContext = createContext({
  cursorType: "default",
  setCursorType: () => {}
});
export const useCursor = () => useContext(CursorContext);
export function CursorProvider({
  children
}) {
  const [cursorType, setCursorType] = useState("default");
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);
  useEffect(() => {
    if (isMobile) return;
    const handleMouseEnter = e => {
      const target = e.target;
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
        setCursorType("hover");
      }
    };
    const handleMouseLeave = () => {
      setCursorType("default");
    };
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [isMobile]);
  return <CursorContext.Provider value={{
    cursorType,
    setCursorType
  }}>{children}</CursorContext.Provider>;
}
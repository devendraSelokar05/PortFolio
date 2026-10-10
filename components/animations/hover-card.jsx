"use client";

import { motion } from "framer-motion";
export default function HoverCard({
  children,
  className = "",
  scale = 1.03,
  rotate = 0,
  shadow = true,
  border = false
}) {
  return <motion.div className={`${className} ${shadow ? "hover:shadow-lg" : ""} ${border ? "border border-transparent hover:border-primary/20" : ""} transition-all duration-300`} whileHover={{
    scale,
    rotate: rotate,
    transition: {
      duration: 0.3
    }
  }} whileTap={{
    scale: 0.98
  }}>
      {children}
    </motion.div>;
}
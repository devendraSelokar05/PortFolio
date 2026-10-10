"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export default function GradientText({
  text,
  className = "",
  from = "from-primary",
  to = "to-purple-600",
  duration = 3
}) {
  return <motion.span className={cn(`bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent inline-block`, className)} initial={{
    backgroundPosition: "0% 50%"
  }} animate={{
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
  }} transition={{
    duration,
    repeat: Number.POSITIVE_INFINITY,
    ease: "linear"
  }}>
      {text}
    </motion.span>;
}
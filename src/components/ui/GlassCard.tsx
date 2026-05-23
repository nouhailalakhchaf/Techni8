"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  glowColor?: "blue" | "copper";
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  delay = 0,
  glowColor = "blue",
}: GlassCardProps) {
  const glowBorder =
    glowColor === "blue"
      ? "hover:border-electric/25 hover:shadow-[0_0_60px_rgba(63,169,245,0.08)]"
      : "hover:border-copper/25 hover:shadow-[0_0_60px_rgba(255,122,0,0.08)]";

  return (
    <motion.div
      className={`glass-card rounded-2xl p-6 md:p-8 transition-all duration-500 ${
        hover ? glowBorder : ""
      } ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : undefined}
    >
      {children}
    </motion.div>
  );
}

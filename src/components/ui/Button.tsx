"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-light tracking-wide transition-all duration-300 rounded-full";

  const variants = {
    primary:
      "bg-gradient-to-r from-electric to-cyan text-deep hover:shadow-[0_0_40px_rgba(63,169,245,0.3)] hover:scale-[1.02]",
    secondary:
      "glass border-electric/20 text-light hover:border-electric/40 hover:shadow-[0_0_30px_rgba(63,169,245,0.1)]",
    ghost:
      "text-electric/70 hover:text-electric hover:bg-electric/5",
  };

  const sizes = {
    sm: "px-5 py-2 text-xs tracking-[0.15em] uppercase",
    md: "px-7 py-3 text-sm tracking-[0.1em]",
    lg: "px-10 py-4 text-sm tracking-[0.15em] uppercase",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const inner = (
    <motion.span
      className={classes}
      whileHover={{ scale: variant === "ghost" ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return <Link href={href}>{inner}</Link>;
  }

  return inner;
}

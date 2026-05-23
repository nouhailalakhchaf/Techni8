"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  accent?: "blue" | "copper";
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  accent = "blue",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const accentColor = accent === "blue" ? "gradient-text-blue" : "gradient-text-copper";
  const lineColor = accent === "blue" ? "from-electric/0 via-electric/60 to-electric/0" : "from-copper/0 via-copper/60 to-copper/0";

  return (
    <motion.div
      className={`flex flex-col gap-4 ${alignClass} mb-16 md:mb-24`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {label && (
        <span className="text-xs tracking-[0.3em] uppercase text-electric/60 font-mono">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight ${accentColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-light/50 text-base md:text-lg max-w-2xl leading-relaxed mt-2">
          {subtitle}
        </p>
      )}
      <div className={`h-px w-24 bg-gradient-to-r ${lineColor} mt-4`} />
    </motion.div>
  );
}

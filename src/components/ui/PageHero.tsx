"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-deep to-deep" />
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-electric/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full bg-copper/3 blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-electric/50 font-mono">
            {label}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight gradient-text-blue leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-light/40 text-base md:text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="h-px w-24 bg-gradient-to-r from-electric/40 to-transparent mt-2" />
        </motion.div>
      </div>
    </section>
  );
}

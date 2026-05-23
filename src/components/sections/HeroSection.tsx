"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-navy/50 to-deep" />
      <div className="absolute inset-0 grid-overlay" />
      <HeroScene />

      {/* Volumetric glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-electric/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-copper/5 blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-8"
        >
          <motion.span
            className="text-xs tracking-[0.4em] uppercase text-electric/50 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            Ingenierie Numerique & IA
          </motion.span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-[1.1]">
            <span className="block text-light">Architectures digitales</span>
            <span className="block gradient-text-mixed">&amp; IA d&apos;exception</span>
          </h1>

          <motion.p
            className="text-light/40 text-base md:text-lg max-w-xl leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            Concues pour durer, evoluer et performer sans compromis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="mt-4"
          >
            <Button href="/contact" variant="primary" size="lg">
              Initier un echange
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-light/20">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-electric/40 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-navy/30 to-deep" />
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-electric/5 blur-[200px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-copper/50 font-mono">
            Prochaine etape
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-light leading-tight">
            Votre architecture<br />
            <span className="gradient-text-mixed">commence ici</span>
          </h2>
          <p className="text-light/40 text-base leading-relaxed max-w-lg">
            Chaque projet debute par un echange strategique. Partagez votre vision,
            nous concevrons l&apos;architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button href="/contact" variant="primary" size="lg">
              Initier un echange
            </Button>
            <Button href="/offres" variant="secondary" size="lg">
              Decouvrir nos offres
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

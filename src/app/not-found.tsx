"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-navy/30 to-deep" />
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-copper/5 blur-[150px]" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="text-8xl md:text-9xl font-extralight gradient-text-copper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            404
          </motion.span>

          <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl md:text-3xl font-extralight text-light tracking-wide">
              Architecture introuvable
            </h1>
            <p className="text-light/40 text-sm max-w-md leading-relaxed">
              La page que vous recherchez n&apos;existe pas ou a ete deplacee.
              Chaque route a sa structure. Celle-ci n&apos;a pas ete concue.
            </p>
          </div>

          <div className="h-px w-16 bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

          <Button href="/" variant="secondary" size="lg">
            Retour a l&apos;accueil
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

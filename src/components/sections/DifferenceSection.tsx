"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const GRID_ITEMS = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  initialX: Math.sin(i * 2.7 + 1) * 100,
  initialY: Math.cos(i * 3.1 + 2) * 100,
  initialRotate: (i * 47) % 360,
}));

export default function DifferenceSection() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-midnight/20 to-deep" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          label="Philosophie"
          title="Architecture, pas solution"
          accent="copper"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-16">
          <motion.div
            className="relative h-80 md:h-96 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-3">
                {GRID_ITEMS.map((item) => (
                  <motion.div
                    key={item.id}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-lg border border-electric/10"
                    initial={{
                      x: item.initialX,
                      y: item.initialY,
                      rotate: item.initialRotate,
                      opacity: 0,
                    }}
                    whileInView={{
                      x: 0,
                      y: 0,
                      rotate: 0,
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: 0.3 + item.id * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      background:
                        item.id % 5 === 0
                          ? "linear-gradient(135deg, rgba(255,122,0,0.15), rgba(255,159,28,0.05))"
                          : "linear-gradient(135deg, rgba(63,169,245,0.08), rgba(76,201,240,0.03))",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-xl md:text-2xl font-extralight text-light/70 leading-relaxed">
              La plupart developpent des outils.
            </p>
            <p className="text-xl md:text-2xl font-extralight gradient-text-blue leading-relaxed">
              Nous concevons des structures.
            </p>
            <div className="h-px w-16 bg-gradient-to-r from-copper/60 to-transparent" />
            <p className="text-sm text-light/40 leading-relaxed max-w-md">
              Chaque projet TECHNIQ8 est une architecture pensee en systeme.
              Une structure capable d&apos;evoluer, de resister et de performer
              sur le long terme. Pas un outil jetable. Un edifice numerique.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

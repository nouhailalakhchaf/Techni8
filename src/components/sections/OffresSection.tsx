"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { OFFRES } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function OffresSection() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-midnight/10 to-deep" />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          label="Offres"
          title="Trois couches, un systeme"
          subtitle="De la conception a la continuite. Chaque couche s'integre dans une architecture globale coherente."
          accent="copper"
        />

        <div className="space-y-6">
          {OFFRES.map((offre, i) => (
            <motion.div
              key={offre.number}
              className="glass-card rounded-2xl p-8 md:p-12 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-1">
                  <span className="text-3xl md:text-4xl font-extralight gradient-text-copper">
                    {offre.number}
                  </span>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="text-2xl md:text-3xl font-light text-light tracking-wide mb-3 group-hover:text-electric transition-colors duration-500">
                    {offre.title}
                  </h3>
                  <div className="h-px w-12 bg-gradient-to-r from-copper/40 to-transparent" />
                </div>

                <div className="lg:col-span-4">
                  <p className="text-sm text-light/40 leading-relaxed">
                    {offre.description}
                  </p>
                </div>

                <div className="lg:col-span-3">
                  <ul className="space-y-2">
                    {offre.details.map((detail) => (
                      <li
                        key={detail}
                        className="text-xs text-light/30 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-electric/40" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button href="/offres" variant="secondary" size="md">
            Explorer nos offres
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

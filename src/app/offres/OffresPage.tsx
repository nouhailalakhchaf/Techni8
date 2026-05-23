"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/sections/CTASection";
import { OFFRES } from "@/lib/constants";

export default function OffresPage() {
  return (
    <>
      <PageHero
        label="Offres"
        title="Trois couches, un systeme"
        subtitle="De la conception a la continuite. Chaque couche s'integre dans une architecture globale coherente."
      />

      <section className="relative py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-8">
          {OFFRES.map((offre, i) => (
            <motion.article
              key={offre.number}
              className="glass-card rounded-2xl p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-baseline gap-6">
                  <span className="text-4xl md:text-5xl font-extralight gradient-text-copper">
                    {offre.number}
                  </span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-light text-light tracking-wide">
                      {offre.title}
                    </h2>
                    <div className="h-px w-16 bg-gradient-to-r from-copper/40 to-transparent mt-3" />
                  </div>
                </div>

                <p className="text-light/45 leading-relaxed max-w-2xl">
                  {offre.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                  {offre.details.map((detail) => (
                    <div
                      key={detail}
                      className="glass rounded-xl px-4 py-3 text-center"
                    >
                      <span className="text-xs text-light/40">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}

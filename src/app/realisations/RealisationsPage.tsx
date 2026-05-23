"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/sections/CTASection";
import { REALISATIONS } from "@/lib/constants";

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        label="Realisations"
        title="Architectures deployees"
        subtitle="Chaque projet est une architecture unique, concue et deployee selon les plus hauts standards d'ingenierie."
      />

      <section className="relative py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-12">
          {REALISATIONS.map((projet, i) => (
            <motion.article
              key={projet.slug}
              id={projet.slug}
              className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div className={`absolute top-0 right-0 w-60 h-60 rounded-full blur-[100px] ${
                i % 2 === 0 ? "bg-electric/5" : "bg-copper/5"
              }`} />

              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-xs tracking-[0.2em] uppercase text-electric/40 font-mono">
                    {projet.category}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-light text-light tracking-wide">
                  {projet.title}
                </h2>

                <p className="text-light/45 leading-relaxed max-w-2xl">
                  {projet.description}
                </p>

                {/* Visual architecture element */}
                <div className="flex gap-2 mt-4">
                  {Array.from({ length: 6 }).map((_, j) => (
                    <motion.div
                      key={j}
                      className={`h-16 rounded-lg ${
                        i % 2 === 0 ? "bg-electric/5 border border-electric/10" : "bg-copper/5 border border-copper/10"
                      }`}
                      style={{ width: `${10 + ((j * 13 + i * 23) % 20)}%` }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + j * 0.08, duration: 0.6 }}
                    />
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

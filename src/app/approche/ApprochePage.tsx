"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import CTASection from "@/components/sections/CTASection";
import { APPROCHE_DATA } from "@/lib/page-data";

export default function ApprochePage() {
  return (
    <>
      <PageHero
        label={APPROCHE_DATA.hero.label}
        title={APPROCHE_DATA.hero.title}
        subtitle={APPROCHE_DATA.hero.subtitle}
      />

      <section className="relative py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {APPROCHE_DATA.pillars.map((pillar, i) => (
              <GlassCard key={pillar.title} delay={i * 0.1} glowColor={i % 2 === 0 ? "blue" : "copper"}>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-extralight gradient-text-copper">
                      0{i + 1}
                    </span>
                    <h3 className="text-lg font-light text-light tracking-wide">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm text-light/40 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Process timeline */}
          <motion.div
            className="mt-24 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric/20 via-electric/10 to-transparent hidden md:block" />
            <div className="space-y-16">
              {["Diagnostic", "Conception", "Implementation", "Evolution"].map((phase, i) => (
                <motion.div
                  key={phase}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                >
                  <div className="flex-1 text-center md:text-right">
                    <span className="text-xs tracking-[0.2em] uppercase text-electric/40 font-mono">
                      Phase {i + 1}
                    </span>
                    <h4 className="text-xl font-light text-light mt-2">{phase}</h4>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-electric/30 border border-electric/50 relative z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

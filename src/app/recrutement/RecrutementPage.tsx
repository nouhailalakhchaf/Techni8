"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import { RECRUTEMENT_DATA } from "@/lib/page-data";

export default function RecrutementPage() {
  return (
    <>
      <PageHero
        label="Recrutement"
        title="Rejoindre TECHNIQ8"
        subtitle={RECRUTEMENT_DATA.intro}
      />

      <section className="relative py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="space-y-6">
            {RECRUTEMENT_DATA.positions.map((pos, i) => (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <GlassCard glowColor={i % 2 === 0 ? "blue" : "copper"}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-light text-light tracking-wide mb-2">
                        {pos.title}
                      </h3>
                      <p className="text-sm text-light/40 leading-relaxed mb-3">
                        {pos.description}
                      </p>
                      <div className="flex gap-3">
                        <span className="text-xs text-electric/40 bg-electric/5 px-3 py-1 rounded-full">
                          {pos.type}
                        </span>
                        <span className="text-xs text-copper/40 bg-copper/5 px-3 py-1 rounded-full">
                          {pos.location}
                        </span>
                      </div>
                    </div>
                    <motion.a
                      href="/contact"
                      className="text-xs tracking-[0.15em] uppercase text-electric/50 hover:text-electric transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      Postuler →
                    </motion.a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

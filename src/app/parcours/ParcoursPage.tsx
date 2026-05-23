"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import CTASection from "@/components/sections/CTASection";
import { PARCOURS_CLIENTS } from "@/lib/constants";

export default function ParcoursPage() {
  return (
    <>
      <PageHero
        label="Parcours"
        title="Institutions & References"
        subtitle="Des collaborations exigeantes avec des institutions et groupes de premier plan qui partagent notre vision de l'excellence."
      />

      <section className="relative py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PARCOURS_CLIENTS.map((client, i) => (
              <GlassCard key={client} delay={i * 0.06}>
                <div className="flex items-center justify-center min-h-[120px]">
                  <motion.span
                    className="text-lg font-light text-light/50 tracking-wide text-center"
                    whileHover={{ color: "rgba(63,169,245,0.8)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {client}
                  </motion.span>
                </div>
              </GlassCard>
            ))}
          </div>

          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm text-light/30 max-w-xl mx-auto leading-relaxed">
              Chaque collaboration est une architecture unique.
              Chaque institution nous confie ses enjeux les plus strategiques.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

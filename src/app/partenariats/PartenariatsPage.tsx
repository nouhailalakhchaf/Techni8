"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import CTASection from "@/components/sections/CTASection";

const PARTENAIRES = [
  { name: "Cloud & Infrastructure", description: "Alliances avec les principaux fournisseurs cloud pour des deploiements optimaux." },
  { name: "IA & Data", description: "Partenariats technologiques avec les leaders de l'IA et du traitement de donnees." },
  { name: "Securite", description: "Collaboration avec des experts en cybersecurite pour des systemes inviolables." },
  { name: "Institutions", description: "Partenariats avec des institutions academiques et de recherche." },
];

export default function PartenariatsPage() {
  return (
    <>
      <PageHero
        label="Partenariats"
        title="Ecosysteme strategique"
        subtitle="Des alliances technologiques et institutionnelles pour des architectures d'exception."
      />

      <section className="relative py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARTENAIRES.map((p, i) => (
              <GlassCard key={p.name} delay={i * 0.1} glowColor={i % 2 === 0 ? "blue" : "copper"}>
                <h3 className="text-lg font-light text-light tracking-wide mb-3">
                  {p.name}
                </h3>
                <p className="text-sm text-light/40 leading-relaxed">{p.description}</p>
              </GlassCard>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-light/30 max-w-xl mx-auto">
              Vous souhaitez rejoindre notre ecosysteme de partenaires ?
              Contactez-nous pour explorer les synergies.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

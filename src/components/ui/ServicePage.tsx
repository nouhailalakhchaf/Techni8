"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import CTASection from "@/components/sections/CTASection";

interface ServiceItem {
  title: string;
  description: string;
}

interface ServicePageProps {
  label: string;
  title: string;
  subtitle: string;
  intro: string;
  services: ServiceItem[];
  approach?: string[];
}

export default function ServicePage({
  label,
  title,
  subtitle,
  intro,
  services,
  approach,
}: ServicePageProps) {
  return (
    <>
      <PageHero label={label} title={title} subtitle={subtitle} />

      <section className="relative py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.p
            className="text-lg text-light/50 leading-relaxed max-w-3xl mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {intro}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <GlassCard key={service.title} delay={i * 0.1} glowColor={i % 2 === 0 ? "blue" : "copper"}>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-extralight gradient-text-copper">
                      0{i + 1}
                    </span>
                    <h3 className="text-base font-light text-light tracking-wide">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-light/40 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>

          {approach && (
            <motion.div
              className="mt-24 glass-card rounded-2xl p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-light text-light mb-6 tracking-wide">
                Notre approche
              </h3>
              <div className="space-y-4">
                {approach.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-xs text-electric/40 font-mono mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-light/45 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}

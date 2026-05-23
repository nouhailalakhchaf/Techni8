"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { PRINCIPES } from "@/lib/constants";
import { type ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  exigence: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  maitrise: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  perennite: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
  sobriete: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="9" y1="3" x2="9" y2="21" />
    </svg>
  ),
};

export default function PrincipesSection() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-navy/20 to-deep" />
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-electric/3 blur-[150px]" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-copper/3 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          label="Fondations"
          title="Principes directeurs"
          subtitle="Quatre piliers non negociables qui guident chaque decision, chaque architecture, chaque detail."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRINCIPES.map((principe, i) => (
            <GlassCard
              key={principe.title}
              delay={i * 0.1}
              glowColor={i % 2 === 0 ? "blue" : "copper"}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      i % 2 === 0
                        ? "bg-electric/10 text-electric"
                        : "bg-copper/10 text-copper"
                    }`}
                  >
                    {icons[principe.icon]}
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-light/30 font-mono">
                      0{i + 1}
                    </span>
                    <h3 className="text-lg font-light text-light tracking-wide">
                      {principe.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-light/40 leading-relaxed">
                  {principe.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

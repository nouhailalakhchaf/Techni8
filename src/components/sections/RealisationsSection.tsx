"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { REALISATIONS } from "@/lib/constants";

export default function RealisationsSection() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-midnight/20 to-deep" />
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-copper/3 blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          label="Realisations"
          title="Architectures deployees"
          subtitle="Chaque projet est une architecture unique, concue et deployee selon les plus hauts standards."
          accent="copper"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REALISATIONS.map((projet, i) => (
            <motion.div
              key={projet.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={`/realisations#${projet.slug}`} className="block group">
                <div className="glass-card rounded-2xl p-8 md:p-10 h-full relative overflow-hidden">
                  {/* Background gradient per project */}
                  <div
                    className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                      i % 2 === 0 ? "bg-electric/10" : "bg-copper/10"
                    }`}
                  />

                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs tracking-[0.2em] uppercase text-electric/40 font-mono">
                        {projet.category}
                      </span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-light/20 group-hover:text-electric group-hover:translate-x-1 transition-all duration-300"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-light text-light group-hover:gradient-text-blue transition-all duration-500">
                      {projet.title}
                    </h3>

                    <p className="text-sm text-light/35 leading-relaxed">
                      {projet.description}
                    </p>

                    {/* Visual element */}
                    <div className="mt-4 flex gap-2">
                      {Array.from({ length: 4 }).map((_, j) => (
                        <motion.div
                          key={j}
                          className={`h-1 rounded-full ${
                            i % 2 === 0 ? "bg-electric/20" : "bg-copper/20"
                          }`}
                          style={{ width: `${20 + ((j * 17 + i * 31) % 40)}%` }}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + j * 0.1, duration: 0.8 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

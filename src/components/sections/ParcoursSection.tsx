"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { PARCOURS_CLIENTS } from "@/lib/constants";

export default function ParcoursSection() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-navy/20 to-deep" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          label="Parcours"
          title="Institutions & References"
          subtitle="Des collaborations exigeantes avec des institutions et groupes de premier plan."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {PARCOURS_CLIENTS.map((client, i) => (
            <motion.div
              key={client}
              className="glass-card rounded-xl p-6 md:p-8 flex items-center justify-center text-center min-h-[100px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -3,
                borderColor: "rgba(63,169,245,0.2)",
              }}
            >
              <span className="text-sm md:text-base font-light text-light/50 tracking-wide">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

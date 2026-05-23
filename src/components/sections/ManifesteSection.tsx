"use client";

import { motion } from "framer-motion";

const LINES = [
  "La technologie evolue.",
  "Les systemes restent.",
  "Nous concevons des architectures digitales & IA d'exception.",
  "Pensees pour durer.",
  "Structurees pour performer.",
  "Chaque decision compte.",
  "Chaque detail tient.",
];

export default function ManifesteSection() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-navy/30 to-deep" />
      <div className="absolute inset-0 grid-overlay opacity-30" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electric/3 blur-[200px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-copper/60 font-mono">
            Manifeste
          </span>
        </motion.div>

        <div className="space-y-4 md:space-y-6">
          {LINES.map((line, i) => (
            <motion.p
              key={i}
              className={`text-2xl md:text-3xl lg:text-4xl font-extralight leading-relaxed ${
                i === 2
                  ? "gradient-text-blue"
                  : i >= 5
                  ? "text-copper/60"
                  : "text-light/60"
              }`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

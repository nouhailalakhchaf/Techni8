"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Initier un echange"
        subtitle="Chaque projet debute par une conversation. Partagez votre vision, vos enjeux, votre ambition."
      />

      <section className="relative py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs tracking-[0.15em] uppercase text-light/30">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-electric/15 py-3 text-light text-sm focus:border-electric/40 transition-colors outline-none placeholder:text-light/15"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs tracking-[0.15em] uppercase text-light/30">
                      Organisation
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-electric/15 py-3 text-light text-sm focus:border-electric/40 transition-colors outline-none placeholder:text-light/15"
                      placeholder="Votre organisation"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs tracking-[0.15em] uppercase text-light/30">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-electric/15 py-3 text-light text-sm focus:border-electric/40 transition-colors outline-none placeholder:text-light/15"
                    placeholder="votre@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs tracking-[0.15em] uppercase text-light/30">
                    Type de projet
                  </label>
                  <select className="w-full bg-transparent border-b border-electric/15 py-3 text-light/50 text-sm focus:border-electric/40 transition-colors outline-none">
                    <option value="" className="bg-deep">Selectionnez</option>
                    <option value="architecture" className="bg-deep">Architecture digitale</option>
                    <option value="ia" className="bg-deep">IA & Machine Learning</option>
                    <option value="transformation" className="bg-deep">Transformation digitale</option>
                    <option value="audit" className="bg-deep">Audit & Consulting</option>
                    <option value="autre" className="bg-deep">Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs tracking-[0.15em] uppercase text-light/30">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-transparent border-b border-electric/15 py-3 text-light text-sm focus:border-electric/40 transition-colors outline-none resize-none placeholder:text-light/15"
                    placeholder="Decrivez votre projet, vos enjeux, votre vision..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="inline-flex items-center justify-center px-10 py-4 text-sm tracking-[0.15em] uppercase rounded-full bg-gradient-to-r from-electric to-cyan text-deep font-light hover:shadow-[0_0_40px_rgba(63,169,245,0.3)] transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Envoyer
                </motion.button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-sm font-light text-light tracking-wide mb-4">
                  Processus
                </h3>
                <div className="space-y-3">
                  {[
                    "Echange initial strategique",
                    "Analyse de faisabilite",
                    "Proposition architecturale",
                    "Lancement du projet",
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-[10px] text-electric/40 font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs text-light/40">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-sm font-light text-light tracking-wide mb-4">
                  Coordonnees
                </h3>
                <div className="space-y-3 text-xs text-light/40">
                  <p>contact@techniq8.com</p>
                  <p>Paris, France</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

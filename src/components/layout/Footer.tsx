"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NAV_LINKS, SERVICE_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-electric/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric to-cyan flex items-center justify-center">
                <span className="text-deep text-xs font-bold">T8</span>
              </div>
              <span className="text-light text-sm tracking-[0.2em] uppercase font-light">
                TECHNIQ8
              </span>
            </div>
            <p className="text-light/40 text-sm leading-relaxed max-w-xs">
              {SITE.description}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xs tracking-[0.2em] uppercase text-electric/50 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-light/40 hover:text-electric transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Expertises */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xs tracking-[0.2em] uppercase text-electric/50 mb-6">
              Expertises
            </h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-light/40 hover:text-electric transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xs tracking-[0.2em] uppercase text-electric/50 mb-6">
              Informations
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/partenariats" className="text-sm text-light/40 hover:text-electric transition-colors">
                  Partenariats
                </Link>
              </li>
              <li>
                <Link href="/recrutement" className="text-sm text-light/40 hover:text-electric transition-colors">
                  Recrutement
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-light/40 hover:text-electric transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-light/40 hover:text-electric transition-colors">
                  Politique de confidentialite
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-sm text-light/40 hover:text-electric transition-colors">
                  Mentions legales
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-electric/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-light/20 tracking-wider">
            &copy; {new Date().getFullYear()} TECHNIQ8. Tous droits reserves.
          </p>
          <p className="text-xs text-light/20 tracking-wider">
            Architectures digitales & IA d&apos;exception
          </p>
        </div>
      </div>
    </footer>
  );
}

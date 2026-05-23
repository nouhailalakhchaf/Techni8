"use client";

import { motion } from "framer-motion";

interface SoundToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

export default function SoundToggle({ enabled, onToggle }: SoundToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full glass flex items-center justify-center hover:border-electric/30 transition-all duration-300 group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.5, duration: 0.5 }}
      title={enabled ? "Desactiver le son" : "Activer le son"}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={`transition-colors ${enabled ? "text-electric" : "text-light/30"}`}
      >
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        {enabled ? (
          <>
            <path d="M19.07 4.93a10 10 0 010 14.14" />
            <path d="M15.54 8.46a5 5 0 010 7.07" />
          </>
        ) : (
          <line x1="23" y1="9" x2="17" y2="15" />
        )}
      </svg>
      {enabled && (
        <motion.div
          className="absolute inset-0 rounded-full border border-electric/20"
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
}

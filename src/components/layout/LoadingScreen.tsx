"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-deep flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric to-cyan flex items-center justify-center">
                <span className="text-deep text-xl font-bold">T8</span>
              </div>
              <motion.div
                className="absolute -inset-4 rounded-3xl border border-electric/20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            <div className="flex flex-col items-center gap-3">
              <span className="text-xs tracking-[0.4em] uppercase text-light/40">
                TECHNIQ8
              </span>
              <div className="w-48 h-px bg-navy overflow-hidden rounded-full">
                <motion.div
                  className="h-full w-1/2 loader-bar rounded-full"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

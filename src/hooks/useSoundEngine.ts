"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type SoundType = "hover" | "click" | "transition" | "ambient";

function createOscillator(
  ctx: AudioContext,
  freq: number,
  type: OscillatorType,
  duration: number,
  gain: number
) {
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime);
  g.gain.setValueAtTime(0, ctx.currentTime);
  g.gain.linearRampToValueAtTime(gain, ctx.currentTime + 0.02);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.connect(g);
  g.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + duration);
}

export function useSoundEngine() {
  const ctxRef = useRef<AudioContext | null>(null);
  const [enabled, setEnabled] = useState(false);
  const ambientRef = useRef<OscillatorNode | null>(null);

  useEffect(() => {
    return () => {
      ambientRef.current?.stop();
      ctxRef.current?.close();
    };
  }, []);

  const init = useCallback(() => {
    if (!ctxRef.current) {
      ctxRef.current = new AudioContext();
    }
    setEnabled(true);
  }, []);

  const play = useCallback(
    (type: SoundType) => {
      if (!enabled || !ctxRef.current) return;
      const ctx = ctxRef.current;
      switch (type) {
        case "hover":
          createOscillator(ctx, 800, "sine", 0.08, 0.03);
          break;
        case "click":
          createOscillator(ctx, 600, "sine", 0.12, 0.05);
          createOscillator(ctx, 900, "sine", 0.08, 0.03);
          break;
        case "transition":
          createOscillator(ctx, 200, "sine", 0.4, 0.04);
          createOscillator(ctx, 400, "sine", 0.3, 0.02);
          break;
        case "ambient":
          break;
      }
    },
    [enabled]
  );

  const toggle = useCallback(() => {
    if (!enabled) {
      init();
    } else {
      setEnabled(false);
      ambientRef.current?.stop();
      ambientRef.current = null;
    }
  }, [enabled, init]);

  return { enabled, toggle, play, init };
}

"use client";

import { ReactNode } from "react";
import { useLenis } from "@/hooks/useLenis";
import { useSoundEngine } from "@/hooks/useSoundEngine";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";
import SoundToggle from "./SoundToggle";

export default function ClientShell({ children }: { children: ReactNode }) {
  useLenis();
  const { enabled, toggle } = useSoundEngine();

  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <SoundToggle enabled={enabled} onToggle={toggle} />
    </>
  );
}

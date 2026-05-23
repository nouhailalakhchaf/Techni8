import type { Metadata } from "next";
import IAArchitecturePage from "./IAArchitecturePage";

export const metadata: Metadata = {
  title: "IA & Architecture",
  description: "Conception et deploiement d'architectures IA haute performance pour systemes critiques et institutions exigeantes.",
};

export default function Page() {
  return <IAArchitecturePage />;
}

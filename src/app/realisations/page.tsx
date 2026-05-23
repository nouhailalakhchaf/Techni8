import type { Metadata } from "next";
import RealisationsPage from "./RealisationsPage";

export const metadata: Metadata = {
  title: "Realisations",
  description: "Architectures deployees : RMA, Appart9, ASANADA, Ports4Impact. Chaque projet est une architecture unique concue selon les plus hauts standards.",
};

export default function Page() {
  return <RealisationsPage />;
}

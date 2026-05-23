import type { Metadata } from "next";
import OffresPage from "./OffresPage";

export const metadata: Metadata = {
  title: "Offres",
  description: "Trois couches d'intervention : Architecture, Deploiement, Continuite. Des offres structurees pour des architectures digitales d'exception.",
};

export default function Page() {
  return <OffresPage />;
}

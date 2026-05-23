import type { Metadata } from "next";
import SystemesCritiquesPage from "./SystemesCritiquesPage";

export const metadata: Metadata = {
  title: "Systemes Critiques",
  description: "Conception et deploiement de systemes critiques haute disponibilite, resilients et securises pour les institutions et entreprises.",
};

export default function Page() {
  return <SystemesCritiquesPage />;
}

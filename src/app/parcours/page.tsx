import type { Metadata } from "next";
import ParcoursPage from "./ParcoursPage";

export const metadata: Metadata = {
  title: "Parcours",
  description: "Institutions et references de premier plan. Microsoft France, La Sorbonne, BNP Paribas, Renault et plus.",
};

export default function Page() {
  return <ParcoursPage />;
}

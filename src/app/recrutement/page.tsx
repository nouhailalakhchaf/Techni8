import type { Metadata } from "next";
import RecrutementPage from "./RecrutementPage";

export const metadata: Metadata = {
  title: "Recrutement",
  description: "Rejoignez TECHNIQ8. Nous recherchons des ingenieurs, architectes et strateges qui partagent notre exigence.",
};

export default function Page() {
  return <RecrutementPage />;
}

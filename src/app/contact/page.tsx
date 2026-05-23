import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Initiez un echange strategique avec TECHNIQ8. Partagez votre vision, nous concevrons l'architecture.",
};

export default function Page() {
  return <ContactPage />;
}

import type { Metadata } from "next";
import PartenariatsPage from "./PartenariatsPage";

export const metadata: Metadata = {
  title: "Partenariats",
  description: "Ecosysteme de partenariats strategiques TECHNIQ8. Alliances technologiques et collaborations institutionnelles.",
};

export default function Page() {
  return <PartenariatsPage />;
}

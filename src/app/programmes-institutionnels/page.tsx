import type { Metadata } from "next";
import ProgrammesPage from "./ProgrammesPage";

export const metadata: Metadata = {
  title: "Programmes Institutionnels",
  description: "Programmes de transformation numerique pour institutions publiques, universitaires et culturelles.",
};

export default function Page() {
  return <ProgrammesPage />;
}

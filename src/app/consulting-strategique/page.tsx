import type { Metadata } from "next";
import ConsultingPage from "./ConsultingPage";

export const metadata: Metadata = {
  title: "Consulting Strategique",
  description: "Conseil strategique en architecture digitale et IA pour dirigeants et decideurs institutionnels.",
};

export default function Page() {
  return <ConsultingPage />;
}

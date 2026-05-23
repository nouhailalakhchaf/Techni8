import type { Metadata } from "next";
import FAQPage from "./FAQPage";
import { FAQ_DATA } from "@/lib/page-data";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Questions frequentes sur TECHNIQ8, notre approche, nos services et notre methodologie d'ingenierie numerique.",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_DATA.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }),
  },
};

export default function Page() {
  return <FAQPage />;
}

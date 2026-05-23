import type { Metadata } from "next";
import BlogPage from "./BlogPage";

export const metadata: Metadata = {
  title: "Insights",
  description: "Articles, analyses et reflexions sur l'architecture digitale, l'IA et la transformation numerique par TECHNIQ8.",
};

export default function Page() {
  return <BlogPage />;
}

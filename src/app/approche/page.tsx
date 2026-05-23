import type { Metadata } from "next";
import ApprochePage from "./ApprochePage";

export const metadata: Metadata = {
  title: "Approche",
  description: "Notre methodologie d'ingenierie systemique. Analyse, conception, deploiement et evolution continue des architectures digitales.",
};

export default function Page() {
  return <ApprochePage />;
}

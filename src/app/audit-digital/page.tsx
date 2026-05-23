import type { Metadata } from "next";
import AuditPage from "./AuditPage";

export const metadata: Metadata = {
  title: "Audit Digital & IA",
  description: "Audit complet des ecosystemes numeriques et IA. Diagnostic, evaluation et recommandations architecturales.",
};

export default function Page() {
  return <AuditPage />;
}

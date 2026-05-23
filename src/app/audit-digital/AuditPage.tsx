"use client";

import ServicePage from "@/components/ui/ServicePage";

export default function AuditPage() {
  return (
    <ServicePage
      label="Audit Digital & IA"
      title="Diagnostic architectural"
      subtitle="Une radiographie complete de vos systemes numeriques et IA. Objectif : verite, clarte, recommandations."
      intro="L'audit TECHNIQ8 n'est pas un simple inventaire. C'est une analyse architecturale profonde qui revele les forces, les failles et les opportunites de votre ecosysteme numerique. Chaque diagnostic s'accompagne de recommandations concretes et actionnables."
      services={[
        {
          title: "Audit architectural",
          description: "Analyse de l'architecture existante : patterns, performances, securite, scalabilite, dette technique.",
        },
        {
          title: "Audit IA & Data",
          description: "Evaluation des pipelines de donnees, modeles IA, gouvernance, qualite des donnees et conformite.",
        },
        {
          title: "Audit securite",
          description: "Tests de penetration, analyse de vulnerabilites, evaluation de la posture de securite globale.",
        },
        {
          title: "Audit performance",
          description: "Benchmarks, tests de charge, analyse des bottlenecks, optimisations recommandees.",
        },
      ]}
      approach={[
        "Cadrage et definition du perimetre d'audit",
        "Collecte de donnees et interviews",
        "Analyse approfondie et diagnostic",
        "Synthese et recommandations actionnables",
        "Presentation et plan d'action",
      ]}
    />
  );
}

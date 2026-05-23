"use client";

import ServicePage from "@/components/ui/ServicePage";

export default function ConsultingPage() {
  return (
    <ServicePage
      label="Consulting Strategique"
      title="Vision architecturale"
      subtitle="Le conseil comme levier d'architecture. Des recommandations strategiques fondees sur l'expertise technique."
      intro="Le consulting TECHNIQ8 n'est pas du conseil generique. C'est une vision architecturale appliquee a la strategie numerique. Nous aidons les decideurs a prendre des decisions technologiques eclairees, durables et structurantes."
      services={[
        {
          title: "Advisory technique",
          description: "Accompagnement des directions techniques dans leurs choix architecturaux et technologiques strategiques.",
        },
        {
          title: "Due diligence technologique",
          description: "Evaluation technique approfondie pour les operations de M&A, investissements ou restructurations.",
        },
        {
          title: "Roadmap strategique",
          description: "Definition de la trajectoire technologique. Priorisation des investissements, sequencement des chantiers.",
        },
        {
          title: "Gouvernance numerique",
          description: "Mise en place de frameworks de gouvernance adaptes. Processus, KPIs, comites de pilotage.",
        },
      ]}
    />
  );
}

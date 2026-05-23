"use client";

import ServicePage from "@/components/ui/ServicePage";

export default function TransformationPage() {
  return (
    <ServicePage
      label="Transformation Digitale"
      title="Transformation structurelle"
      subtitle="La transformation numerique comme projet architectural, pas comme migration technologique."
      intro="Transformer une organisation ne se resume pas a changer d'outils. C'est repenser les flux, les processus et les architectures qui soutiennent l'activite. Nous accompagnons cette transformation avec une approche systemique et structuree."
      services={[
        {
          title: "Strategie de transformation",
          description: "Definition de la vision, de la roadmap et des jalons de transformation. Alignement des enjeux metier et technologiques.",
        },
        {
          title: "Refonte architecturale",
          description: "Redesign des systemes existants. Migration vers des architectures modernes, scalables et securisees.",
        },
        {
          title: "Conduite du changement",
          description: "Accompagnement des equipes dans l'adoption des nouveaux outils et processus. Formation et support continu.",
        },
        {
          title: "Mesure d'impact",
          description: "Mise en place d'indicateurs de performance. Suivi de la transformation et ajustement de la strategie.",
        },
      ]}
      approach={[
        "Diagnostic complet de l'ecosysteme existant",
        "Definition de la vision et de la roadmap",
        "Design de l'architecture cible",
        "Implementation par phases controlees",
        "Mesure d'impact et ajustement continu",
      ]}
    />
  );
}

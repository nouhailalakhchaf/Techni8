"use client";

import ServicePage from "@/components/ui/ServicePage";

export default function IAArchitecturePage() {
  return (
    <ServicePage
      label="IA & Architecture"
      title="Intelligence architecturee"
      subtitle="Des architectures IA concues pour la fiabilite, la performance et la perennite."
      intro="L'intelligence artificielle sans architecture est un risque. Nous concevons des systemes IA structures, gouvernes et perennes. Chaque modele, chaque pipeline, chaque infrastructure est pensee comme un composant architectural."
      services={[
        {
          title: "Architecture IA",
          description: "Conception d'architectures IA modulaires et scalables. Selection des modeles, design des pipelines, specification des flux de donnees.",
        },
        {
          title: "MLOps & Infrastructure",
          description: "Deploiement et industrialisation des modeles IA. Pipelines CI/CD, monitoring, versioning, gouvernance des modeles.",
        },
        {
          title: "IA Generative & LLM",
          description: "Integration et fine-tuning de modeles de langage. RAG, agents autonomes, systemes conversationnels avances.",
        },
        {
          title: "IA Predictive",
          description: "Modeles predictifs pour l'aide a la decision. Analyse de donnees, forecasting, detection d'anomalies.",
        },
      ]}
      approach={[
        "Audit de l'existant et analyse des besoins metier",
        "Definition de l'architecture cible et selection des technologies",
        "Prototypage et validation des modeles",
        "Deploiement industriel et monitoring continu",
        "Optimisation et evolution continue",
      ]}
    />
  );
}

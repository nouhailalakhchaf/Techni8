"use client";

import ServicePage from "@/components/ui/ServicePage";

export default function SystemesCritiquesPage() {
  return (
    <ServicePage
      label="Systemes Critiques"
      title="Zero compromis"
      subtitle="Des systemes ou la defaillance n'est pas une option. Resilience, securite et performance absolues."
      intro="Les systemes critiques exigent un niveau d'ingenierie exceptionnel. Chaque composant est concu pour la haute disponibilite, teste sous contrainte et deploye avec une rigueur absolue. Nous concevons des systemes qui ne tolerent aucun compromis."
      services={[
        {
          title: "Architecture haute disponibilite",
          description: "Conception de systemes distribues a tolerance de pannes. Redundance, failover, recovery automatique.",
        },
        {
          title: "Securite avancee",
          description: "Audit de securite, hardening, chiffrement, gestion des identites. Protection a tous les niveaux de la stack.",
        },
        {
          title: "Performance extreme",
          description: "Optimisation des temps de reponse, gestion de la charge, scalabilite horizontale et verticale.",
        },
        {
          title: "Monitoring & Observabilite",
          description: "Mise en place de systemes de monitoring avances. Alerting, tracing distribue, analyse temps reel.",
        },
      ]}
      approach={[
        "Analyse des exigences de criticite et de disponibilite",
        "Design de l'architecture avec patterns de resilience",
        "Tests de charge et simulations de pannes",
        "Deploiement progressif avec rollback automatique",
        "Monitoring continu et amelioration permanente",
      ]}
    />
  );
}

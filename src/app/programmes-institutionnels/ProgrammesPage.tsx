"use client";

import ServicePage from "@/components/ui/ServicePage";

export default function ProgrammesPage() {
  return (
    <ServicePage
      label="Programmes Institutionnels"
      title="Architecture institutionnelle"
      subtitle="Des programmes de transformation numerique adaptes aux enjeux specifiques des institutions."
      intro="Les institutions publiques, universitaires et culturelles ont des besoins specifiques : continuite de service, accessibilite, interoperabilite, souverainete numerique. Nous concevons des programmes sur mesure qui respectent ces contraintes tout en apportant l'innovation necessaire."
      services={[
        {
          title: "Transformation institutionnelle",
          description: "Programmes de modernisation des systemes d'information institutionnels. Dematerialisation, interoperabilite, ouverture des donnees.",
        },
        {
          title: "Plateformes educatives",
          description: "Conception de plateformes numeriques pour l'enseignement superieur et la recherche. LMS, outils collaboratifs, portails de connaissance.",
        },
        {
          title: "Patrimoine numerique",
          description: "Numerisation, archivage et valorisation du patrimoine culturel et scientifique. Systemes de gestion de collections.",
        },
        {
          title: "Services publics numeriques",
          description: "Conception de services numeriques accessibles, inclusifs et performants pour les citoyens.",
        },
      ]}
      approach={[
        "Comprehension des enjeux institutionnels et reglementaires",
        "Co-construction avec les parties prenantes",
        "Architecture adaptee aux contraintes de souverainete",
        "Deploiement progressif et accompagnement",
        "Transfert de competences et autonomisation",
      ]}
    />
  );
}

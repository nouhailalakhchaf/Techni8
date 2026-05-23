export const SITE = {
  name: "TECHNIQ8",
  tagline: "Architectures digitales & IA d'exception",
  description:
    "Cabinet d'ingenierie numerique & IA haut de gamme. Architectures digitales, systemes critiques, transformation institutionnelle.",
  url: "https://techniq8.com",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/approche", label: "Approche" },
  { href: "/offres", label: "Offres" },
  { href: "/parcours", label: "Parcours" },
  { href: "/realisations", label: "Realisations" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICE_LINKS = [
  { href: "/ia-architecture", label: "IA & Architecture" },
  { href: "/transformation-digitale", label: "Transformation Digitale" },
  { href: "/systemes-critiques", label: "Systemes Critiques" },
  { href: "/consulting-strategique", label: "Consulting Strategique" },
  { href: "/audit-digital", label: "Audit Digital & IA" },
  { href: "/programmes-institutionnels", label: "Programmes Institutionnels" },
] as const;

export const PARCOURS_CLIENTS = [
  "Microsoft France",
  "La Sorbonne",
  "Museum National d'Histoire Naturelle",
  "BNP Paribas",
  "Renault",
  "Allianz",
  "Sephora",
  "Sodexo",
  "ASANADA",
] as const;

export const REALISATIONS = [
  {
    slug: "rma",
    title: "RMA",
    category: "Architecture Systeme",
    description: "Refonte architecturale complete d'un ecosysteme institutionnel critique.",
  },
  {
    slug: "appart9",
    title: "Appart9",
    category: "Plateforme Digitale",
    description: "Conception et deploiement d'une plateforme immobiliere haute performance.",
  },
  {
    slug: "asanada",
    title: "ASANADA",
    category: "Infrastructure IA",
    description: "Deploiement d'une infrastructure IA pour l'analyse predictive institutionnelle.",
  },
  {
    slug: "ports4impact",
    title: "Ports4Impact",
    category: "Transformation Digitale",
    description: "Transformation numerique d'un ecosysteme portuaire international.",
  },
] as const;

export const PRINCIPES = [
  {
    title: "Exigence",
    description: "Chaque composant, chaque ligne, chaque decision repond a un standard d'excellence non negociable.",
    icon: "exigence",
  },
  {
    title: "Maitrise",
    description: "Une comprehension profonde des systemes, des flux et des contraintes avant toute intervention.",
    icon: "maitrise",
  },
  {
    title: "Perennite",
    description: "Des architectures concues pour durer, evoluer et resister aux transformations technologiques.",
    icon: "perennite",
  },
  {
    title: "Sobriete",
    description: "La puissance dans la retenue. Aucun exces, aucune surcharge. Chaque element a sa raison d'etre.",
    icon: "sobriete",
  },
] as const;

export const OFFRES = [
  {
    number: "01",
    title: "Architecture",
    description: "Conception d'architectures digitales & IA sur mesure. Audit, modelisation, specification technique et prototypage de systemes complexes.",
    details: ["Audit architectural", "Modelisation systeme", "Prototypage technique", "Specification IA"],
  },
  {
    number: "02",
    title: "Deploiement",
    description: "Implementation et mise en production d'infrastructures critiques. Integration IA, pipelines de donnees, ecosystemes cloud.",
    details: ["Infrastructure cloud", "Integration IA", "Pipelines data", "DevOps avance"],
  },
  {
    number: "03",
    title: "Continuite",
    description: "Maintenance evolutive, monitoring, optimisation continue et accompagnement strategique a long terme.",
    details: ["Monitoring avance", "Optimisation continue", "Evolution strategique", "Support premium"],
  },
] as const;

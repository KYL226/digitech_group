/** Catégories utilisées pour filtres / SEO */
export type ProjectCategory = "corporate" | "branding" | "e-commerce";

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  corporate: "Corporate",
  branding: "Branding + web",
  "e-commerce": "E-commerce",
};

export type Project = {
  slug: string;
  name: string;
  /** Catégorie pour filtres sur /realisations */
  category: ProjectCategory;
  tag: string;
  result: string;
  description: string;
  image: string;
  content: string[];
};

export const projects: Project[] = [
  {
    slug: "nova-finance",
    name: "Nova Finance",
    category: "corporate",
    tag: "Site corporate",
    result: "+42% de demandes en 3 mois",
    description:
      "Refonte complete du site corporate avec un nouveau parcours de conversion pour les prises de rendez-vous.",
    image: "/projects/project-1.svg",
    content: [
      "Objectif: moderniser l'image de marque et simplifier la prise de contact commerciale.",
      "Travail realise: nouvelle architecture des pages, direction artistique premium et optimisation de la vitesse.",
      "Impact: augmentation du taux de conversion et meilleure qualite des leads entrants.",
    ],
  },
  {
    slug: "astra-studio",
    name: "Astra Studio",
    category: "branding",
    tag: "Refonte branding + web",
    result: "Temps moyen x1.8",
    description:
      "Creation d'une nouvelle identite visuelle et d'une plateforme web orientee portfolio et acquisition organique.",
    image: "/projects/project-2.svg",
    content: [
      "Objectif: renforcer la credibilite et valoriser les cas clients du studio.",
      "Travail realise: refonte complete du branding, design system et integration d'un site vitrine riche.",
      "Impact: meilleure retention des visiteurs et hausse de l'engagement sur les pages projets.",
    ],
  },
  {
    slug: "maison-elya",
    name: "Maison Elya",
    category: "e-commerce",
    tag: "E-commerce lifestyle",
    result: "ROAS moyen 5.1",
    description:
      "Design et optimisation d'une boutique en ligne avec pages produits performantes et suivi analytics avance.",
    image: "/projects/project-3.svg",
    content: [
      "Objectif: augmenter les ventes et fiabiliser le suivi des performances marketing.",
      "Travail realise: optimisation UX des fiches produits, tunnel d'achat et instrumentation analytics.",
      "Impact: hausse du ROAS et meilleure lecture des canaux d'acquisition les plus rentables.",
    ],
  },
];

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
  /** Date ISO (tri, affichage futur) */
  publishedAt: string;
  tag: string;
  result: string;
  description: string;
  /** Visuel carte / page */
  image: string;
  /**
   * Image Open Graph / partage social (1200×630 recommandé, PNG ou JPG).
   * Si absent, `image` est utilisée pour l’OG.
   */
  ogImage?: string;
  content: string[];
};

export const projects: Project[] = [
  {
    slug: "nova-finance",
    name: "Nova Finance",
    category: "corporate",
    publishedAt: "2024-06-01",
    tag: "Site corporate",
    result: "+42% de demandes en 3 mois",
    description:
      "Refonte complete du site corporate avec un nouveau parcours de conversion pour les prises de rendez-vous.",
    image: "/projects/project-1.svg",
    // ogImage: "/projects/og/nova-finance.png",
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
    publishedAt: "2024-09-15",
    tag: "Refonte branding + web",
    result: "Temps moyen x1.8",
    description:
      "Creation d'une nouvelle identite visuelle et d'une plateforme web orientee portfolio et acquisition organique.",
    image: "/projects/project-2.svg",
    // ogImage: "/projects/og/astra-studio.png",
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
    publishedAt: "2024-11-20",
    tag: "E-commerce lifestyle",
    result: "ROAS moyen 5.1",
    description:
      "Design et optimisation d'une boutique en ligne avec pages produits performantes et suivi analytics avance.",
    image: "/projects/project-3.svg",
    // ogImage: "/projects/og/maison-elya.png",
    content: [
      "Objectif: augmenter les ventes et fiabiliser le suivi des performances marketing.",
      "Travail realise: optimisation UX des fiches produits, tunnel d'achat et instrumentation analytics.",
      "Impact: hausse du ROAS et meilleure lecture des canaux d'acquisition les plus rentables.",
    ],
  },
];

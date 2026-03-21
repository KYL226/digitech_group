# DigiTech Agency Website

Site vitrine d'agence digitale construit avec Next.js (App Router), React et Tailwind CSS.

## Stack technique

- `Next.js 16`
- `React 19`
- `TypeScript`
- `Tailwind CSS v4`
- `ESLint`

## Lancer le projet en local

```bash
npm install
npm run dev
```

Site disponible sur [http://localhost:3000](http://localhost:3000).

## Scripts utiles

- `npm run dev` : lance le serveur de développement
- `npm run build` : build de production
- `npm run start` : démarre le build de production
- `npm run lint` : vérifie le code avec ESLint

## Structure actuelle

- `app/page.tsx` : page d'accueil
- `app/realisations/[slug]/page.tsx` : page détail d'une réalisation
- `app/layout.tsx` : layout global + header commun à toutes les pages
- `components/sections/*` : sections réutilisables du site (hero, services, projets, etc.)
- `data/projects.ts` : source de vérité des réalisations (scalable)
- `public/projects/*` : images d'illustration des projets

## Fonctionnalités déjà implémentées

- Header sticky global (visible sur la home et les pages détail)
- Landing page agence en sections modulaires
- Section réalisations en mode carousel
- Défilement automatique des projets
- Pause automatique du carousel au survol
- Navigation manuelle par boutons numérotés
- Pages détails dynamiques par `slug` (`/realisations/[slug]`)
- Données projets centralisées dans `data/projects.ts`

## Ajouter une nouvelle réalisation

1. Ajouter l'image dans `public/projects/`
2. Ajouter un nouvel objet dans `data/projects.ts` avec:
   - `slug` (unique)
   - `name`
   - `tag`
   - `result`
   - `description`
   - `image`
   - `content` (tableau de paragraphes pour la page détail)

La home et les pages détail se mettent à jour automatiquement.

## Suggestions d'amélioration (prochaines étapes)

- **Expérience carousel**
  - Ajouter boutons `précédent/suivant`
  - Ajouter pagination avec barre de progression
  - Support swipe mobile

- **Section réalisations**
  - Créer une page index `/realisations` (grille complète)
  - Ajouter filtres par catégorie (`corporate`, `e-commerce`, etc.)
  - Ajouter recherche par nom de projet

- **SEO & marketing**
  - Ajouter metadata Open Graph par projet
  - Générer un sitemap et robots
  - Ajouter données structurées (`Organization`, `WebSite`, `Breadcrumb`)

- **Contact & conversion**
  - Brancher le formulaire contact à une API (email/CRM)
  - Ajouter validation serveur + anti-spam (honeypot/turnstile)
  - Mettre en place des événements analytics (clic CTA, envoi formulaire)

- **Qualité & maintenance**
  - Ajouter tests UI (Playwright)
  - Extraire des composants UI partagés (`Button`, `Card`, `SectionTitle`)
  - Ajouter i18n (FR/EN) si besoin d'internationalisation

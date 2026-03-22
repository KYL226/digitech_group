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
- `app/realisations/page.tsx` : index des réalisations (grille, filtres, recherche)
- `app/realisations/[slug]/page.tsx` : page détail d'une réalisation
- `app/sitemap.ts` : sitemap XML (`/sitemap.xml`)
- `app/robots.ts` : robots.txt (`/robots.txt`)
- `app/layout.tsx` : layout global, header, metadata de base, JSON-LD Organization + WebSite
- `components/sections/*` : sections réutilisables du site (hero, services, projets, etc.)
- `components/seo/JsonLd.tsx` : injection JSON-LD
- `data/projects.ts` : source de vérité des réalisations (scalable)
- `lib/site.ts` : URL canonique du site (`NEXT_PUBLIC_SITE_URL`)
- `public/projects/*` : images d'illustration des projets

Copier `.env.example` vers `.env.local` et définir `NEXT_PUBLIC_SITE_URL` en production pour un SEO correct (Open Graph, sitemap).

## Fonctionnalités déjà implémentées

- Header sticky global (visible sur la home et les pages détail)
- Landing page agence en sections modulaires
- Section réalisations en mode carousel
- Défilement automatique des projets
- Pause automatique du carousel au survol
- Navigation manuelle par boutons numérotés
- Pages détails dynamiques par `slug` (`/realisations/[slug]`)
- Page index `/realisations` : grille, filtres par catégorie, recherche par nom ou texte
- Données projets centralisées dans `data/projects.ts` (champ `category` pour les filtres)
- SEO : `metadataBase`, Open Graph + Twitter par projet, `canonical` sur les pages détail
- Sitemap et `robots.txt` générés par Next.js
- Données structurées JSON-LD : `Organization` + `WebSite` (layout), `BreadcrumbList` (index + détail), `CreativeWork` (détail projet)

## Ajouter une nouvelle réalisation

1. Ajouter l'image dans `public/projects/`
2. Ajouter un nouvel objet dans `data/projects.ts` avec:
   - `slug` (unique)
   - `name`
   - `category` (`corporate` | `branding` | `e-commerce`, ou étendre `ProjectCategory` + `PROJECT_CATEGORY_LABELS`)
   - `tag`
   - `result`
   - `description`
   - `image`
   - `content` (tableau de paragraphes pour la page détail)

La home, `/realisations`, le sitemap et les pages détail se mettent à jour automatiquement.

## Suggestions d'amélioration (prochaines étapes)

- **Expérience carousel**
  - Ajouter boutons `précédent/suivant`
  - Ajouter pagination avec barre de progression
  - Support swipe mobile

- **Section réalisations**
  - Pagination ou infinite scroll sur `/realisations` si beaucoup de projets
  - Tri (date, nom) côté URL (`?sort=`)
  - Partage social avec image OG dédiée par projet (déjà possible via OG ; ajouter visuels PNG/JPG pour de meilleurs aperçus)

- **SEO & marketing**
  - Fil d'Ariane visible (UI) sur toutes les pages internes
  - Données structurées `FAQPage` si vous ajoutez une FAQ dédiée
  - Soumission du sitemap dans Google Search Console

- **Contact & conversion**
  - Brancher le formulaire contact à une API (email/CRM)
  - Ajouter validation serveur + anti-spam (honeypot/turnstile)
  - Mettre en place des événements analytics (clic CTA, envoi formulaire)

- **Qualité & maintenance**
  - Ajouter tests UI (Playwright)
  - Extraire des composants UI partagés (`Button`, `Card`, `SectionTitle`)
  - Ajouter i18n (FR/EN) si besoin d'internationalisation

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  PROJECT_CATEGORY_LABELS,
  projects,
  type ProjectCategory,
} from "@/data/projects";
import { getSiteUrl } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Realisations | DigiTech Agency",
  description:
    "Decouvrez nos projets web, branding et e-commerce. Filtrez par categorie ou recherchez par nom.",
  openGraph: {
    title: "Realisations | DigiTech Agency",
    description:
      "Decouvrez nos projets web, branding et e-commerce. Filtrez par categorie ou recherchez par nom.",
    url: `${getSiteUrl()}/realisations`,
  },
};

function isCategory(value: string): value is ProjectCategory {
  return value in PROJECT_CATEGORY_LABELS;
}

type PageProps = {
  searchParams: Promise<{ q?: string; cat?: string }>;
};

export default async function RealisationsIndexPage({ searchParams }: PageProps) {
  const { q = "", cat = "" } = await searchParams;
  const siteUrl = getSiteUrl();

  let filtered = [...projects];

  if (cat && isCategory(cat)) {
    filtered = filtered.filter((p) => p.category === cat);
  }

  const query = q.trim().toLowerCase();
  if (query) {
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tag.toLowerCase().includes(query),
    );
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Realisations",
        item: `${siteUrl}/realisations`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#070814] text-white">
      <JsonLd data={breadcrumbJsonLd} />
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <nav className="text-sm text-white/60" aria-label="Fil d'Ariane">
          <Link href="/" className="transition hover:text-white">
            Accueil
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/90">Realisations</span>
        </nav>

        <h1 className="mt-6 text-4xl font-semibold">Nos realisations</h1>
        <p className="mt-3 max-w-2xl text-white/70">
          Explorez nos projets. Utilisez la recherche et les filtres pour trouver ce qui vous
          interesse.
        </p>

        <form
          className="mt-10 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#0d1024] p-6 md:flex-row md:flex-wrap md:items-end"
          method="get"
          action="/realisations"
          role="search"
        >
          <div className="flex min-w-[200px] flex-1 flex-col gap-2">
            <label htmlFor="q" className="text-sm font-medium text-white/80">
              Recherche
            </label>
            <input
              id="q"
              name="q"
              type="search"
              placeholder="Nom du projet, mot-cle..."
              defaultValue={q}
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-cyan-200 focus:ring-2"
            />
          </div>
          <div className="flex min-w-[180px] flex-col gap-2">
            <label htmlFor="cat" className="text-sm font-medium text-white/80">
              Categorie
            </label>
            <select
              id="cat"
              name="cat"
              defaultValue={cat}
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-cyan-200 focus:ring-2"
            >
              <option value="">Toutes les categories</option>
              {(Object.keys(PROJECT_CATEGORY_LABELS) as ProjectCategory[]).map((key) => (
                <option key={key} value={key}>
                  {PROJECT_CATEGORY_LABELS[key]}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-3">
            <button
              type="submit"
              className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#081026] transition hover:bg-cyan-200"
            >
              Appliquer
            </button>
            <Link
              href="/realisations"
              className="inline-flex items-center rounded-full border border-white/20 px-5 py-3 text-sm text-white/80 transition hover:bg-white/5"
            >
              Reinitialiser
            </Link>
          </div>
        </form>

        <p className="mt-6 text-sm text-white/50" aria-live="polite">
          Resultats : {filtered.length} projet{filtered.length !== 1 ? "s" : ""}
        </p>

        {filtered.length === 0 ? (
          <p className="mt-10 rounded-xl border border-white/10 bg-white/5 p-8 text-center text-white/70">
            Aucun projet ne correspond a votre recherche. Essayez d&apos;autres mots-cles ou
            reinitialisez les filtres.
          </p>
        ) : (
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/realisations/${project.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#0d1024] transition hover:border-cyan-300/40 hover:shadow-[0_20px_50px_rgba(7,8,20,0.4)]"
                >
                  <div className="relative aspect-[3/2] overflow-hidden border-b border-white/10">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      className="object-cover transition group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.12em] text-cyan-100/80">
                      {PROJECT_CATEGORY_LABELS[project.category]} · {project.tag}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold group-hover:text-cyan-100">
                      {project.name}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm text-white/65">{project.description}</p>
                    <p className="mt-3 text-sm font-medium text-cyan-200">{project.result}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

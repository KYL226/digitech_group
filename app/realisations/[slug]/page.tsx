import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { projects } from "@/data/projects";
import { getSiteUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/realisations/${slug}`;

  if (!project) {
    return {
      title: "Realisation introuvable",
    };
  }

  const title = project.name;
  const ogImage = project.image.startsWith("http") ? project.image : `${siteUrl}${project.image}`;

  return {
    title,
    description: project.description,
    openGraph: {
      title: `${project.name} | DigiTech Agency`,
      description: project.description,
      url: pageUrl,
      siteName: "DigiTech Agency",
      locale: "fr_FR",
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 800,
          alt: project.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | DigiTech Agency`,
      description: project.description,
      images: [ogImage],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const siteUrl = getSiteUrl();

  if (!project) {
    notFound();
  }

  const pageUrl = `${siteUrl}/realisations/${project.slug}`;
  const ogImage = project.image.startsWith("http") ? project.image : `${siteUrl}${project.image}`;

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
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: pageUrl,
      },
    ],
  };

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    image: ogImage,
    url: pageUrl,
    creator: {
      "@type": "Organization",
      name: "DigiTech Agency",
      url: siteUrl,
    },
  };

  return (
    <main className="bg-[#070814] text-white">
      <JsonLd data={[breadcrumbJsonLd, projectJsonLd]} />
      <section className="mx-auto w-full max-w-5xl px-6 py-16">
        <Link
          href="/realisations"
          className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:bg-white/5"
        >
          Retour aux realisations
        </Link>

        <div className="mt-8 rounded-2xl border border-white/10 bg-[#0d1024] p-6">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-100/80">{project.tag}</p>
          <h1 className="mt-3 text-4xl font-semibold">{project.name}</h1>
          <p className="mt-4 text-white/75">{project.description}</p>
          <p className="mt-4 inline-flex rounded-lg bg-cyan-300/10 px-3 py-2 text-sm text-cyan-100">
            {project.result}
          </p>
        </div>

        <Image
          src={project.image}
          alt={`Illustration du projet ${project.name}`}
          width={1200}
          height={800}
          className="mt-8 h-auto w-full rounded-2xl border border-white/10 object-cover"
        />

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Details du projet</h2>
          <div className="mt-5 space-y-3">
            {project.content.map((paragraph) => (
              <p key={paragraph} className="text-white/75">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

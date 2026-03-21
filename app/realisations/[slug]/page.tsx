import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";

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

  if (!project) {
    return {
      title: "Realisation introuvable",
    };
  }

  return {
    title: `${project.name} | DigiTech Agency`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-[#070814] text-white">
      <section className="mx-auto w-full max-w-5xl px-6 py-16">
        <Link
          href="/#realisations"
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

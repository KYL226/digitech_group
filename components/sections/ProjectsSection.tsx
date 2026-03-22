"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { ShareProjectButtons } from "@/components/share/ShareProjectButtons";

type ProjectsSectionProps = {
  projects: Project[];
  /** URL absolue du site (pour les liens de partage) */
  siteUrl: string;
};

export function ProjectsSection({ projects, siteUrl }: ProjectsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (projects.length <= 1 || isPaused) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [projects.length, isPaused]);

  if (projects.length === 0) {
    return null;
  }

  const activeProject = projects[activeIndex];

  return (
    <section id="realisations" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-semibold">Realisations recentes</h2>
          <p className="mt-3 max-w-3xl text-white/70">
            Le carousel defile automatiquement. Clique sur les numeros pour naviguer manuellement.
          </p>
        </div>
        <Link
          href="/realisations"
          className="shrink-0 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/50 hover:bg-white/5"
        >
          Voir toutes les realisations
        </Link>
      </div>

      <div
        className="mt-8 rounded-2xl border border-white/10 bg-[#0d1024] p-6 shadow-[0_20px_50px_rgba(7,8,20,0.3)]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex flex-wrap gap-3">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={project.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`inline-flex size-10 items-center justify-center rounded-full border text-sm font-semibold transition ${
                  isActive
                    ? "border-cyan-300 bg-cyan-300 text-[#081026]"
                    : "border-white/20 bg-white/5 text-white/80 hover:border-cyan-300/50"
                }`}
                aria-label={`Voir la realisation ${index + 1}: ${project.name}`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>

        <article className="mt-6 grid gap-6 md:grid-cols-[1.3fr_1fr] md:items-start">
          <Image
            src={activeProject.image}
            alt={`Illustration du projet ${activeProject.name}`}
            width={1200}
            height={800}
            className="h-72 w-full rounded-xl border border-white/10 object-cover md:h-80"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-cyan-100/80">
              {activeProject.tag}
            </p>
            <h3 className="mt-3 text-2xl font-semibold">{activeProject.name}</h3>
            <p className="mt-4 text-white/75">{activeProject.description}</p>
            <p className="mt-4 rounded-lg bg-cyan-300/10 p-3 text-sm text-cyan-100">
              {activeProject.result}
            </p>
            <Link
              href={`/realisations/${activeProject.slug}`}
              className="mt-4 inline-flex rounded-full border border-cyan-300/60 bg-cyan-300/10 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
            >
              Voir la page detail
            </Link>
            <div className="mt-5 border-t border-white/10 pt-5">
              <ShareProjectButtons
                url={`${siteUrl}/realisations/${activeProject.slug}`}
                title={activeProject.name}
                compact
              />
            </div>
          </div>
        </article>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Link
            key={`${project.name}-label`}
            href={`/realisations/${project.slug}`}
            className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
              index === activeIndex
                ? "border-cyan-300/60 bg-cyan-300/10 text-cyan-100"
                : "border-white/10 bg-white/5 text-white/70 hover:border-white/30"
            }`}
          >
            {index + 1}. {project.name}
          </Link>
        ))}
      </div>
    </section>
  );
}

type Project = {
  name: string;
  tag: string;
  result: string;
};

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="realisations" className="mx-auto w-full max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-semibold">Realisations recentes</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-2xl border border-white/10 bg-[#0d1024] p-6 shadow-[0_20px_50px_rgba(7,8,20,0.3)]"
          >
            <p className="text-xs uppercase tracking-[0.14em] text-cyan-100/80">{project.tag}</p>
            <h3 className="mt-3 text-xl font-semibold">{project.name}</h3>
            <p className="mt-4 rounded-lg bg-cyan-300/10 p-3 text-sm text-cyan-100">
              {project.result}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

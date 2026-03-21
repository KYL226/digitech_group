export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(120,220,255,0.24),transparent_38%),radial-gradient(circle_at_80%_30%,rgba(68,96,255,0.22),transparent_35%)]" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-100">
            Agence web & branding
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Nous creons des experiences digitales qui convertissent.
          </h1>
          <p className="max-w-xl text-base text-white/75 sm:text-lg">
            De la strategie au developpement, nous transformons votre vision en un site performant,
            moderne et memorable.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#081026] transition hover:bg-cyan-200"
            >
              Obtenir un devis
            </a>
            <a
              href="#realisations"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-white/35 hover:bg-white/5"
            >
              Voir nos projets
            </a>
          </div>
        </div>

        <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="rounded-xl border border-white/10 bg-[#0d1024] p-5">
            <p className="text-sm text-white/60">Taux de conversion moyen</p>
            <p className="mt-2 text-3xl font-semibold text-cyan-200">+37%</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0d1024] p-5">
            <p className="text-sm text-white/60">Projets livres</p>
            <p className="mt-2 text-3xl font-semibold text-cyan-200">120+</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0d1024] p-5">
            <p className="text-sm text-white/60">Satisfaction client</p>
            <p className="mt-2 text-3xl font-semibold text-cyan-200">4.9/5</p>
          </div>
        </div>
      </div>
    </section>
  );
}

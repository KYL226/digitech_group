type Service = {
  title: string;
  description: string;
};

type ServicesSectionProps = {
  services: Service[];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold">Nos services</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Une offre complete pour concevoir, lancer et faire croitre votre presence digitale.
          </p>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:border-cyan-300/40"
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-3 text-white/70">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

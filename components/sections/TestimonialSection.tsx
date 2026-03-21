export function TestimonialSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="rounded-2xl border border-cyan-200/20 bg-gradient-to-r from-cyan-300/15 to-indigo-400/10 p-8">
        <p className="text-sm uppercase tracking-[0.18em] text-cyan-100/90">Temoignage</p>
        <blockquote className="mt-4 max-w-4xl text-xl leading-relaxed text-white/90">
          &quot;L&apos;equipe a transforme notre image digitale en quelques semaines. Le site est
          magnifique, rapide et surtout efficace commercialement.&quot;
        </blockquote>
        <p className="mt-5 text-sm text-white/70">Sarah M. - CEO, Nova Finance</p>
      </div>
    </section>
  );
}

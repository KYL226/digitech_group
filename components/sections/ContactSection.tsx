export function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="grid gap-8 rounded-2xl border border-white/10 bg-[#0d1024] p-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">Parlons de votre projet</h2>
          <p className="mt-4 text-white/70">
            Donnez-nous vos objectifs et nous revenons vers vous avec une proposition claire sous
            24h.
          </p>
        </div>
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Nom"
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/45 outline-none ring-cyan-200 focus:ring-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/45 outline-none ring-cyan-200 focus:ring-2"
          />
          <textarea
            placeholder="Votre besoin"
            rows={4}
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/45 outline-none ring-cyan-200 focus:ring-2"
          />
          <button
            type="button"
            className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#081026] transition hover:bg-cyan-200"
          >
            Envoyer la demande
          </button>
        </form>
      </div>
    </section>
  );
}

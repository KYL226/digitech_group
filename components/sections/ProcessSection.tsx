type ProcessSectionProps = {
  steps: string[];
};

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section id="process" className="mx-auto w-full max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-semibold">Notre process</h2>
      <div className="mt-8 grid gap-4">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
          >
            <span className="inline-flex size-8 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-[#081026]">
              {index + 1}
            </span>
            <p className="text-white/85">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

type Faq = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  faqs: Faq[];
};

export function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-semibold">Questions frequentes</h2>
      <div className="mt-8 grid gap-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <summary className="cursor-pointer list-none text-base font-medium">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm text-white/70">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

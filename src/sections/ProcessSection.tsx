import { Reveal } from "../components/Reveal";

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "Research, interviews, and digging into the real problem behind the brief.",
  },
  {
    n: "02",
    title: "Explore",
    body: "Wide ideation: sketches, references, and cheap experiments before pixels settle.",
  },
  {
    n: "03",
    title: "Design",
    body: "High-fidelity interfaces and systems, art-directed down to the last decimal.",
  },
  {
    n: "04",
    title: "Build",
    body: "Production code with motion baked in — not bolted on at the end.",
  },
  {
    n: "05",
    title: "Refine",
    body: "Testing and polishing micro-interactions nobody notices but everybody feels.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <Reveal>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-soft">
          Process
        </p>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-medium tracking-tight sm:text-5xl">
          My design process, filed step by step.
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
        {steps.map((step, i) => (
          <Reveal key={step.n} delay={i * 0.07}>
            <div className="group border-t border-ink/15 pt-6">
              <span className="font-display text-lg text-ink/40 transition-colors group-hover:text-ink">
                {step.n}
              </span>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                {step.title}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

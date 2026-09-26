import { Reveal } from "../components/Reveal";

const services = [
  {
    n: "01",
    name: "Product design",
    detail: "End-to-end interface design, from first sketch to shipped system.",
  },
  {
    n: "02",
    name: "Web development",
    detail: "Fast, accessible frontends built with React and TypeScript.",
  },
  {
    n: "03",
    name: "UI / UX",
    detail: "Research, flows, and prototypes that de-risk the big decisions.",
  },
  {
    n: "04",
    name: "Frontend development",
    detail: "Design-accurate builds with motion and detail intact.",
  },
  {
    n: "05",
    name: "E-commerce",
    detail: "Storefronts that feel editorial and convert quietly.",
  },
  {
    n: "06",
    name: "Creative development",
    detail: "Interactive moments, 3D touches, and campaigns with personality.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-soft">
              Services
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
              What I can do for you
            </h2>
          </div>
          <p className="max-w-xs pb-1 text-[13px] leading-relaxed text-ink-soft">
            Engagements range from a focused sprint to a long-term embed with
            your team.
          </p>
        </div>
      </Reveal>
      <div className="mt-14 border-t border-line">
        {services.map((service, i) => (
          <Reveal key={service.n} delay={i * 0.04}>
            <div className="group flex items-baseline justify-between gap-6 border-b border-line px-2 py-6 transition-colors duration-300 hover:bg-cream-deep/70">
              <div className="flex items-baseline gap-5">
                <span className="text-[11px] font-semibold text-ink/40">
                  {service.n}
                </span>
                <h3 className="font-display text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-1.5 sm:text-3xl">
                  {service.name}
                </h3>
              </div>
              <div className="flex items-baseline gap-4">
                <p className="hidden max-w-xs text-right text-[13px] leading-relaxed text-ink-soft sm:block">
                  {service.detail}
                </p>
                <span
                  aria-hidden="true"
                  className="text-lg opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                >
                  ↗
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

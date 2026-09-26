import { Reveal } from "../components/Reveal";
import { site } from "../data/site";

const facts = [
  { label: "Location", value: site.location },
  { label: "Experience", value: "8+ years, product & web" },
  { label: "Focus", value: "Interfaces, systems, motion" },
  { label: "Currently", value: "Freelance, select projects" },
];

export function AboutSection() {
  return (
    <section id="about" className="border-t border-line bg-cream-deep/50">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-28 sm:px-8 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-soft">
            About
          </p>
          <div className="relative mt-10 w-56 -rotate-3 rounded-lg bg-[#dbe4eb] p-5 shadow-[0_24px_50px_-24px_rgba(25,22,19,0.45)] transition-transform duration-500 hover:rotate-0">
            <div className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 rotate-2 bg-cream/80 shadow-sm" />
            <p className="font-display text-5xl font-medium tracking-tight">
              {site.name}
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-ink/60">
              {site.role}
            </p>
            <div className="mt-6 space-y-1.5">
              <div className="h-px w-full bg-ink/15" />
              <div className="h-px w-4/5 bg-ink/15" />
              <div className="h-px w-3/5 bg-ink/15" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl font-medium leading-snug tracking-tight sm:text-4xl">
            I keep every project like a file worth reopening: researched,
            crafted, and finished with care.
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft">
            I&rsquo;m a product designer and creative developer who likes the
            tactile side of the web — interfaces that feel handled, not
            generated. For the past eight years I&rsquo;ve shipped banking
            tools, health platforms, and playful marketing sites for studios
            and startups across Europe.
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
            This site is my archive box: a small, honest collection of work
            I&rsquo;m still proud to open. Each file holds the problem, the
            process, and the details that made it ship.
          </p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.label} className="border-t border-ink/15 pt-4">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

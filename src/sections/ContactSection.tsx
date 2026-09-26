import { Reveal } from "../components/Reveal";
import { site } from "../data/site";

export function ContactSection() {
  return (
    <section id="contact" className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 py-32 text-center sm:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/50">
            Contact
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.04] tracking-tight sm:text-7xl">
            Let&rsquo;s make something{" "}
            <em className="italic text-cream/75">worth opening.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <a
            href={`mailto:${site.email}`}
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 text-sm font-semibold text-ink transition-transform duration-300 hover:-translate-y-1"
          >
            {site.email}
            <span aria-hidden="true">↗</span>
          </a>
          <div className="mt-10 flex justify-center gap-8">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-cream/55 transition-colors hover:text-cream"
              >
                {social.label}
              </a>
            ))}
          </div>
          <p className="mt-12 text-[11px] uppercase tracking-[0.2em] text-cream/40">
            {site.availability}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

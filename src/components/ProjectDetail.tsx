import { motion } from "motion/react";
import { useEffect } from "react";
import { Reveal } from "./Reveal";
import { projects } from "../data/projects";
import { projectHref } from "../hooks/useHashRoute";

type Props = {
  slug: string;
};

export function ProjectDetail({ slug }: Props) {
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  useEffect(() => {
    if (!project) window.location.hash = "#/";
  }, [project]);

  if (!project) return null;

  const next = projects[(index + 1) % projects.length];
  const chapters = [
    { label: "Overview", body: project.overview },
    { label: "Challenge", body: project.challenge },
    { label: "Process", body: project.approach },
    { label: "Solution", body: project.solution },
    { label: "Outcome", body: project.outcome },
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-5xl px-5 pb-28 pt-28 sm:px-8"
    >
      <a
        href="#/"
        className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-ink"
      >
        <span aria-hidden="true">←</span> Back to archive
      </a>

      <div className="mt-10 grid gap-6 border-y border-line py-6 sm:grid-cols-3">
        {[
          { label: "Category", value: project.category },
          { label: "Year", value: project.year },
          { label: "Role", value: project.role },
        ].map((meta) => (
          <div key={meta.label}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
              {meta.label}
            </p>
            <p className="mt-1.5 text-sm font-medium">{meta.value}</p>
          </div>
        ))}
      </div>

      <motion.h1
        className="mt-10 font-display text-6xl font-medium tracking-tight sm:text-7xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {project.title}
      </motion.h1>
      <motion.p
        className="mt-4 font-display text-xl italic text-ink-soft"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.7 }}
      >
        {project.description}
      </motion.p>

      {project.liveUrl && (
        <motion.div
          className="mt-7 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink/25 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-ink hover:text-cream"
          >
            Live site ↗
          </a>
        </motion.div>
      )}

      <motion.div
        className="relative mt-12 overflow-hidden rounded-3xl p-10 sm:p-16"
        style={{ backgroundColor: project.color }}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-4 font-display text-[16rem] leading-none font-medium"
          style={{ color: project.colorDeep, opacity: 0.16 }}
        >
          {project.number}
        </span>
        <div className="relative w-full max-w-sm -rotate-2 rounded-xl bg-cream p-6 shadow-[0_30px_60px_-25px_rgba(25,22,19,0.5)] transition-transform duration-500 hover:rotate-0">
          <div className="flex items-baseline justify-between text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/50">
            <span>Project / {project.number}</span>
            <span>{project.year}</span>
          </div>
          <p className="mt-4 font-display text-3xl font-medium tracking-tight">
            {project.title}
          </p>
          <div className="mt-5 space-y-1.5">
            <div className="h-px w-full bg-ink/15" />
            <div className="h-px w-4/5 bg-ink/15" />
            <div className="h-px w-2/3 bg-ink/15" />
          </div>
          <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/60">
            Open file ↗
          </p>
        </div>
        <p className="relative mt-10 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/50">
          {project.category} — {project.year}
        </p>
      </motion.div>

      <div className="mt-16">
        {chapters.map((chapter, i) => (
          <Reveal key={chapter.label} delay={i * 0.03}>
            <div className="grid gap-4 border-t border-line py-10 md:grid-cols-[180px_1fr] md:gap-10">
              <h2 className="self-start text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-soft md:sticky md:top-24">
                {chapter.label}
              </h2>
              <p className="max-w-2xl text-[16px] leading-relaxed text-ink/80">
                {chapter.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="border-t border-line pt-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            Tools & technologies
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-ink/20 px-4 py-1.5 text-xs font-medium text-ink/70"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal>
        <a
          href={projectHref(next.slug)}
          className="group mt-16 flex items-center justify-between gap-6 rounded-2xl border border-ink/10 px-7 py-7 transition-colors sm:px-9"
          style={{ backgroundColor: next.color }}
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/50">
              Next file
            </p>
            <p className="mt-2 font-display text-3xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-1.5 sm:text-4xl">
              {next.title}
            </p>
          </div>
          <span
            aria-hidden="true"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-ink group-hover:text-cream"
          >
            ↗
          </span>
        </a>
      </Reveal>
    </motion.main>
  );
}

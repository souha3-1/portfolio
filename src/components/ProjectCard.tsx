import { motion } from "motion/react";
import type { Project } from "../data/projects";
import { projectHref } from "../hooks/useHashRoute";

type Props = {
  project: Project;
  dimmed: boolean;
  onActivate: (active: boolean) => void;
  onOpen: () => void;
};

export function ProjectCard({ project, dimmed, onActivate, onOpen }: Props) {
  return (
    <motion.li
      animate={{ opacity: dimmed ? 0.55 : 1, y: dimmed ? 2 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.a
        href={projectHref(project.slug)}
        onMouseEnter={() => onActivate(true)}
        onMouseLeave={() => onActivate(false)}
        onFocus={() => onActivate(true)}
        onBlur={() => onActivate(false)}
        onClick={(e) => {
          e.preventDefault();
          onOpen();
        }}
        whileHover={{ y: -5, scale: 1.012 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-ink/10 px-6 py-6 shadow-[0_1px_0_rgba(25,22,19,0.06)] transition-shadow hover:shadow-[0_18px_40px_-18px_rgba(25,22,19,0.35)] sm:gap-8 sm:px-8"
        style={{ backgroundColor: project.color }}
      >
        <span className="font-display text-lg text-ink/45 transition-colors group-hover:text-ink/70 sm:text-xl">
          {project.number}
        </span>

        <span className="min-w-0 flex-1">
          <span className="block font-display text-xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
            {project.title}
          </span>
          <span className="mt-1.5 block max-w-md text-[13px] leading-relaxed text-ink/60">
            {project.description}
          </span>
        </span>

        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/25 text-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-ink/60 group-hover:bg-ink group-hover:text-cream"
        >
          ↗
        </span>
      </motion.a>
    </motion.li>
  );
}

import { motion } from "motion/react";
import type { Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { VOLUME_SIZE, volumeCount } from "./box";

type Props = {
  projects: Project[];
  active: number | null;
  onActivate: (index: number | null) => void;
  onOpen: (index: number) => void;
};

export function ProjectList({ projects, active, onActivate, onOpen }: Props) {
  const volumes = volumeCount(projects.length);
  return (
    <ol className="flex flex-col gap-4">
      {projects.map((project, i) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.25 + i * 0.09,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {volumes > 1 && i % VOLUME_SIZE === 0 && (
            <p
              className={`mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-soft ${i > 0 ? "mt-6" : ""}`}
            >
              Vol. {i / VOLUME_SIZE + 1}
            </p>
          )}
          <ProjectCard
            project={project}
            dimmed={active !== null && active !== i}
            onActivate={(on) => onActivate(on ? i : null)}
            onOpen={() => onOpen(i)}
          />
        </motion.div>
      ))}
    </ol>
  );
}

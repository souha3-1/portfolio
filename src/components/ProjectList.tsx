import { motion } from "motion/react";
import type { Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

type Props = {
  projects: Project[];
  active: number | null;
  onActivate: (index: number | null) => void;
  onOpen: (index: number) => void;
};

export function ProjectList({ projects, active, onActivate, onOpen }: Props) {
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

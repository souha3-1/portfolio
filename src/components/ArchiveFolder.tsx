import { motion } from "motion/react";
import type { Project } from "../data/projects";
import { BOX } from "./box";

export const FOLDER_WIDTH = 280;

type Props = {
  project: Project;
  index: number;
  depth: number;
  height: number;
  isActive: boolean;
  isOpened: boolean;
  onHover: (index: number | null) => void;
  onOpen: (index: number) => void;
};

export function ArchiveFolder({
  project,
  index,
  depth,
  height,
  isActive,
  isOpened,
  onHover,
  onOpen,
}: Props) {
  return (
    <div
      className="absolute"
      style={{
        left: (BOX.w - FOLDER_WIDTH) / 2,
        bottom: 26,
        width: FOLDER_WIDTH,
        height,
        transform: `translateZ(${depth}px)`,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.button
        type="button"
        aria-label={`Open project ${project.number}: ${project.title}`}
        data-cursor="open"
        onPointerEnter={() => onHover(index)}
        onPointerLeave={() => onHover(null)}
        onFocus={() => onHover(index)}
        onBlur={() => onHover(null)}
        onClick={() => onOpen(index)}
        className="absolute inset-0 block appearance-none p-0 text-left"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          y: isOpened ? -270 : isActive ? -38 : 0,
          z: isOpened ? 150 : isActive ? 95 : 0,
          rotate: isOpened ? -5 : isActive ? -1.5 : 0,
        }}
        transition={{ type: "spring", stiffness: 110, damping: 15 }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[10px]"
          style={{
            transform: "translateZ(-7px)",
            backgroundColor: project.colorDeep,
            opacity: 0.4,
          }}
        />
        <div
          className="absolute -top-6 flex h-7 items-end rounded-t-md border border-b-0 border-ink/15 px-2.5 pb-1 text-[8px] font-semibold tracking-[0.14em] text-ink/70"
          style={{ left: 12 + index * 16, width: 108, backgroundColor: project.color }}
        >
          {project.number} / {project.shortTitle}
        </div>
        <div
          className="absolute inset-0 flex flex-col rounded-[10px] border border-ink/15 p-5"
          style={{
            backgroundColor: project.color,
            boxShadow: "0 26px 44px -22px rgba(12,18,60,0.5)",
          }}
        >
          <div className="flex items-baseline justify-between text-[8px] font-semibold uppercase tracking-[0.18em] text-ink/50">
            <span>Project / {project.number}</span>
            <span>{project.year}</span>
          </div>
          <p className="mt-5 font-display text-[26px] leading-[1.05] font-medium tracking-tight text-ink">
            {project.title}
          </p>
          <div className="flex-1" />
          <div className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/60">
            Open file <span aria-hidden="true">↗</span>
          </div>
        </div>
      </motion.button>
    </div>
  );
}

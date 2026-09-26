import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArchiveBox } from "../components/ArchiveBox";
import { ProjectList } from "../components/ProjectList";
import { VOLUME_SIZE, volumeCount, volumeOf } from "../components/box";
import { projects } from "../data/projects";
import { projectHref } from "../hooks/useHashRoute";

export function WorkSection() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const [opened, setOpened] = useState<number | null>(null);
  const [volume, setVolume] = useState(0);
  const timer = useRef<number | null>(null);

  const volumes = volumeCount(projects.length);
  const offset = volume * VOLUME_SIZE;
  const volumeProjects = projects.slice(offset, offset + VOLUME_SIZE);

  const activate = (index: number | null) => {
    setActive(index);
    if (index !== null) setVolume(volumeOf(index));
  };

  useEffect(() => {
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, []);

  const openProject = (index: number) => {
    if (opened !== null) return;
    setActive(index);
    setVolume(volumeOf(index));
    setOpened(index);
    timer.current = window.setTimeout(
      () => {
        window.location.hash = projectHref(projects[index].slug);
      },
      reduce ? 0 : 650,
    );
  };

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 pt-32 sm:px-8 sm:pt-36">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <motion.p
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-soft"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Selected work — 2024 / 2026
          </motion.p>
          <motion.h1
            className="mt-4 font-display text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Projects I&rsquo;ve worked on
          </motion.h1>
          <motion.p
            className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            A collection of thoughtful work, problem-solving, and details made
            to last.
          </motion.p>
        </div>
        <motion.p
          className="pb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-soft"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          {String(projects.length).padStart(2, "0")} files —{" "}
          {volumes > 1 ? `vol. ${volume + 1} of ${volumes}` : "archive open"}
        </motion.p>
      </div>

      <div className="mt-14 grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
        <ProjectList
          projects={projects}
          active={active}
          onActivate={activate}
          onOpen={openProject}
        />
        <div className="mt-28 pb-10 lg:mt-0 lg:pb-0">
          <ArchiveBox
            projects={volumeProjects}
            offset={offset}
            active={active}
            opened={opened}
            onHover={activate}
            onOpen={openProject}
          />
          {volumes > 1 && (
            <div
              role="group"
              aria-label="Archive volumes"
              className="mt-8 flex justify-center gap-2"
            >
              {Array.from({ length: volumes }, (_, v) => (
                <button
                  key={v}
                  type="button"
                  aria-current={volume === v}
                  onClick={() => {
                    setVolume(v);
                    setActive(null);
                  }}
                  className={`rounded-full border px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors ${
                    volume === v
                      ? "border-ink bg-ink text-cream"
                      : "border-ink/15 text-ink-soft hover:border-ink/40 hover:text-ink"
                  }`}
                >
                  Vol. {v + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

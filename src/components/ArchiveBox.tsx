import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import type { Project } from "../data/projects";
import { ArchiveFolder } from "./ArchiveFolder";
import { BOX, folderDepth, folderHeight } from "./box";

type Props = {
  projects: Project[];
  offset: number;
  active: number | null;
  opened: number | null;
  onHover: (index: number | null) => void;
  onOpen: (index: number) => void;
};

export function ArchiveBox({ projects, offset, active, opened, onHover, onOpen }: Props) {
  const stageRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 16 });
  const sy = useSpring(my, { stiffness: 50, damping: 16 });

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "end start"],
  });
  const scrollTilt = useTransform(scrollYProgress, [0, 1], [10, -8]);
  const scrollLift = useTransform(scrollYProgress, [0, 1], [26, -14]);

  const rotateY = useTransform(
    [sx, scrollTilt],
    ([tilt, scroll]) => (reduce ? -24 : -24 + (tilt as number) * 7 + (scroll as number)),
  );
  const rotateX = useTransform(
    [sy, scrollTilt],
    ([tilt, scroll]) => (reduce ? -14 : -14 + (tilt as number) * 5 + (scroll as number) * 0.35),
  );

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={stageRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="relative mx-auto w-[340px] scale-[0.78] select-none sm:scale-90 lg:scale-100"
      style={{ perspective: 1500 }}
      aria-label={`Archive box containing project folders ${offset + 1} to ${offset + projects.length}`}
    >
      <div
        aria-hidden="true"
        className="absolute -bottom-10 left-1/2 h-12 w-[78%] -translate-x-1/2 rounded-[50%] bg-ink/25 blur-2xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.82, y: 70 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="relative mx-auto"
          style={{
            width: BOX.w,
            height: BOX.h,
            rotateX,
            rotateY,
            y: reduce ? 0 : scrollLift,
            transformStyle: "preserve-3d",
          }}
        >
        {/* back panel */}
        <div
          className="absolute inset-0 rounded-md"
          style={{ transform: `translateZ(${-BOX.d / 2}px)`, backgroundColor: "#16298c" }}
        />
        {/* inner back wall */}
        <div
          className="absolute rounded-md"
          style={{
            width: BOX.w - 18,
            height: BOX.h - 14,
            left: 9,
            top: 4,
            transform: `translateZ(${-BOX.d / 2 + 8}px)`,
            backgroundColor: "#3f5fe8",
          }}
        />
        {/* inner floor */}
        <div
          className="absolute"
          style={{
            width: BOX.w - 10,
            height: BOX.d - 10,
            left: 5,
            top: (BOX.h - (BOX.d - 10)) / 2,
            transform: `rotateX(-90deg) translateZ(${BOX.h / 2 - 6}px)`,
            backgroundColor: "#1a2f9e",
          }}
        />
        {/* left + right sides */}
        <div
          className="absolute rounded-md"
          style={{
            width: BOX.d,
            height: BOX.h,
            left: (BOX.w - BOX.d) / 2,
            transform: `rotateY(-90deg) translateZ(${BOX.w / 2}px)`,
            backgroundColor: "#1d36ae",
          }}
        />
        <div
          className="absolute rounded-md"
          style={{
            width: BOX.d,
            height: BOX.h,
            left: (BOX.w - BOX.d) / 2,
            transform: `rotateY(90deg) translateZ(${BOX.w / 2}px)`,
            backgroundColor: "#2039b8",
          }}
        />
        {/* bottom */}
        <div
          className="absolute"
          style={{
            width: BOX.w,
            height: BOX.d,
            top: (BOX.h - BOX.d) / 2,
            transform: `rotateX(-90deg) translateZ(${BOX.h / 2}px)`,
            backgroundColor: "#12277f",
          }}
        />

        {/* folders, back to front; keyed by volume so switching crossfades */}
        <motion.div
          key={offset}
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {projects
            .map((project, i) => ({ project, i }))
            .reverse()
            .map(({ project, i }) => (
              <ArchiveFolder
                key={project.slug}
                project={project}
                index={offset + i}
                slot={i}
                depth={folderDepth(i, projects.length)}
                height={folderHeight(i)}
                isActive={active === offset + i}
                isOpened={opened === offset + i}
                onHover={onHover}
                onOpen={onOpen}
              />
            ))}
        </motion.div>

        {/* front panel */}
        <div
          className="absolute inset-0 rounded-md"
          style={{
            transform: `translateZ(${BOX.d / 2}px)`,
            background: "linear-gradient(180deg, #3558e8 0%, #2443c9 100%)",
            boxShadow: "inset 0 2px 0 rgba(255,255,255,0.28)",
          }}
        >
          <div className="absolute left-1/2 top-6 h-7 w-24 -translate-x-1/2 rounded-md bg-[#12277f] shadow-[inset_0_2px_5px_rgba(0,0,0,0.45)]" />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 -rotate-2 rounded-[3px] bg-cream px-4 py-2 text-[10px] font-semibold tracking-[0.24em] text-ink shadow-md">
            MY WORKS
          </div>
        </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

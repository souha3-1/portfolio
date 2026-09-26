import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

const INTERACTIVE = "a, button, [role='button'], input, textarea, select, label";
const RADIUS = 90;
const PULL = 0.45;

type Magnet = { cx: number; cy: number; reach: number };

export function CustomCursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hot, setHot] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 320, damping: 26, mass: 0.5 });
  const dotY = useSpring(y, { stiffness: 320, damping: 26, mass: 0.5 });
  const ringX = useSpring(x, { stiffness: 110, damping: 18, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 110, damping: 18, mass: 0.6 });

  const pointer = useRef({ x: -100, y: -100 });
  const magnets = useRef<Magnet[]>([]);
  const hotRef = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");

    const refresh = () => {
      magnets.current = [...document.querySelectorAll(INTERACTIVE)].map((el) => {
        const r = el.getBoundingClientRect();
        return {
          cx: r.left + r.width / 2,
          cy: r.top + r.height / 2,
          reach: RADIUS + Math.min(r.width, r.height) / 2,
        };
      });
    };
    refresh();
    const interval = window.setInterval(refresh, 900);

    let raf = 0;
    const loop = () => {
      const p = pointer.current;
      let tx = p.x;
      let ty = p.y;
      let best = Infinity;
      let target: Magnet | null = null;
      for (const m of magnets.current) {
        const d = Math.hypot(m.cx - p.x, m.cy - p.y);
        if (d < m.reach && d < best) {
          best = d;
          target = m;
        }
      }
      let pulled = false;
      if (target) {
        const pull = (1 - best / target.reach) * PULL;
        tx = p.x + (target.cx - p.x) * pull;
        ty = p.y + (target.cy - p.y) * pull;
        pulled = pull > 0.1;
      }
      if (pulled !== hotRef.current) {
        hotRef.current = pulled;
        setHot(pulled);
      }
      x.set(tx);
      y.set(ty);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const move = (e: PointerEvent) => {
      pointer.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("scroll", refresh, { passive: true });
    window.addEventListener("resize", refresh);
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.clearInterval(interval);
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", refresh);
      window.removeEventListener("resize", refresh);
      document.documentElement.removeEventListener("pointerleave", leave);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[70] mix-blend-difference">
      <motion.div
        className="fixed left-0 top-0"
        style={{ x: ringX, y: ringY }}
        animate={{ opacity: visible ? 1 : 0, scale: hot ? 0.7 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      >
        <span className="block -ml-3.5 -mt-3.5 h-7 w-7 rounded-full border border-white/60" />
      </motion.div>
      <motion.div
        className="fixed left-0 top-0"
        style={{ x: dotX, y: dotY }}
        animate={{ opacity: visible ? 1 : 0, scale: hot ? 1.6 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <span className="block -ml-1 -mt-1 h-2 w-2 rounded-full bg-white" />
      </motion.div>
    </div>
  );
}

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const reduce = useReducedMotion();
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const onChange = () => setFine(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (!fine || reduce) return null;
  return <CursorLayer />;
}

type Variant = "default" | "hover" | "open";

function CursorLayer() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 600, damping: 40 });
  const dotY = useSpring(y, { stiffness: 600, damping: 40 });
  const ringX = useSpring(x, { stiffness: 150, damping: 22 });
  const ringY = useSpring(y, { stiffness: 150, damping: 22 });

  const [variant, setVariant] = useState<Variant>("default");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const tagged = target?.closest?.("[data-cursor]") as HTMLElement | null;
      if (tagged?.dataset.cursor === "open") setVariant("open");
      else if (target?.closest?.("a, button")) setVariant("hover");
      else setVariant("default");
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.documentElement.classList.add("custom-cursor");
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, [x, y]);

  const ringStyle =
    variant === "open"
      ? {
          width: 84,
          height: 84,
          backgroundColor: "#191613",
          borderColor: "#191613",
          opacity: visible ? 1 : 0,
        }
      : variant === "hover"
        ? {
            width: 52,
            height: 52,
            backgroundColor: "rgba(25,22,19,0)",
            borderColor: "rgba(25,22,19,0.55)",
            opacity: visible ? 1 : 0,
          }
        : {
            width: 34,
            height: 34,
            backgroundColor: "rgba(25,22,19,0)",
            borderColor: "rgba(25,22,19,0.4)",
            opacity: visible ? 1 : 0,
          };

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[70] rounded-full bg-ink"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: 7, height: 7, opacity: visible ? 1 : 0 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[70] flex items-center justify-center rounded-full border"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={ringStyle}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
      >
        {variant === "open" && (
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream">
            Open
          </span>
        )}
      </motion.div>
    </>
  );
}

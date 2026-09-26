import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { site } from "../data/site";

const links = [
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
];

type Props = {
  onNavigate: (sectionId: string) => void;
};

export function Navbar({ onNavigate }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-cream/85 backdrop-blur-md"
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a
            href="#/"
            className="font-display text-xl font-medium tracking-tight"
            onClick={(e) => {
              e.preventDefault();
              go("top");
            }}
          >
            {site.name}
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => go(link.id)}
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => go("contact")}
              className="group flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-cream transition-transform hover:-translate-y-0.5"
            >
              Work with me
              <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto bg-cream px-6 pt-10 md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {[...links, { id: "contact", label: "Contact" }].map((link, i) => (
              <motion.button
                key={link.id}
                type="button"
                onClick={() => go(link.id)}
                className="border-b border-line py-5 text-left font-display text-3xl font-medium"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.4 }}
              >
                {link.label}
              </motion.button>
            ))}
            <p className="mt-8 pb-10 text-[11px] uppercase tracking-[0.18em] text-ink-soft">
              {site.availability}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

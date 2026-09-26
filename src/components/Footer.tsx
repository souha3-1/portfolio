import { site } from "../data/site";

type Props = {
  onTop: () => void;
};

export function Footer({ onTop }: Props) {
  return (
    <footer className="border-t border-cream/10 bg-ink text-cream/50">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 sm:px-8">
        <p className="text-[11px] tracking-[0.14em]">
          © 2026 {site.name} — all files archived with care.
        </p>
        <button
          type="button"
          onClick={onTop}
          className="text-[11px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-cream"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

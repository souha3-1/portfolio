const items = [
  "Product design",
  "Creative development",
  "UI / UX",
  "Design systems",
  "Web experiences",
  "Prototyping",
  "Motion design",
];

export function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="mt-28 overflow-hidden border-y border-line bg-cream-deep/60 py-4"
    >
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-[11px] font-medium uppercase tracking-[0.24em] text-ink-soft"
          >
            {item}
            <span className="text-ink/30">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}

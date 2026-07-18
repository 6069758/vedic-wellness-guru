/**
 * Decorative dividers used throughout the Keynote layout — a centred hairline
 * with a small diamond/lotus motif, and the recurring gold "section dots".
 */

export function DividerOrnament({
  className = "",
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "cream";
}) {
  const c = tone === "gold" ? "#C8912E" : "#E6D9BC";
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden>
      <span className="h-px w-16 sm:w-24" style={{ background: `linear-gradient(90deg,transparent,${c})` }} />
      <svg width="46" height="14" viewBox="0 0 46 14" fill="none">
        <path d="M23 1l4 6-4 6-4-6 4-6z" stroke={c} strokeWidth="1.1" />
        <circle cx="9" cy="7" r="1.6" fill={c} />
        <circle cx="37" cy="7" r="1.6" fill={c} />
        <path d="M13 7h5M28 7h5" stroke={c} strokeWidth="1" />
      </svg>
      <span className="h-px w-16 sm:w-24" style={{ background: `linear-gradient(270deg,transparent,${c})` }} />
    </div>
  );
}

export function SectionDots({ active = 3, total = 7 }: { active?: number; total?: number }) {
  return (
    <div className="flex items-center justify-center gap-2.5 py-8" aria-hidden>
      {Array.from({ length: total }).map((_, i) => {
        const dist = Math.abs(i - active);
        const size = dist === 0 ? 12 : dist === 1 ? 9 : 6;
        const opacity = dist === 0 ? 1 : dist === 1 ? 0.7 : 0.4;
        return (
          <span
            key={i}
            className="rounded-full bg-gold"
            style={{ width: size, height: size, opacity }}
          />
        );
      })}
    </div>
  );
}

export function CornerFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {(["tl", "tr", "bl", "br"] as const).map((pos) => (
        <span
          key={pos}
          aria-hidden
          className={`pointer-events-none absolute h-8 w-8 border-gold/60 ${
            pos === "tl" ? "left-0 top-0 border-l border-t" :
            pos === "tr" ? "right-0 top-0 border-r border-t" :
            pos === "bl" ? "bottom-0 left-0 border-b border-l" :
            "bottom-0 right-0 border-b border-r"
          }`}
        />
      ))}
      {children}
    </div>
  );
}

import Image from "next/image";

/**
 * Labelled asset slot. Renders a real image if `src` is provided, otherwise a
 * tasteful gold-on-parchment placeholder that names the exact file to drop in
 * (public/images/<file>) and the recommended dimensions.
 */
export default function Placeholder({
  file,
  label,
  ratio = "4 / 3",
  src,
  rounded = "rounded-2xl",
  className = "",
  imgClassName = "object-cover",
  dark = false,
}: {
  file: string;
  label?: string;
  ratio?: string;
  src?: string;
  rounded?: string;
  className?: string;
  imgClassName?: string;
  dark?: boolean;
}) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden ${rounded} ${className}`}
        style={{ aspectRatio: ratio }}
      >
        <Image src={src} alt={label ?? file} fill sizes="100vw" className={imgClassName} />
      </div>
    );
  }
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${rounded} ${className}`}
      style={{
        aspectRatio: ratio,
        background: dark
          ? "repeating-linear-gradient(45deg,#1c150c,#1c150c 12px,#221a0f 12px,#221a0f 24px)"
          : "repeating-linear-gradient(45deg,#efe6d2,#efe6d2 12px,#f3ecda 12px,#f3ecda 24px)",
        border: "1px dashed rgba(200,145,46,0.55)",
      }}
    >
      <div className="px-4 text-center">
        <div className="mb-1 text-[11px] font-semibold uppercase tracking-kicker text-gold">
          {label ?? "Image"}
        </div>
        <div className={`font-mono text-[11px] ${dark ? "text-cream/60" : "text-ink-soft/70"}`}>
          public/images/{file}
        </div>
      </div>
    </div>
  );
}

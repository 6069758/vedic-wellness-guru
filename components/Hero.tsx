import Image from "next/image";
import { ChevronDown } from "lucide-react";

// Deterministic particle field (no Math.random → no hydration mismatch)
const PARTICLES = Array.from({ length: 22 }).map((_, i) => {
  const left = (i * 37) % 100;
  const top = (i * 53 + 11) % 100;
  const size = 2 + ((i * 7) % 4);
  const dur = 6 + ((i * 13) % 9);
  const delay = (i % 8) * 0.6;
  return { left, top, size, dur, delay, id: i };
});

/**
 * HERO scene (Slide 1) inside the pinned cinematic stage.
 * Curved framed panel (rounded, small pale-white margin) using the provided
 * astrologer image (guru-golden.png). Cinzel headings, Lato body, Gincu name.
 * All `hero-*` / `.reveal-line` classes are hooks for the (unchanged) load timeline.
 */
export default function Hero() {
  return (
    <div className="scene-hero absolute inset-0 z-20 h-full w-full bg-cream p-2 sm:p-3">
      {/* Curved frame */}
      <div className="relative h-full w-full overflow-hidden rounded-[26px] bg-[#241708] shadow-[0_30px_90px_-45px_rgba(80,55,15,0.6)]">
        {/* Provided background image — astrologer slightly lower & enlarged */}
        <div className="hero-bg absolute inset-0 will-change-transform">
          <Image
            src="/images/guru-golden.png"
            alt="Gaurav Vadehra — astrologer"
            fill
            priority
            sizes="100vw"
            className="scale-[1.06] object-cover object-[center_22%]"
          />
        </div>

        {/* Right-side scrim (keeps the astrologer vivid, card legible) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/60 via-black/12 to-transparent" />

        {/* Subtle ambient glow + depth vignette (matches the reference) */}
        <div
          className="hero-glow pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(45% 55% at 32% 44%, rgba(255,205,130,0.14), transparent 72%), radial-gradient(120% 120% at 50% 50%, transparent 55%, rgba(20,12,4,0.35) 100%)",
          }}
        />

        {/* Floating particles */}
        <div className="hero-particles pointer-events-none absolute inset-0">
          {PARTICLES.map((p) => (
            <span
              key={p.id}
              className="particle absolute rounded-full bg-amber-200/70"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: p.size,
                height: p.size,
                boxShadow: "0 0 8px 2px rgba(255,210,140,0.5)",
              }}
              data-dur={p.dur}
              data-delay={p.delay}
            />
          ))}
        </div>

        {/* Glossy diagonal glass sheen — sweeps once on load */}
        <div className="hero-glass" aria-hidden />

        {/* Handwritten signature — the original PNG (exact two-line layout,
            "Astro" centred below "Shree Gaurav"). Written on left → right. */}
        <div className="hero-name pointer-events-none absolute bottom-[14%] left-[3%] w-[34%] max-w-[360px]">
          <Image
            src="/images/signature.png"
            alt="Shree Gaurav Astro"
            width={831}
            height={433}
            priority
            className="h-auto w-full drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Copy card (right) — larger, premium dark glass, vertically centred */}
        <div className="relative z-30 grid h-full grid-cols-1 items-center lg:grid-cols-[48%_52%]">
          <div className="hidden lg:block" />
          <div className="flex items-center justify-end px-5 sm:px-8 lg:pr-14">
            <div
              className="hero-copy w-full max-w-[580px] rounded-[32px] border border-[#e6c072]/35 p-8 text-center shadow-[0_45px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-lg sm:p-10 lg:p-12"
              style={{
                background:
                  "linear-gradient(180deg, rgba(44,29,14,0.66) 0%, rgba(30,19,9,0.62) 100%)",
              }}
            >
              <h1 className="hero-title font-serif text-cream">
                <span className="reveal-line block overflow-hidden">
                  <span className="reveal-inner block text-[clamp(1.8rem,3.4vw,3.05rem)] font-bold leading-[1.05] tracking-tight">
                    Three Decades of Consultancy
                  </span>
                </span>
                <span className="reveal-line mt-1 block overflow-hidden">
                  <span className="reveal-inner block font-accent text-[clamp(1.1rem,1.9vw,1.55rem)] font-medium italic text-gold-soft">
                    in
                  </span>
                </span>
                <span className="reveal-line block overflow-hidden">
                  <span className="reveal-inner block text-[clamp(1.5rem,2.9vw,2.55rem)] font-semibold leading-[1.08] tracking-tight text-gold-soft">
                    Astrology-Vastu-Meditation
                  </span>
                </span>
              </h1>

              <p className="hero-body mx-auto mt-6 max-w-[600px] font-sans text-[15px] leading-relaxed text-cream/90 sm:text-[16.5px]">
                Decades of proven expertise, experience never-before Astrology -
                Vastu consultations &amp; Meditation Sessions designed to solve
                real-life challenges in career, relationships, finances and health.
                Regain clarity through deep knowledge and achieve confidence through
                practical, result-oriented strategies.
              </p>

              <p className="hero-tagline mt-6 font-accent text-[clamp(1.05rem,1.6vw,1.4rem)] italic leading-snug text-gold-soft">
                “When the right decision matters, guesswork is not an option.”
              </p>

              <a
                href="#"
                className="hero-cta btn-gold-glow mt-8 inline-flex items-center rounded-2xl px-10 py-4 font-sans text-[15px] font-semibold tracking-wide ring-1 ring-[#F3D488]/60"
              >
                Request Personal Consultation
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-cue absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-1.5 text-cream/70">
          <span className="font-sans text-[10px] font-semibold tracking-kicker">SCROLL</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </div>
  );
}

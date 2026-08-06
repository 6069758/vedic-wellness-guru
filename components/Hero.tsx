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
        {/* Provided background image (original scale & position) */}
        <div className="hero-bg absolute inset-0 will-change-transform">
          <Image
            src="/images/guru-golden.png"
            alt="Gaurav Vadehra — astrologer"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Right-side scrim only (keeps the astrologer vivid, card legible) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/70 via-black/15 to-transparent" />

        {/* Subtle ambient glow */}
        <div
          className="hero-glow pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(40% 50% at 30% 42%, rgba(255,200,120,0.10), transparent 70%)",
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
        <div className="hero-name pointer-events-none absolute bottom-[16%] left-[4%] w-[36%] max-w-[400px] -rotate-[30deg]">
          <Image
            src="/images/signature.png"
            alt="Shree Gaurav Astro"
            width={804}
            height={365}
            priority
            className="h-auto w-full drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Copy card (right) — ORIGINAL position & size; only polished */}
        <div className="relative z-30 grid h-full grid-cols-1 items-center lg:grid-cols-[42%_58%]">
          <div className="hidden lg:block" />
          <div className="flex items-center justify-end px-5 sm:px-8 lg:pr-12">
            <div
              className="hero-copy w-full max-w-[660px] rounded-[28px] border border-[#e0b95f]/30 px-10 py-9 text-center shadow-[0_40px_100px_-40px_rgba(0,0,0,0.85)] backdrop-blur-md sm:px-12 sm:py-10 lg:px-14"
              style={{
                background:
                  "linear-gradient(180deg, rgba(46,31,16,0.36) 0%, rgba(34,22,11,0.34) 100%)",
              }}
            >
              <h1 className="hero-title font-serif text-cream">
                <span className="reveal-line block overflow-hidden">
                  <span className="reveal-inner block text-[clamp(1.5rem,2.9vw,2.6rem)] font-bold leading-[1.1] tracking-tight">
                    Three Decades of Consultancy
                  </span>
                </span>
                <span className="reveal-line mt-1 block overflow-hidden">
                  <span className="reveal-inner block font-accent text-[clamp(1rem,1.7vw,1.4rem)] font-medium italic text-gold-soft">
                    in
                  </span>
                </span>
                <span className="reveal-line block overflow-hidden">
                  <span className="reveal-inner block text-[clamp(1.3rem,2.4vw,2.2rem)] font-semibold leading-tight tracking-tight text-gold-soft">
                    Astrology-Vastu-Meditation
                  </span>
                </span>
              </h1>

              <p className="hero-body mx-auto mt-5 max-w-[560px] font-sans text-[14.5px] leading-relaxed text-cream/90 sm:text-[15px]">
                Decades of proven expertise, experience never-before Astrology -
                Vastu consultations &amp; Meditation Sessions designed to solve
                real-life challenges in career, relationships, finances and health.
                Regain clarity through deep knowledge and achieve confidence through
                practical, result-oriented strategies.
              </p>

              <p className="hero-tagline mt-5 font-accent text-[clamp(0.95rem,1.4vw,1.25rem)] italic leading-snug text-gold-soft">
                “When the right decision matters, guesswork is not an option.”
              </p>

              <a
                href="#"
                className="hero-cta btn-gold-glow mt-7 inline-flex items-center rounded-full px-9 py-3.5 font-sans text-[13.5px] font-semibold tracking-wide"
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

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

/**
 * IPS — "Instant Prediction System" (Slide 2 builds). Diagonal split layout:
 * copy card on the left, the airport-crowd photograph on the right.
 *
 * Every `ips-*` class below is a hook the UNCHANGED ips build timeline animates
 * (wipe ×3 → pop → wipe → keyboard → wipe ×2 → move-in → move-in-character).
 * Do not rename them or the Keynote build order breaks.
 */
export default function IPSSection() {
  return (
    <section className="scene-ips relative z-10 flex min-h-screen w-full items-center overflow-hidden bg-[#efe7d8]">
      {/* Right — photograph, diagonally clipped */}
      <div
        className="absolute inset-y-0 right-0 w-[62%]"
        style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 8% 100%)" }}
      >
        <Image
          src="/images/hero-crowd.png"
          alt="Reading the moment amid a busy terminal"
          fill
          sizes="62vw"
          className="object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#efe7d8] via-transparent to-transparent" />
      </div>

      {/* Left — copy card */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 py-24 lg:px-14">
        <div className="max-w-[560px]">
          {/* 1 — WIPE */}
          <div className="ips-rule mb-6 h-[2px] w-20 bg-gold" />

          {/* 2 — WIPE + 3 — WIPE + 4 — POP */}
          <div className="ips-kicker mb-6 flex items-center gap-4">
            <span className="text-[12px] font-semibold uppercase tracking-kicker text-gold">
              A Timing Method
            </span>
            <span className="ips-emblem-line h-5 w-px bg-ink/30" />
            <Image
              src="/images/logo.png"
              alt="Vedic Wellness Guru"
              width={38}
              height={38}
              className="ips-emblem h-9 w-9 rounded-full object-cover ring-1 ring-gold/50"
            />
          </div>

          {/* 10 — MOVE IN CHARACTER (climax) */}
          <h2 className="ips-title font-serif text-[clamp(5rem,15vw,12rem)] font-bold leading-[0.85] tracking-tight text-ink">
            IPS
          </h2>

          {/* 6 — KEYBOARD (typewriter), underlined */}
          <h3 className="ips-subtitle mt-2 flex w-fit items-baseline border-b-2 border-gold/70 pb-1 font-serif text-[clamp(1.4rem,3vw,2.4rem)] font-medium italic text-ink">
            <span className="ips-subtitle-text">Instant Prediction System</span>
            <span className="ips-caret ml-1 inline-block h-[1em] w-[3px] translate-y-[0.12em] bg-ink" />
          </h3>

          {/* 5 — WIPE (divider) + 7 & 8 — WIPE (body) */}
          <div className="mt-8 max-w-[520px] rounded-2xl bg-ink/[0.82] p-7 text-cream/90 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.7)]">
            <div className="ips-divider mb-5 h-px w-24 bg-gold-soft/70" />
            <p className="ips-body-1 text-[15px] leading-relaxed">
              A practical timing method developed through years of observation
              and real-life event patterns.
            </p>
            <p className="ips-body-2 mt-4 text-[15px] leading-relaxed">
              It helps understand the direction of a situation by reading the
              moment in an instant — through the environment and the signals
              around you — before making an important decision or predicting the
              future instantly.
            </p>
          </div>

          {/* 9 — MOVE IN */}
          <a
            href="#"
            className="ips-cta group mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-gold-soft to-gold px-9 py-4 text-[13px] font-bold tracking-nav text-ink transition-shadow duration-300 hover:shadow-[0_0_44px_-8px_rgba(224,180,88,0.85)]"
          >
            EXPLORE IPS
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

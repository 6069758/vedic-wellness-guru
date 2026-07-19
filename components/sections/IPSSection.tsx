import Image from "next/image";

/**
 * IPS — "Instant Prediction System". Curved panel on a pale-white page, using
 * the provided ips-bg.png as the full backdrop (its diagonal composition is
 * baked into the image); the copy is overlaid on the left.
 *
 * Every `ips-*` class is a hook the UNCHANGED ips build timeline animates
 * (wipe ×3 → pop → wipe → keyboard → wipe ×2 → move-in → move-in-character).
 * Do not rename them.
 */
export default function IPSSection() {
  return (
    <section className="scene-ips relative z-10 flex min-h-screen w-full items-center justify-center bg-cream px-4 py-6 lg:px-8">
      <div
        className="relative w-full max-w-[1560px] overflow-hidden rounded-[34px] border border-gold/20 shadow-[0_30px_90px_-50px_rgba(120,90,30,0.55)]"
        style={{
          aspectRatio: "1645 / 956",
          minHeight: 480,
          backgroundColor: "#efe7d8",
          backgroundImage: "url('/images/ips-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* soft light wash on the left for legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f3ecdd]/85 via-[#f3ecdd]/25 to-transparent" />

        {/* Left — copy overlay */}
        <div className="absolute inset-0 z-10 flex w-full flex-col justify-center px-6 py-8 sm:px-12 lg:w-[56%] lg:py-12">
          {/* 1 — WIPE */}
          <div className="ips-rule mb-5 h-[2px] w-20 bg-gold" />

          {/* 2 — WIPE + 3 — WIPE + 4 — POP */}
          <div className="ips-kicker mb-4 flex items-center gap-4">
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
          <h2 className="ips-title font-serif text-[clamp(3.5rem,9vw,7rem)] font-bold leading-[0.85] tracking-tight text-[#1a120a]">
            IPS
          </h2>

          {/* 6 — KEYBOARD (typewriter), underlined */}
          <h3 className="ips-subtitle mt-1 flex w-fit items-baseline border-b-2 border-[#5E4A2A]/60 pb-1 font-serif text-[clamp(1.2rem,2.6vw,2rem)] font-medium italic text-[#3b2c17]">
            <span className="ips-subtitle-text">Instant Prediction System</span>
            <span className="ips-caret ml-1 inline-block h-[1em] w-[3px] translate-y-[0.12em] bg-[#3b2c17]" />
          </h3>

          {/* 5 — WIPE (divider) + 7 & 8 — WIPE (body) — angled dark panel */}
          <div
            className="mt-6 max-w-[560px] bg-[#161008]/90 px-6 py-6 pr-16 text-cream/90 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.7)] sm:px-8"
            style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)" }}
          >
            <div className="ips-divider mb-4 h-px w-24 bg-gold-soft/70" />
            <p className="ips-body-1 text-[13px] leading-relaxed sm:text-sm">
              A practical timing method developed through years of observation
              and real-life event patterns.
            </p>
            <p className="ips-body-2 mt-4 text-[13px] leading-relaxed sm:text-[15px]">
              It helps understand the direction of a situation by reading the
              moment in an instant through the environment and the signals around
              you before making an important decision or predicting future
              instantly.
            </p>
          </div>

          {/* 9 — MOVE IN */}
          <a
            href="#"
            className="ips-cta mt-6 inline-block w-fit rounded-full bg-gradient-to-b from-[#F3D488] to-[#C8953D] px-7 py-3 text-[12px] font-bold tracking-nav text-[#241a0f] shadow-lg ring-1 ring-[#F3D488]/60 transition-shadow duration-300 hover:shadow-[0_0_44px_-8px_rgba(224,180,88,0.85)] sm:text-sm"
          >
            GET YOUR INSTANT PREDICTIONS NOW!!
          </a>
        </div>
      </div>
    </section>
  );
}

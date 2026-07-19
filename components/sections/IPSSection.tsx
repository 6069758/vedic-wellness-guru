import Image from "next/image";

/**
 * IPS — "Instant Prediction System". A PINNED cinematic section: the whole
 * sequence is scrubbed by scroll (see animations/ipsCinematic). Layered so each
 * beat can animate independently — background, diagonal glass divider, title,
 * subtitle + growing underline, dark glass panel, line-by-line paragraph, CTA.
 *
 * ips-bg.png is the full composed backdrop (astrologer + diagonal baked in).
 */
export default function IPSSection() {
  return (
    <section className="ips-stage relative flex h-screen w-full items-center justify-center overflow-hidden bg-cream px-4 py-6 lg:px-8">
      <div className="relative h-[88vh] w-full max-w-[1560px] overflow-hidden rounded-[34px] border border-gold/20 shadow-[0_30px_90px_-45px_rgba(120,90,30,0.55)]">
        {/* background layer (fades in + zooms out) */}
        <div
          className="ips-bg absolute inset-0 will-change-transform"
          style={{
            backgroundColor: "#efe7d8",
            backgroundImage: "url('/images/ips-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* diagonal glass divider (sweeps into place) */}
        <div
          className="ips-glass pointer-events-none absolute inset-y-[-10%] left-[42%] w-[10%] will-change-transform"
          style={{
            transform: "skewX(-12deg)",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
            filter: "blur(4px)",
          }}
        />

        {/* left light wash for legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f3ecdd]/85 via-[#f3ecdd]/25 to-transparent" />

        {/* content */}
        <div className="absolute inset-0 z-10 flex w-full flex-col justify-center px-6 py-8 sm:px-12 lg:w-[56%] lg:py-12">
          <div className="ips-kicker mb-4 flex items-center gap-4">
            <span className="text-[12px] font-semibold uppercase tracking-kicker text-gold">
              A Timing Method
            </span>
            <span className="h-5 w-px bg-ink/30" />
            <Image
              src="/images/logo.png"
              alt="Vedic Wellness Guru"
              width={38}
              height={38}
              className="h-9 w-9 rounded-full object-cover ring-1 ring-gold/50"
            />
          </div>

          <h2 className="ips-title font-serif text-[clamp(3.5rem,9vw,7rem)] font-bold leading-[0.85] tracking-tight text-[#1a120a]">
            IPS
          </h2>

          <div className="mt-2 w-fit">
            <h3 className="ips-subtitle font-serif text-[clamp(1.2rem,2.6vw,2rem)] font-medium italic text-[#3b2c17]">
              Instant Prediction System
            </h3>
            <div className="ips-underline mt-1 h-[2px] w-full bg-[#5E4A2A]" />
          </div>

          {/* dark glass info panel */}
          <div
            className="ips-panel mt-6 max-w-[560px] bg-[#161008]/90 px-6 py-6 pr-16 text-cream/90 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.7)] sm:px-8 will-change-transform"
            style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)" }}
          >
            <p className="ips-para text-[13px] leading-relaxed sm:text-sm">
              A practical timing method developed through years of observation
              and real-life event patterns.
            </p>
            <p className="ips-para mt-4 text-[13px] leading-relaxed sm:text-[15px]">
              It helps understand the direction of a situation by reading the
              moment in an instant through the environment and the signals around
              you before making an important decision or predicting future
              instantly.
            </p>
          </div>

          <a
            href="#"
            className="ips-cta mt-6 inline-block w-fit rounded-full bg-gradient-to-b from-[#F3D488] to-[#C8953D] px-7 py-3 text-[12px] font-bold tracking-nav text-[#241a0f] shadow-lg ring-1 ring-[#F3D488]/60 transition-shadow duration-300 hover:shadow-[0_0_44px_-8px_rgba(224,180,88,0.85)] sm:text-sm will-change-transform"
          >
            GET YOUR INSTANT PREDICTIONS NOW!!
          </a>
        </div>
      </div>
    </section>
  );
}

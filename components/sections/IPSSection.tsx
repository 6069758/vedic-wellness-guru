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
    <section className="ips-stage relative flex h-screen w-full items-center justify-center overflow-hidden bg-cream px-4 py-5 lg:px-6">
      <div className="ips-frame relative h-[84vh] w-full max-w-[1640px] overflow-hidden rounded-[34px] border border-gold/25 bg-[#efe7d8] shadow-[0_30px_90px_-45px_rgba(120,90,30,0.55)]">
        {/* background layer — always visible (no flash) with a subtle zoom-out establish */}
        <div
          className="ips-bg absolute inset-0 will-change-transform"
          style={{
            backgroundColor: "#efe7d8",
            backgroundImage: "url('/images/ips-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center 28%",
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

        {/* left light wash for legibility (fades in with the background) */}
        <div className="ips-wash pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f3ecdd]/85 via-[#f3ecdd]/25 to-transparent" />

        {/* content */}
        <div className="absolute inset-0 z-10 flex w-full flex-col justify-center px-8 py-10 sm:px-14 lg:w-[58%] lg:py-12">
          <h2 className="ips-title font-serif text-[clamp(3.8rem,9.5vw,7.5rem)] font-bold leading-[0.85] tracking-tight text-[#1a120a]">
            IPS
          </h2>

          <div className="mt-3 w-fit">
            <h3 className="ips-subtitle font-serif text-[clamp(1.4rem,3vw,2.3rem)] font-medium italic text-[#3b2c17]">
              Instant Prediction System
            </h3>
            <div className="ips-underline mt-1.5 h-[2px] w-full bg-[#5E4A2A]" />
          </div>

          {/* elegant dark glass info panel */}
          <div
            className="ips-panel mt-8 max-w-[540px] rounded-2xl border border-gold/25 px-9 py-9 text-cream shadow-[0_28px_70px_-28px_rgba(0,0,0,0.8)] backdrop-blur-md will-change-transform"
            style={{ backgroundColor: "rgba(18,12,4,0.78)" }}
          >
            <p className="ips-para font-sans text-[17px] leading-8 text-cream/95 sm:text-[18px]">
              A practical timing method developed through years of observation
              and real-life event patterns.
            </p>
            <p className="ips-para mt-5 font-sans text-[17px] leading-8 text-cream/95 sm:text-[18px]">
              It helps understand the direction of a situation by reading the
              moment in an instant through the environment and the signals around
              you before making an important decision or predicting future
              instantly.
            </p>
          </div>

          <a
            href="#"
            className="ips-cta btn-gold-glow mt-8 inline-block w-fit rounded-full px-9 py-4 text-[14px] tracking-nav will-change-transform"
          >
            Get Your Instant Predictions
          </a>
        </div>
      </div>
    </section>
  );
}

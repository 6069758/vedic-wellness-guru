/**
 * Trusted By — curved banner panel on a pale-white page, using the provided
 * trusted-bg.png as the full backdrop (portrait + golden scene baked in); the
 * copy card is overlaid on the right, matching the reference.
 */
export default function TrustedBy() {
  return (
    <section className="relative z-10 bg-cream px-4 py-8 lg:px-10">
      <div
        data-reveal
        className="relative mx-auto flex w-full max-w-[1560px] items-center justify-end overflow-hidden rounded-[34px] border border-gold/20 shadow-[0_30px_90px_-50px_rgba(120,90,30,0.55)]"
        style={{
          aspectRatio: "1672 / 941",
          backgroundColor: "#2a2016",
          backgroundImage: "url('/images/trusted-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* scrim so the right-hand text stays legible */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(20,13,6,0) 42%, rgba(20,13,6,0.4) 68%, rgba(20,13,6,0.6) 100%)",
          }}
        />

        {/* Right — copy card */}
        <div className="relative z-10 mr-6 flex w-full max-w-[560px] items-center px-2 py-6 lg:mr-[8%] lg:w-[46%]">
          <div className="w-full rounded-[28px] border border-gold-soft/25 bg-black/30 p-8 text-center backdrop-blur-sm sm:p-10">
            <h2 className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-bold tracking-wide text-cream drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              Trusted By
            </h2>
            <p className="mx-auto mt-5 max-w-[520px] text-[14px] leading-relaxed text-cream/90 sm:text-[15px]">
              Trusted advisor to founders, business owners &amp; professionals
              associated with some of India&rsquo;s most respected prominent brands
            </p>
            <div className="mx-auto my-4 flex items-center justify-center gap-3 text-gold-soft">
              <span className="h-px w-16 bg-gold/40" />
              <span className="text-xs">&#10022;</span>
              <span className="h-px w-16 bg-gold/40" />
            </div>
            <p className="mx-auto max-w-[520px] text-[14px] leading-relaxed text-cream/90 sm:text-[15px]">
              His work remains deeply personal &amp; confidential, built on trust
              developed over years of consistent guidance and accurate insights
            </p>
            <a
              href="#"
              className="btn-gold mt-7 inline-flex items-center rounded-full px-8 py-3 text-[13px] font-semibold tracking-nav ring-1 ring-[#F3D488]/60"
            >
              Request Personal Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

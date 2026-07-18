import Placeholder from "../ui/Placeholder";

export default function TrustedBy() {
  return (
    <section className="relative z-10 overflow-hidden px-4 py-24 lg:px-10">
      <div
        className="mx-auto grid max-w-[1600px] items-stretch gap-0 overflow-hidden rounded-[36px] lg:grid-cols-[0.85fr_1.15fr]"
        style={{
          background:
            "radial-gradient(120% 100% at 20% 30%, #c79a4e 0%, #9a6f30 45%, #5c3d1a 100%)",
        }}
      >
        {/* Left — portrait */}
        <div data-reveal className="relative min-h-[360px] p-6">
          <Placeholder
            file="trusted-portrait.png"
            label="Crossed-arms portrait (transparent PNG)"
            ratio="4 / 5"
            rounded="rounded-3xl"
            className="h-full w-full"
          />
        </div>

        {/* Right — glass card */}
        <div data-reveal className="flex items-center p-8 sm:p-12 lg:p-16">
          <div className="w-full rounded-[28px] border border-gold-soft/25 bg-black/25 p-8 text-center backdrop-blur-sm sm:p-12">
            <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-bold text-cream">
              Trusted By
            </h2>
            <p className="mx-auto mt-6 max-w-[520px] text-[15px] leading-relaxed text-cream/85">
              Trusted advisor to founders, business owners &amp; professionals
              associated with some of India&rsquo;s most respected, prominent brands.
            </p>
            <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-relaxed text-cream/85">
              His work remains deeply personal &amp; confidential, built on trust
              developed over years of consistent guidance and accurate insights.
            </p>
            <a
              href="#"
              className="mt-9 inline-flex items-center rounded-full bg-gradient-to-b from-cream to-cream-deep px-8 py-3.5 text-[13px] font-semibold tracking-nav text-ink transition-all duration-300 hover:shadow-[0_0_36px_-8px_rgba(247,246,241,0.7)]"
            >
              Request Personal Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

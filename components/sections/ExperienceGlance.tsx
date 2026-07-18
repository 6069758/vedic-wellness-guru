import { SectionDots } from "../ui/Ornament";

const STATS = [
  { count: "30", suffix: "+", label: "Years of Experience" },
  { count: "100", suffix: "K", label: "Consultations" },
  { count: "99", suffix: "%", label: "Satisfied Clients" },
  { count: "1", suffix: "K+", label: "Students Taught" },
  { count: "30", suffix: "+", label: "Global Workshops" },
];

export default function ExperienceGlance() {
  return (
    <div className="relative z-10 bg-cream">
      {/* Thin transition band */}
      <div className="bg-[#161009] py-3 text-center">
        <span className="font-serif text-lg text-cream/90">
          Key Insights into <span className="text-gold-soft">Vedic Astrology &amp; Vastu</span>
        </span>
      </div>

      <section className="relative overflow-hidden bg-[#0d0a06] px-6 py-20 lg:px-14">
        {/* faint radial glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: "radial-gradient(60% 60% at 50% 30%, rgba(200,145,46,0.16), transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-[1400px]">
          <h2 data-reveal className="text-center font-serif text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold text-cream">
            Experience at a <span className="text-gold-soft">Glance</span>
          </h2>

          <div data-reveal-group className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {STATS.map((s) => (
              <div key={s.label} data-reveal-item className="flex flex-col items-center text-center">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-[22px] bg-gradient-to-b from-gold-soft to-gold shadow-[0_0_40px_-8px_rgba(200,145,46,0.8)]">
                  <span
                    className="font-serif text-3xl font-bold text-ink"
                    data-count={s.count}
                    data-suffix={s.suffix}
                  >
                    0{s.suffix}
                  </span>
                </div>
                <span className="mt-4 text-[11px] font-semibold uppercase tracking-nav text-cream/70">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDots active={2} total={7} />
    </div>
  );
}

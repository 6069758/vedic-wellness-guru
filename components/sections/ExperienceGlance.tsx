import { SectionDots, DividerOrnament } from "../ui/Ornament";

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
      <section className="relative overflow-hidden bg-[#0d0a06] px-6 py-16 lg:px-14">
        {/* faint radial glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: "radial-gradient(60% 60% at 50% 30%, rgba(200,145,46,0.16), transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-[1400px]">
          <h2 data-reveal className="text-center font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-semibold text-cream">
            Experience at a <span className="text-gold-soft">Glance</span>
          </h2>
          <div data-reveal className="mt-5">
            <DividerOrnament />
          </div>

          <div data-reveal-group className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {STATS.map((s) => (
              <div key={s.label} data-reveal-item className="flex flex-col items-center text-center">
                {/* Premium bordered container */}
                <div className="relative">
                  {/* Outer glow ring */}
                  <div
                    className="absolute inset-[-3px] rounded-[27px]"
                    style={{
                      background: "linear-gradient(145deg, rgba(247,220,148,0.9), rgba(200,145,46,0.6), rgba(169,118,44,0.4), rgba(247,220,148,0.7))",
                      padding: "1.5px",
                    }}
                  />
                  {/* Ambient glow behind card */}
                  <div
                    className="absolute inset-0 rounded-[24px] blur-[18px]"
                    style={{ background: "rgba(200,145,46,0.55)", transform: "scale(1.15)" }}
                  />
                  {/* Main card */}
                  <div
                    className="relative flex h-[110px] w-[110px] items-center justify-center rounded-[24px]"
                    style={{
                      background: "linear-gradient(145deg, #f7dc94 0%, #e0b45a 38%, #c8953d 72%, #a9762c 100%)",
                      border: "1.5px solid rgba(247,235,168,0.75)",
                      boxShadow:
                        "inset 0 2px 3px rgba(255,248,220,0.85), inset 0 -4px 10px rgba(120,80,20,0.35), 0 0 0 1px rgba(169,118,44,0.5), 0 0 28px -4px rgba(200,145,46,0.9), 0 8px 32px -8px rgba(120,70,10,0.7)",
                    }}
                  >
                    {/* Inner sheen */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-[22px]"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,252,230,0.45) 0%, transparent 50%, rgba(120,70,10,0.15) 100%)",
                      }}
                    />
                    <span
                      className="relative font-serif text-[2.1rem] font-bold text-[#1a0f00]"
                      style={{ textShadow: "0 1px 2px rgba(255,240,180,0.5)" }}
                      data-count={s.count}
                      data-suffix={s.suffix}
                    >
                      0{s.suffix}
                    </span>
                  </div>
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

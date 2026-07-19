import Placeholder from "../ui/Placeholder";
import { DividerOrnament } from "../ui/Ornament";
import { Plus } from "lucide-react";

const SERVICES = [
  { file: "service-astrology.png", title: "Astrology Consultation", desc: "Experience personalized Astrology consults — personal or horoscope matching." },
  { file: "service-vastu.png", title: "Vastu Consultation", desc: "Achieve harmony in perfect Vastu — we harmonize where needed." },
  { file: "service-courses.jpeg", title: "Live Courses", desc: "One-to-one live courses — Astro Vastu, Vedic & KP Astrology, Nadi, Palmistry, Lal Kitab, Tarot, Sadhana & Prediction modules." },
  { file: "service-meditation.png", title: "Meditation", desc: "Deep calm, emotional balance, spiritual enhancement & reduced stress. Guided meditation sessions." },
];

/**
 * The "Explore Services" slide that lives inside the pinned cinematic stage.
 * Each card carries a .svc-card-N hook animated by the cinematic timeline.
 */
export default function ServicesScene() {
  return (
    <div className="scene-services relative flex w-full items-center justify-center bg-cream px-4 py-10 lg:px-8">
      {/* curved pale-white panel with a soft gold-dust glow */}
      <div className="relative mx-auto w-full max-w-[1560px] overflow-hidden rounded-[34px] border border-gold/20 bg-[#faf6ec] px-6 py-10 shadow-[0_30px_90px_-50px_rgba(120,90,30,0.5)] sm:px-10 sm:py-12 lg:px-14">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 55% at 50% 0%, rgba(201,149,61,0.12), transparent 60%), radial-gradient(50% 40% at 85% 100%, rgba(233,200,119,0.08), transparent 65%)",
          }}
        />
        <div className="svc-head relative text-center">
          <h2 className="font-serif text-[clamp(1.8rem,3.6vw,3rem)] font-semibold text-ink">Explore Services</h2>
          <DividerOrnament className="mt-5" />
        </div>

        <div className="relative mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((s, i) => (
            // Outer article = GSAP entrance target (no hover transform → no fight);
            // inner div = the visual card carrying the full hover effect.
            <article key={s.title} className={`svc-card-${i + 1}`}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gold/15 bg-white/80 shadow-[0_22px_60px_-34px_rgba(120,90,30,0.6)] backdrop-blur-sm transition-[transform,box-shadow,filter] duration-[350ms] ease-[cubic-bezier(.22,1,.36,1)] will-change-transform hover:-translate-y-2 hover:scale-[1.03] hover:brightness-105 hover:shadow-[0_30px_58px_-14px_rgba(201,149,61,0.5),0_0_28px_-2px_rgba(233,200,119,0.55)]">
                <Placeholder
                  file={s.file}
                  src={`/images/${s.file}`}
                  label={s.title}
                  ratio="4 / 3"
                  rounded="rounded-none"
                  imgClassName="object-cover transition-transform duration-[750ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.09]"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink-soft/80">{s.desc}</p>
                  <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-bold tracking-nav text-gold transition-colors hover:text-gold-bright">
                    LEARN MORE <Plus className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

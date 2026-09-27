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
 * Explore Services — full viewport width, cards stretch to fill the screen edge-to-edge.
 * Text has comfortable breathing room and the layout is identical across all screen sizes.
 */
export default function ServicesScene() {
  return (
    <div className="scene-services absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-cream">
      {/* Full-bleed panel — no max-width constraint, uses full viewport */}
      <div className="relative h-full w-full overflow-hidden border-0 bg-[#faf6ec] px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
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

        {/* Cards grid — always 4 columns on large screens, fills full width */}
        <div className="relative mt-8 grid h-[calc(100%-110px)] grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((s, i) => (
            <article key={s.title} className={`svc-card-${i + 1} flex h-full`}>
              <div className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-gold/25 bg-white/80 p-3 shadow-[0_22px_60px_-34px_rgba(120,90,30,0.6)] backdrop-blur-sm transition-[transform,box-shadow,filter] duration-[350ms] ease-[cubic-bezier(.22,1,.36,1)] will-change-transform hover:-translate-y-2 hover:scale-[1.015] hover:brightness-105 hover:shadow-[0_30px_58px_-14px_rgba(201,149,61,0.5),0_0_28px_-2px_rgba(233,200,119,0.55)]">
                <Placeholder
                  file={s.file}
                  src={`/images/${s.file}`}
                  label={s.title}
                  ratio="4 / 3"
                  rounded="rounded-2xl"
                  className="border border-gold/40 ring-1 ring-inset ring-gold-soft/30"
                  imgClassName="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.12]"
                />
                {/* Text area — generous vertical breathing room */}
                <div className="flex flex-1 flex-col px-5 pb-6 pt-7">
                  <h3 className="font-serif text-[1.05rem] font-semibold leading-normal text-ink">{s.title}</h3>
                  <p className="mt-5 flex-1 text-[14.5px] leading-[1.8] text-ink-soft/85">{s.desc}</p>
                  <a href="#" className="mt-7 inline-flex items-center gap-1.5 text-[12px] font-bold tracking-nav text-gold transition-colors hover:text-gold-bright">
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

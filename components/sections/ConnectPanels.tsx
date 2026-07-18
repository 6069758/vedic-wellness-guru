import { DividerOrnament, CornerFrame, SectionDots } from "../ui/Ornament";
import { MessageCircle } from "lucide-react";

const PANELS = [
  { title: "Take Your Consultation Now", sub: "Seeking Clarity? Next Step is Simple" },
  { title: "Learn Astrology, Vastu, IPS, Tarot", sub: "LIVE Sessions — Online Classes" },
];

export default function ConnectPanels() {
  return (
    <section className="relative z-10 bg-cream px-4 py-20 lg:px-10">
      <CornerFrame className="mx-auto max-w-[1500px] rounded-[32px] border border-gold/20 bg-gradient-to-b from-[#f6efdd] to-cream px-6 py-14 sm:px-12">
        <div data-reveal-group className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {PANELS.map((p) => (
            <div
              key={p.title}
              data-reveal-item
              className="flex flex-col items-center rounded-3xl border border-gold/15 bg-white/70 px-8 py-12 text-center shadow-[0_20px_60px_-40px_rgba(120,90,30,0.6)]"
            >
              <h3 className="font-serif text-[clamp(1.4rem,2.4vw,2rem)] font-semibold text-gold">
                {p.title}
              </h3>
              <DividerOrnament className="my-5 scale-75" />
              <p className="mb-8 font-serif text-lg text-ink-soft">{p.sub}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-gold-soft to-gold px-8 py-3.5 text-[14px] font-semibold text-ink shadow-[0_10px_28px_-10px_rgba(200,145,46,0.9)] transition-all duration-300 hover:brightness-105"
              >
                <MessageCircle className="h-5 w-5" />
                Connect On WhatsApp
              </a>
            </div>
          ))}
        </div>
      </CornerFrame>
      <SectionDots active={3} total={7} />
    </section>
  );
}

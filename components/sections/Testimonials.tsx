"use client";

import { useState } from "react";
import { DividerOrnament, SectionDots } from "../ui/Ornament";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  { quote: "Acharya ji's guidance has transformed my perspective on life. His astrology readings are accurate and remedies truly worked.", name: "Rohan Mehta", role: "Entrepreneur" },
  { quote: "The Vastu consultation brought positive energy into our home & business. We saw noticeable improvement within weeks.", name: "Neha Sharma", role: "Business Owner" },
  { quote: "Learning Vedic astrology & Vastu has been a life-changing experience. His teaching style is practical, profound & full of depth.", name: "Ajay Verma", role: "Student" },
  { quote: "Every prediction was precise and the timing method gave me the confidence to act at the right moment.", name: "Priya Nair", role: "Consultant" },
  { quote: "Calm, clear and deeply insightful. The meditation sessions restored my balance completely.", name: "Karan Singh", role: "Founder" },
];

export default function Testimonials() {
  const [start, setStart] = useState(0);
  const n = TESTIMONIALS.length;
  const visible = [0, 1, 2].map((i) => TESTIMONIALS[(start + i) % n]);

  return (
    <section className="relative z-10 bg-[#f6ecda] px-4 py-14 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <h2 data-reveal className="text-center font-serif text-[clamp(2rem,3.8vw,3rem)] font-semibold text-ink">
          What Clients Say
        </h2>
        <DividerOrnament className="mt-5" />

        <div className="relative mt-14 flex items-center gap-4">
          <button
            onClick={() => setStart((s) => (s - 1 + n) % n)}
            aria-label="Previous"
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-ink sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">
            {visible.map((t, i) => (
              <figure
                key={`${t.name}-${i}`}
                className="flex flex-col items-center rounded-3xl border border-gold/15 bg-cream px-8 py-12 text-center shadow-[0_20px_60px_-40px_rgba(120,90,30,0.6)]"
              >
                <blockquote className="font-serif text-[16px] italic leading-relaxed text-ink-soft">
                  {t.quote}
                </blockquote>
                <div className="mt-6 h-px w-10 bg-gold/50" />
                <figcaption className="mt-5">
                  <div className="font-serif text-lg font-semibold text-ink">{t.name}</div>
                  <div className="mt-1 text-[12px] font-semibold uppercase tracking-nav text-gold">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>

          <button
            onClick={() => setStart((s) => (s + 1) % n)}
            aria-label="Next"
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-ink sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-10 flex justify-center gap-2.5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setStart(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${i === start ? "w-6 bg-gold" : "w-2.5 bg-gold/40"}`}
            />
          ))}
        </div>
      </div>

      <SectionDots active={4} total={7} />
    </section>
  );
}

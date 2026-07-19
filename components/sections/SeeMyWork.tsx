import Placeholder from "../ui/Placeholder";
import { DividerOrnament } from "../ui/Ornament";
import { Play } from "lucide-react";

const WORK = [
  { file: "work-elections.jpg", title: "US Elections 2024", desc: "Predictions shared before the election outcome." },
  { file: "work-jupiter.jpg", title: "Jupiter Truths", desc: "Understanding Jupiter's role in a new light." },
  { file: "work-prashna.jpg", title: "Study & Learn Prashna Jyotish", desc: "How Prashna is used for answering real-life questions." },
];

export default function SeeMyWork() {
  return (
    <section className="relative z-10 bg-cream px-4 py-10 lg:px-10">
      <div className="mx-auto max-w-[1500px] rounded-[32px] border border-gold/15 bg-gradient-to-b from-[#f7f1e2] to-cream px-6 py-14 sm:px-12">
        <h2 data-reveal className="text-center font-serif text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold text-ink">
          See My Work
        </h2>
        <DividerOrnament className="mt-5" />

        <div data-reveal-group className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3">
          {WORK.map((w) => (
            <article key={w.title} data-reveal-item className="group">
              <div className="relative overflow-hidden rounded-2xl">
                <Placeholder file={w.file} label={w.title} ratio="16 / 9" rounded="rounded-2xl" dark />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/90 text-ink shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-6 w-6 translate-x-0.5 fill-ink" />
                  </span>
                </div>
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-ink">{w.title}</h3>
              <p className="mt-1 text-[13px] text-ink-soft/75">{w.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

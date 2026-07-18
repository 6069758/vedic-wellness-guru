import Placeholder from "../ui/Placeholder";
import { DividerOrnament } from "../ui/Ornament";
import { ArrowRight, BookOpen } from "lucide-react";

const POSTS = [
  { file: "blog-astrology.jpg", title: "Why Vedic Astrology Is Timeless?" },
  { file: "blog-vastu.jpg", title: "Vastu Tips for Wealth & Prosperity" },
  { file: "blog-meditation.jpg", title: "Meditation Practices for Inner Peace" },
  { file: "blog-transits.jpg", title: "Understanding Planetary Transits" },
];

export default function Blog() {
  return (
    <section className="relative z-10 bg-cream px-4 py-24 lg:px-10">
      <div className="mx-auto max-w-[1600px]">
        <h2 data-reveal className="text-center font-serif text-[clamp(2rem,3.8vw,3rem)] font-semibold text-ink">
          From the Blog
        </h2>
        <DividerOrnament className="mt-5" tone="cream" />

        <div data-reveal-group className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {POSTS.map((p) => (
            <article
              key={p.title}
              data-reveal-item
              className="group flex flex-col overflow-hidden rounded-3xl border border-gold/15 bg-white/70 shadow-[0_18px_50px_-30px_rgba(120,90,30,0.55)] transition-all duration-500 hover:-translate-y-1.5"
            >
              <Placeholder file={p.file} label={p.title} ratio="3 / 2" rounded="rounded-none" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-lg font-semibold leading-snug text-ink">{p.title}</h3>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-bold tracking-nav text-gold transition-colors hover:text-gold-bright"
                >
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div data-reveal className="mt-14 flex items-center justify-center gap-5">
          <span className="hidden h-px w-24 bg-gradient-to-r from-transparent to-gold sm:block" />
          <a
            href="#"
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-gold to-[#a9761f] px-8 py-3.5 text-[13px] font-semibold tracking-nav text-cream shadow-[0_12px_30px_-12px_rgba(200,145,46,0.9)] transition-all duration-300 hover:brightness-110"
          >
            <BookOpen className="h-4 w-4" />
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </a>
          <span className="hidden h-px w-24 bg-gradient-to-l from-transparent to-gold sm:block" />
        </div>
      </div>
    </section>
  );
}

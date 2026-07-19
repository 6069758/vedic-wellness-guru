import { forwardRef } from "react";
import Hero from "./Hero";
import ServicesScene from "./sections/ServicesScene";

/**
 * Pinned stage: Hero (front) crossfades into Explore Services (behind) inside
 * ONE viewport. Explore exists only here — no duplicate section, no blank.
 */
const CinematicStage = forwardRef<HTMLDivElement>(function CinematicStage(_props, ref) {
  return (
    <section
      ref={ref}
      className="hero-stage relative z-10 h-screen w-full overflow-hidden"
    >
      <ServicesScene />
      <Hero />
    </section>
  );
});

export default CinematicStage;

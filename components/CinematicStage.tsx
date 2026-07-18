import { forwardRef } from "react";
import Hero from "./Hero";
import ServicesScene from "./sections/ServicesScene";

/**
 * The pinned cinematic stage: one full viewport that holds both the Hero and
 * the Explore Services "slides", stacked. The cinematic timeline crossfades
 * between them and choreographs the cards — all while this element is pinned.
 */
const CinematicStage = forwardRef<HTMLDivElement>(function CinematicStage(_props, ref) {
  return (
    <section ref={ref} className="cine-stage relative h-screen w-full overflow-hidden">
      {/* Services sits underneath (z-10) so the Hero (z-20) crossfades over it */}
      <ServicesScene />
      <Hero />
    </section>
  );
});

export default CinematicStage;

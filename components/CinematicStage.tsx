import { forwardRef } from "react";
import Hero from "./Hero";

/** Pinned hero stage. Explore is a separate normal section (see Experience). */
const CinematicStage = forwardRef<HTMLDivElement>(function CinematicStage(_props, ref) {
  return (
    <section
      ref={ref}
      className="hero-stage relative z-10 h-screen w-full overflow-hidden"
    >
      <Hero />
    </section>
  );
});

export default CinematicStage;

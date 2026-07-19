"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "@/hooks/useLenis";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { buildHeroTimeline } from "@/animations/heroTimeline";
import { buildCinematic } from "@/animations/cinematic";
import { buildIpsCinematic } from "@/animations/ipsCinematic";
import { setupReveals } from "@/animations/reveals";

import Navbar from "./Navbar";
import CinematicStage from "./CinematicStage";
import ExperienceGlance from "./sections/ExperienceGlance";
import IPSSection from "./sections/IPSSection";
import TrustedBy from "./sections/TrustedBy";
import ConnectPanels from "./sections/ConnectPanels";
import SeeMyWork from "./sections/SeeMyWork";
import Testimonials from "./sections/Testimonials";
import Blog from "./sections/Blog";
import Footer from "./sections/Footer";

export default function Experience() {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const ipsRef = useRef<HTMLDivElement>(null);

  useLenis();

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const ipsSection = ipsRef.current;
    if (!root || !stage || !ipsSection) return;

    gsap.registerPlugin(ScrollTrigger);

    // Safety net: never leave the page permanently hidden.
    root.classList.remove("anim-hidden");

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ctx: gsap.Context | undefined;

    const setup = () => {
      try {
        ctx = gsap.context(() => {
          // 1. HERO build-in — autoplays on load (Keynote entrance builds)
          const heroTl = buildHeroTimeline(root);

          // 2. CINEMATIC STAGE — pinned Hero → Services crossfade + card choreography
          const cineTl = buildCinematic(root, stage);

          // 3. IPS — pinned cinematic sequence (scroll-scrubbed)
          const ipsTl = buildIpsCinematic(root, ipsSection);

          // 4. Reveals for the remaining flowing sections (additive)
          setupReveals(root);

          if (process.env.NODE_ENV !== "production") {
            const g = window as unknown as Record<string, unknown>;
            g.__tl = { hero: heroTl, cine: cineTl, ips: ipsTl };
            g.gsap = gsap;
            g.ScrollTrigger = ScrollTrigger;
          }

          ScrollTrigger.refresh();
        }, root);
      } catch (e) {
        console.error("[exp] setup error", e);
        root.classList.remove("anim-hidden");
      }
    };

    setup();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="anim-hidden relative w-full">
      {/* Persistent site navigation */}
      <Navbar />

      {/* Pinned cinematic intro: Hero → Explore Services */}
      <CinematicStage ref={stageRef} />

      {/* Normal scroll continues */}
      <ExperienceGlance />
      <div ref={ipsRef}>
        <IPSSection />
      </div>
      <TrustedBy />
      <ConnectPanels />
      <SeeMyWork />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}

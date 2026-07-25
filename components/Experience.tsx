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
    root.classList.remove("anim-hidden");

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ctx: gsap.Context | undefined;
    const setup = () => {
      try {
        ctx = gsap.context(() => {
          // Hero build-in (load)
          const heroTl = buildHeroTimeline(root);
          // Hero → Explore pinned crossfade + card choreography
          const cineTl = buildCinematic(root, stage);
          // IPS pinned cinematic
          const ipsTl = buildIpsCinematic(root, ipsSection);
          // Reveals for the remaining flowing sections
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
    return () => ctx?.revert();
  }, []);

  return (
    <div ref={rootRef} className="anim-hidden relative w-full">
      <Navbar />

      {/* Pinned cinematic slide: Hero → Explore Services (one viewport) */}
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

"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Drives a single Lenis instance and wires it into GSAP's ticker so that
 * ScrollTrigger and Lenis share one RAF loop (no scroll jank / double-driving).
 *
 * Key fix: lagSmoothing is left at default (500ms) so GSAP doesn't try to
 * catch up on missed frames during heavy sections, which caused the hang.
 * We also stop Lenis from overriding scroll during pinned sections.
 */
export function useLenis() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.0,
      // easeOutExpo — matches the slow, weighted glide of a Keynote transition
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
      // Prevent Lenis from fighting GSAP during pinned scroll sections
      syncTouch: false,
    });

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    // Leave lag smoothing at default — setting it to 0 causes catchup jank
    // when returning from a background tab or during heavy animations

    // Pause Lenis when a ScrollTrigger pin is active to avoid fighting
    ScrollTrigger.addEventListener("refresh", () => lenis.resize());

    return () => {
      gsap.ticker.remove(tick);
      ScrollTrigger.removeEventListener("refresh", () => lenis.resize());
      lenis.destroy();
    };
  }, []);
}

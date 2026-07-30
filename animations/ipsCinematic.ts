import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

/**
 * IPS — one pinned, scroll-driven cinematic timeline (Keynote-style).
 *
 * The section is PINNED and the whole sequence plays as ONE continuous GSAP
 * timeline with overlapping beats — never independent fade-ins, never a blank /
 * white frame (the section sits on a dark backdrop so the fade reads as a
 * crossfade from the previous section).
 *
 * Sequence:
 *   1. crossfade → the IPS background fades up + zooms out and ESTABLISHES first
 *   2. the diagonal glass overlay sweeps into place
 *   3. the content unit reveals as one move — title, subtitle + growing
 *      underline, the dark panel sliding in from the left, its lines, then the
 *      CTA — each beat overlapping the previous so it feels like one animation.
 *
 * Driven ONE-WAY by scroll: advances with forward scroll, never rewinds on
 * scroll-up, and stays complete once finished.
 */
export function buildIpsCinematic(scope: HTMLElement, stageEl: HTMLElement) {
  const q = gsap.utils.selector(scope);

  const paras = q(".ips-para") as HTMLElement[];
  const split = new SplitType(paras, { types: "lines", lineClass: "ips-line" });
  const lines = split.lines ?? [];

  // background is ALWAYS visible (cream theme behind → never a white/black flash);
  // it "establishes" via a subtle zoom-out rather than a fade.
  gsap.set(q(".ips-bg"), { opacity: 1, scale: 1.1 });
  gsap.set(q(".ips-wash"), { opacity: 1 });
  gsap.set(q(".ips-glass"), { opacity: 0, xPercent: -80 });
  gsap.set(q(".ips-title"), { opacity: 0, y: 30 });
  gsap.set(q(".ips-subtitle"), { opacity: 0, y: 24 });
  gsap.set(q(".ips-underline"), { scaleX: 0, transformOrigin: "left center" });
  gsap.set(q(".ips-panel"), { opacity: 0, x: -90 });
  gsap.set(lines, { opacity: 0, y: 18 });
  gsap.set(q(".ips-cta"), { opacity: 0, scale: 0.9 });

  // paused master timeline — one continuous, overlapping sequence
  const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });

  tl
    // 1 · background establishes ALONE first — a slow zoom-out settle
    .to(q(".ips-bg"), { scale: 1, duration: 1.6, ease: "power2.out" }, 0.0)
    // 2 · diagonal glass overlay sweeps into place (as the bg finishes settling)
    .to(q(".ips-glass"), { opacity: 1, xPercent: 0, duration: 1.1, ease: "power2.inOut" }, 1.45)
    // 3 · content unit — one overlapping cascade
    .to(q(".ips-title"), { opacity: 1, y: 0, duration: 0.9 }, 1.95)
    .to(q(".ips-subtitle"), { opacity: 1, y: 0, duration: 0.75 }, 2.2)
    .to(q(".ips-underline"), { scaleX: 1, duration: 0.8, ease: "power2.inOut" }, 2.35)
    .to(q(".ips-panel"), { opacity: 1, x: 0, duration: 1.0 }, 2.45) // overlaps the title cascade
    .to(lines, { opacity: 1, y: 0, duration: 0.7, stagger: 0.14 }, 2.85)
    .to(q(".ips-cta"), { opacity: 1, scale: 1, duration: 0.8 }, 3.35)
    .to({}, { duration: 0.5 }, 3.8); // hold before releasing

  // ONE-WAY scroll driver: pin, advance forward only, never reverse
  let maxProgress = 0;
  ScrollTrigger.create({
    trigger: stageEl,
    start: "top top",
    end: "+=220%",
    pin: true,
    pinSpacing: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      if (self.progress > maxProgress) {
        maxProgress = self.progress;
        tl.progress(maxProgress);
      }
    },
  });

  return tl;
}

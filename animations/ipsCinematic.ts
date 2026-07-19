import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

/**
 * IPS — pinned cinematic sequence (scroll-scrubbed). The whole section stays
 * pinned while one continuous, overlapping timeline plays, then the pin releases
 * and normal scrolling resumes.
 *
 * Order (each beat starts BEFORE the previous ends → one continuous motion):
 *   1+2. background fades in + zooms out (1.08 → 1.0) with a slight settle-up
 *   3.   diagonal glass divider sweeps into place
 *   4.   kicker/astrologer settle (opacity + upward)
 *   5.   "IPS" title fades in
 *   6.   subtitle rises in
 *   7.   underline grows left → right
 *   8.   dark glass panel slides in from the left + fades
 *   9.   paragraph reveals line-by-line (staggered)
 *   10.  CTA fades in last with a subtle scale
 *
 * Easing is power-curve only — slow, luxurious, no bounce / spring / abruptness.
 */
export function buildIpsCinematic(scope: HTMLElement, stageEl: HTMLElement) {
  const q = gsap.utils.selector(scope);

  // split the paragraphs into lines for the staggered reveal
  const paras = q(".ips-para") as HTMLElement[];
  const split = new SplitType(paras, { types: "lines", lineClass: "ips-line" });
  const lines = split.lines ?? [];

  // initial (hidden) states
  gsap.set(q(".ips-bg"), { opacity: 0, scale: 1.08, yPercent: 3 });
  gsap.set(q(".ips-glass"), { opacity: 0, xPercent: -70 });
  gsap.set(q(".ips-kicker"), { opacity: 0, y: 18 });
  gsap.set(q(".ips-title"), { opacity: 0, y: 26 });
  gsap.set(q(".ips-subtitle"), { opacity: 0, y: 22 });
  gsap.set(q(".ips-underline"), { scaleX: 0, transformOrigin: "left center" });
  gsap.set(q(".ips-panel"), { opacity: 0, x: -80 });
  gsap.set(lines, { opacity: 0, y: 16 });
  gsap.set(q(".ips-cta"), { opacity: 0, scale: 0.9 });

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    scrollTrigger: {
      trigger: stageEl,
      start: "top top",
      end: "+=1900",
      pin: true,
      pinSpacing: true,
      scrub: 1.1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  tl
    // 1 + 2 — background emerges: fade in + zoom-out + gentle settle
    .to(q(".ips-bg"), { opacity: 1, scale: 1, yPercent: 0, duration: 1.5, ease: "power2.out" }, 0.0)
    // 3 — diagonal glass divider sweeps in
    .to(q(".ips-glass"), { opacity: 1, xPercent: 0, duration: 1.0, ease: "power2.inOut" }, 0.45)
    // 4 — kicker / astrologer settle
    .to(q(".ips-kicker"), { opacity: 1, y: 0, duration: 0.8 }, 0.95)
    // 5 — title fades in
    .to(q(".ips-title"), { opacity: 1, y: 0, duration: 0.9 }, 1.15)
    // 6 — subtitle rises in (overlaps title)
    .to(q(".ips-subtitle"), { opacity: 1, y: 0, duration: 0.8 }, 1.5)
    // 7 — underline grows left → right
    .to(q(".ips-underline"), { scaleX: 1, duration: 0.8, ease: "power2.inOut" }, 1.75)
    // 8 — dark glass panel slides in from the left
    .to(q(".ips-panel"), { opacity: 1, x: 0, duration: 1.0, ease: "power3.out" }, 1.85)
    // 9 — paragraph reveals line by line
    .to(lines, { opacity: 1, y: 0, duration: 0.7, stagger: 0.14 }, 2.2)
    // 10 — CTA fades in last with a subtle scale
    .to(q(".ips-cta"), { opacity: 1, scale: 1, duration: 0.8 }, 2.75)
    // hold so the composition reads before the pin releases
    .to({}, { duration: 0.5 }, 3.2);

  return tl;
}

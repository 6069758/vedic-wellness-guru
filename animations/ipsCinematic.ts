import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

/**
 * IPS — one pinned, scroll-driven cinematic timeline that matches the Keynote
 * reference video exactly. ONE GSAP timeline, overlapping beats, no independent
 * fade-ins. The section sits on the warm ivory theme so the background fade
 * reads as a smooth crossfade (never a black/white flash).
 *
 * Order (from the reference video):
 *   1. IPS background fades in first (astrologer comes with it — no separate move)
 *   2. the warm frosted-glass overlay fades in
 *   3. the diagonal white divider sweeps into place
 *   4. reveal "IPS"
 *   5. reveal "Instant Prediction System" + growing underline
 *   6. the dark glass description panel slides in from the left while fading in
 *   7. the description text reveals line-by-line
 *   8. the CTA reveals last (opacity + slight scale)
 *   9. hold the completed composition
 *
 * Driven ONE-WAY by scroll: advances forward only, never rewinds on scroll-up.
 */
export function buildIpsCinematic(scope: HTMLElement, stageEl: HTMLElement) {
  const q = gsap.utils.selector(scope);

  const paras = q(".ips-para") as HTMLElement[];
  const split = new SplitType(paras, { types: "lines", lineClass: "ips-line" });
  const lines = split.lines ?? [];

  // initial states
  gsap.set(q(".ips-bg"), { opacity: 0, scale: 1.06 });
  gsap.set(q(".ips-wash"), { opacity: 0 });
  gsap.set(q(".ips-glass"), { opacity: 0, xPercent: -85 });
  gsap.set(q(".ips-title"), { opacity: 0, y: 28 });
  gsap.set(q(".ips-subtitle"), { opacity: 0, y: 22 });
  gsap.set(q(".ips-underline"), { scaleX: 0, transformOrigin: "left center" });
  gsap.set(q(".ips-panel"), { opacity: 0, x: -90 });
  gsap.set(lines, { opacity: 0, y: 16 });
  gsap.set(q(".ips-cta"), { opacity: 0, scale: 0.9 });

  const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });

  tl
    // 1 · background fades in + settles (astrologer included — no separate entrance)
    .to(q(".ips-bg"), { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }, 0.0)
    // 2 · warm frosted-glass overlay fades in
    .to(q(".ips-wash"), { opacity: 1, duration: 0.8, ease: "power2.out" }, 0.85)
    // 3 · diagonal white divider sweeps into place
    .to(q(".ips-glass"), { opacity: 1, xPercent: 0, duration: 0.85, ease: "power2.inOut" }, 1.05)
    // 4 · reveal "IPS"
    .to(q(".ips-title"), { opacity: 1, y: 0, duration: 0.6 }, 1.5)
    // 5 · reveal subtitle + growing underline
    .to(q(".ips-subtitle"), { opacity: 1, y: 0, duration: 0.55 }, 1.68)
    .to(q(".ips-underline"), { scaleX: 1, duration: 0.6, ease: "power2.inOut" }, 1.8)
    // 6 · dark panel slides in from the left + fades (overlaps the title cascade)
    .to(q(".ips-panel"), { opacity: 1, x: 0, duration: 0.85, ease: "power3.out" }, 1.85)
    // 7 · description text line-by-line
    .to(lines, { opacity: 1, y: 0, duration: 0.55, stagger: 0.11 }, 2.2)
    // 8 · CTA last — opacity + slight scale
    .to(q(".ips-cta"), { opacity: 1, scale: 1, duration: 0.6 }, 2.7)
    // 9 · hold
    .to({}, { duration: 0.4 }, 3.05);

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

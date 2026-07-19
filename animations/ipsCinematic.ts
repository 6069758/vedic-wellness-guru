import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

/**
 * IPS — one pinned, scroll-scrubbed cinematic timeline.
 *
 * The whole point: the BACKGROUND is the focus first and fully establishes
 * before anything else moves. Only then does the cascade begin — nothing
 * appears before the background is set. Beats overlap slightly within the
 * cascade so it reads as ONE continuous move, never independent elements.
 *
 * Order (matches the reference exactly):
 *   1. crossfade in → the IPS background (dissolve, not a cut)
 *   2. background fully establishes (fade + zoom-out 1.08→1.0) — alone
 *   3. diagonal white glass divider sweeps into position
 *   4. IPS title block reveals (top-left): kicker → "IPS" → subtitle → underline
 *   5. dark glass panel slides in from the left while fading in
 *   6. astrologer stays established (it lives in the background — no separate move)
 *   7. panel text reveals with staggered timing
 *   8. CTA reveals last
 *   9. hold the finished composition, then release the pin
 *
 * Power-curve easing only — slow, luxurious, no bounce / spring / abruptness.
 */
export function buildIpsCinematic(scope: HTMLElement, stageEl: HTMLElement) {
  const q = gsap.utils.selector(scope);

  const paras = q(".ips-para") as HTMLElement[];
  const split = new SplitType(paras, { types: "lines", lineClass: "ips-line" });
  const lines = split.lines ?? [];

  // frame dissolves in with the background (the crossfade), everything else hidden
  gsap.set(q(".ips-frame"), { opacity: 0 });
  gsap.set(q(".ips-bg"), { opacity: 0, scale: 1.08, yPercent: 3 });
  gsap.set(q(".ips-glass"), { opacity: 0, xPercent: -75 });
  gsap.set(q(".ips-kicker"), { opacity: 0, y: 18 });
  gsap.set(q(".ips-title"), { opacity: 0, y: 26 });
  gsap.set(q(".ips-subtitle"), { opacity: 0, y: 22 });
  gsap.set(q(".ips-underline"), { scaleX: 0, transformOrigin: "left center" });
  gsap.set(q(".ips-panel"), { opacity: 0, x: -90 });
  gsap.set(lines, { opacity: 0, y: 16 });
  gsap.set(q(".ips-cta"), { opacity: 0, scale: 0.9 });

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    scrollTrigger: {
      trigger: stageEl,
      start: "top top",
      end: "+=2400",
      pin: true,
      pinSpacing: true,
      scrub: 1.1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  tl
    // ── 1 + 2 · BACKGROUND ESTABLISHES ALONE (focus first, nothing else moves) ──
    .to(q(".ips-frame"), { opacity: 1, duration: 0.6, ease: "power1.out" }, 0.0)
    .to(q(".ips-bg"), { opacity: 1, scale: 1, yPercent: 0, duration: 1.5, ease: "power2.out" }, 0.0)

    // ── 3 · diagonal white glass divider sweeps into position (after bg is set) ──
    .to(q(".ips-glass"), { opacity: 1, xPercent: 0, duration: 1.1, ease: "power2.inOut" }, 1.55)

    // ── 4 · IPS title block reveals, top-left (kicker → IPS → subtitle → underline) ──
    .to(q(".ips-kicker"), { opacity: 1, y: 0, duration: 0.7 }, 2.05)
    .to(q(".ips-title"), { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, 2.2)
    .to(q(".ips-subtitle"), { opacity: 1, y: 0, duration: 0.75 }, 2.55)
    .to(q(".ips-underline"), { scaleX: 1, duration: 0.75, ease: "power2.inOut" }, 2.75)

    // ── 5 · dark glass panel slides in from the left + fades (after the title) ──
    .to(q(".ips-panel"), { opacity: 1, x: 0, duration: 1.0, ease: "power3.out" }, 2.95)

    // ── 7 · panel text reveals line-by-line (after the panel has arrived) ──
    .to(lines, { opacity: 1, y: 0, duration: 0.7, stagger: 0.14 }, 3.5)

    // ── 8 · CTA reveals last with a subtle scale ──
    .to(q(".ips-cta"), { opacity: 1, scale: 1, duration: 0.8 }, 4.15)

    // ── 9 · hold the finished composition before releasing the pin ──
    .to({}, { duration: 0.7 }, 4.7);

  return tl;
}

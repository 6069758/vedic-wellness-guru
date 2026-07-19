import { gsap } from "gsap";
import SplitType from "split-type";

/**
 * HERO load sequence (Slide 1). Autoplays on mount — a normal GSAP timeline,
 * not scroll-driven. Order exactly as specified:
 *
 *   1. Background softly fades in
 *   2. Ambient glow appears
 *   3. Astrologer reveals (opacity + slight upward move) — folded into the bg
 *      reveal since the astrologer is baked into the provided image
 *   4. Hero card fades in
 *   5. Heading reveals line by line
 *   6. Paragraph fades in
 *   7. CTA button reveals
 *   8. Floating particles begin moving
 *
 * Easing is smooth and weighted (power-curves) — no bounce, no spring.
 */
export function buildHeroTimeline(scope: HTMLElement) {
  const q = gsap.utils.selector(scope);

  // initial states
  // background waits ABOVE and drops straight down into place; glass card waits
  // to the RIGHT and slides in — both fading in (exactly as requested).
  // split the signature into characters so it can "write" itself in
  const nameEl = q(".hero-name")[0] as HTMLElement;
  const nameSplit = nameEl ? new SplitType(nameEl, { types: "chars" }) : null;
  const nameChars = nameSplit?.chars ?? [];

  gsap.set(q(".hero-bg"), { opacity: 0, yPercent: -26, scale: 1 });
  gsap.set(q(".hero-glow"), { opacity: 0 });
  gsap.set(q(".hero-name"), { opacity: 1 });
  gsap.set(nameChars, { opacity: 0, y: 8 });
  gsap.set(q(".hero-copy"), { opacity: 0, x: 170, scale: 0.98 });
  gsap.set(q(".reveal-inner"), { yPercent: 115 });
  gsap.set(q(".hero-body"), { opacity: 0, y: 22 });
  gsap.set(q(".hero-tagline"), { opacity: 0, y: 16 });
  gsap.set(q(".hero-cta"), { opacity: 0, scale: 0.94 });
  gsap.set(q(".nav-root"), { opacity: 0, y: -18 });
  gsap.set(q(".scroll-cue"), { opacity: 0 });
  gsap.set(q(".particle"), { opacity: 0 });

  scope.classList.remove("anim-hidden");

  const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.1 });

  // 1 + 3 — background drops down from the top into place
  tl.to(q(".hero-bg"), { opacity: 1, yPercent: 0, scale: 1, duration: 1.5, ease: "power3.out" }, 0);

  // 2 — ambient glow
  tl.to(q(".hero-glow"), { opacity: 1, duration: 1.3, ease: "sine.out" }, 0.35);

  // nav drops in alongside
  tl.to(q(".nav-root"), { opacity: 1, y: 0, duration: 0.8 }, 0.4);

  // signature "writes" itself in — character by character (handwriting feel)
  tl.to(
    nameChars,
    { opacity: 1, y: 0, duration: 0.04, stagger: 0.055, ease: "none" },
    0.9
  );

  // 4 — hero card slides in from the right
  tl.to(q(".hero-copy"), { opacity: 1, x: 0, scale: 1, duration: 1.1, ease: "power3.out" }, 0.8);

  // 5 — heading line by line (masked reveal)
  tl.to(q(".reveal-inner"), { yPercent: 0, duration: 1.0, stagger: 0.16, ease: "power4.out" }, 1.05);

  // 6 — paragraph
  tl.to(q(".hero-body"), { opacity: 1, y: 0, duration: 0.9 }, 1.7);

  // 7 — tagline + CTA
  tl.to(q(".hero-tagline"), { opacity: 1, y: 0, duration: 0.8 }, 1.95);
  tl.to(q(".hero-cta"), { opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" }, 2.15);

  // scroll cue
  tl.to(q(".scroll-cue"), { opacity: 1, duration: 0.7 }, 2.5);

  // 8 — particles begin moving (continuous drift + twinkle)
  tl.add(() => startParticles(scope), 2.2);

  return tl;
}

function startParticles(scope: HTMLElement) {
  const particles = gsap.utils.toArray<HTMLElement>(scope.querySelectorAll(".particle"));
  particles.forEach((p) => {
    const dur = parseFloat(p.dataset.dur || "8");
    const delay = parseFloat(p.dataset.delay || "0");
    gsap.to(p, { opacity: 0.8, duration: 1.2, delay });
    gsap.to(p, {
      y: "-=40",
      x: "+=14",
      duration: dur,
      delay,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to(p, {
      opacity: 0.25,
      duration: dur * 0.35,
      delay,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });
}

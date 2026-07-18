import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * CINEMATIC STAGE — the pinned, scroll-scrubbed Keynote sequence.
 *
 * The stage occupies one full viewport and is PINNED. Scrolling scrubs a single
 * master timeline that plays two "slides" inside that same viewport:
 *
 *   HERO  ──crossfade──▶  EXPLORE SERVICES ──card choreography──▶ (release pin)
 *
 * Phase 1 — true crossfade (no blank frame): the Hero fades out while the
 *           Services backdrop fades in underneath, simultaneously.
 * Phase 2 — Card 2 drops in from the top, Card 3 rises from the bottom, both
 *           converging to the centre; just before they meet, Card 1 and Card 4
 *           reveal together with an opacity + scale pop.
 *
 * When the timeline completes the pin releases and normal scrolling resumes.
 */
export function buildCinematic(scope: HTMLElement, stageEl: HTMLElement) {
  const q = gsap.utils.selector(scope);

  const sceneHero = q(".scene-hero");
  const sceneServices = q(".scene-services");
  const heading = q(".svc-head");
  const card1 = q(".svc-card-1");
  const card2 = q(".svc-card-2");
  const card3 = q(".svc-card-3");
  const card4 = q(".svc-card-4");

  // --- initial states ---
  gsap.set(sceneServices, { opacity: 0 });
  gsap.set(heading, { opacity: 0, y: 24 });
  gsap.set(card2, { yPercent: -260 }); // waiting above the stage
  gsap.set(card3, { yPercent: 260 }); //  waiting below the stage
  gsap.set([card1, card4], { opacity: 0, scale: 0.82 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: stageEl,
      start: "top top",
      end: "+=260%",
      scrub: 1,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
    },
  });

  // ── Phase 1 · true crossfade ─────────────────────────────────────────────
  tl.to(sceneHero, { opacity: 0, duration: 1, ease: "power1.inOut" }, 0);
  tl.to(sceneServices, { opacity: 1, duration: 1, ease: "power1.inOut" }, 0);
  // parallax lift on the departing hero copy (adds depth to the dissolve)
  tl.to(q(".hero-copy"), { yPercent: -16, duration: 1, ease: "power1.in" }, 0);
  // heading resolves as the backdrop lands
  tl.to(heading, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" }, 0.7);

  // ── Phase 2 · card choreography ──────────────────────────────────────────
  // Card 2 (from top) + Card 3 (from bottom) converge to the centre together
  tl.to([card2, card3], { yPercent: 0, duration: 1.2, ease: "power3.out" }, 1.1);
  // Just before they meet, Card 1 + Card 4 reveal together (opacity + scale)
  tl.to([card1, card4], { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }, 1.95);

  // small hold so the settled composition reads before the pin releases
  tl.to({}, { duration: 0.5 }, 2.45);

  ScrollTrigger.refresh();
  return tl;
}

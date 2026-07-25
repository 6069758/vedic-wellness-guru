import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Hero → Explore Services — one pinned viewport, one continuous crossfade.
 *
 * Hero (front) and Explore (behind) are stacked inside the SAME pinned stage.
 * The hero dissolves to reveal Explore while the cards choreograph in. Explore
 * lives only here — no duplicate section, no pin-gap blank. When the timeline
 * finishes the pin releases straight into the next section.
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

  gsap.set(sceneServices, { opacity: 0 });
  gsap.set(heading, { opacity: 0, y: 24 });
  gsap.set(card2, { yPercent: -260 });
  gsap.set(card3, { yPercent: 260 });
  gsap.set([card1, card4], { opacity: 0, scale: 0.82 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: stageEl,
      start: "top top",
      end: "+=220%",
      scrub: 1,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  // true crossfade — hero fades out while Explore fades in at the EXACT same time
  tl.to(sceneServices, { opacity: 1, duration: 1, ease: "power1.inOut" }, 0);
  tl.to(sceneHero, { opacity: 0, duration: 1, ease: "power1.inOut" }, 0);
  tl.to(q(".hero-copy"), { yPercent: -16, duration: 1, ease: "power1.in" }, 0);
  tl.to(heading, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" }, 0.7);

  // cards: 2 from top + 3 from bottom converge, then 1 & 4 pop in
  tl.to([card2, card3], { yPercent: 0, duration: 1.2, ease: "power3.out" }, 1.1);
  tl.to([card1, card4], { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }, 1.95);

  tl.to({}, { duration: 0.5 }, 2.45);

  ScrollTrigger.refresh();
  return tl;
}

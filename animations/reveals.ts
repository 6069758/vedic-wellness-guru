import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Scroll-reveal system for the standard content sections (Services, Trusted By,
 * CTA panels, Work, Testimonials, Blog, Footer).
 *
 * Purely additive — it never touches the Hero build-in, Magic Move, or IPS
 * build classes. Motion language matches the Keynote: soft upward settle,
 * overlapping stagger, no bounce.
 *
 * Conventions (data-attributes in the markup):
 *   [data-reveal]                 → single element, fade + rise on enter
 *   [data-reveal-group]           → container; its [data-reveal-item] children
 *                                    rise in with an overlapping stagger
 *   [data-count="30"] [suffix]    → number counts up from 0 on enter
 */
export function setupReveals(scope: HTMLElement) {
  const q = gsap.utils.selector(scope);

  // Suppress any Tailwind CSS transitions while GSAP owns the element, then
  // clear GSAP's inline styles so CSS hover (transform/shadow) works afterwards.
  const noFight = (els: Element[] | NodeListOf<Element>) => ({
    onStart: () => (els as HTMLElement[]).forEach((el) => (el.style.transition = "none")),
    clearProps: "transform,opacity" as const,
    onComplete: () =>
      (els as HTMLElement[]).forEach((el) => {
        el.style.transition = "";
      }),
  });

  // Single elements
  (q("[data-reveal]") as HTMLElement[]).forEach((el) => {
    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        ...noFight([el]),
      }
    );
  });

  // Staggered groups
  (q("[data-reveal-group]") as HTMLElement[]).forEach((group) => {
    const items = group.querySelectorAll("[data-reveal-item]");
    gsap.fromTo(
      items,
      { y: 48, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: group, start: "top 80%", once: true },
        ...noFight(items),
      }
    );
  });

  // Count-up stats
  (q("[data-count]") as HTMLElement[]).forEach((el) => {
    const target = parseFloat(el.dataset.count || "0");
    const suffix = el.dataset.suffix || "";
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
      onUpdate: () => {
        el.textContent =
          (Number.isInteger(target) ? Math.round(obj.v) : obj.v.toFixed(0)) + suffix;
      },
    });
  });

  ScrollTrigger.refresh();
}

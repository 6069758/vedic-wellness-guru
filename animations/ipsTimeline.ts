import { gsap } from "gsap";
import SplitType from "split-type";

/**
 * IPS build sequence — Slide 2 of the Keynote ("Instant Prediction System").
 *
 * The Keynote source declares these builds, in this exact order:
 *   1. wipe   2. wipe   3. wipe   4. pop   5. wipe
 *   6. keyboard (typewriter)   7. wipe   8. wipe
 *   9. move in   10. move in character
 *
 * Each Keynote build is reproduced faithfully:
 *   wipe            → directional clip-path reveal
 *   pop             → scale-from-small with an overshoot
 *   keyboard        → per-character typewriter with a blinking caret
 *   move in         → slide in from off-object + fade
 *   move in character → every glyph moves in, one after another (the climax)
 *
 * These are entrance builds, so the timeline is created PAUSED and played once
 * by a ScrollTrigger when the section is reached (scroll reveals it; it does not
 * scrub it — matching how a Keynote build fires as a self-contained sequence).
 */
export function buildIpsTimeline(scope: HTMLElement) {
  const q = gsap.utils.selector(scope);

  // --- pre-split text objects ---
  const subtitleEl = q(".ips-subtitle-text")[0] as HTMLElement;
  const subSplit = new SplitType(subtitleEl, { types: "chars" });
  const subChars = subSplit.chars ?? [];

  const titleEl = q(".ips-title")[0] as HTMLElement;
  const titleSplit = new SplitType(titleEl, { types: "chars" });
  const titleChars = titleSplit.chars ?? [];

  // --- initial (hidden) states ---
  gsap.set(
    [
      q(".ips-rule"),
      q(".ips-kicker"),
      q(".ips-emblem-line"),
      q(".ips-divider"),
      q(".ips-body-1"),
      q(".ips-body-2"),
    ],
    { clipPath: "inset(0 100% 0 0)" }
  );
  gsap.set(q(".ips-emblem"), { scale: 0.3, opacity: 0 });
  gsap.set(subChars, { opacity: 0 });
  gsap.set(q(".ips-caret"), { opacity: 0 });
  gsap.set(q(".ips-cta"), { x: 90, opacity: 0 });
  gsap.set(titleChars, { yPercent: 120, opacity: 0 });

  const WIPE = { duration: 0.7, ease: "power2.inOut" as const };

  const tl = gsap.timeline({ paused: true });

  // 1 — WIPE: top gold rule
  tl.to(q(".ips-rule"), { clipPath: "inset(0 0% 0 0)", ...WIPE }, 0.0);

  // 2 — WIPE: kicker (A TIMING METHOD)
  tl.to(q(".ips-kicker"), { clipPath: "inset(0 0% 0 0)", ...WIPE }, 0.35);

  // 3 — WIPE: emblem divider line
  tl.to(q(".ips-emblem-line"), { clipPath: "inset(0 0% 0 0)", ...WIPE }, 0.7);

  // 4 — POP: the round emblem
  tl.to(
    q(".ips-emblem"),
    { scale: 1, opacity: 1, duration: 0.55, ease: "back.out(2.2)" },
    0.95
  );

  // 5 — WIPE: hairline divider under the heading zone
  tl.to(q(".ips-divider"), { clipPath: "inset(0 0% 0 0)", ...WIPE }, 1.3);

  // 6 — KEYBOARD (typewriter): "Instant Prediction System"
  const typeDur = subChars.length * 0.045;
  tl.set(q(".ips-caret"), { opacity: 1 }, 1.55);
  tl.to(
    subChars,
    { opacity: 1, duration: 0.01, stagger: 0.045, ease: "steps(1)" },
    1.55
  );
  // caret rides the end, then blinks out
  tl.to(q(".ips-caret"), { opacity: 0, duration: 0.25, delay: 0.15 }, 1.55 + typeDur);

  // 7 — WIPE: body line 1
  tl.to(q(".ips-body-1"), { clipPath: "inset(0 0% 0 0)", ...WIPE }, 1.7 + typeDur);

  // 8 — WIPE: body line 2
  tl.to(q(".ips-body-2"), { clipPath: "inset(0 0% 0 0)", ...WIPE }, 1.95 + typeDur);

  // 9 — MOVE IN: CTA button slides in from the right
  tl.to(
    q(".ips-cta"),
    { x: 0, opacity: 1, duration: 0.75, ease: "power3.out" },
    2.25 + typeDur
  );

  // 10 — MOVE IN CHARACTER: "IPS" glyphs rise in, one by one (climax)
  tl.to(
    titleChars,
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.9,
      stagger: 0.14,
      ease: "power4.out",
    },
    2.5 + typeDur
  );

  return tl;
}

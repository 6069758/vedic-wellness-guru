"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MAIN = ["Home", "About", "Consultation", "Courses"];
const EXTRA = ["Media", "Articles", "STI Workshop", "Contact"];

/**
 * Floating glass-capsule navbar — matches the reference exactly.
 * Compact by default (4 items). On hover the collapsed group (Media, Articles,
 * STI Workshop, Contact) smoothly expands its width in (~0.62s, power3.out) and
 * shrinks back on leave. Gold illuminated active tab.
 */
export default function Navbar() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const tween = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (wrapRef.current) gsap.set(wrapRef.current, { width: 0, opacity: 0 });
  }, []);

  const expand = () => {
    const w = wrapRef.current;
    if (!w) return;
    const inner = w.firstElementChild as HTMLElement;
    const full = inner.scrollWidth;
    tween.current?.kill();
    tween.current = gsap.to(w, {
      width: full,
      opacity: 1,
      duration: 0.62,
      ease: "power3.out",
      overwrite: true,
    });
  };

  const collapse = () => {
    const w = wrapRef.current;
    if (!w) return;
    tween.current?.kill();
    tween.current = gsap.to(w, {
      width: 0,
      opacity: 0,
      duration: 0.62,
      ease: "power3.out",
      overwrite: true,
    });
  };

  return (
    <header className="nav-root nav-wrap px-4">
      <nav
        className="glass-nav"
        aria-label="Main navigation"
        onMouseEnter={expand}
        onMouseLeave={collapse}
      >
        {MAIN.map((item, i) => (
          <a key={item} href="#" className={`nav-item${i === 0 ? " active" : ""}`}>
            {item}
          </a>
        ))}

        {/* Collapsible group — revealed on hover */}
        <div ref={wrapRef} className="nav-extra-wrap">
          <div className="nav-extra-inner">
            {EXTRA.map((item) => (
              <a key={item} href="#" className="nav-item">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

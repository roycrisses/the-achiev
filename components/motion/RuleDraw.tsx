"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "./anim";

/**
 * RuleDraw — a soft rule that draws itself across the page,
 * scrub-linked to scroll, with a pine dot full-stop at the end.
 */
export default function RuleDraw({ className = "", color = "#0a3a24" }: { className?: string; color?: string }) {
  const root = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const stop = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!bar.current) return;
      if (prefersReducedMotion()) {
        gsap.set([bar.current, stop.current], { scaleX: 1, scale: 1, autoAlpha: 1 });
        return;
      }
      gsap.fromTo(
        bar.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 92%",
            end: "top 55%",
            scrub: 0.6,
          },
        }
      );
      gsap.fromTo(
        stop.current,
        { scale: 0, autoAlpha: 0 },
        {
          scale: 1,
          autoAlpha: 1,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: root.current,
            start: "top 68%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: root }
  );

  return (
    <div ref={root} aria-hidden className={`flex items-center gap-2 ${className}`}>
      <div ref={bar} className="h-[2px] flex-1 origin-left rounded-full" style={{ background: color }} />
      <span ref={stop} className="block h-2.5 w-2.5 flex-none rounded-full" style={{ background: color }} />
    </div>
  );
}

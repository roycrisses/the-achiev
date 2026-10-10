"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "./anim";

/**
 * Scribble — hand-drawn SVG stroke that draws itself when scrolled into view.
 * Variants: "underline" (editorial highlight swipe) and "circle" (annotation ring).
 */
const PATHS = {
  underline:
    "M4 14 C 60 6, 140 6, 236 10 S 380 16, 476 8",
  circle:
    "M250 12 C 140 8, 30 26, 26 62 C 22 100, 130 118, 250 114 C 370 110, 478 92, 474 56 C 470 24, 360 12, 252 14",
};

export default function Scribble({
  variant = "underline",
  className = "",
  stroke = "#E8590C",
  width = 480,
  height = 120,
}: {
  variant?: keyof typeof PATHS;
  className?: string;
  stroke?: string;
  width?: number;
  height?: number;
}) {
  const root = useRef<HTMLSpanElement>(null);
  const path = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      const el = path.current;
      if (!el) return;
      const len = el.getTotalLength();
      if (prefersReducedMotion()) {
        gsap.set(el, { strokeDasharray: len, strokeDashoffset: 0 });
        return;
      }
      gsap.set(el, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(el, {
        strokeDashoffset: 0,
        duration: 0.9,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: root.current,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: root }
  );

  return (
    <span ref={root} aria-hidden className={`pointer-events-none block ${className}`}>
      <svg
        viewBox="0 0 480 120"
        width={width}
        height={height}
        fill="none"
        preserveAspectRatio="none"
        className="h-auto w-full"
      >
        <path
          ref={path}
          d={PATHS[variant]}
          stroke={stroke}
          strokeWidth={variant === "circle" ? 7 : 9}
          strokeLinecap="square"
        />
      </svg>
    </span>
  );
}

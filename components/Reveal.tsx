"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { gsap, useGSAP, prefersReducedMotion, ScrollTrigger } from "./motion/anim";

export type RevealDirection = "up" | "down" | "left" | "right" | "zoom" | "fade";

const OFFSETS: Record<RevealDirection, { x: number; y: number; scale: number }> = {
  up: { x: 0, y: 56, scale: 1 },
  down: { x: 0, y: -56, scale: 1 },
  left: { x: -64, y: 0, scale: 1 },
  right: { x: 64, y: 0, scale: 1 },
  zoom: { x: 0, y: 24, scale: 0.92 },
  fade: { x: 0, y: 0, scale: 1 },
};

/**
 * Reveal — GSAP scroll-triggered entrance.
 * Fades + slides in from any side (or zooms) with a bounce ease,
 * replays when scrolled back into view, and snaps to final state
 * for users who prefer reduced motion.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  style,
  direction = "up",
  distance = 1,
  ease = "back.out(1.4)",
  duration = 0.85,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  direction?: RevealDirection;
  distance?: number;
  ease?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReducedMotion()) {
        gsap.set(el, { clearProps: "all" });
        return;
      }
      const off = OFFSETS[direction];
      gsap.fromTo(
        el,
        { autoAlpha: 0, x: off.x * distance, y: off.y * distance, scale: off.scale },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: ref, dependencies: [direction, delay, distance, ease, duration] }
  );

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

// Late-loading images/fonts shift layout — recalculate triggers once settled.
if (typeof window !== "undefined") {
  window.addEventListener("load", () => ScrollTrigger.refresh());
}
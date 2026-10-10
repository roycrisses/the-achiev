"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "./anim";

/**
 * HeroDoodles — bespoke annotated-margin SVG set for the masthead:
 * a dashed orbit ring, registration plus-marks and a zig-zag ticker tape.
 * All motion is GSAP (drift / spin / dash-crawl), reduced-motion safe.
 */
export default function HeroDoodles({ className = "" }: { className?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const q = gsap.utils.selector(root);
      gsap.to(q(".doodle-spin"), {
        rotation: 360,
        duration: 40,
        ease: "none",
        repeat: -1,
        transformOrigin: "50% 50%",
      });
      gsap.to(q(".doodle-dash"), {
        strokeDashoffset: -240,
        duration: 6,
        ease: "none",
        repeat: -1,
      });
      gsap.to(q(".doodle-float-a"), {
        y: -10,
        duration: 2.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(q(".doodle-float-b"), {
        y: 10,
        x: -6,
        duration: 3.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      {/* Dashed orbit ring */}
      <svg viewBox="0 0 200 200" className="doodle-spin absolute -right-8 -top-8 h-44 w-44 text-[#0a3a24]/70">
        <circle
          cx="100"
          cy="100"
          r="86"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="14 10"
          className="doodle-dash"
        />
        <rect x="94" y="2" width="12" height="12" rx="6" fill="#0a3a24" />
      </svg>
      {/* Zig-zag tape */}
      <svg viewBox="0 0 220 32" className="doodle-float-a absolute -left-4 top-6 h-7 w-44 text-[#0a3a24]/60">
        <path
          d="M2 26 L24 6 L46 26 L68 6 L90 26 L112 6 L134 26 L156 6 L178 26 L200 6 L218 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
      </svg>
      {/* Registration plus marks */}
      <svg viewBox="0 0 24 24" className="doodle-float-b absolute bottom-24 -left-2 h-6 w-6 text-[#0a3a24]/70">
        <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="4" />
      </svg>
      <svg viewBox="0 0 24 24" className="doodle-float-a absolute bottom-8 right-10 h-5 w-5 text-[#0a3a24]/50">
        <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="4" />
      </svg>
      {/* Annotation arrow */}
      <svg viewBox="0 0 90 70" className="doodle-float-b absolute -bottom-4 left-10 h-14 w-20 text-[#0a3a24]/60">
        <path
          d="M6 6 C 30 40, 50 48, 78 52 M66 44 L79 53 L68 62"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
        />
      </svg>
    </div>
  );
}

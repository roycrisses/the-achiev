"use client";

import { useId, useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP, prefersReducedMotion } from "./anim";

/**
 * OrbitBadge — rotating circular-text seal with an arrow core.
 * Custom SVG motion: the text ring spins on a linear loop,
 * the arrow core nudges on hover. Reduced-motion safe.
 */
export default function OrbitBadge({
  text = "BOOK FREE DEMO • BOOK FREE DEMO • ",
  href = "/demo",
  label = "Book a free demo class",
  className = "",
}: {
  text?: string;
  href?: string;
  label?: string;
  className?: string;
}) {
  const root = useRef<HTMLAnchorElement>(null);
  const ring = useRef<SVGGElement>(null);
  const pathId = useId();

  useGSAP(
    () => {
      if (!ring.current) return;
      if (prefersReducedMotion()) return;
      gsap.to(ring.current, {
        rotation: 360,
        duration: 14,
        ease: "none",
        repeat: -1,
        transformOrigin: "50% 50%",
      });
    },
    { scope: root }
  );

  return (
    <Link
      ref={root}
      href={href}
      aria-label={label}
      className={`group block h-28 w-28 rounded-full bg-[#0a3a24] p-1.5 text-white shadow-[0_18px_36px_-16px_rgba(10,58,36,0.6)] transition-transform hover:-translate-y-1 ${className}`}
    >
      <svg viewBox="0 0 120 120" className="h-full w-full" role="img" aria-hidden>
        <defs>
          <path id={pathId} d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" fill="none" />
        </defs>
        <g ref={ring}>
          <text fontSize="12.5" fontWeight="800" letterSpacing="2.5" fill="#ffffff">
            <textPath href={`#${pathId}`}>{text}</textPath>
          </text>
        </g>
        <g className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <rect x="46" y="46" width="28" height="28" rx="14" fill="#cbe4c6" />
          <path
            d="M52 68 L68 52 M58 52 h10 v10"
            stroke="#0a3a24"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </Link>
  );
}

"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "./anim";

/**
 * Soft pine band — infinite GSAP marquee; pauses on hover.
 */
export default function Ticker({ items }: { items: string[] }) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = track.current;
      if (!el) return;
      if (prefersReducedMotion()) {
        gsap.set(el, { xPercent: 0 });
        return;
      }
      const tween = gsap.to(el, {
        xPercent: -50,
        ease: "none",
        duration: 28,
        repeat: -1,
      });
      const pause = () => tween.pause();
      const play = () => tween.play();
      el.addEventListener("mouseenter", pause);
      el.addEventListener("mouseleave", play);
      return () => {
        el.removeEventListener("mouseenter", pause);
        el.removeEventListener("mouseleave", play);
      };
    },
    { scope: root }
  );

  const row = (ariaHidden: boolean) => (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {items.map((t, i) => (
        <span key={i} className="flex items-center">
          <span className="whitespace-nowrap px-6 text-[13px] font-bold uppercase tracking-[0.14em] text-white">
            {t}
          </span>
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden className="shrink-0 text-[#cbe4c6]">
            <rect x="2" y="2" width="8" height="8" rx="2" fill="currentColor" transform="rotate(45 6 6)" />
          </svg>
        </span>
      ))}
    </div>
  );

  return (
    <div ref={root} className="overflow-hidden bg-[#0a3a24] py-3">
      <div ref={track} className="ed-ticker-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

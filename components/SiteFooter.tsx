"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SITE } from "@/lib/data";

const EXPLORE = [
  { href: "/courses", label: "Courses" },
  { href: "/tests/free", label: "Mock Test" },
  { href: "/syllabus", label: "Syllabus" },
  { href: "/teachers", label: "Teachers" },
  { href: "/about", label: "About" },
  { href: "/counselling", label: "Counselling" },
  { href: "/faqs", label: "FAQs" },
];

const FOLLOW = [
  { href: SITE.socials.facebook, handle: "@theachievers", tag: "FB", dot: "bg-[#1877f2]" },
  { href: SITE.socials.youtube, handle: "@TheAchieversAcademy-edu", tag: "YT", dot: "bg-[#ff0000]" },
  { href: SITE.socials.tiktok, handle: "@achievers.academy10", tag: "TT", dot: "bg-[#0a3a24]" },
  { href: SITE.whatsapp, handle: "+977-9810686665", tag: "WA", dot: "bg-[#25d366]" },
];

function useNptClock() {
  const [now, setNow] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kathmandu",
    });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);
  return now;
}

export default function SiteFooter() {
  const clock = useNptClock();
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end end"] });
  const wordY = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <footer className="bg-[#faf8f3] px-3 pb-3 pt-10 sm:px-5">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="card-soft overflow-hidden"
      >
        {/* Top grid */}
        <div className="grid gap-10 px-6 pt-10 sm:px-10 lg:grid-cols-[1.2fr_0.6fr_1fr_0.9fr] lg:pt-14">
          <div>
            <Link href="/" className="inline-flex min-h-0 items-center gap-2.5" aria-label="The Achievers home">
              <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[#e4e0d4] bg-white">
                <Image src="/logo-mark.webp" alt="The Achievers logo" width={88} height={88} className="h-9 w-9 object-contain" loading="lazy" />
              </span>
              <span className="display-serif text-[22px] leading-none text-[#0a3a24]">Achievers</span>
            </Link>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-3 max-w-[250px] text-[15px] font-medium leading-snug text-[#0a3a24]/75"
            >
              Nepal&apos;s friendliest online tuition for NEB 11 &amp; 12 — live, recorded, always reachable.
            </motion.p>
            <Link href="/demo" className="btn-pine mt-5 min-h-0 px-5 py-2.5 text-[13px]">
              Book a Demo <span aria-hidden>↗</span>
            </Link>
          </div>

          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#0a3a24]/60">Explore</p>
            <ul className="mt-3 space-y-1.5 text-[13px] font-semibold text-[#0a3a24]/65">
              {EXPLORE.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <Link href={l.href} className="inline-flex min-h-0 items-center rounded-lg px-1 py-0.5 transition-colors hover:bg-[#eef5ec] hover:text-[#0a3a24]">
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#0a3a24]/60">Follow us</p>
            <div className="mt-3 flex max-w-[300px] flex-wrap gap-2">
              {FOLLOW.map((f, i) => (
                <motion.a
                  key={f.handle}
                  href={f.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                  whileHover={{ y: -2 }}
                  className="inline-flex min-h-0 items-center gap-1.5 rounded-full border border-[#e4e0d4] bg-white px-2.5 py-1.5 text-[11px] font-semibold text-[#0a3a24]/75"
                >
                  <span className={`flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-black text-white ${f.dot}`}>
                    {f.tag.slice(0, 1)}
                  </span>
                  {f.handle}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <a href={`tel:${SITE.phones[1].replace(/-/g, "")}`} className="group inline-flex min-h-0 items-center gap-2">
              <span className="text-[15px] font-bold text-[#0a3a24]">Call Achievers</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0a3a24] text-[11px] font-black text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
            <p className="mt-0.5 text-[11px] text-[#0a3a24]/50">Let&apos;s study together</p>
            <div className="my-3 border-t border-[#e4e0d4]" />
            <Link href="/counselling" className="group inline-flex min-h-0 items-center gap-2">
              <span className="text-[15px] font-bold text-[#0a3a24]">Free counselling call</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#cbe4c6] text-[11px] font-black text-[#0a3a24] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </Link>
            <p className="mt-0.5 text-[11px] text-[#0a3a24]/50">10 minutes · no pressure</p>
          </div>
        </div>

        {/* Giant cropped wordmark */}
        <motion.div style={{ y: wordY }} aria-hidden className="pointer-events-none mt-6 select-none overflow-hidden px-2">
          <p className="giant-word whitespace-nowrap text-center text-[23vw] text-[#0a3a24] lg:text-[19vw]">
            achievers
          </p>
        </motion.div>
      </motion.div>

      {/* Meta bar */}
      <div className="flex items-center justify-between px-4 py-3 text-[11px] font-medium text-[#0a3a24]/50 sm:px-6">
        <p>
          The Achievers ©2026 <span className="mx-1">·</span>
          <Link href="/privacy" className="hover:text-[#0a3a24]">Privacy Policy</Link>
          <span className="mx-1">·</span>
          <Link href="/terms" className="hover:text-[#0a3a24]">Terms</Link>
        </p>
        <p className="tabular-nums">Mahendranagar&nbsp;&nbsp;{clock}&nbsp;&nbsp;NPT</p>
      </div>
    </footer>
  );
}

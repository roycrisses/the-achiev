"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  BookOpen,
  ClipboardCheck,
  Compass,
  FlaskConical,
  Map as MapIcon,
  PenLine,
  Rocket,
  Users,
} from "lucide-react";
import { COURSES, STATS, TEACHERS } from "@/lib/data";

/* ================= Nav model ================= */

type NavLeaf = { label: string; href: string; desc?: string };
type MegaCol = { title: string; icon: ComponentType<{ className?: string }>; links: NavLeaf[] };
type NavItem = {
  label: string;
  href: string;
  match: string[];
  mega?: MegaCol[];
};

const courseLeaf = (slug: string): NavLeaf => {
  const c = COURSES.find((x) => x.slug === slug);
  return {
    label: c?.title.replace(" — ", " · ") ?? slug,
    href: `/courses/${slug}`,
    desc: c ? `Rs. ${c.price.toLocaleString()} · ${c.mode}` : undefined,
  };
};

const NAV: NavItem[] = [
  { label: "Home", href: "/", match: [] },
  {
    label: "About",
    href: "/about",
    match: ["/about", "/teachers", "/contact"],
    mega: [
      {
        title: "Explore",
        icon: Compass,
        links: [
          { label: "Our Story", href: "/about", desc: "Founded 2019 · Mahendranagar → all Nepal" },
          { label: "Why Achievers", href: "/about#pillars", desc: "The 4 promises we print" },
          { label: "Contact Us", href: "/contact", desc: "WhatsApp-first · replies in hours" },
        ],
      },
      {
        title: "Our Teachers",
        icon: Users,
        links: [
          { label: "All Faculty", href: "/teachers", desc: `${TEACHERS.length} mentors · NEB + entrance` },
          ...TEACHERS.filter((t) => t.featured).map((t) => ({
            label: t.name,
            href: `/teachers/${t.slug}`,
            desc: `${t.subject} · ${t.qualification}`,
          })),
        ],
      },
    ],
  },
  {
    label: "Courses",
    href: "/courses",
    match: ["/courses", "/demo", "/register"],
    mega: [
      {
        title: "Class 11",
        icon: BookOpen,
        links: [courseLeaf("class-11-science"), { label: "All Courses", href: "/courses", desc: "Compare every track" }],
      },
      {
        title: "Class 12",
        icon: PenLine,
        links: [courseLeaf("class-12-science"), courseLeaf("class-12-management")],
      },
      {
        title: "Entrance",
        icon: Rocket,
        links: [courseLeaf("medical-cee"), courseLeaf("class-8-10-maths")],
      },
    ],
  },
  {
    label: "Syllabus",
    href: "/syllabus",
    match: ["/syllabus", "/tests"],
    mega: [
      {
        title: "Tracks",
        icon: MapIcon,
        links: [
          { label: "Science Track", href: "/syllabus#science", desc: "Phy · Chem · Maths weightage" },
          { label: "Management Track", href: "/syllabus#management", desc: "Accounts · Economics" },
        ],
      },
      {
        title: "Practice",
        icon: ClipboardCheck,
        links: [
          { label: "Study Guide", href: "/syllabus#guide", desc: "How to read weightage" },
          { label: "Free Mock Tests", href: "/tests/free", desc: "CBT · instant results" },
        ],
      },
    ],
  },
  { label: "Counselling", href: "/counselling", match: ["/counselling"] },
];

/* ================= Motion ================= */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.24, ease: EASE } },
  exit: { opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.16, ease: "easeIn" } },
};

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.06 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: EASE } },
};

function isActive(item: NavItem, pathname: string) {
  if (item.href === "/") return pathname === "/";
  if (pathname === item.href) return true;
  return item.match.some((m) => m !== "/" && pathname.startsWith(m));
}

/* ================= Previews (right side of mega panel) ================= */

function MegaPreview({ menu }: { menu: string }) {
  if (menu === "Courses") {
    const c = COURSES[1];
    return (
      <div className="panel-mist flex w-60 flex-none flex-col p-5">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0a3a24]/70">Most enrolled</p>
        <p className="display-serif mt-2 text-xl leading-tight text-[#0a3a24]">{c.title}</p>
        <p className="mt-1 text-[12px] font-semibold text-[#0a3a24]/70">{c.subjects.slice(0, 3).join(" · ")}</p>
        <p className="mt-2 text-lg font-black tabular-nums text-[#0a3a24]">Rs. {c.price.toLocaleString()}</p>
        <Link href={`/courses/${c.slug}`} className="btn-pine mt-3 px-4 py-2 text-[12px]">
          View course <span aria-hidden>↗</span>
        </Link>
      </div>
    );
  }
  if (menu === "Syllabus") {
    return (
      <div className="panel-sage flex w-60 flex-none flex-col p-5">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0a3a24]/70">Heaviest chapters</p>
        <div className="mt-3 space-y-2.5">
          {[
            ["Organic Chemistry", "30%"],
            ["Calculus", "28%"],
            ["Mechanics", "18%"],
          ].map(([t, w]) => (
            <div key={t}>
              <div className="flex items-center justify-between text-[11px] font-bold text-[#0a3a24]">
                <span>{t}</span>
                <span className="tabular-nums">{w}</span>
              </div>
              <div className="mt-1 h-1.5 rounded-full bg-white/70">
                <div className="h-full rounded-full bg-[#0a3a24]" style={{ width: w }} />
              </div>
            </div>
          ))}
        </div>
        <Link href="/syllabus" className="btn-pine mt-4 px-4 py-2 text-[12px]">
          Open explorer <span aria-hidden>↗</span>
        </Link>
      </div>
    );
  }
  return (
    <div className="panel-pine flex w-60 flex-none flex-col p-5">
      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/60">Since 2019</p>
      <div className="mt-3 space-y-3">
        {STATS.slice(0, 3).map((s) => (
          <div key={s.label}>
            <p className="display-serif text-2xl text-white">{s.value}</p>
            <p className="text-[11px] font-semibold text-white/60">{s.label}</p>
          </div>
        ))}
      </div>
      <Link href="/about" className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-bold text-[#0a3a24]">
        Our story <span aria-hidden>↗</span>
      </Link>
    </div>
  );
}

/* ================= Desktop item ================= */

function DesktopItem({
  item,
  pathname,
  openMenu,
  setOpenMenu,
}: {
  item: NavItem;
  pathname: string;
  openMenu: string | null;
  setOpenMenu: (v: string | null) => void;
}) {
  const active = isActive(item, pathname);
  const open = openMenu === item.label;
  const hasMega = !!item.mega?.length;
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (hasMega) setOpenMenu(item.label);
  };
  const leave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    []
  );

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <Link
        href={item.href}
        aria-haspopup={hasMega ? "true" : undefined}
        aria-expanded={hasMega ? open : undefined}
        onFocus={enter}
        onClick={() => setOpenMenu(null)}
        className={`flex h-11 items-center gap-1.5 rounded-full px-4 text-[14px] font-semibold transition-colors ${
          open ? "bg-[#c0d4de] text-[#0a3a24]" : active ? "text-[#0a3a24]" : "text-[#0a3a24]/65 hover:text-[#0a3a24]"
        }`}
      >
        {item.label}
        {hasMega && (
          <motion.svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            aria-hidden
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2, ease: EASE }}
          >
            <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          </motion.svg>
        )}
      </Link>

      <AnimatePresence>
        {hasMega && open && (
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ transformOrigin: "top center" }}
            className="absolute left-1/2 top-full z-50 w-max max-w-[92vw] -translate-x-1/2 pt-3"
          >
            <div className="card-soft flex gap-2 p-3">
              <div className="min-w-0 flex-1">
                {/* Dotted connector row */}
                <div aria-hidden className="relative mx-6 mb-1 flex items-start justify-between">
                  <span className="absolute left-5 right-5 top-5 border-t-2 border-dotted border-[#0a3a24]/25" />
                  {item.mega!.map((col) => (
                    <span key={col.title} className="chip-icon relative z-10">
                      <col.icon className="h-5 w-5" />
                    </span>
                  ))}
                </div>
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  animate="show"
                  className={`grid gap-1 px-2 pb-1 pt-2 ${item.mega!.length >= 3 ? "grid-cols-3" : "grid-cols-2"}`}
                >
                  {item.mega!.map((col) => (
                    <motion.div variants={rowVariants} key={col.title} className="min-w-52 px-3 py-2">
                      <p className="text-[13px] font-black tracking-tight text-[#0a3a24]">{col.title}</p>
                      <ul className="mt-1.5 space-y-0.5">
                        {col.links.map((l) => (
                          <li key={l.label}>
                            <Link
                              href={l.href}
                              onClick={() => setOpenMenu(null)}
                              className="group block rounded-xl px-2 py-1.5 transition-colors hover:bg-[#eef5ec]"
                            >
                              <span className="block text-[13.5px] font-semibold text-[#0a3a24]/75 group-hover:text-[#0a3a24]">
                                {l.label}
                              </span>
                              {l.desc && <span className="block text-[11.5px] text-[#0a3a24]/45">{l.desc}</span>}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              <MegaPreview menu={item.label} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ================= Header ================= */

export default function SiteHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setExpanded(null);
  }

  return (
    <header ref={rootRef} className="sticky top-0 z-50 border-b border-[#e4e0d4] bg-[#faf8f3]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex min-h-0 items-center gap-2.5" aria-label="The Achievers home">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-[#e4e0d4] bg-white">
            <Image src="/logo-mark.webp" alt="The Achievers logo" width={72} height={72} className="h-8 w-8 object-contain" priority />
          </span>
          <span className="display-serif text-[26px] leading-none text-[#0a3a24]">Achievers</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <DesktopItem key={item.label} item={item} pathname={pathname} openMenu={openMenu} setOpenMenu={setOpenMenu} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/login" className="hidden items-center px-3 text-[14px] font-semibold text-[#0a3a24]/70 hover:text-[#0a3a24] sm:inline-flex">
            Sign In
          </Link>
          <Link href="/demo" className="btn-pine hidden px-6 py-2.5 text-[14px] sm:inline-flex">
            Book a Demo
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e4e0d4] bg-white lg:hidden"
          >
            <motion.span animate={mobileOpen ? "open" : "closed"} className="relative block h-4 w-5" aria-hidden>
              <motion.span
                className="absolute left-0 top-0 h-[2.5px] w-full rounded bg-[#0a3a24]"
                variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 6.5 } }}
                transition={{ duration: 0.2, ease: EASE }}
              />
              <motion.span
                className="absolute left-0 top-[6.5px] h-[2.5px] w-full rounded bg-[#0a3a24]"
                variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="absolute bottom-0 left-0 h-[2.5px] w-full rounded bg-[#0a3a24]"
                variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -6.5 } }}
                transition={{ duration: 0.2, ease: EASE }}
              />
            </motion.span>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden border-t border-[#e4e0d4] bg-[#faf8f3] lg:hidden"
          >
            <motion.ul variants={listVariants} initial="hidden" animate="show" className="max-h-[70vh] overflow-y-auto px-4 py-3">
              {NAV.map((item) => {
                const hasMega = !!item.mega?.length;
                const isOpen = expanded === item.label;
                const active = isActive(item, pathname);
                return (
                  <motion.li key={item.label} variants={rowVariants} className="border-b border-[#e4e0d4] last:border-0">
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={`flex flex-1 items-center rounded-2xl px-3 py-3 text-[16px] font-bold tracking-tight ${
                          active ? "bg-[#c0d4de] text-[#0a3a24]" : "text-[#0a3a24]"
                        }`}
                      >
                        {item.label}
                      </Link>
                      {hasMega && (
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-label={`Expand ${item.label}`}
                          onClick={() => setExpanded(isOpen ? null : item.label)}
                          className="flex h-11 w-11 items-center justify-center"
                        >
                          <motion.svg width="12" height="12" viewBox="0 0 10 10" aria-hidden animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2, ease: EASE }}>
                            <path d="M2 3.5L5 6.5L8 3.5" stroke="#0a3a24" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                          </motion.svg>
                        </button>
                      )}
                    </div>
                    <AnimatePresence initial={false}>
                      {hasMega && isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3 px-3 pb-3">
                            {item.mega!.map((col) => (
                              <div key={col.title} className="rounded-2xl bg-white p-3 ring-1 ring-[#e4e0d4]">
                                <p className="flex items-center gap-2 px-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#0a3a24]/60">
                                  <span className="chip-icon h-7 w-7 rounded-lg"><col.icon className="h-4 w-4" /></span>
                                  {col.title}
                                </p>
                                {col.links.map((l) => (
                                  <Link key={l.label} href={l.href} className="block rounded-xl px-2 py-2 text-[14px] font-semibold text-[#0a3a24]/80">
                                    {l.label}
                                    {l.desc && <span className="block text-[12px] font-medium text-[#0a3a24]/45">{l.desc}</span>}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </motion.ul>
            <div className="flex gap-2 border-t border-[#e4e0d4] bg-white/60 p-4">
              <Link href="/register" className="inline-flex flex-1 items-center justify-center rounded-full border border-[#0a3a24]/20 bg-white px-4 py-3 text-sm font-bold text-[#0a3a24]">
                Register
              </Link>
              <Link href="/demo" className="btn-pine flex-1 px-4 py-3 text-sm">
                Book a Demo
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { COURSES, FAQS, IMAGES, STATS, SUBJECTS, TEACHERS, TESTIMONIALS } from "@/lib/data";
import { subjectClass } from "@/lib/subjects";
import Reveal from "@/components/Reveal";
import TextAnimation from "@/components/ui/staggerText";
import StatsCounter from "@/components/ui/stats-counter";
import FlipText from "@/components/ui/flip-text";
import PopButton from "@/components/ui/pop-button";
import Ticker from "@/components/motion/Ticker";
import OrbitBadge from "@/components/motion/OrbitBadge";
import Scribble from "@/components/motion/Scribble";
import RuleDraw from "@/components/motion/RuleDraw";
import HeroDoodles from "@/components/motion/HeroDoodles";
import TechText from "@/components/bits/TechText";
import { StaggerTestimonials } from "@/components/bits/StaggerTestimonials";

const STEPS = [
  { n: "01", t: "Book demo", d: "Pick class + subject, get your slot on SMS in 30 seconds.", detail: "No payment, no pressure — sit in a real live batch with real students and judge the teaching yourself." },
  { n: "02", t: "Attend live", d: "Daily classes with JEE, IOE and MBBS ranker teachers.", detail: "Fixed morning timetable from our Mahendranagar studio, plus an evening doubt hour. Missed it? The recording lands the same day." },
  { n: "03", t: "Practice", d: "Chapter tests + full NEB model sets with instant results.", detail: "Every chapter ends with a test; every term ends with timed model sets marked against the real NEB scheme." },
  { n: "04", t: "Track", d: "Scores, weak areas and a revision plan your parents can see.", detail: "Monthly parent calls translate marks into a plain-language plan: what to revise, in what order, by when." },
];

const USPS = [
  ["Live + Recorded, 24/7", "Never miss a class. Every live session is recorded and uploaded the same day — rewatch at 2x before exams, pause on tough derivations, and keep lifetime access to your batch's full archive."],
  ["Free NEB-style mocks", "Chapterwise tests after every chapter plus full-length board-pattern model sets with instant scoring. Our mocks mirror real NEB difficulty so closely that students call the actual board exam 'just another Achievers test'."],
  ["Ranker teachers", "JEE, IOE and MBBS scholars who cracked the exact exams you're preparing for — teaching in simple Nepali + English, with the shortcuts and traps only a ranker notices. Real names, real ranks, verifiable."],
  ["Parent-visible progress", "Attendance, test scores and weak-area maps shared with parents every month on scheduled calls. No black box: families always know where the preparation stands and what happens next."],
  ["Doubt support anytime", "Stuck at 10pm before a test? Drop the question on WhatsApp with a photo of your attempt. Mentors reply with worked solutions — median first-response time under 3 hours, even on exam eve."],
  ["One roof, every goal", "NEB Science, Management, Medical CEE and school foundations run on one timetable, one app, one parent login. Siblings in different classes, one family dashboard — switch tracks without switching institutes."],
];

const TICKER_ITEMS = [
  "Admissions open — 2083 intake",
  "Class 11 Science (PCMB)",
  "Class 12 Board Sprint",
  "Medical CEE Crash Course",
  "Free NEB-style mocks",
  "Book a free demo in 30 seconds",
];

const SUBJECT_META: Record<string, string> = {
  Physics: "Mechanics → Electromagnetism",
  Chemistry: "Physical → Organic → Inorganic",
  Mathematics: "Calculus → Algebra → Trig",
  Biology: "Botany → Zoology · CEE-ready",
  Accountancy: "Journal → Final Accounts",
  Economics: "Micro → Macro",
  English: "Grammar → Writing Skills",
  "Computer Science": "Python → NEB Practicals",
};

const METHOD = [
  ["Learn live, loud and questioned", "Ninety-minute sessions where silence is suspicious. Teachers cold-call, run 60-second numerical sprints mid-class, and refuse to move on until the chat doubts dry up. Concepts land in class — homework is for sharpening, not first contact."],
  ["Practice against the clock", "Chapter tests every fortnight, full model sets every term, all timed and marked to the NEB scheme. You learn time budgeting the way athletes learn pacing: by racing, weekly, until the board paper feels like familiar ground."],
  ["Track everything, guess nothing", "Every score feeds a weak-area map per subject. Monthly parent calls turn that map into a plain revision order — which chapters, how many hours, by which date. Progress you can point at beats motivation you have to summon."],
];

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.35]);

  return (
    <div className="bg-[#faf8f3]">
      {/* ============ HERO — split pastel panels ============ */}
      <section className="px-3 pt-4 sm:px-5">
        <div ref={heroRef} className="mx-auto max-w-6xl">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="grid items-stretch gap-4 lg:grid-cols-[1.05fr_0.95fr]"
          >
            {/* Left — sage panel */}
            <div className="panel-sage relative overflow-hidden p-7 sm:p-10">
              <HeroDoodles />
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-[#0a3a24]">
                  <span className="h-2 w-2 rounded-full bg-[#0a3a24]" aria-hidden />
                  Admissions open · 2083 intake
                </p>
                <h1 className="display-serif mt-4 text-[13vw] text-[#0a3a24] sm:text-6xl lg:text-[4.2rem]">
                  <TextAnimation delay={0.05}>Learn today.</TextAnimation>
                  <br />
                  <TextAnimation delay={0.2}>Lead tomorrow.</TextAnimation>
                </h1>
                <Scribble stroke="#0a3a24" className="mt-1 max-w-md opacity-60" />
                <p className="ed-standfirst mt-4 max-w-md !text-[#0a3a24]/75">
                  NEB Class 11 &amp; 12 tuition from Nepal&apos;s top ranker teachers — live classes,
                  chapterwise notes &amp; free NEB-style mocks. Six years, 100,000+ learners, one
                  stubborn belief: a student in Mahendranagar deserves the same first bench as a
                  student in Kathmandu.
                </p>
                <form
                  className="mt-5 flex max-w-md items-center gap-2 rounded-full border border-[#0a3a24]/10 bg-white py-1.5 pl-4 pr-1.5 shadow-[0_16px_36px_-20px_rgba(10,58,36,0.4)]"
                  onSubmit={(e) => { e.preventDefault(); router.push("/courses"); }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0 text-[#0a3a24]/40">
                    <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="2" />
                    <path d="M11 11l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search courses..."
                    aria-label="Search courses"
                    className="w-full bg-transparent text-sm font-medium text-[#1c2b22] outline-none placeholder:text-[#0a3a24]/35"
                  />
                  <button type="submit" aria-label="Search" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0a3a24] text-white">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path d="M7 1v10M2.5 6.5L7 11l4.5-4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </form>
                <p className="mt-3 text-[13px] font-semibold text-[#0a3a24]/80">
                  <span className="text-[#e8590c]">★</span> 4.9/5 — loved by 100K+ students &amp; parents
                </p>
                <Link href="/demo" className="group mt-5 flex items-center justify-between gap-3 rounded-2xl bg-[#0a3a24] px-6 py-4 text-white shadow-[0_20px_40px_-18px_rgba(10,58,36,0.6)]">
                  <span className="text-lg font-bold">Book a Free Demo</span>
                  <span aria-hidden className="text-2xl font-light transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </motion.div>
            </div>

            {/* Right — mist panel with floating cards */}
            <div className="panel-mist relative overflow-hidden p-5 sm:p-7">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex h-full flex-col gap-3"
              >
                <div className="card-soft overflow-hidden !rounded-2xl">
                  <Image
                    src={IMAGES.hero}
                    alt="Achievers students studying together with a laptop"
                    width={1200}
                    height={900}
                    priority
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <p className="ed-caption flex items-center justify-between px-4 py-2.5">
                    <span><strong>Cover story —</strong> first bench, anywhere in Nepal</span>
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="card-soft p-4 !rounded-2xl">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#0a3a24]/55">This week</p>
                    <p className="display-serif mt-1 text-2xl text-[#0a3a24]"><StatsCounter value={40} suffix="+" /></p>
                    <p className="text-[12px] font-medium text-[#0a3a24]/60">live classes + tests</p>
                  </div>
                  <div className="card-soft p-4 !rounded-2xl">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#0a3a24]/55">Active now</p>
                    <p className="display-serif mt-1 text-2xl text-[#0a3a24]"><StatsCounter value={100} suffix="K+" /></p>
                    <p className="text-[12px] font-medium text-[#0a3a24]/60">learners across Nepal</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Live Classes", "Free Mocks", "Notes"].map((t) => (
                    <span key={t} className="rounded-full bg-white px-4 py-1.5 text-[12px] font-bold text-[#0a3a24] shadow-sm">{t}</span>
                  ))}
                </div>
              </motion.div>
              <OrbitBadge className="absolute -bottom-2 right-4 sm:right-6" />
            </div>
          </motion.div>

          {/* Proof strip — like the investor row */}
          <div className="mx-auto max-w-4xl px-2 pb-10 pt-8 text-center">
            <Reveal>
              <p className="text-[15px] font-semibold text-[#0a3a24]/70">Trusted by 100,000+ families across Nepal</p>
              <div className="mt-5 flex flex-wrap items-end justify-center gap-x-10 gap-y-4">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p className="display-serif text-3xl text-[#0a3a24] sm:text-4xl">{s.value}</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0a3a24]/50">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Ticker items={TICKER_ITEMS} />

      {/* ============ 01 · HOW IT WORKS ============ */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <RuleDraw />
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="flex items-baseline gap-4">
                <span className="ed-index text-6xl sm:text-7xl">01</span>
                <p className="ed-kicker">How it works</p>
              </div>
              <h2 className="ed-display mt-3 text-3xl text-[#1c2b22] sm:text-4xl">
                Guided like a mentor, not a catalogue.
              </h2>
              <p className="ed-standfirst mt-3 max-w-sm">
                Scroll — each step sticks while the next one arrives. One clear action per screen, always.
              </p>
              <Link href="/counselling" className="btn-pine mt-5 px-6 py-3 text-sm">
                Talk to a Counsellor <span aria-hidden>↗</span>
              </Link>
            </Reveal>
          </div>
          <div className="space-y-3">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="lg:sticky"
                style={{ top: `${112 + i * 12}px` }}
              >
                <div className="card-soft p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <p className="rounded-full bg-[#eef5ec] px-3 py-1 text-[11px] font-black tracking-[0.16em] text-[#0a3a24]">STEP {s.n}</p>
                    <span className="ed-index text-4xl">{s.n}</span>
                  </div>
                  <p className="mt-2 text-xl font-bold tracking-tight text-[#1c2b22]">{s.t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#5d6f63]">{s.d}</p>
                  <p className="mt-3 border-t border-[#e4e0d4] pt-3 text-[13px] font-medium leading-relaxed text-[#0a3a24]/75">{s.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 02 · SUBJECTS ============ */}
      <section className="px-3 sm:px-5">
        <div className="mx-auto max-w-6xl rounded-[26px] bg-white px-5 py-12 ring-1 ring-[#e4e0d4] sm:px-8">
          <Reveal>
            <div className="flex items-baseline gap-4">
              <span className="ed-index text-6xl sm:text-7xl">02</span>
              <p className="ed-kicker">The index</p>
            </div>
            <h2 className="ed-display mt-3 text-3xl text-[#1c2b22] sm:text-4xl">Every subject, one tap away</h2>
          </Reveal>
          <div className="mt-6 border-t border-[#e4e0d4]">
            {SUBJECTS.map((s, i) => (
              <Reveal key={s} delay={Math.min(i * 0.03, 0.2)}>
                <Link
                  href="/courses"
                  className="ed-row group flex items-center justify-between gap-4 border-b border-[#e4e0d4] px-2 py-3.5 sm:px-4"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-[11px] font-black tabular-nums text-[#0a3a24]/45">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-lg font-bold tracking-tight sm:text-xl">{s}</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="ed-row-sub mr-2 hidden rounded-full px-3 py-1 text-[11px] font-bold sm:inline-block">
                      <span className={`rounded-full px-2 py-0.5 ${subjectClass(s)}`}>
                        {SUBJECT_META[s] ?? "NEB 11 · 12"}
                      </span>
                    </span>
                    <span className="ed-row-arrow flex h-9 w-9 items-center justify-center rounded-full bg-[#eef5ec] text-sm font-black text-[#0a3a24]">↗</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 03 · COURSES ============ */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <RuleDraw />
        <Reveal>
          <div className="mt-8 flex items-end justify-between gap-4">
            <div className="flex items-baseline gap-4">
              <span className="ed-index text-6xl sm:text-7xl">03</span>
              <div>
                <p className="ed-kicker">Courses &amp; Tools</p>
                <FlipText as="h2" className="ed-display mt-2 text-3xl text-[#1c2b22] sm:text-4xl">Current courses</FlipText>
              </div>
            </div>
            <Link href="/courses" className="shrink-0 text-[13px] font-black uppercase tracking-[0.1em] text-[#0a3a24]">All courses ↗</Link>
          </div>
        </Reveal>
        <div className="mt-6 space-y-4">
          {COURSES.slice(0, 3).map((c, i) => (
            <motion.article
              key={c.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
              whileHover={{ y: -3 }}
              className="card-soft p-6 sm:p-7 lg:sticky"
              style={{ top: `${112 + i * 14}px` }}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#0a3a24]/50">{c.track} · {c.mode}</p>
                  <h3 className="display-serif mt-1 text-2xl text-[#1c2b22]">{c.title}</h3>
                  <p className="mt-1 text-[13px] font-medium text-[#5d6f63]">{c.subjects.join(" · ")}</p>
                  <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-[#5d6f63]">{c.blurb}</p>
                  <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0a3a24]">{c.schedule}</p>
                </div>
                <div className="flex shrink-0 items-center gap-3 border-t border-[#e4e0d4] pt-4 sm:border-0 sm:pt-0">
                  <p className="text-lg font-black tabular-nums text-[#0a3a24]">Rs. {c.price.toLocaleString()}</p>
                  <Link href={`/courses/${c.slug}`} className="btn-pine px-5 py-2.5 text-[13px]">
                    View + Enroll <span aria-hidden>↗</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ============ PHOTO ESSAY ============ */}
      <section className="px-3 sm:px-5">
        <div className="mx-auto max-w-6xl rounded-[26px] bg-white px-5 py-12 ring-1 ring-[#e4e0d4] sm:px-8">
          <Reveal>
            <p className="ed-kicker">Field notes · Photo essay</p>
            <h2 className="ed-display mt-3 max-w-xl text-3xl text-[#1c2b22] sm:text-4xl">Dispatches from the classroom</h2>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {IMAGES.essay.map((img, i) => (
              <Reveal key={img.src} delay={i * 0.07}>
                <figure className="group overflow-hidden rounded-[20px] border border-[#e4e0d4] bg-white shadow-[0_20px_44px_-26px_rgba(10,58,36,0.35)] transition-transform hover:-translate-y-1">
                  <div className="overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.caption}
                      width={900}
                      height={700}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="ed-caption px-4 pb-3 pt-2.5">
                    <strong>Fig. {String(i + 2).padStart(2, "0")} — {img.caption}.</strong> {img.note}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 04 · METHOD (sage panel) ============ */}
      <section className="px-3 pt-4 sm:px-5">
        <div className="panel-sage mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="flex items-baseline gap-4">
                <span className="display-serif text-6xl text-white/80 sm:text-7xl">04</span>
                <p className="ed-kicker">The method</p>
              </div>
              <h2 className="ed-display mt-3 text-3xl text-[#0a3a24] sm:text-4xl">Three habits. Zero shortcuts.</h2>
              <p className="ed-standfirst mt-3 max-w-md !text-[#0a3a24]/75">
                Toppers are not born in board week — they are manufactured across eleven quiet months.
                Our whole timetable is built around three habits that compound: show up live, practice
                against the clock, and let the numbers tell you what to fix next.
              </p>
              <Link href="/demo" className="btn-pine mt-5 px-6 py-3 text-sm">
                Feel the Method Live <span aria-hidden>↗</span>
              </Link>
            </Reveal>
            <div className="space-y-3">
              {METHOD.map(([t, d], i) => (
                <Reveal key={t} delay={i * 0.06}>
                  <div className="rounded-[20px] bg-white/85 p-6 backdrop-blur">
                    <p className="text-[11px] font-black tabular-nums tracking-[0.2em] text-[#0a3a24]/60">Habit {String(i + 1).padStart(2, "0")}</p>
                    <p className="mt-1 text-lg font-bold tracking-tight text-[#0a3a24]">{t}</p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[#0a3a24]/70">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 05 · WHY US ============ */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <RuleDraw />
        <div className="mt-8">
          <Reveal>
            <div className="flex items-baseline gap-4">
              <span className="ed-index text-6xl sm:text-7xl">05</span>
              <p className="ed-kicker">Why Achievers</p>
            </div>
            <h2 className="ed-display mt-3 text-3xl text-[#1c2b22] sm:text-4xl">Why 100K+ families stay</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {USPS.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.06}>
                <div className="card-soft h-full p-6">
                  <p className="text-[11px] font-black tabular-nums text-[#0a3a24]/45">{String(i + 1).padStart(2, "0")}</p>
                  <p className="mt-1 text-[16px] font-bold tracking-tight text-[#1c2b22]">{t}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#5d6f63]">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 06 · FACULTY ============ */}
      <section className="px-3 sm:px-5">
        <div className="panel-mist mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <div className="flex items-baseline gap-4">
                <span className="display-serif text-6xl text-white/85 sm:text-7xl">06</span>
                <div>
                  <p className="ed-kicker">Faculty</p>
                  <h2 className="ed-display mt-2 text-3xl text-[#0a3a24] sm:text-4xl">Learn from rankers, not strangers</h2>
                </div>
              </div>
              <Link href="/teachers" className="hidden shrink-0 text-[13px] font-black uppercase tracking-[0.1em] text-[#0a3a24] sm:block">All faculty ↗</Link>
            </div>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEACHERS.filter((t) => t.featured).map((t, i) => (
              <Reveal key={t.slug} delay={i * 0.05}>
                <motion.article whileHover={{ y: -4 }} className="group rounded-[20px] bg-white/90 p-5 text-center backdrop-blur">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full ring-4 ring-white">
                    <Image
                      src={t.photo}
                      alt={`Portrait of ${t.name}`}
                      width={400}
                      height={400}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-[15px] font-bold tracking-tight text-[#0a3a24]">{t.name}</p>
                  <p className="mt-0.5 text-[12px] font-semibold text-[#0a3a24]/60">{t.subject} · {t.qualification}</p>
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#0a3a24]/40">{t.experience} teaching</p>
                </motion.article>
              </Reveal>
            ))}
          </div>
          <Link href="/teachers" className="mt-5 text-[13px] font-black uppercase tracking-[0.1em] text-[#0a3a24] sm:hidden">All faculty ↗</Link>
        </div>
      </section>

      {/* ============ 07 · PROOF ============ */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <RuleDraw />
        <Reveal>
          <div className="mt-8 flex items-baseline gap-4">
            <span className="ed-index text-6xl sm:text-7xl">07</span>
            <p className="ed-kicker">Proof, not promises</p>
          </div>
          <FlipText as="h2" className="ed-display mt-3 text-3xl text-[#1c2b22] sm:text-4xl">Students + parents on record</FlipText>
          <p className="ed-standfirst mt-3 max-w-xl">Tap any card to bring it to the front — eight real voices, unscripted.</p>
        </Reveal>
        <Reveal className="mt-6">
          <StaggerTestimonials />
        </Reveal>
        <div className="mt-6 hidden grid-cols-2 gap-4 sm:grid lg:grid-cols-4">
          {TESTIMONIALS.slice(0, 4).map((t) => (
            <figure key={t.name} className="card-soft flex h-full flex-col p-5">
              <span aria-hidden className="ed-serif text-4xl font-black leading-none text-[#0a3a24]/25">&ldquo;</span>
              <blockquote className="ed-serif -mt-2 flex-1 text-[14px] italic leading-relaxed text-[#1c2b22]/85">{t.text}</blockquote>
              <figcaption className="mt-3 border-t border-[#e4e0d4] pt-3 text-[13px] font-bold text-[#0a3a24]">
                {t.name} <span className="font-medium text-[#0a3a24]/55">· {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="px-3 sm:px-5">
        <div className="mx-auto max-w-4xl rounded-[26px] bg-white px-5 py-12 ring-1 ring-[#e4e0d4] sm:px-10">
          <Reveal>
            <p className="ed-kicker">Appendix</p>
            <FlipText as="h2" className="ed-display mt-3 text-3xl text-[#1c2b22] sm:text-4xl">Quick answers</FlipText>
          </Reveal>
          <div className="mt-5 border-t border-[#e4e0d4]">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="group border-b border-[#e4e0d4] py-4">
                  <summary className="flex cursor-pointer list-none items-baseline gap-4 text-[15px] font-bold tracking-tight text-[#1c2b22] [&::-webkit-details-marker]:hidden">
                    <span className="text-[11px] tabular-nums text-[#0a3a24]/45">{String(i + 1).padStart(2, "0")}</span>
                    {f.q}
                    <span aria-hidden className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eef5ec] text-lg font-black text-[#0a3a24] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-2 pl-8 text-[13px] leading-relaxed text-[#5d6f63]">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ APP CTA — pine panel ============ */}
      <section className="px-3 py-4 sm:px-5">
        <Reveal className="mx-auto max-w-6xl">
          <div className="panel-pine grid gap-6 p-8 sm:grid-cols-2 sm:items-center sm:p-10">
            <div>
              <p className="ed-display text-3xl text-white">Get the Android app</p>
              <p className="mt-2 max-w-sm text-[14px] font-medium leading-relaxed text-white/65">Live classes · Mock tests · Progress tracking · Anytime access — the whole institute, in your pocket.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <PopButton
                onClick={() => router.push("/demo")}
                className="w-full flex-1 normal-case rounded-full border-[#cbe4c6] bg-white px-5 py-3.5 text-sm font-bold text-[#0a3a24] shadow-[0_10px_0_-2px_#cbe4c6,0_10px_0_0_rgba(255,255,255,0.25)] hover:shadow-[0_6px_0_-2px_#cbe4c6,0_6px_0_0_rgba(255,255,255,0.25)] active:shadow-[0_0px_0_-2px_#cbe4c6,0_0px_0_0_rgba(255,255,255,0.25)]"
              >
                Book Free Demo ↗
              </PopButton>
              <a href="https://play.google.com/store/apps/details?id=com.theachievers.learning" target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center rounded-full border border-white/25 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10">Google Play</a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ COLOPHON — living wordmark ============ */}
      <section className="mx-auto max-w-6xl px-4 pb-14 pt-6 sm:px-6">
        <Reveal>
          <div className="card-soft overflow-hidden p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="ed-kicker">Colophon · set in Fraunces</p>
              <p className="text-[12px] font-semibold text-[#0a3a24]/50">Move your pointer — drag a letter, it springs home</p>
            </div>
            <div className="mt-2 h-[300px] w-full sm:h-[360px]">
              <TechText
                text="ACHIEVERS"
                color="#0a3a24"
                accentColor="#0a3a24"
                fontWeight={560}
                fontSize={150}
                reveal="letter"
                specks={12}
              />
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

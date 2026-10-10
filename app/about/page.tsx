"use client";

import Link from "next/link";
import { STATS, TEACHERS } from "@/lib/data";
import Reveal from "@/components/Reveal";
import RuleDraw from "@/components/motion/RuleDraw";

const TIMELINE = [
  ["2019", "A single room in Mahendranagar", "Divyanshu Thapa starts weekend Physics batches for 14 students. No app, no studio — just a whiteboard, past papers, and a rule: nobody leaves with a doubt."],
  ["2021", "The online leap", "When classrooms closed, Achievers went live. Recorded lessons, WhatsApp doubt threads and the first free NEB mocks take the batch from one town to all seven provinces."],
  ["2023", "100K learners + the app", "The Android app launches with live classes, CBT mocks and parent-visible progress. CEE crash batches begin, taught by the institute's own MBBS scholars."],
  ["2026", "The 2083 edition", "30+ ranker mentors, five tracks, 95%+ pass rate — and the same founding rule, printed on every timetable: nobody leaves with a doubt."],
];

const VALUES = [
  ["Proof beats promises", "Free demo before payment. Free mocks before enrollment. Real teacher names with verifiable ranks. We would rather you test us than trust us."],
  ["Parents are partners", "Monthly progress calls, shared score sheets, honest weak-area maps. A family that can see the preparation will always support it."],
  ["Nepali first, English fluent", "Concepts in the language you think in, terminology in the language NEB examines in. Switching cost: zero."],
  ["Small batches, loud classes", "Capped seats per batch so teachers know names, not roll numbers. Cold-calling, mid-class sprints and doubt hours keep every class loud."],
];

export default function AboutPage() {
  return (
    <div className="bg-[#faf8f3]">
      <section className="px-3 pt-4 sm:px-5">
        <div className="panel-sage mx-auto max-w-5xl px-6 py-10 sm:px-10">
          <Reveal>
            <p className="ed-kicker">About · Since 2019</p>
            <h1 className="ed-display mt-3 max-w-3xl text-4xl text-[#0a3a24] sm:text-5xl">
              Quality tuition from home, for every Nepali student.
            </h1>
            <p className="ed-standfirst ed-dropcap mt-5 max-w-2xl !text-[#0a3a24]/75">
              The Achievers Institute of Learning began in 2019 as a weekend Physics batch in
              Mahendranagar, Kanchanpur — fourteen students, one whiteboard, and a founder who had
              just ranked through IOE himself. Six years later we teach 100,000+ learners across
              Nepal, live from our studio and recorded for everyone who cannot attend live.
            </p>
            <p className="ed-standfirst mt-3 max-w-2xl !text-[#0a3a24]/75">
              We exist for a simple unfairness: a student in Kathmandu could always buy better
              preparation than a student in Mahendranagar, Dhangadhi or Dadeldhura. We built the
              opposite: small live batches, ranker teachers who take doubts daily, board-pattern
              tests with real marking, and parents who can see every score.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="rounded-[20px] bg-white/85 p-5 text-center backdrop-blur">
                  <p className="display-serif text-3xl text-[#0a3a24]">{s.value}</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0a3a24]/55">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <RuleDraw />
        <Reveal>
          <p className="ed-kicker mt-8">The record so far</p>
          <h2 className="ed-display mt-3 text-3xl text-[#1c2b22] sm:text-4xl">Seven years, four chapters</h2>
        </Reveal>
        <div className="mt-6">
          {TIMELINE.map(([year, title, body], i) => (
            <Reveal key={year} delay={i * 0.04}>
              <div className="card-soft mb-3 grid gap-2 p-5 sm:grid-cols-[100px_1fr_1.4fr] sm:items-center sm:gap-6 sm:p-6">
                <p className="display-serif text-4xl text-[#0a3a24]">{year}</p>
                <p className="text-[15px] font-bold tracking-tight text-[#1c2b22]">{title}</p>
                <p className="text-[13px] leading-relaxed text-[#5d6f63]">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="pillars" className="scroll-mt-28 px-3 sm:px-5">
        <div className="mx-auto max-w-5xl rounded-[26px] bg-white px-6 py-12 ring-1 ring-[#e4e0d4] sm:px-10">
          <Reveal>
            <p className="ed-kicker">The 4 promises we print</p>
            <h2 className="ed-display mt-3 text-3xl text-[#1c2b22] sm:text-4xl">What &ldquo;Achievers&rdquo; has to mean</h2>
            <p className="ed-standfirst mt-3 max-w-2xl">
              Values posters fade. Timetables don&apos;t. Each promise below is attached to something
              you can check — a free class, a shared score sheet, a capped batch.
            </p>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {VALUES.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="h-full rounded-[20px] bg-[#faf8f3] p-6 ring-1 ring-[#e4e0d4]">
                  <p className="text-[11px] font-black tabular-nums tracking-[0.2em] text-[#0a3a24]/50">{String(i + 1).padStart(2, "0")}</p>
                  <p className="mt-1 text-lg font-bold tracking-tight text-[#1c2b22]">{t}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#5d6f63]">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <Reveal>
          <p className="ed-kicker">The people</p>
          <h2 className="ed-display mt-3 text-3xl text-[#1c2b22] sm:text-4xl">Taught by people who topped the same papers</h2>
          <p className="ed-standfirst mt-3 max-w-2xl">
            Our hiring bar is blunt: you must have ranked in the exam you teach — JEE, IOE, CEE,
            MBBS or university topping — and you must survive a demo class judged by students, not
            managers. That is why {TEACHERS.length} mentors carry ranks you can verify.
          </p>
        </Reveal>
        <div className="mt-5 flex flex-wrap gap-2.5">
          <Link href="/teachers" className="btn-pine px-6 py-3 text-sm">
            Meet all {TEACHERS.length} mentors <span aria-hidden>↗</span>
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-[#0a3a24]/20 bg-white px-6 py-3 text-sm font-bold text-[#0a3a24]">
            Visit the studio
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6">
        <Reveal>
          <div className="panel-pine grid gap-4 p-8 sm:grid-cols-2 sm:items-center">
            <div>
              <p className="ed-display text-2xl text-white">Don&apos;t take our word for it</p>
              <p className="mt-1 text-[13px] font-medium text-white/60">Sit in a real batch, meet a real teacher, attempt a real mock — free.</p>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <Link href="/demo" className="inline-flex flex-1 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0a3a24]">Book Free Demo <span aria-hidden>↗</span></Link>
              <Link href="/counselling" className="inline-flex flex-1 items-center justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10">Talk First</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

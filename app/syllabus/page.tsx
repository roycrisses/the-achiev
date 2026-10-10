"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SYLLABUS } from "@/lib/data";
import Reveal from "@/components/Reveal";
import RuleDraw from "@/components/motion/RuleDraw";

const TRACK_INTROS: Record<string, { title: string; body: string }> = {
  science: {
    title: "Science track",
    body: "Physics, Chemistry and Mathematics carry the heaviest numerical load in NEB — and the most predictable marking. Mechanics, Organic Chemistry and Calculus alone decide roughly a quarter of your Science aggregate. Our batches attack these chapters first, in August–October, so the rest of the year is consolidation, not panic.",
  },
  management: {
    title: "Management track",
    body: "Accountancy rewards format discipline and Economics rewards structured argument. Final Accounts and the two Economics halves are where toppers separate from passers — our practice sets drill exactly those formats until they are muscle memory.",
  },
};

export default function SyllabusPage() {
  return (
    <div className="bg-[#faf8f3]">
      <section className="px-3 pt-4 sm:px-5">
        <div className="panel-sage mx-auto max-w-5xl px-6 py-10 sm:px-10">
          <Reveal>
            <p className="ed-kicker">Syllabus Explorer</p>
            <h1 className="ed-display mt-3 max-w-3xl text-4xl text-[#0a3a24] sm:text-5xl">Study what matters — by weightage</h1>
            <p className="ed-standfirst mt-4 max-w-2xl !text-[#0a3a24]/75">
              Not all chapters are created equal. NEB publishes how many marks each unit carries,
              and toppers simply obey the arithmetic: master the heavy chapters first, secure the
              pass mark early, then chase the distinction.
            </p>
          </Reveal>
        </div>
      </section>

      {(Object.keys(SYLLABUS) as (keyof typeof SYLLABUS)[]).map((track) => (
        <section key={track} id={track} className="mx-auto max-w-5xl scroll-mt-28 px-4 py-10 sm:px-6">
          <Reveal>
            <div className="flex items-baseline gap-4">
              <span className="ed-index text-5xl sm:text-6xl">{track === "science" ? "S.01" : "M.01"}</span>
              <h2 className="ed-display text-2xl capitalize text-[#1c2b22] sm:text-3xl">{TRACK_INTROS[track].title}</h2>
            </div>
            <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[#5d6f63]">{TRACK_INTROS[track].body}</p>
          </Reveal>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {SYLLABUS[track].map((s, i) => (
              <motion.details
                key={s.subject}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.05 }}
                className="card-soft group p-5"
                open
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-bold tracking-tight text-[#1c2b22] [&::-webkit-details-marker]:hidden">
                  {s.subject}
                  <span aria-hidden className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef5ec] text-lg font-black text-[#0a3a24] transition-transform group-open:rotate-45">+</span>
                </summary>
                <ul className="mt-3 space-y-2">
                  {s.chapters.map((c) => (
                    <li key={c.title} className="flex items-center justify-between rounded-2xl bg-[#faf8f3] px-4 py-2.5 text-[13px] font-semibold text-[#1c2b22] ring-1 ring-[#e4e0d4]">
                      <span>{c.title}</span>
                      <span className="rounded-full bg-[#0a3a24] px-2.5 py-0.5 text-[11px] font-bold tabular-nums text-white">{c.weightage}</span>
                    </li>
                  ))}
                </ul>
              </motion.details>
            ))}
          </div>
        </section>
      ))}

      <section id="guide" className="scroll-mt-28 px-3 pb-14 sm:px-5">
        <div className="mx-auto max-w-5xl rounded-[26px] bg-white px-6 py-12 ring-1 ring-[#e4e0d4] sm:px-10">
          <RuleDraw />
          <Reveal>
            <p className="ed-kicker mt-8">Field guide</p>
            <h2 className="ed-display mt-3 text-3xl text-[#1c2b22] sm:text-4xl">How to read weightage like a topper</h2>
          </Reveal>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              ["Secure 40 first", "List every chapter above 15% weightage and finish those before anything else. Forty marks banked early means the rest of the year is played without fear — and fear is what ruins board papers."],
              ["Numerics are rented marks", "Physics and Maths numerics follow 6–8 repeating templates. Drill each template ten times and the board simply hands you those marks. Theory can wobble; templates don't."],
              ["Write for the checker", "NEB checkers award stepwise marks. Our answer-writing workshops teach the exact step order — given, formula, substitution, unit — that converts a correct answer into full marks instead of mercy marks."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="h-full rounded-[20px] bg-[#faf8f3] p-5 ring-1 ring-[#e4e0d4]">
                  <p className="text-[11px] font-black tabular-nums tracking-[0.2em] text-[#0a3a24]/50">Rule {i + 1}</p>
                  <p className="mt-1 font-bold tracking-tight text-[#1c2b22]">{t}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#5d6f63]">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link href="/tests/free" className="btn-pine px-6 py-3 text-sm">
                Test yourself free <span aria-hidden>↗</span>
              </Link>
              <Link href="/counselling" className="inline-flex items-center gap-2 rounded-full border border-[#0a3a24]/20 bg-white px-6 py-3 text-sm font-bold text-[#0a3a24]">
                Get a study plan
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

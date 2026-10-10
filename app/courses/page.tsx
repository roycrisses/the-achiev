"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { COURSES } from "@/lib/data";
import Reveal from "@/components/Reveal";

const TRACKS = [
  ["NEB Science", "Class 11–12 Physics, Chemistry, Maths, Biology + English. The flagship: daily live classes, board-pattern mocks and answer-writing workshops."],
  ["NEB Management", "Accountancy, Economics, Business Studies + English. Format-perfect practice and business-maths shortcuts for Class 12."],
  ["Entrance", "Medical CEE crash batches and Class 8–10 Maths foundations — objective-pattern training from Class 8 itself."],
];

export default function CoursesPage() {
  return (
    <div className="bg-[#faf8f3]">
      <section className="px-3 pt-4 sm:px-5">
        <div className="panel-mist mx-auto max-w-6xl px-6 py-10 sm:px-10">
          <Reveal>
            <p className="ed-kicker">Courses &amp; Tools</p>
            <h1 className="ed-display mt-3 max-w-3xl text-4xl text-[#0a3a24] sm:text-5xl">Pick your track, we guide the rest</h1>
            <p className="ed-standfirst mt-4 max-w-2xl !text-[#0a3a24]/75">
              Five tracks, one promise: every enrollment includes live classes, same-day recordings,
              chapterwise notes, free mocks and parent-visible progress. Compare below, then sit in a
              free demo before you decide.
            </p>
          </Reveal>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {TRACKS.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.05} direction="up">
                <div className="h-full rounded-[20px] bg-white/85 p-5 backdrop-blur">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#0a3a24]/55">Track {String(i + 1).padStart(2, "0")}</p>
                  <p className="mt-1 font-bold tracking-tight text-[#0a3a24]">{t}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#0a3a24]/70">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 0.05} direction={i % 2 === 0 ? "left" : "right"}>
              <motion.article whileHover={{ y: -4 }} className="card-soft flex h-full flex-col p-6">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#0a3a24]/50">{c.classLevel} · {c.track}</p>
                <h2 className="display-serif mt-1 text-[22px] leading-tight text-[#1c2b22]">{c.title}</h2>
                <p className="mt-1 text-[13px] font-medium text-[#5d6f63]">{c.subjects.join(" · ")} · {c.mode}</p>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#5d6f63]">{c.blurb}</p>
                <p className="mt-3 border-t border-[#e4e0d4] pt-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0a3a24]">{c.schedule}</p>
                <ul className="mt-2 space-y-1.5">
                  {c.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2 text-[12px] font-semibold text-[#0a3a24]/70">
                      <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0a3a24]" />{inc}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-lg font-black tabular-nums text-[#0a3a24]">Rs. {c.price.toLocaleString()} <span className="text-[13px] font-medium text-[#0a3a24]/50">· {c.seats} seats</span></p>
                <div className="mt-4 flex gap-2">
                  <Link href={`/courses/${c.slug}`} className="btn-pine flex-1 px-4 py-2.5 text-[13px]">View ↗</Link>
                  <Link href="/demo" className="inline-flex flex-1 items-center justify-center rounded-full bg-[#eef5ec] px-4 py-2.5 text-[13px] font-bold text-[#0a3a24] transition-colors hover:bg-[#cbe4c6]">Free Demo</Link>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-6 max-w-2xl text-[13px] leading-relaxed text-[#0a3a24]/55">
            All prices include notes, recordings, mocks and progress calls — there is nothing else to
            buy later. Two-installment plans are available on full-year courses; ask a counsellor and
            get the split in writing before you pay.
          </p>
        </Reveal>
      </section>
    </div>
  );
}

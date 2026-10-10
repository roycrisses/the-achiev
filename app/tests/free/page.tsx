"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MOCK_TESTS } from "@/lib/data";
import { subjectClass } from "@/lib/subjects";
import Reveal from "@/components/Reveal";

const RITUAL = [
  ["Attempt timed", "Same minutes as the real paper. The timer is the training — untimed practice builds knowledge, timed practice builds marks."],
  ["Read the autopsy", "Instant results break every question into topic, difficulty and time spent. Your weak-area map updates the moment you submit."],
  ["Close the loop", "Retake the same test after revision and watch the delta. A 15-mark jump on a retake is worth more motivation than any speech."],
];

export default function FreeTestsPage() {
  return (
    <div className="bg-[#faf8f3]">
      <section className="px-3 pt-4 sm:px-5">
        <div className="panel-sage mx-auto max-w-6xl px-6 py-10 sm:px-10">
          <Reveal>
            <p className="ed-kicker">Courses &amp; Tools</p>
            <h1 className="ed-display mt-3 max-w-3xl text-4xl text-[#0a3a24] sm:text-5xl">Free mock tests — exactly like NEB</h1>
            <p className="ed-standfirst mt-4 max-w-2xl !text-[#0a3a24]/75">
              Chapterwise tests plus full-length board-pattern model sets, on a real CBT runner with
              instant scoring. No payment to preview, no account needed to start — pick a paper below
              and see where you stand in the next thirty minutes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_TESTS.map((t, i) => (
            <Reveal key={t.id} delay={(i % 3) * 0.05}>
              <motion.article whileHover={{ y: -4 }} className="card-soft flex h-full flex-col p-6">
                <span className={`inline-block w-fit rounded-full px-3 py-1 text-[11px] font-bold shadow-sm ${subjectClass(t.subject)}`}>{t.subject}</span>
                <h2 className="mt-3 font-bold tracking-tight text-[#1c2b22]">{t.title}</h2>
                <p className="mt-1 text-[13px] font-medium tabular-nums text-[#5d6f63]">{t.questions} Qs · {t.minutes} min · {t.difficulty}</p>
                <p className="mt-2 flex-1 text-[12px] leading-relaxed text-[#5d6f63]">
                  {t.questions >= 50
                    ? "A full board rehearsal: the complete paper, full time pressure, NEB-scheme marking breakdown at the end."
                    : "A surgical chapter strike: every important template from this unit, timed per-question so pacing becomes instinct."}
                </p>
                <Link href={`/tests/${t.id}`} className="btn-pine mt-4 w-full px-4 py-2.5 text-[13px]">
                  Start Test ↗
                </Link>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-3 pb-14 sm:px-5">
        <div className="mx-auto max-w-6xl rounded-[26px] bg-white px-6 py-12 ring-1 ring-[#e4e0d4] sm:px-10">
          <Reveal>
            <p className="ed-kicker">The ritual</p>
            <h2 className="ed-display mt-3 text-3xl text-[#1c2b22] sm:text-4xl">How toppers use mocks</h2>
          </Reveal>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {RITUAL.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="h-full rounded-[20px] bg-[#faf8f3] p-5 ring-1 ring-[#e4e0d4]">
                  <p className="text-[11px] font-black tabular-nums tracking-[0.2em] text-[#0a3a24]/50">Step {i + 1}</p>
                  <p className="mt-1 font-bold tracking-tight text-[#1c2b22]">{t}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#5d6f63]">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

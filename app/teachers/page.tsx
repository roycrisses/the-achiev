"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TEACHERS } from "@/lib/data";
import Reveal from "@/components/Reveal";

const HIRING = [
  ["Rank first", "You must have ranked in the exam you teach — JEE, IOE, CEE, MBBS or a university top. Certificates on file, verifiable on request."],
  ["Teach second", "A demo class judged by students, not managers. If the batch doesn't rate the teaching 4.5+, the rank doesn't save you."],
  ["Stay reachable", "Doubt hours, WhatsApp threads, pre-exam marathons. Faculty who hide after class don't survive probation."],
];

export default function TeachersPage() {
  return (
    <div className="bg-[#faf8f3]">
      <section className="px-3 pt-4 sm:px-5">
        <div className="panel-mist mx-auto max-w-6xl px-6 py-10 sm:px-10">
          <Reveal>
            <p className="ed-kicker">Faculty</p>
            <h1 className="ed-display mt-3 max-w-3xl text-4xl text-[#0a3a24] sm:text-5xl">Rankers you can verify</h1>
            <p className="ed-standfirst mt-4 max-w-2xl !text-[#0a3a24]/75">
              Real names, real ranks, real classrooms. Every mentor below cleared the same exams
              you are preparing for — then proved, in front of students, that they can teach them.
              Open any profile: qualifications are printed, demo classes are free, and the WhatsApp
              doubt thread never closes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TEACHERS.map((t, i) => (
            <Reveal key={t.slug} delay={(i % 3) * 0.05} direction={i % 2 === 0 ? "left" : "right"}>
              <motion.article whileHover={{ y: -4 }} className="card-soft p-6 text-center">
                <div className="mx-auto h-24 w-24 overflow-hidden rounded-full ring-4 ring-[#eef5ec]">
                  <Image src={t.photo} alt={t.name} width={200} height={200} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <h2 className="mt-3 font-bold tracking-tight text-[#1c2b22]">{t.name} {t.featured && <span className="ml-1 rounded-full bg-[#0a3a24] px-2 py-0.5 align-middle text-[10px] font-bold uppercase tracking-wide text-white">Featured</span>}</h2>
                <p className="mt-0.5 text-[13px] font-medium text-[#5d6f63]">{t.subject} · {t.qualification}</p>
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#0a3a24]/40">{t.experience} teaching</p>
                <Link href={`/teachers/${t.slug}`} className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#faf8f3] px-4 py-2.5 text-[13px] font-bold text-[#0a3a24] ring-1 ring-[#e4e0d4] transition-colors hover:bg-[#eef5ec]">Profile ↗</Link>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-3 pb-14 sm:px-5">
        <div className="mx-auto max-w-6xl rounded-[26px] bg-white px-6 py-12 ring-1 ring-[#e4e0d4] sm:px-10">
          <Reveal>
            <p className="ed-kicker">How we hire</p>
            <h2 className="ed-display mt-3 text-3xl text-[#1c2b22] sm:text-4xl">Three gates, no exceptions</h2>
            <p className="ed-standfirst mt-3 max-w-2xl">
              A great rank doesn&apos;t guarantee great teaching — so we test both, in that order.
              Fewer than one in twenty applicants clears all three gates.
            </p>
          </Reveal>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {HIRING.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.05} direction="up">
                <div className="h-full rounded-[20px] bg-[#faf8f3] p-5 ring-1 ring-[#e4e0d4]">
                  <p className="text-[11px] font-black tabular-nums tracking-[0.2em] text-[#0a3a24]/50">Gate {i + 1}</p>
                  <p className="mt-1 font-bold tracking-tight text-[#1c2b22]">{t}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#5d6f63]">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link href="/demo" className="btn-pine mt-6 px-6 py-3 text-sm">
              Judge them in a free demo <span aria-hidden>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

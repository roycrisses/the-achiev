"use client";
import { use, useState } from "react";
import Link from "next/link";
import { MOCK_TESTS } from "@/lib/data";

const SAMPLE_QS = [
  { q: "Which unit is used for force in SI?", opts: ["Joule", "Newton", "Watt", "Pascal"], ans: 1 },
  { q: "What is the value of g (approx) on Earth?", opts: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "9.1 m/s²"], ans: 1 },
  { q: "Which law relates V=IR?", opts: ["Newton's law", "Ohm's law", "Faraday's law", "Hooke's law"], ans: 1 },
];

export default function TestRunner({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [picked, setPicked] = useState<Record<number, number>>({});
  const [done, setDone] = useState(false);
  const meta = MOCK_TESTS.find((t) => t.id === id) ?? MOCK_TESTS[0];
  const score = SAMPLE_QS.filter((q, i) => picked[i] === q.ans).length;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/tests/free" className="text-sm font-bold text-blue-800 underline">← All tests</Link>
      <h1 className="mt-2 text-2xl font-extrabold">{meta.title}</h1>
      <p className="text-sm text-slate-600">{meta.questions} Qs · {meta.minutes} min · Demo runner with 3 sample questions</p>
      <div className="mt-6 space-y-4">
        {SAMPLE_QS.map((item, i) => (
          <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="font-bold">Q{i + 1}. {item.q}</p>
            <div className="mt-2 grid gap-2">
              {item.opts.map((o, oi) => (
                <button
                  key={o}
                  onClick={() => !done && setPicked((p) => ({ ...p, [i]: oi }))}
                  className={`rounded-xl border px-4 py-2.5 text-left text-sm font-semibold ${picked[i] === oi ? "border-blue-800 bg-blue-50" : "border-slate-200 bg-white"}`}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {!done ? (
        <button onClick={() => setDone(true)} className="mt-6 w-full rounded-full bg-orange-500 px-5 py-3 font-extrabold text-white">
          Submit + See Instant Result
        </button>
      ) : (
        <div className="mt-6 rounded-2xl bg-slate-900 p-6 text-white">
          <p className="text-xl font-extrabold">Score: {score}/{SAMPLE_QS.length}</p>
          <p className="text-sm text-slate-300">Weak area nudge: revise {score < 2 ? "Mechanics basics" : "timed full sets"} next. Full analysis in dashboard.</p>
          <div className="mt-4 flex gap-2">
            <Link href="/register" className="flex-1 rounded-full bg-orange-500 px-4 py-2.5 text-center text-sm font-bold">Unlock All Tests</Link>
            <Link href="/dashboard/tests" className="flex-1 rounded-full bg-white px-4 py-2.5 text-center text-sm font-bold text-slate-900">My Progress</Link>
          </div>
        </div>
      )}
    </div>
  );
}

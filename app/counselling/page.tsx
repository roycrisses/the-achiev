"use client";
import { useState } from "react";
import PopButton from "@/components/ui/pop-button";

export default function CounsellingPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">Talk to a counsellor</h1>
      <p className="mt-2 text-slate-600">Confused between Science / Management / CEE? Get a 10-min guidance call.</p>
      <ul className="mt-4 space-y-1.5 text-[13px] font-semibold text-slate-700">
        {["Free first session — zero enrollment pressure, in writing", "Parents welcome on the same call; we speak plain Nepali + English", "Leave with a written track recommendation + 30-day starter plan"].map((li) => (
          <li key={li} className="flex items-start gap-2">
            <span aria-hidden className="mt-1 inline-block h-2 w-2 shrink-0 bg-[#E8590C]" />{li}
          </li>
        ))}
      </ul>
      {sent ? <p className="mt-6 rounded-2xl bg-green-50 p-5 font-bold text-green-900">Request received — we&apos;ll call you within 24 hours.</p> : (
        <form className="mt-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-5" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <input required placeholder="Name" className="w-full rounded-xl border border-slate-300 px-4 py-3" />
          <input required placeholder="Phone" className="w-full rounded-xl border border-slate-300 px-4 py-3" />
          <textarea placeholder="Your confusion (optional)" rows={4} className="w-full rounded-xl border border-slate-300 px-4 py-3" />
          <PopButton className="w-full normal-case rounded-full px-5 py-3.5 text-sm font-bold text-white bg-[#E8590C] border-[#0b4a5e] shadow-[0_8px_0_-2px_#f7c9a8,0_8px_0_0_#0b4a5e] hover:bg-[#d14e0a] hover:shadow-[0_5px_0_-2px_#f7c9a8,0_5px_0_0_#0b4a5e] active:bg-[#d14e0a] active:shadow-[0_0px_0_-2px_#f7c9a8,0_0px_0_0_#0b4a5e]">Request Callback</PopButton>
        </form>
      )}
      <div className="mt-6 space-y-2 text-sm">
        <details className="rounded-xl border p-3"><summary className="font-bold">Is counselling free?</summary><p className="mt-1 text-slate-600">Yes — the first 10-minute guidance session is completely free, with no enrollment pressure and no follow-up sales calls unless you ask for them.</p></details>
        <details className="rounded-xl border p-3"><summary className="font-bold">Can parents join?</summary><p className="mt-1 text-slate-600">Yes — we encourage it. Most track decisions involve fees and two years of mornings, so parents hear the same recommendation, costs and installment options directly.</p></details>
        <details className="rounded-xl border p-3"><summary className="font-bold">What happens after I request?</summary><p className="mt-1 text-slate-600">A counsellor calls within 24 hours (usually the same evening), asks about your class, subjects and goals, then sends a written track recommendation plus a free demo slot on SMS and WhatsApp.</p></details>
      </div>
    </div>
  );
}

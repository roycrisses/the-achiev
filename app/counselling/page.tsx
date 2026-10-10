"use client";
import { useState } from "react";
import PopButton from "@/components/ui/pop-button";

const PINE_POP =
  "w-full normal-case rounded-full px-5 py-3.5 text-sm font-bold text-white bg-[#0a3a24] border-[#07271a] shadow-[0_8px_0_-2px_#cbe4c6,0_8px_0_0_#07271a] hover:bg-[#0e4a2e] hover:shadow-[0_5px_0_-2px_#cbe4c6,0_5px_0_0_#07271a] active:bg-[#0e4a2e] active:shadow-[0_0px_0_-2px_#cbe4c6,0_0px_0_0_#07271a]";

export default function CounsellingPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="bg-[#faf8f3]">
      <div className="mx-auto max-w-xl px-4 py-10">
        <p className="ed-kicker">Free guidance</p>
        <h1 className="ed-display mt-2 text-4xl text-[#1c2b22]">Talk to a counsellor</h1>
        <p className="ed-standfirst mt-3">Confused between Science / Management / CEE? Get a 10-min guidance call.</p>
        <ul className="card-soft mt-4 space-y-2 p-5 text-[13px] font-semibold text-[#1c2b22]/80">
          {["Free first session — zero enrollment pressure, in writing", "Parents welcome on the same call; we speak plain Nepali + English", "Leave with a written track recommendation + 30-day starter plan"].map((li) => (
            <li key={li} className="flex items-start gap-2.5">
              <span aria-hidden className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-[#0a3a24]" />{li}
            </li>
          ))}
        </ul>
        {sent ? <p className="card-soft mt-6 bg-[#eef5ec] p-5 font-bold text-[#0a3a24]">Request received — we&apos;ll call you within 24 hours.</p> : (
          <form className="card-soft mt-6 space-y-3 p-5" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input required placeholder="Name" className="field" />
            <input required placeholder="Phone" className="field" />
            <textarea placeholder="Your confusion (optional)" rows={4} className="field" />
            <PopButton className={PINE_POP}>Request Callback</PopButton>
          </form>
        )}
        <div className="mt-6 space-y-2.5 text-sm">
          <details className="card-soft p-4"><summary className="cursor-pointer font-bold text-[#1c2b22]">Is counselling free?</summary><p className="mt-1 text-[#5d6f63]">Yes — the first 10-minute guidance session is completely free, with no enrollment pressure and no follow-up sales calls unless you ask for them.</p></details>
          <details className="card-soft p-4"><summary className="cursor-pointer font-bold text-[#1c2b22]">Can parents join?</summary><p className="mt-1 text-[#5d6f63]">Yes — we encourage it. Most track decisions involve fees and two years of mornings, so parents hear the same recommendation, costs and installment options directly.</p></details>
          <details className="card-soft p-4"><summary className="cursor-pointer font-bold text-[#1c2b22]">What happens after I request?</summary><p className="mt-1 text-[#5d6f63]">A counsellor calls within 24 hours (usually the same evening), asks about your class, subjects and goals, then sends a written track recommendation plus a free demo slot on SMS and WhatsApp.</p></details>
        </div>
      </div>
    </div>
  );
}

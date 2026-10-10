"use client";
import { useState } from "react";
import Link from "next/link";
import PopButton from "@/components/ui/pop-button";

const PINE_POP =
  "w-full normal-case rounded-full px-5 py-3.5 text-sm font-bold text-white bg-[#0a3a24] border-[#07271a] shadow-[0_8px_0_-2px_#cbe4c6,0_8px_0_0_#07271a] hover:bg-[#0e4a2e] hover:shadow-[0_5px_0_-2px_#cbe4c6,0_5px_0_0_#07271a] active:bg-[#0e4a2e] active:shadow-[0_0px_0_-2px_#cbe4c6,0_0px_0_0_#07271a]";

export default function DemoPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="bg-[#faf8f3]">
      <div className="mx-auto max-w-xl px-4 py-10">
        <p className="ed-kicker">Free · 30 seconds</p>
        <h1 className="ed-display mt-2 text-4xl text-[#1c2b22]">Book your free demo</h1>
        <p className="ed-standfirst mt-3">No payment. We confirm your slot on SMS + WhatsApp.</p>
        <ol className="card-soft mt-4 space-y-2.5 p-5 text-[13px] font-semibold text-[#1c2b22]/80">
          {["Tell us your class + subject below — 30 seconds, two taps", "Get your batch slot on SMS + WhatsApp within hours", "Sit in a real live class, meet the teacher, attempt a free mock"].map((s, i) => (
            <li key={s} className="flex items-start gap-2.5">
              <span aria-hidden className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0a3a24] text-[10px] font-black text-white">{i + 1}</span>{s}
            </li>
          ))}
        </ol>
        {sent ? (
          <div className="card-soft mt-6 bg-[#eef5ec] p-6 font-bold text-[#0a3a24]">Done! Slot request received. Check SMS shortly. <Link className="underline" href="/tests/free">Try a mock while you wait →</Link></div>
        ) : (
          <form
            className="card-soft mt-6 space-y-3 p-5 sm:p-6"
            onSubmit={async (e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget as HTMLFormElement);
              await fetch("/api/demo", { method: "POST", body: JSON.stringify(Object.fromEntries(fd)), headers: { "Content-Type": "application/json" } });
              setSent(true);
            }}
          >
            <input name="name" required placeholder="Full name" className="field" />
            <input name="phone" required placeholder="Phone (98XXXXXXXX)" pattern="[0-9+\- ]{7,15}" className="field" />
            <div className="grid grid-cols-2 gap-3">
              <select name="classLevel" className="field">
                <option>Class 11</option><option>Class 12</option><option>CEE</option><option>Class 8–10</option>
              </select>
              <select name="subject" className="field">
                <option>Physics</option><option>Chemistry</option><option>Mathematics</option><option>Biology</option><option>Accountancy</option>
              </select>
            </div>
            <PopButton type="submit" className={PINE_POP}>Confirm Free Slot ↗</PopButton>
          </form>
        )}
      </div>
    </div>
  );
}

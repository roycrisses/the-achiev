"use client";
import { useState } from "react";
import Link from "next/link";
import PopButton from "@/components/ui/pop-button";

export default function DemoPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-xl px-4 py-10">
      <h1 className="text-3xl font-black tracking-tight">Book free demo — 30 seconds</h1>
      <p className="mt-2 text-sm text-neutral-500">No payment. We confirm your slot on SMS + WhatsApp.</p>
      <ol className="mt-4 space-y-2 border-2 border-[#111113] bg-white p-4 text-[13px] font-semibold text-neutral-700">
        {["Tell us your class + subject below — 30 seconds, two taps", "Get your batch slot on SMS + WhatsApp within hours", "Sit in a real live class, meet the teacher, attempt a free mock"].map((s, i) => (
          <li key={s} className="flex items-start gap-2.5">
            <span aria-hidden className="flex h-5 w-5 shrink-0 items-center justify-center bg-[#111113] text-[10px] font-black text-white">{i + 1}</span>{s}
          </li>
        ))}
      </ol>
      {sent ? (
        <div className="mt-6 rounded-3xl bg-[#f1f1f0] p-6 font-bold">Done! Slot request received. Check SMS shortly. <Link className="text-[#E8590C]" href="/tests/free">Try a mock while you wait →</Link></div>
      ) : (
        <form
          className="mt-6 space-y-3 rounded-[2rem] bg-[#f1f1f0] p-5 sm:p-6"
          onSubmit={async (e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget as HTMLFormElement);
            await fetch("/api/demo", { method: "POST", body: JSON.stringify(Object.fromEntries(fd)), headers: { "Content-Type": "application/json" } });
            setSent(true);
          }}
        >
          <input name="name" required placeholder="Full name" className="w-full rounded-2xl border border-transparent bg-white px-4 py-3 shadow-sm" />
          <input name="phone" required placeholder="Phone (98XXXXXXXX)" pattern="[0-9+\- ]{7,15}" className="w-full rounded-2xl border border-transparent bg-white px-4 py-3 shadow-sm" />
          <div className="grid grid-cols-2 gap-3">
            <select name="classLevel" className="rounded-2xl bg-white px-4 py-3 shadow-sm">
              <option>Class 11</option><option>Class 12</option><option>CEE</option><option>Class 8–10</option>
            </select>
            <select name="subject" className="rounded-2xl bg-white px-4 py-3 shadow-sm">
              <option>Physics</option><option>Chemistry</option><option>Mathematics</option><option>Biology</option><option>Accountancy</option>
            </select>
          </div>
          <PopButton type="submit" className="w-full normal-case rounded-full px-5 py-3.5 text-sm font-bold text-white bg-[#E8590C] border-[#0b4a5e] shadow-[0_8px_0_-2px_#f7c9a8,0_8px_0_0_#0b4a5e] hover:bg-[#d14e0a] hover:shadow-[0_5px_0_-2px_#f7c9a8,0_5px_0_0_#0b4a5e] active:bg-[#d14e0a] active:shadow-[0_0px_0_-2px_#f7c9a8,0_0px_0_0_#0b4a5e]">Confirm Free Slot ↗</PopButton>
        </form>
      )}
    </div>
  );
}

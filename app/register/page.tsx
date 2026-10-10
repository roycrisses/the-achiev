"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import PopButton from "@/components/ui/pop-button";

function Form() {
  const sp = useSearchParams();
  const course = sp.get("course");
  const [done, setDone] = useState(false);
  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="text-3xl font-extrabold">Register in 1 minute</h1>
      {course && <p className="mt-2 rounded-xl bg-blue-50 p-3 text-sm font-bold text-blue-900">Enrolling: {course}</p>}
      {done ? <p className="mt-6 rounded-2xl bg-green-50 p-5 font-bold text-green-900">Registered! Check SMS for OTP + login link.</p> : (
        <form
          className="mt-6 space-y-3 rounded-2xl border bg-white p-5"
          onSubmit={async (e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget as HTMLFormElement);
            await fetch("/api/enroll", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(fd)) });
            setDone(true);
          }}
        >
          <input name="name" required placeholder="Full name" className="w-full rounded-xl border border-slate-300 px-4 py-3" />
          <input name="phone" required placeholder="Phone" className="w-full rounded-xl border border-slate-300 px-4 py-3" />
          <select name="classLevel" className="w-full rounded-xl border border-slate-300 px-4 py-3">
            <option>Class 11</option><option>Class 12</option><option>CEE</option>
          </select>
          <input name="password" required type="password" placeholder="Create password" className="w-full rounded-xl border border-slate-300 px-4 py-3" />
          <PopButton className="w-full normal-case rounded-full px-5 py-3.5 text-sm font-bold text-white bg-[#E8590C] border-[#0b4a5e] shadow-[0_8px_0_-2px_#f7c9a8,0_8px_0_0_#0b4a5e] hover:bg-[#d14e0a] hover:shadow-[0_5px_0_-2px_#f7c9a8,0_5px_0_0_#0b4a5e] active:bg-[#d14e0a] active:shadow-[0_0px_0_-2px_#f7c9a8,0_0px_0_0_#0b4a5e]">Create Account</PopButton>
        </form>
      )}
    </div>
  );
}

export default function RegisterPage() {
  return <Suspense><Form /></Suspense>;
}

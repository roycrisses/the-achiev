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
    <div className="bg-[#faf8f3]">
      <div className="mx-auto max-w-md px-4 py-14">
        <p className="ed-kicker">Join</p>
        <h1 className="ed-display mt-2 text-4xl text-[#1c2b22]">Register in 1 minute</h1>
        {course && <p className="card-soft mt-3 bg-[#eef5ec] p-3 text-sm font-bold text-[#0a3a24]">Enrolling: {course}</p>}
        {done ? <p className="card-soft mt-6 bg-[#eef5ec] p-5 font-bold text-[#0a3a24]">Registered! Check SMS for OTP + login link.</p> : (
          <form
            className="card-soft mt-6 space-y-3 p-6"
            onSubmit={async (e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget as HTMLFormElement);
              await fetch("/api/enroll", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(fd)) });
              setDone(true);
            }}
          >
            <input name="name" required placeholder="Full name" className="field" />
            <input name="phone" required placeholder="Phone" className="field" />
            <select name="classLevel" className="field">
              <option>Class 11</option><option>Class 12</option><option>CEE</option>
            </select>
            <input name="password" required type="password" placeholder="Create password" className="field" />
            <PopButton className="w-full normal-case rounded-full px-5 py-3.5 text-sm font-bold text-white bg-[#0a3a24] border-[#07271a] shadow-[0_8px_0_-2px_#cbe4c6,0_8px_0_0_#07271a] hover:bg-[#0e4a2e] hover:shadow-[0_5px_0_-2px_#cbe4c6,0_5px_0_0_#07271a] active:bg-[#0e4a2e] active:shadow-[0_0px_0_-2px_#cbe4c6,0_0px_0_0_#07271a]">Create Account</PopButton>
          </form>
        )}
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return <Suspense><Form /></Suspense>;
}

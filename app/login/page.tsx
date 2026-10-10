"use client";
import Link from "next/link";
import PopButton from "@/components/ui/pop-button";

export default function LoginPage() {
  return (
    <div className="bg-[#faf8f3]">
      <div className="mx-auto max-w-md px-4 py-14">
        <p className="ed-kicker">Students</p>
        <h1 className="ed-display mt-2 text-4xl text-[#1c2b22]">Welcome back</h1>
        <form className="card-soft mt-6 space-y-3 p-6" onSubmit={(e) => e.preventDefault()}>
          <input required placeholder="Phone or email" className="field" />
          <input required type="password" placeholder="Password" className="field" />
          <PopButton className="w-full normal-case rounded-full px-5 py-3.5 text-sm font-bold text-white bg-[#0a3a24] border-[#07271a] shadow-[0_8px_0_-2px_#cbe4c6,0_8px_0_0_#07271a] hover:bg-[#0e4a2e] hover:shadow-[0_5px_0_-2px_#cbe4c6,0_5px_0_0_#07271a] active:bg-[#0e4a2e] active:shadow-[0_0px_0_-2px_#cbe4c6,0_0px_0_0_#07271a]">Sign In</PopButton>
          <p className="text-center text-sm text-[#5d6f63]">New here? <Link href="/register" className="font-bold text-[#0a3a24] underline">Register</Link></p>
        </form>
      </div>
    </div>
  );
}

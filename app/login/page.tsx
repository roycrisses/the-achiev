"use client";
import Link from "next/link";
import PopButton from "@/components/ui/pop-button";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="text-3xl font-extrabold">Welcome back</h1>
      <form className="mt-6 space-y-3 rounded-2xl border bg-white p-5" onSubmit={(e) => e.preventDefault()}>
        <input required placeholder="Phone or email" className="w-full rounded-xl border border-slate-300 px-4 py-3" />
        <input required type="password" placeholder="Password" className="w-full rounded-xl border border-slate-300 px-4 py-3" />
        <PopButton className="w-full normal-case rounded-full px-5 py-3.5 text-sm font-bold text-white bg-[#E8590C] border-[#0b4a5e] shadow-[0_8px_0_-2px_#f7c9a8,0_8px_0_0_#0b4a5e] hover:bg-[#d14e0a] hover:shadow-[0_5px_0_-2px_#f7c9a8,0_5px_0_0_#0b4a5e] active:bg-[#d14e0a] active:shadow-[0_0px_0_-2px_#f7c9a8,0_0px_0_0_#0b4a5e]">Sign In</PopButton>
        <p className="text-center text-sm">New here? <Link href="/register" className="font-bold text-blue-800 underline">Register</Link></p>
      </form>
    </div>
  );
}

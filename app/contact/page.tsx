"use client";
import { SITE } from "@/lib/data";
import PopButton from "@/components/ui/pop-button";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">Contact — fastest on WhatsApp</h1>
      <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-green-600 px-5 py-3.5 font-extrabold text-white">
        Chat on WhatsApp
      </a>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border p-5">
          <p className="font-extrabold">Call</p>
          <p className="mt-1 text-sm font-bold">{SITE.phones.join(" · ")}</p>
          <p className="text-sm">{SITE.email}</p>
        </div>
        <div className="rounded-2xl border p-5">
          <p className="font-extrabold">Visit</p>
          <p className="mt-1 text-sm">{SITE.address}</p>
          <a href={SITE.maps} target="_blank" rel="noreferrer" className="text-sm font-bold text-blue-800 underline">View on Map</a>
        </div>
      </div>
      <form className="mt-6 space-y-3 rounded-2xl border bg-white p-5" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-3 sm:grid-cols-2">
          <input required placeholder="Name" className="rounded-xl border border-slate-300 px-4 py-3" />
          <input required placeholder="Phone" className="w-full rounded-xl border border-slate-300 px-4 py-3" />
        </div>
        <textarea required placeholder="Message" rows={4} className="w-full rounded-xl border border-slate-300 px-4 py-3" />
        <PopButton className="w-full normal-case rounded-full px-5 py-3.5 text-sm font-bold text-white bg-[#E8590C] border-[#0b4a5e] shadow-[0_8px_0_-2px_#f7c9a8,0_8px_0_0_#0b4a5e] hover:bg-[#d14e0a] hover:shadow-[0_5px_0_-2px_#f7c9a8,0_5px_0_0_#0b4a5e] active:bg-[#d14e0a] active:shadow-[0_0px_0_-2px_#f7c9a8,0_0px_0_0_#0b4a5e]">Send Message</PopButton>
      </form>
      <iframe title="Map" src="https://www.google.com/maps?q=Mahendranagar,Kanchanpur,Nepal&output=embed" className="mt-6 h-64 w-full rounded-2xl border" loading="lazy" />
    </div>
  );
}

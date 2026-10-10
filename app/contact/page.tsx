"use client";
import { SITE } from "@/lib/data";
import Reveal from "@/components/Reveal";
import PopButton from "@/components/ui/pop-button";

export default function ContactPage() {
  return (
    <div className="bg-[#faf8f3]">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="ed-kicker">Say hello</p>
        <h1 className="ed-display mt-2 text-4xl text-[#1c2b22]">Contact — fastest on WhatsApp</h1>
        <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="btn-pine mt-5 w-full px-5 py-3.5 text-sm">
          Chat on WhatsApp
        </a>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="card-soft p-5">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#0a3a24]/55">Call</p>
            <p className="mt-1 text-sm font-bold text-[#1c2b22]">{SITE.phones.join(" · ")}</p>
            <p className="text-sm text-[#5d6f63]">{SITE.email}</p>
          </div>
          <div className="card-soft p-5">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#0a3a24]/55">Visit</p>
            <p className="mt-1 text-sm text-[#1c2b22]/80">{SITE.address}</p>
            <a href={SITE.maps} target="_blank" rel="noreferrer" className="text-sm font-bold text-[#0a3a24] underline">View on Map</a>
          </div>
        </div>
        <Reveal direction="zoom" distance={0.6} delay={0.1}>
          <form className="card-soft mt-4 space-y-3 p-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-3 sm:grid-cols-2">
            <input required placeholder="Name" className="field" />
            <input required placeholder="Phone" className="field" />
          </div>
          <textarea required placeholder="Message" rows={4} className="field" />
          <PopButton className="w-full normal-case rounded-full px-5 py-3.5 text-sm font-bold text-white bg-[#0a3a24] border-[#07271a] shadow-[0_8px_0_-2px_#cbe4c6,0_8px_0_0_#07271a] hover:bg-[#0e4a2e] hover:shadow-[0_5px_0_-2px_#cbe4c6,0_5px_0_0_#07271a] active:bg-[#0e4a2e] active:shadow-[0_0px_0_-2px_#cbe4c6,0_0px_0_0_#07271a]">Send Message</PopButton>
        </form>
          </Reveal>
        <iframe title="Map" src="https://www.google.com/maps?q=Mahendranagar,Kanchanpur,Nepal&output=embed" className="mt-4 h-64 w-full rounded-[22px] border border-[#e4e0d4]" loading="lazy" />
      </div>
    </div>
  );
}

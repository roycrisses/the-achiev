import Link from "next/link";
import { FAQS } from "@/lib/data";

export const metadata = { title: "FAQs" };

export default function FaqsPage() {
  return (
    <div className="bg-[#faf8f3]">
      <section className="px-3 pt-4 sm:px-5">
        <div className="panel-mist mx-auto max-w-3xl px-6 py-10 sm:px-10">
          <p className="ed-kicker">Help desk</p>
          <h1 className="ed-display mt-3 text-4xl text-[#0a3a24] sm:text-5xl">Every question, answered straight</h1>
          <p className="ed-standfirst mt-4 !text-[#0a3a24]/75">
            How classes run, what mocks cost (nothing), how payments work, and how to try everything
            before paying anything. Still stuck? A counsellor replies on WhatsApp within hours.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="card-soft px-6 py-2 sm:px-8">
          {FAQS.map((f, i) => (
            <details key={f.q} className="group border-b border-[#e4e0d4] py-4 last:border-0">
              <summary className="flex cursor-pointer list-none items-baseline gap-4 text-[15px] font-bold tracking-tight text-[#1c2b22] [&::-webkit-details-marker]:hidden">
                <span className="text-[11px] tabular-nums text-[#0a3a24]/45">{String(i + 1).padStart(2, "0")}</span>
                {f.q}
                <span aria-hidden className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eef5ec] text-lg font-black text-[#0a3a24] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 pl-8 text-[13px] leading-relaxed text-[#5d6f63]">{f.a}</p>
            </details>
          ))}
          <details className="group border-b border-[#e4e0d4] py-4 last:border-0">
            <summary className="flex cursor-pointer list-none items-baseline gap-4 text-[15px] font-bold tracking-tight text-[#1c2b22] [&::-webkit-details-marker]:hidden">
              <span className="text-[11px] tabular-nums text-[#0a3a24]/45">{String(FAQS.length + 1).padStart(2, "0")}</span>
              Do you have an Android app?
              <span aria-hidden className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eef5ec] text-lg font-black text-[#0a3a24] transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-2 pl-8 text-[13px] leading-relaxed text-[#5d6f63]">Yes — live classes, recorded archive, chapterwise notes, CBT mocks and parent-visible progress tracking, all in the Achievers app on Google Play. iOS is on the roadmap; until then the mobile website carries the full experience.</p>
          </details>
        </div>
        <div className="mt-6 flex flex-wrap gap-2.5">
          <Link href="/demo" className="btn-pine px-6 py-3 text-sm">
            Book Free Demo <span aria-hidden>↗</span>
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-[#0a3a24]/20 bg-white px-6 py-3 text-sm font-bold text-[#0a3a24]">
            Ask on WhatsApp
          </Link>
        </div>
      </section>
    </div>
  );
}

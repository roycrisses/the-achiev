import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { TEACHERS } from "@/lib/data";

export function generateStaticParams() {
  return TEACHERS.map((t) => ({ slug: t.slug }));
}

export default async function TeacherDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = TEACHERS.find((x) => x.slug === slug);
  if (!t) notFound();
  return (
    <div className="bg-[#faf8f3]">
      <section className="mx-auto max-w-3xl px-4 py-10 text-center sm:px-6">
        <Link href="/teachers" className="text-[13px] font-bold text-[#0a3a24]">← All teachers</Link>
        <div className="mx-auto mt-5 h-40 w-40 overflow-hidden rounded-full ring-8 ring-white">
          <Image src={t.photo} alt={t.name} width={240} height={240} className="h-full w-full object-cover" />
        </div>
        <h1 className="ed-display mt-4 text-4xl text-[#1c2b22]">{t.name}</h1>
        <p className="mt-2 text-[14px] font-semibold text-[#0a3a24]/65">{t.subject} · {t.qualification} · {t.experience}</p>
        <div className="card-soft mt-6 p-6 text-left">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#0a3a24]/55">Teaches</p>
          <p className="mt-2 text-[14px] leading-relaxed text-[#1c2b22]/80">
            Live {t.subject} classes, same-day recorded backups, daily doubt support and mock-test
            reviews — plus the exam temperament only someone who ranked {t.subject} can pass on.
          </p>
        </div>
        <Link href="/demo" className="btn-pine mt-6 w-full px-5 py-3.5 text-sm">
          Attend {t.name.split(" ").slice(-1)}&apos;s Free Demo <span aria-hidden>↗</span>
        </Link>
      </section>
    </div>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { COURSES } from "@/lib/data";
import { gatewayLabel } from "@/lib/payments";

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export default async function CourseDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) notFound();
  return (
    <div className="bg-[#faf8f3]">
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <Link href="/courses" className="text-[13px] font-bold text-[#0a3a24]">← All courses</Link>
        <p className="ed-kicker mt-4">{course.track} · {course.classLevel}</p>
        <h1 className="ed-display mt-2 max-w-2xl text-4xl text-[#1c2b22] sm:text-5xl">{course.title}</h1>
        <p className="ed-standfirst mt-3 max-w-2xl">{course.blurb}</p>
        <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.1em] text-[#0a3a24]">{course.schedule} · {course.seats} seats</p>

        <div className="card-soft mt-6 p-6 sm:p-7">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#0a3a24]/55">Everything included</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {course.includes.map((inc) => (
              <li key={inc} className="flex items-start gap-2.5 rounded-2xl bg-[#faf8f3] px-4 py-3 text-[13px] font-semibold text-[#1c2b22]">
                <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0a3a24]" />{inc}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[12px] font-medium text-[#0a3a24]/55">Subjects: {course.subjects.join(" · ")} · {course.mode}</p>
        </div>

        <div className="panel-pine mt-4 p-6 sm:p-7">
          <p className="display-serif text-4xl text-white">Rs. {course.price.toLocaleString()}</p>
          <p className="mt-1 text-[13px] font-medium text-white/60">Pay via {gatewayLabel("esewa")}, {gatewayLabel("khalti")}, {gatewayLabel("fonepay")} — encrypted checkout</p>
          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
            <Link href={`/register?course=${course.slug}`} className="inline-flex flex-1 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0a3a24]">Enroll Now ↗</Link>
            <Link href="/demo" className="inline-flex flex-1 items-center justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10">Try Free Demo First</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

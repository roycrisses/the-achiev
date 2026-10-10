import { COURSES } from "@/lib/data";

export default function DashCourses() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold">My courses</h1>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {COURSES.slice(0, 2).map((c) => (
          <div key={c.slug} className="rounded-2xl border p-5">
            <p className="font-extrabold">{c.title}</p>
            <div className="mt-2 h-2 rounded bg-slate-100"><div className="h-2 w-2/3 rounded bg-blue-800" /></div>
            <p className="mt-2 text-sm text-slate-600">68% complete · Next: recorded lesson 12</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { COURSES } from "@/lib/data";

export default function AdminCourses() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-extrabold">Admin · Courses</h1>
      <div className="mt-4 overflow-x-auto rounded-2xl border">
        <table className="w-full text-sm">
          <thead className="bg-slate-50"><tr><th className="p-3 text-left">Title</th><th className="p-3">Price</th><th className="p-3">Seats</th><th className="p-3">Status</th></tr></thead>
          <tbody>
            {COURSES.map((c) => (
              <tr key={c.slug} className="border-t"><td className="p-3 font-bold">{c.title}</td><td className="p-3 text-center">Rs. {c.price}</td><td className="p-3 text-center">{c.seats}</td><td className="p-3 text-center"><span className="rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-green-800">Published</span></td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

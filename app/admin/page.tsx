import Link from "next/link";

export default function AdminHome() {
  const links = [["courses", "Courses"], ["students", "Students"], ["teachers", "Teachers"], ["tests", "Tests"]];
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-extrabold">Admin — restricted</h1>
      <div className="mt-4 grid gap-3 sm:grid-cols-4">
        {links.map(([s, l]) => (
          <Link key={s} href={`/admin/${s}`} className="rounded-2xl border bg-white p-5 font-bold">{l}</Link>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-600">Role-based access: Student · Teacher · Admin. Wire Clerk/NextAuth + Prisma in production.</p>
    </div>
  );
}

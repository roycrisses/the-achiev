export function generateStaticParams() {
  return [{ section: "students" }, { section: "teachers" }, { section: "tests" }];
}

export default function AdminSection() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-extrabold">Admin section</h1>
      <p className="mt-2 text-sm text-slate-600">Manage enrollments, attendance, performance, payments and content uploads. Connects to PostgreSQL + Prisma.</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border p-4"><p className="font-extrabold">128 enrollments</p><p className="text-sm text-slate-600">This batch</p></div>
        <div className="rounded-2xl border p-4"><p className="font-extrabold">Rs. 4.2L collected</p><p className="text-sm text-slate-600">eSewa / Khalti / Fonepay</p></div>
        <div className="rounded-2xl border p-4"><p className="font-extrabold">96% attendance</p><p className="text-sm text-slate-600">Live classes</p></div>
      </div>
    </div>
  );
}

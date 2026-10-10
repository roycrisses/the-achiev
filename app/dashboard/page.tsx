export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold">Namaste! Here&apos;s your next step</h1>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-slate-900 p-5 text-white"><p className="font-extrabold">Revise Thermodynamics</p><p className="text-sm text-slate-300">12% weightage · you scored 41%</p></div>
        <div className="rounded-2xl border p-5"><p className="font-extrabold">Today&apos;s live: Physics 6pm</p><p className="text-sm text-slate-600">Recorded backup after class</p></div>
        <div className="rounded-2xl border p-5"><p className="font-extrabold">2 doubts answered</p><p className="text-sm text-slate-600">Ask anytime, 24/7 support</p></div>
      </div>
    </div>
  );
}

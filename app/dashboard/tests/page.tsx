export default function DashTests() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold">My tests</h1>
      <div className="mt-4 space-y-3">
        {[["Mechanics Test", "18/25 · 72%"], ["Organic Basics", "21/30 · 70%"], ["Full Model Set 01", "36/50 · 72%"]].map(([t, s]) => (
          <div key={t} className="flex items-center justify-between rounded-2xl border p-4">
            <p className="font-bold">{t}</p><span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-800">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Progress() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold">Progress — weak areas first</h1>
      <div className="mt-4 rounded-2xl border p-5">
        <p className="font-bold">Overall: 71% · Rank #14 in batch</p>
        <ul className="mt-3 space-y-2 text-sm">
          <li className="rounded-xl bg-red-50 p-3 font-semibold text-red-900">Thermodynamics — 41% · 12% weightage → revise today</li>
          <li className="rounded-xl bg-amber-50 p-3 font-semibold text-amber-900">Organic — 63% · practice 10 Qs</li>
          <li className="rounded-xl bg-green-50 p-3 font-semibold text-green-900">Mechanics — 82% · maintain with weekly test</li>
        </ul>
      </div>
    </div>
  );
}

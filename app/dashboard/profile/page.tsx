"use client";
export default function Profile() {
  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-extrabold">Profile</h1>
      <form className="mt-4 space-y-3 rounded-2xl border bg-white p-5" onSubmit={(e) => e.preventDefault()}>
        <input defaultValue="Aarav Sharma" className="w-full rounded-xl border px-4 py-3" />
        <input defaultValue="98XXXXXXXX" className="w-full rounded-xl border px-4 py-3" />
        <button className="w-full rounded-full bg-slate-900 px-5 py-3 font-bold text-white">Save</button>
      </form>
    </div>
  );
}

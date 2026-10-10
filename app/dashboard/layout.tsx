import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <nav className="flex gap-2 overflow-x-auto text-sm font-bold">
        {[["/dashboard", "Overview"], ["/dashboard/courses", "My Courses"], ["/dashboard/tests", "My Tests"], ["/dashboard/progress", "Progress"], ["/dashboard/profile", "Profile"]].map(([h, l]) => (
          <Link key={h} href={h} className="whitespace-nowrap rounded-full bg-slate-100 px-4 py-2">{l}</Link>
        ))}
      </nav>
      <div className="mt-6">{children}</div>
    </div>
  );
}

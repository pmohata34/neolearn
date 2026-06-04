import DashboardShell from "@/components/DashboardShell";

export default function Home() {
  return (
    <DashboardShell>
      <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>
      <p className="text-slate-600 mt-1">Here's your learning overview.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {["Courses Enrolled", "Hours Learned", "Certificates"].map((label, i) => (
          <div key={label} className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="text-2xl font-semibold mt-1">{[5, 42, 2][i]}</p>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}

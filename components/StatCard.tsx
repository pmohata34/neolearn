import { LucideIcon } from "lucide-react";
export function StatCard({ label, value, Icon }: { label: string; value: string | number; Icon: LucideIcon }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-400">{label}</span>
        <div className="rounded-lg bg-indigo-500/15 p-2"><Icon className="h-4 w-4 text-indigo-400" /></div>
      </div>
      <div className="mt-3 text-3xl font-semibold">{value}</div>
    </div>
  );
}

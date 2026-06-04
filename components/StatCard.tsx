"use client";
import { LucideIcon } from "lucide-react";

export function StatCard({
  label,
  value,
  icon: Icon,
  accent,
}: {
  label: string;
  value: string | number;
  icon: LucideIcon;
  accent: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500">{label}</span>
        <span className={`rounded-lg p-2 ${accent}`}>
          <Icon className="h-4 w-4 text-white" />
        </span>
      </div>
      <div className="mt-3 text-3xl font-semibold text-slate-900">{value}</div>
    </div>
  );
}

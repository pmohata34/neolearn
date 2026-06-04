"use client";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", hours: 1.2 },
  { day: "Tue", hours: 2.1 },
  { day: "Wed", hours: 0.8 },
  { day: "Thu", hours: 3.0 },
  { day: "Fri", hours: 2.4 },
  { day: "Sat", hours: 4.1 },
  { day: "Sun", hours: 3.6 },
];

export function LearningChart() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-medium text-slate-700">Weekly learning hours</h3>
        <span className="text-xs text-slate-400">Last 7 days</span>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} />
            <YAxis stroke="#94a3b8" fontSize={12} />
            <Tooltip />
            <Area type="monotone" dataKey="hours" stroke="#6366f1" fill="url(#g)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

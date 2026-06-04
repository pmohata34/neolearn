"use client";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useActivities } from "@/hooks/useActivities";

export function LearningChart() {
  const data = useActivities();
  return (
    <div className="h-72 rounded-2xl border border-white/10 bg-white/5 p-5">
      <h3 className="mb-3 text-sm text-zinc-400">Activity — last 7 days</h3>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data}>
          <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity={0.6}/>
            <stop offset="100%" stopColor="#6366f1" stopOpacity={0}/>
          </linearGradient></defs>
          <XAxis dataKey="day" stroke="#71717a" fontSize={12}/>
          <YAxis stroke="#71717a" fontSize={12} domain={[0, 4]}/>
          <Tooltip contentStyle={{ background: "#18181b", border: "1px solid #27272a" }}/>
          <Area type="monotone" dataKey="intensity" stroke="#6366f1" fill="url(#g)"/>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

"use client";
import { BookOpen, TrendingUp, Award } from "lucide-react";
import { useStats } from "@/hooks/useStats";
import { StatCard } from "@/components/StatCard";
import { LearningChart } from "@/components/LearningChart";

export default function Home() {
  const { stats, loading } = useStats();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Courses enrolled" value={loading ? "—" : stats.enrolled}        Icon={BookOpen}/>
        <StatCard label="Avg progress"     value={loading ? "—" : `${stats.avgProgress}%`} Icon={TrendingUp}/>
        <StatCard label="Completed"        value={loading ? "—" : stats.completed}       Icon={Award}/>
      </div>
      <LearningChart/>
    </div>
  );
}

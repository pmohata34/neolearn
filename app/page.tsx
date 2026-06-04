"use client";
import { BookOpen, Clock, Award } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { LearningChart } from "@/components/LearningChart";
import { useStats } from "@/hooks/useStats";

export default function DashboardPage() {
  const { stats, loading } = useStats();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Welcome back 👋</h1>
        <p className="text-sm text-slate-500">Here's your learning snapshot.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatCard
          label="Courses Enrolled"
          value={loading ? "—" : stats?.coursesEnrolled ?? 0}
          icon={BookOpen}
          accent="bg-indigo-500"
        />
        <StatCard
          label="Hours Learned"
          value={loading ? "—" : stats?.hoursLearned ?? 0}
          icon={Clock}
          accent="bg-emerald-500"
        />
        <StatCard
          label="Certificates"
          value={loading ? "—" : stats?.certificates ?? 0}
          icon={Award}
          accent="bg-amber-500"
        />
      </div>

      <LearningChart />
    </div>
  );
}

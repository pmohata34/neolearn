"use client";

import * as Lucide from "lucide-react";
import type { Course } from "@/lib/courses";
import { BentoCard, MotionDiv } from "@/components/motion-primitives";

type CourseCardProps = {
  course: Course;
  delay: number;
};

const iconMap = Lucide as unknown as Record<string, Lucide.LucideIcon>;

export function CourseCard({ course, delay }: CourseCardProps) {
  const Icon = iconMap[course.icon_name] ?? Lucide.BookOpen;
  const progress = Math.max(0, Math.min(100, course.progress));

  return (
    <BentoCard delay={delay} className="min-h-56">
      <div
        aria-hidden="true"
        className="absolute -right-12 -top-12 size-36 rounded-full bg-cyan-300/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-28 w-full bg-[radial-gradient(circle_at_20%_100%,rgba(134,92,255,0.18),transparent_35%),radial-gradient(circle_at_78%_82%,rgba(56,255,194,0.12),transparent_30%)]"
      />
      <header className="flex items-start justify-between gap-4">
        <span className="grid size-11 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-cyan-100">
          <Icon size={21} aria-hidden="true" />
        </span>
        <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">{progress}%</span>
      </header>
      <h2 className="mt-8 text-balance text-xl font-semibold leading-tight text-white">{course.title}</h2>
      <div className="mt-7" aria-label={`${course.title} progress ${progress}%`}>
        <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
          <span>Course progress</span>
          <span>{progress}/100</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <MotionDiv
            className="h-full rounded-full bg-gradient-to-r from-cyan-200 via-violet-300 to-emerald-200"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ type: "spring", stiffness: 90, damping: 18, delay: delay + 0.15 }}
            style={{ originX: 0 }}
          />
        </div>
      </div>
    </BentoCard>
  );
}

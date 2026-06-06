"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import BentoTile from "./BentoTile";
import type { Course } from "@/lib/courses";

function getIcon(name: string): LucideIcon {
  const map = LucideIcons as unknown as Record<string, LucideIcon>;
  return map[name] ?? LucideIcons.BookOpen;
}

export default function CourseCard({ course }: { course: Course }) {
  const Icon = getIcon(course.icon_name);

  return (
    <BentoTile>
      <header className="flex items-center gap-3">
        <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-[var(--accent)]/30 to-[var(--accent-2)]/20 ring-1 ring-white/10">
          <Icon size={18} />
        </span>
        <h2 className="text-base font-medium tracking-tight">{course.title}</h2>
      </header>

      <footer className="mt-6">
        <div className="flex justify-between text-xs text-[var(--muted)] mb-2">
          <span>Progress</span>
          <span>{course.progress}%</span>
        </div>
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${course.progress}%` }}
            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.2 }}
            className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]"
          />
        </div>
      </footer>
    </BentoTile>
  );
}

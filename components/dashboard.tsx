import type { CourseResult } from "@/lib/courses";
import { ActivityTile } from "@/components/activity-tile";
import { CourseCard } from "@/components/course-card";
import { HeroTile } from "@/components/hero-tile";
import { Sidebar } from "@/components/Sidebar";

type DashboardProps = {
  result: CourseResult;
};

export function Dashboard({ result }: DashboardProps) {
  return (
    <>
      <Sidebar />
      <main id="dashboard" className="min-h-dvh px-4 pb-24 pt-5 md:pb-8 md:pl-24 md:pr-5 lg:pl-72">
        <section className="mx-auto max-w-7xl" aria-label="Student dashboard">
          <header className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm text-slate-400">Dashboard</p>
              <h2 className="mt-1 text-2xl font-semibold text-white">Today&apos;s learning map</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-400">
              {result.source === "supabase" ? "Live from Supabase" : "Local preview data"}
              {result.error ? `: ${result.error}` : ""}
            </p>
          </header>

          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4" aria-label="Learning tiles">
            <HeroTile />
            {result.courses.map((course, index) => (
              <CourseCard key={course.id} course={course} delay={0.14 + index * 0.08} />
            ))}
            <ActivityTile />
          </section>
        </section>
      </main>
    </>
  );
}

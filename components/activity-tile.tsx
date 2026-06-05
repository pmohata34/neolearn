import { BentoCard } from "@/components/motion-primitives";

const activity = Array.from({ length: 42 }, (_, index) => {
  const wave = Math.sin(index * 0.72) + Math.cos(index * 0.31);
  return Math.max(0, Math.round((wave + 2) * 1.7));
});

const intensity = [
  "bg-white/[0.08]",
  "bg-cyan-300/20",
  "bg-cyan-300/35",
  "bg-emerald-300/45",
  "bg-violet-300/50",
  "bg-cyan-100/70"
];

export function ActivityTile() {
  return (
    <BentoCard delay={0.38} className="min-h-72 lg:col-span-2">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-cyan-100/80">Last 6 weeks</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Learning activity</h2>
        </div>
        <span className="rounded-full border border-emerald-200/20 bg-emerald-200/10 px-3 py-1 text-sm text-emerald-100">
          +18%
        </span>
      </header>
      <div className="mt-8 grid grid-cols-7 gap-2" aria-label="Mock contribution graph">
        {activity.map((value, index) => (
          <span
            key={index}
            className={`aspect-square rounded-sm ${intensity[Math.min(value, intensity.length - 1)]}`}
            aria-hidden="true"
          />
        ))}
      </div>
      <footer className="mt-6 flex items-center justify-between text-sm text-slate-400">
        <span>128 focused sessions</span>
        <span>21 day streak peak</span>
      </footer>
    </BentoCard>
  );
}

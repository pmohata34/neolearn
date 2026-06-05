import { Flame } from "lucide-react";
import BentoTile from "./BentoTile";

export default function HeroTile({ name, streak }: { name: string; streak: number }) {
  return (
    <BentoTile className="md:col-span-2 lg:col-span-2 lg:row-span-1 bento-grain">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-[var(--muted)]">Welcome back,</p>
          <h1 className="mt-1 text-3xl md:text-4xl font-semibold tracking-tight">
            {name}
          </h1>
          <p className="mt-3 max-w-md text-sm text-[var(--muted)]">
            You're doing great. Keep the streak going — small daily reps compound fast.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-black/30 px-3 py-1.5">
          <Flame size={16} className="text-orange-400" />
          <span className="text-sm font-medium">{streak} day streak</span>
        </div>
      </header>
    </BentoTile>
  );
}

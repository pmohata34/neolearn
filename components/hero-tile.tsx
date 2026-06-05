import { Flame, Zap } from "lucide-react";
import { BentoCard } from "@/components/motion-primitives";

export function HeroTile() {
  return (
    <BentoCard delay={0.06} className="min-h-72 lg:col-span-2">
      <section aria-labelledby="welcome-heading" className="flex h-full flex-col justify-between">
        <div>
          <p className="text-sm font-medium uppercase text-cyan-100/70">Friday learning pulse</p>
          <h1 id="welcome-heading" className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Welcome back, Pranjal
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
            Your neural interfaces module is waiting. Keep the rhythm tight and the streak alive.
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
            <div className="flex items-center gap-3 text-orange-100">
              <Flame size={20} aria-hidden="true" />
              <span className="text-sm text-slate-300">Daily streak</span>
            </div>
            <p className="mt-3 text-3xl font-semibold text-white">14 days</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
            <div className="flex items-center gap-3 text-cyan-100">
              <Zap size={20} aria-hidden="true" />
              <span className="text-sm text-slate-300">XP this week</span>
            </div>
            <p className="mt-3 text-3xl font-semibold text-white">8,420</p>
          </div>
        </div>
      </section>
    </BentoCard>
  );
}

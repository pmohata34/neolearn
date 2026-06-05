"use client";

import { motion } from "framer-motion";
import BentoTile from "./BentoTile";

const WEEKS = 12;
const DAYS = 7;

function seededIntensity(i: number, j: number) {
  const v = Math.sin(i * 12.9898 + j * 78.233) * 43758.5453;
  return Math.abs(v - Math.floor(v));
}

export default function ActivityTile() {
  return (
    <BentoTile className="md:col-span-2 lg:col-span-2">
      <header className="flex items-baseline justify-between">
        <h2 className="text-base font-medium tracking-tight">Activity</h2>
        <span className="text-xs text-[var(--muted)]">Last 12 weeks</span>
      </header>

      <div
        className="mt-5 grid gap-[4px]"
        style={{ gridTemplateColumns: `repeat(${WEEKS}, 1fr)` }}
        aria-label="Contribution graph"
      >
        {Array.from({ length: WEEKS }).map((_, w) => (
          <div key={w} className="grid gap-[4px]" style={{ gridTemplateRows: `repeat(${DAYS}, 1fr)` }}>
            {Array.from({ length: DAYS }).map((__, d) => {
              const t = seededIntensity(w, d);
              const level = t < 0.25 ? 0 : t < 0.5 ? 1 : t < 0.75 ? 2 : 3;
              const bg = [
                "bg-white/[0.04]",
                "bg-[var(--accent)]/25",
                "bg-[var(--accent)]/55",
                "bg-[var(--accent)]/90",
              ][level];
              return (
                <motion.span
                  key={d}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 22,
                    delay: (w * DAYS + d) * 0.005,
                  }}
                  className={`h-3 w-full rounded-[3px] ${bg}`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </BentoTile>
  );
}

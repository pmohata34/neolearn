export default function SkeletonTile() {
  return (
    <div
      className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-5 animate-pulse"
      aria-hidden
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-white/5" />
        <div className="h-4 w-2/3 rounded bg-white/5" />
      </div>
      <div className="mt-8 h-2 w-full rounded-full bg-white/5" />
    </div>
  );
}

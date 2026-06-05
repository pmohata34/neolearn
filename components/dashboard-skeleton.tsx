export function DashboardSkeleton() {
  return (
    <main className="min-h-dvh bg-canvas px-5 py-6 md:pl-24 lg:pl-72">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 7 }, (_, index) => (
          <article
            key={index}
            className={`min-h-56 animate-pulse rounded-lg border border-white/10 bg-white/[0.06] p-5 ${
              index === 0 ? "lg:col-span-2 lg:min-h-72" : ""
            } ${index === 5 ? "lg:col-span-2" : ""}`}
          >
            <div className="h-10 w-10 rounded-lg bg-white/10" />
            <div className="mt-8 h-5 w-2/3 rounded bg-white/10" />
            <div className="mt-4 h-3 w-4/5 rounded bg-white/10" />
            <div className="mt-10 h-2 rounded-full bg-white/10" />
          </article>
        ))}
      </section>
    </main>
  );
}

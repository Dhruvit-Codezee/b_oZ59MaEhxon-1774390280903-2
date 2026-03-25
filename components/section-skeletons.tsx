/**
 * Skeleton loading components for dynamically imported sections.
 * These provide visual placeholders while the actual components load,
 * preventing layout shift and improving perceived performance.
 */

export function TestimonialsSkeleton() {
  return (
    <section className="bg-section-lavender py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mx-auto h-4 w-32 animate-pulse rounded bg-brand-purple/10" />
          <div className="mx-auto mt-4 h-10 w-80 animate-pulse rounded bg-brand-purple/10" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 h-20 animate-pulse rounded bg-brand-lavender" />
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 animate-pulse rounded-full bg-brand-lavender" />
                <div>
                  <div className="h-4 w-24 animate-pulse rounded bg-brand-lavender" />
                  <div className="mt-1 h-3 w-32 animate-pulse rounded bg-brand-lavender" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProcessSkeleton() {
  return (
    <section className="bg-gradient-to-br from-brand-purple via-purple-700 to-purple-900 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mx-auto h-4 w-32 animate-pulse rounded bg-white/20" />
          <div className="mx-auto mt-4 h-10 w-80 animate-pulse rounded bg-white/20" />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-2xl bg-white/10 p-6">
              <div className="mb-4 h-12 w-12 animate-pulse rounded-xl bg-white/20" />
              <div className="h-6 w-32 animate-pulse rounded bg-white/20" />
              <div className="mt-2 h-16 animate-pulse rounded bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTASkeleton() {
  return (
    <section className="bg-gradient-to-br from-brand-purple via-purple-700 to-purple-900 py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mx-auto h-4 w-40 animate-pulse rounded bg-white/20" />
        <div className="mx-auto mt-4 h-12 w-96 animate-pulse rounded bg-white/20" />
        <div className="mx-auto mt-4 h-6 w-80 animate-pulse rounded bg-white/10" />
        <div className="mt-8 flex justify-center gap-4">
          <div className="h-12 w-40 animate-pulse rounded-lg bg-brand-orange/50" />
          <div className="h-12 w-40 animate-pulse rounded-lg bg-white/20" />
        </div>
      </div>
    </section>
  )
}

export function FeaturesSkeleton() {
  return (
    <section className="bg-section-lavender py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mx-auto h-4 w-32 animate-pulse rounded bg-brand-purple/10" />
          <div className="mx-auto mt-4 h-10 w-80 animate-pulse rounded bg-brand-purple/10" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 h-12 w-12 animate-pulse rounded-xl bg-brand-lavender" />
              <div className="h-6 w-48 animate-pulse rounded bg-brand-lavender" />
              <div className="mt-2 h-16 animate-pulse rounded bg-brand-lavender/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

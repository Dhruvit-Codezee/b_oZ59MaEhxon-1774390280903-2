import { Navigation } from "@/components/navigation"

export default function PricingLoading() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto h-5 w-28 animate-pulse rounded bg-foreground/10" />
            <div className="mx-auto mt-4 h-10 w-64 animate-pulse rounded bg-foreground/10" />
            <div className="mx-auto mt-4 h-5 w-80 animate-pulse rounded bg-foreground/10" />
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-border p-8">
                <div className="h-5 w-24 animate-pulse rounded bg-foreground/10" />
                <div className="mt-4 h-10 w-32 animate-pulse rounded bg-foreground/10" />
                <div className="mt-2 h-4 w-full animate-pulse rounded bg-foreground/10" />
                <div className="mt-6 space-y-3">
                  {Array.from({ length: 5 }).map((__, j) => (
                    <div key={j} className="h-4 w-full animate-pulse rounded bg-foreground/10" />
                  ))}
                </div>
                <div className="mt-8 h-10 w-full animate-pulse rounded-lg bg-foreground/10" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

import { Navigation } from "@/components/navigation"

export default function ServicesLoading() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto h-5 w-32 animate-pulse rounded bg-foreground/10" />
            <div className="mx-auto mt-4 h-10 w-72 animate-pulse rounded bg-foreground/10" />
            <div className="mx-auto mt-4 h-5 w-96 animate-pulse rounded bg-foreground/10" />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-border p-8">
                <div className="h-12 w-12 animate-pulse rounded-xl bg-foreground/10" />
                <div className="mt-5 h-6 w-3/4 animate-pulse rounded bg-foreground/10" />
                <div className="mt-3 h-4 w-full animate-pulse rounded bg-foreground/10" />
                <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-foreground/10" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

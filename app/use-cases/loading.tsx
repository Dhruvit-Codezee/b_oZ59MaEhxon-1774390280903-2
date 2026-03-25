import { Navigation } from "@/components/navigation"

export default function UseCasesLoading() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto h-5 w-36 animate-pulse rounded bg-foreground/10" />
            <div className="mx-auto mt-4 h-10 w-80 animate-pulse rounded bg-foreground/10" />
            <div className="mx-auto mt-4 h-5 w-96 animate-pulse rounded bg-foreground/10" />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-border p-6">
                <div className="h-10 w-10 animate-pulse rounded-lg bg-foreground/10" />
                <div className="mt-4 h-5 w-2/3 animate-pulse rounded bg-foreground/10" />
                <div className="mt-3 h-4 w-full animate-pulse rounded bg-foreground/10" />
                <div className="mt-2 h-4 w-4/5 animate-pulse rounded bg-foreground/10" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

import { Navigation } from "@/components/navigation"

export default function BlogPostLoading() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24 pb-20">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="h-4 w-32 animate-pulse rounded bg-foreground/10" />
          <div className="mt-6 h-10 w-full animate-pulse rounded bg-foreground/10" />
          <div className="mt-3 h-10 w-3/4 animate-pulse rounded bg-foreground/10" />
          <div className="mt-4 flex items-center gap-3">
            <div className="h-10 w-10 animate-pulse rounded-full bg-foreground/10" />
            <div className="h-4 w-40 animate-pulse rounded bg-foreground/10" />
          </div>
          <div className="mt-8 aspect-video w-full animate-pulse rounded-2xl bg-foreground/5" />
          <div className="mt-10 space-y-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-4 w-full animate-pulse rounded bg-foreground/10" style={{ width: `${75 + Math.random() * 25}%` }} />
            ))}
          </div>
        </article>
      </main>
    </>
  )
}

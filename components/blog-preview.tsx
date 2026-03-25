import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import { getAllPosts } from "@/lib/blog"

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export function BlogPreview() {
  const posts = getAllPosts()
  const [featured, ...rest] = posts
  const articles = rest.slice(0, 3)

  if (!featured) return null

  return (
    <section className="bg-brand-lavender/20 pt-16 pb-12 lg:pt-20 lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Latest{" "}
            <span className="text-brand-purple">Insights</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Featured post - 2/3 width */}
          <Link
            href={`/blog/${featured.meta.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-brand-purple/20 bg-gradient-to-br from-brand-purple/5 to-transparent transition-all hover:border-brand-purple/30 hover:shadow-xl hover:shadow-brand-purple/10 lg:col-span-2"
          >
            {featured.meta.image && (
              <div className="relative aspect-[2/1] w-full overflow-hidden">
                <Image
                  src={featured.meta.image}
                  alt={featured.meta.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}
            <div className="p-8">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {featured.meta.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand-purple/10 px-2.5 py-0.5 text-xs font-semibold text-brand-purple"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-tight text-foreground text-balance">
              {featured.meta.title}
            </h3>
            <p className="mb-4 max-w-2xl text-base leading-relaxed text-foreground/70 text-pretty">
              {featured.meta.description}
            </p>
            <div className="mb-6 flex items-center gap-4 text-xs text-foreground/70">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formatDate(featured.meta.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {featured.meta.readingTime} min read
              </span>
            </div>
            <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple transition-colors group-hover:text-brand-orange">
              Read article
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
            </div>
          </Link>

          {/* Smaller articles - 1/3 width stacked */}
          <div className="flex flex-col gap-6">
            {articles.map((post) => (
              <Link
                key={post.meta.slug}
                href={`/blog/${post.meta.slug}`}
                className="group flex flex-col rounded-2xl border border-brand-purple/20 bg-white p-6 transition-all hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/5"
              >
                <div className="mb-3 flex flex-wrap gap-2">
                  {post.meta.tags.slice(0, 1).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold uppercase tracking-wider text-brand-purple/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-auto text-base font-semibold leading-snug text-foreground text-balance">
                  {post.meta.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple transition-colors group-hover:text-brand-orange">
                  Read more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple transition-colors hover:text-brand-orange"
          >
            View all articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

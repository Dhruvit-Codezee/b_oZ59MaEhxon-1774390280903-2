import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Clock, Calendar } from "lucide-react"
import { getAllPosts, getAllTags, type BlogPostMeta } from "@/lib/blog"
import { HeroBackground } from "@/components/hero-background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogTagFilter } from "./blog-tag-filter"

export const metadata: Metadata = {
  title: "Blog | AI & Automation Insights | Automaly",
  description:
    "Practical guides, frameworks, and insights on AI and automation for growing businesses. Written by the Automaly team.",
  openGraph: {
    title: "Blog | AI & Automation Insights | Automaly",
    description:
      "Practical guides, frameworks, and insights on AI and automation for growing businesses.",
    url: "https://www.automaly.io/blog",
  },
  alternates: {
    canonical: "https://www.automaly.io/blog",
  },
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

/* ── Featured Post Card ─────────────────────────────────────────────── */

function FeaturedCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-brand-purple/20 bg-gradient-to-br from-brand-purple/5 to-transparent transition-all hover:border-brand-purple/30 hover:shadow-xl hover:shadow-brand-purple/10 lg:col-span-2"
    >
      {post.image && (
        <div className="relative aspect-[2/1] w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className={`flex flex-col p-8 lg:p-10 ${!post.image ? "pt-8 lg:pt-10" : ""}`}>
      <div className="flex flex-wrap items-center gap-2">
        {post.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-brand-purple/10 px-2.5 py-0.5 text-xs font-semibold text-brand-purple"
          >
            {tag}
          </span>
        ))}
        <span className="text-xs text-foreground/70">Latest</span>
      </div>

      <h2 className="mt-4 text-2xl font-bold leading-tight text-foreground text-balance sm:text-3xl">
        {post.title}
      </h2>

      <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
        {post.description}
      </p>

      <div className="mt-6 flex items-center gap-4 text-xs text-foreground/70">
        <span className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {formatDate(post.date)}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {post.readingTime} min read
        </span>
      </div>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple transition-colors group-hover:text-brand-orange">
        Read article
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
      </div>
    </Link>
  )
}

/* ── Post Card ──────────────────────────────────────────────────────── */

function PostCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-brand-purple/20 bg-white transition-all hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/5"
    >
      {post.image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className={`flex flex-col p-6 ${!post.image ? "" : ""}`}>
      <div className="flex flex-wrap gap-2">
        {post.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-brand-purple/10 px-2.5 py-0.5 text-xs font-semibold text-brand-purple"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground text-balance">
        {post.title}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/60 line-clamp-3">
        {post.description}
      </p>

      <div className="mt-4 flex items-center gap-4 text-xs text-foreground/70">
        <span className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {formatDate(post.date)}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {post.readingTime} min read
        </span>
      </div>

      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple transition-colors group-hover:text-brand-orange">
        Read more
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
      </div>
    </Link>
  )
}

/* ── Page ────────────────────────────────────────────────────────────── */

const POSTS_PER_PAGE = 12

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string; page?: string }>
}) {
  const { tag: activeTag, page: pageParam } = await searchParams
  const currentPage = Math.max(1, parseInt(pageParam || "1", 10) || 1)
  const allPosts = getAllPosts()
  const allTags = getAllTags()

  const filteredPosts = activeTag
    ? allPosts.filter((p) => p.meta.tags.includes(activeTag))
    : allPosts

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE
  const paginatedPosts = filteredPosts.slice(startIdx, startIdx + POSTS_PER_PAGE)

  const isFirstPage = currentPage === 1
  const [featured, ...rest] = isFirstPage ? paginatedPosts : [null, ...paginatedPosts]

  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative min-h-[600px] w-full overflow-hidden lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
          {/* Background Image - optimized with Next.js Image priority loading */}
          <HeroBackground
            src="/images/blog-hero.webp"
            alt="Isometric 3D illustration of stacked content layers"
            fallbackColor="#1a0a4e"
            overlayGradient="radial-gradient(ellipse at center, rgba(26, 10, 78, 0.8) 0%, rgba(26, 10, 78, 0.6) 40%, rgba(26, 10, 78, 0.4) 70%, rgba(26, 10, 78, 0.3) 100%)"
          />
          <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center justify-center w-full px-6 pt-28 pb-16 lg:min-h-[80vh] lg:pt-36 lg:pb-20 xl:min-h-[85vh] 2xl:min-h-[90vh]">
            <div className="max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
              Blog
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-balance">
              <span className="text-white">Insights &</span>{" "}
              <span className="text-brand-orange">Guides</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg text-pretty">
              Practical frameworks, strategies, and insights on AI and
              automation for growing businesses.
            </p>
            </div>
          </div>
        </section>

        {/* Tag filter + posts */}
        <section className="bg-section-lavender py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Tag filter */}
            <BlogTagFilter tags={allTags} />

            {/* Posts grid */}
            {paginatedPosts.length === 0 ? (
              <p className="py-20 text-center text-foreground/70">
                {activeTag
                  ? `No posts found for "${activeTag}". Try a different tag.`
                  : "No posts yet. Check back soon."}
              </p>
            ) : (
              <>
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {featured && <FeaturedCard post={featured.meta} />}
                  {rest
                    .filter(Boolean)
                    .map((post) => (
                      <PostCard key={post!.meta.slug} post={post!.meta} />
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <nav
                    aria-label="Blog pagination"
                    className="mt-12 flex items-center justify-center gap-2"
                  >
                    {currentPage > 1 && (
                      <Link
                        href={`/blog?${new URLSearchParams({
                          ...(activeTag ? { tag: activeTag } : {}),
                          ...(currentPage - 1 > 1 ? { page: String(currentPage - 1) } : {}),
                        }).toString()}`}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-brand-purple/30 bg-white px-4 py-2 text-sm font-medium text-brand-purple transition-all duration-200 hover:bg-brand-purple/10 hover:border-brand-purple/50"
                      >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        Previous
                      </Link>
                    )}

                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <Link
                            key={page}
                            href={`/blog?${new URLSearchParams({
                              ...(activeTag ? { tag: activeTag } : {}),
                              ...(page > 1 ? { page: String(page) } : {}),
                            }).toString()}`}
                            className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                              page === currentPage
                                ? "bg-brand-purple text-white"
                                : "border border-brand-purple/20 bg-white text-foreground/60 hover:border-brand-purple/30 hover:text-brand-purple"
                            }`}
                          >
                            {page}
                          </Link>
                        )
                      )}
                    </div>

                    {currentPage < totalPages && (
                      <Link
                        href={`/blog?${new URLSearchParams({
                          ...(activeTag ? { tag: activeTag } : {}),
                          page: String(currentPage + 1),
                        }).toString()}`}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-brand-purple/30 bg-white px-4 py-2 text-sm font-medium text-brand-purple transition-all duration-200 hover:bg-brand-purple/10 hover:border-brand-purple/50"
                      >
                        Next
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </nav>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

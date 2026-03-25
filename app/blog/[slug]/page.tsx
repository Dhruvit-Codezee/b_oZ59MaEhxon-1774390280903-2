import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { compileMDX } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  Calendar,
  User,
} from "lucide-react"
import {
  getPostBySlug,
  getPostSlugs,
  getRelatedPosts,
  type BlogPostMeta,
} from "@/lib/blog"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

/* ── Static params ──────────────────────────────────────────────────── */

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

/* ── Metadata ───────────────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.meta.title} | Automaly Blog`,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      url: `https://www.automaly.io/blog/${slug}`,
      type: "article",
      publishedTime: post.meta.date,
      authors: [post.meta.author],
      tags: post.meta.tags,
      ...(post.meta.image
        ? {
            images: [
              {
                url: `https://www.automaly.io${post.meta.image}`,
                width: 1200,
                height: 630,
                alt: post.meta.title,
              },
            ],
          }
        : {}),
    },
    alternates: {
      canonical: `https://www.automaly.io/blog/${slug}`,
    },
  }
}

/* ── MDX component map ──────────────────────────────────────────────── */

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-12 mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-8 mb-3 text-xl font-semibold text-foreground"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="mb-4 text-base leading-relaxed text-foreground/70"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-6 space-y-2 pl-1 [&>li]:flex [&>li]:items-start [&>li]:gap-2.5 [&>li]:before:mt-2 [&>li]:before:h-1.5 [&>li]:before:w-1.5 [&>li]:before:shrink-0 [&>li]:before:rounded-full [&>li]:before:bg-brand-orange [&>li]:before:content-['']" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-6 space-y-2 pl-5 list-decimal marker:font-semibold marker:text-brand-purple" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-sm leading-relaxed text-foreground/70" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link
      href={props.href ?? "#"}
      className="font-medium text-brand-purple underline underline-offset-2 transition-colors hover:text-brand-orange"
    >
      {props.children}
    </Link>
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-6 border-l-4 border-brand-purple/30 bg-brand-lavender px-6 py-4 rounded-r-xl"
      {...props}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  hr: () => <hr className="my-10 border-border" />,
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="border-b border-border bg-brand-lavender px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-foreground"
      {...props}
    />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className="border-b border-border px-4 py-2.5 text-foreground/70"
      {...props}
    />
  ),
}

/* ── Helper ─────────────────────────────────────────────────────────── */

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

/* ── Related Post Card ──────────────────────────────────────────────── */

function RelatedCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-brand-purple/20 bg-white p-6 transition-all hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/5"
    >
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
      <h3 className="mt-3 text-base font-semibold leading-snug text-foreground text-balance">
        {post.title}
      </h3>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple transition-colors group-hover:text-brand-orange">
        Read more
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}

/* ── Page ────────────────────────────────────────────────────────────── */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const { meta, content } = post
  const related = getRelatedPosts(slug, meta.tags, 3)

  const { content: mdxContent } = await compileMDX({
    source: content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  })

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: meta.title,
      description: meta.description,
      datePublished: meta.date,
      dateModified: meta.date,
      ...(meta.image
        ? { image: `https://www.automaly.io${meta.image}` }
        : {}),
      author: {
        "@type": "Person",
        name: meta.author,
      },
      publisher: {
        "@type": "Organization",
        name: "Automaly",
        url: "https://www.automaly.io",
        logo: {
          "@type": "ImageObject",
          url: "https://www.automaly.io/images/automaly-logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.automaly.io/blog/${slug}`,
      },
      keywords: meta.tags.join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.automaly.io" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.automaly.io/blog" },
        { "@type": "ListItem", position: 3, name: meta.title, item: `https://www.automaly.io/blog/${slug}` },
      ],
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden bg-section-light pt-28 pb-16 lg:pt-36 lg:pb-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/5 blur-[140px]" />
          </div>
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-sm text-foreground/70">
              <Link
                href="/blog"
                className="flex items-center gap-1 transition-colors hover:text-brand-purple"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Blog
              </Link>
              <span>/</span>
              <span className="truncate text-foreground/70">{meta.title}</span>
            </nav>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {meta.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="rounded-full bg-brand-purple/10 px-2.5 py-0.5 text-xs font-semibold text-brand-purple transition-all duration-200 hover:bg-brand-purple/20"
                >
                  {tag}
                </Link>
              ))}
            </div>

            {/* Title */}
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              {meta.title}
            </h1>

            {/* Meta row */}
            <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-border pt-6 text-sm text-foreground/70">
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" />
                {meta.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {formatDate(meta.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {meta.readingTime} min read
              </span>
            </div>

            {/* Hero image */}
            {meta.image && (
              <div className="relative mt-8 aspect-[2/1] w-full overflow-hidden rounded-2xl">
                <Image
                  src={meta.image}
                  alt={meta.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </section>

        {/* MDX Content */}
        <section className="bg-section-light pb-20 lg:pb-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <article>{mdxContent}</article>
          </div>
        </section>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="bg-section-lavender py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl">
                Related Articles
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <RelatedCard key={r.slug} post={r} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="brand-gradient py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              Ready to Explore AI & Automation?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70 text-pretty">
              The AI Readiness Assessment identifies exactly where automation
              will deliver the greatest return for your organisation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                asChild
                variant="orange" className="gap-2"
              >
                <Link href="/services/ai-readiness-assessment">
                  Book Your Assessment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="gap-2 border-white/60 bg-transparent text-white hover:bg-white/10 hover:border-white"
              >
                <Link href="/#how-we-work">See How It Works</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

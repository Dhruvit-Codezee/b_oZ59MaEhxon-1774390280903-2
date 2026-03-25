"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Suspense } from "react"

function TagFilterInner({ tags }: { tags: string[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeTag = searchParams.get("tag")

  function handleTag(tag: string | null) {
    const params = new URLSearchParams(searchParams.toString())
    if (tag) {
      params.set("tag", tag)
    } else {
      params.delete("tag")
    }
    router.push(`/blog?${params.toString()}`, { scroll: false })
  }

  if (tags.length === 0) return null

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={() => handleTag(null)}
        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
          !activeTag
            ? "bg-brand-purple text-white"
            : "bg-white text-foreground/60 hover:text-brand-purple"
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => handleTag(tag)}
          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
            activeTag === tag
              ? "bg-brand-purple text-white"
              : "bg-white text-foreground/60 hover:text-brand-purple"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}

export function BlogTagFilter({ tags }: { tags: string[] }) {
  return (
    <Suspense fallback={null}>
      <TagFilterInner tags={tags} />
    </Suspense>
  )
}

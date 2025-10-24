"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { blogData } from "./blogData"

export function BlogPostPageClient({ params }: { params: { slug: string } }) {
  const post = blogData.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="container py-12">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>
        </Button>

        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
        </div>

        <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </main>
  )
}

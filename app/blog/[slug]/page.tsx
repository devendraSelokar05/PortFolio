import { BlogPostPageClient } from "./BlogPostPageClient"
import { blogData } from "./blogData"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogData.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Rishabh Luthra's Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Rishabh Luthra"],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostPageClient params={params} />
}

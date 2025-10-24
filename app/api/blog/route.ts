import { NextResponse } from "next/server"

// Sample blog data - in a real app, this would come from a database
const blogData = [
  {
    id: "1",
    title: "Building Performant React Applications",
    excerpt: "Learn how to optimize your React applications for better performance and user experience.",
    content: "This is the full content of the blog post...",
    image: "/placeholder.svg?height=400&width=600",
    date: "Mar 15, 2023",
    readTime: "8 min read",
    tags: ["React", "Performance", "Web Development"],
    slug: "building-performant-react-applications",
  },
  {
    id: "2",
    title: "Getting Started with Next.js and TypeScript",
    excerpt: "A comprehensive guide to setting up a new project with Next.js and TypeScript.",
    content: "This is the full content of the blog post...",
    image: "/placeholder.svg?height=400&width=600",
    date: "Feb 22, 2023",
    readTime: "10 min read",
    tags: ["Next.js", "TypeScript", "Tutorial"],
    slug: "getting-started-with-nextjs-and-typescript",
  },
  // More blog posts...
]

export async function GET() {
  try {
    // In a real application, you would fetch this data from a database
    return NextResponse.json(blogData)
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 })
  }
}

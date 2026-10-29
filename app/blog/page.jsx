import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import HoverCard from "@/components/animations/hover-card";

// Sample blog data - in a real app, this would come from a database
const blogData = [{
  id: "1",
  title: "Building Performant React Applications",
  excerpt: "Learn how to optimize your React applications for better performance and user experience.",
  image: "/projects/React.jpg",
  date: "Mar 15, 2023",
  readTime: "8 min read",
  tags: ["React", "Performance", "Web Development"],
  slug: "building-performant-react-applications"
}, {
  id: "2",
  title: "Getting Started with Next.js and TypeScript",
  excerpt: "A comprehensive guide to setting up a new project with Next.js and TypeScript.",
  image: "/projects/TypeScript.jpg",
  date: "Feb 22, 2023",
  readTime: "10 min read",
  tags: ["Next.js", "TypeScript", "Tutorial"],
  slug: "getting-started-with-nextjs-and-typescript"
}, {
  id: "3",
  title: "MongoDB Best Practices for Node.js Developers",
  excerpt: "Learn how to effectively use MongoDB in your Node.js applications with these best practices.",
  image: "/projects/MongoDb.jpg",
  date: "Jan 10, 2023",
  readTime: "12 min read",
  tags: ["MongoDB", "Node.js", "Database"],
  slug: "mongodb-best-practices-for-nodejs-developers"
}, {
  id: "4",
  title: "Mastering CSS Grid Layout",
  excerpt: "A deep dive into CSS Grid Layout and how to use it to create complex layouts with ease.",
  image: "/projects/css.jpg",
  date: "Dec 5, 2022",
  readTime: "15 min read",
  tags: ["CSS", "Web Design", "Frontend"],
  slug: "mastering-css-grid-layout"
}, {
  id: "5",
  title: "Introduction to Server-Side Rendering with Next.js",
  excerpt: "Learn how Server-Side Rendering works in Next.js and when to use it in your applications.",
  image: "/projects/nextjs_hero.jpg",
  date: "Nov 18, 2022",
  readTime: "10 min read",
  tags: ["Next.js", "SSR", "React"],
  slug: "introduction-to-server-side-rendering-with-nextjs"
}, {
  id: "6",
  title: "Building RESTful APIs with Node.js and Express",
  excerpt: "A comprehensive guide to building RESTful APIs using Node.js and Express.",
  image: "/projects/nodejs.webp",
  date: "Oct 22, 2022",
  readTime: "14 min read",
  tags: ["Node.js", "Express", "API", "Backend"],
  slug: "building-restful-apis-with-nodejs-and-express"
}];
export const metadata = {
  title: "Blog | Rishabh Luthra",
  description: "Articles and tutorials on web development, React, Next.js, and more."
};
export default function BlogPage() {
  return <main className="container py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map(post => <HoverCard key={post.id} scale={1.03} shadow className="h-full">
            <Card className="h-full flex flex-col overflow-hidden group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.slice(0, 2).map(tag => <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>)}
                  {post.tags.length > 2 && <Badge variant="outline" className="text-xs">
                      +{post.tags.length - 2}
                    </Badge>}
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-primary hover:underline">
                  Read More
                </Link>
              </CardFooter>
            </Card>
            </HoverCard>)}
        </div>
      </div>
    </main>;
}
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import ScrollReveal from "@/components/animations/scroll-reveal";
import HoverCard from "@/components/animations/hover-card";
import StaggeredChildren from "@/components/animations/staggered-children";

// Sample blog data - in a real app, this would come from a database
const blogData = [{
  id: 1,
  title: "Building Performant React Applications",
  excerpt: "Learn how to optimize your React applications for better performance and user experience.",
  image: "/projects/React.jpg",
  date: "Mar 15, 2023",
  readTime: "8 min read",
  tags: ["React", "Performance", "Web Development"],
  slug: "building-performant-react-applications"
}, {
  id: 2,
  title: "Getting Started with Next.js and TypeScript",
  excerpt: "A comprehensive guide to setting up a new project with Next.js and TypeScript.",
  image: "/projects/typeScript.jpg",
  date: "Feb 22, 2023",
  readTime: "10 min read",
  tags: ["Next.js", "TypeScript", "Tutorial"],
  slug: "getting-started-with-nextjs-and-typescript"
}, {
  id: 3,
  title: "MongoDB Best Practices for Node.js Developers",
  excerpt: "Learn how to effectively use MongoDB in your Node.js applications with these best practices.",
  image: "/projects/MongoDb.jpg",
  date: "Jan 10, 2023",
  readTime: "12 min read",
  tags: ["MongoDB", "Node.js", "Database"],
  slug: "mongodb-best-practices-for-nodejs-developers"
}];
export default function Blog() {
  return <section id="blog" className="container py-24 scroll-mt-16">
      <ScrollReveal className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Latest Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development.
          </p>
        </div>

        <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map(post => <HoverCard key={post.id} scale={1.03} shadow>
              <Card className="h-full flex flex-col overflow-hidden group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map(tag => <Badge key={tag} variant="secondary" className="text-xs transition-colors hover:bg-primary hover:text-primary-foreground">
                        {tag}
                      </Badge>)}
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
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
                  <motion.div whileHover={{
                x: 5
              }} transition={{
                duration: 0.2
              }}>
                    <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                      Read More
                      <motion.span initial={{
                    opacity: 0,
                    x: -5
                  }} whileHover={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    duration: 0.2
                  }}>
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                </CardFooter>
              </Card>
            </HoverCard>)}
        </StaggeredChildren>

        <motion.div className="flex justify-center" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.5
      }} whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }}>
          <Link href="/blog" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            View All Articles
          </Link>
        </motion.div>
      </ScrollReveal>
    </section>;
}
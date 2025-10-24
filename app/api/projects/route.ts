import { NextResponse } from "next/server"

// Sample project data - in a real app, this would come from a database
const projectsData = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment integration.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Full Stack", "React", "Node.js", "MongoDB", "Redux"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "Full Stack",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality and real-time updates.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Frontend", "React", "TypeScript", "Redux"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "Frontend",
  },
  // More projects...
]

export async function GET() {
  try {
    // In a real application, you would fetch this data from a database
    return NextResponse.json(projectsData)
  } catch (error) {
    console.error("Error fetching projects:", error)
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}

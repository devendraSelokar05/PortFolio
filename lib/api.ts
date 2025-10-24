// Types for our data models
export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  demoLink: string
  githubLink: string
  category: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  readTime: string
  tags: string[]
  slug: string
}

export interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  testimonial: string
  avatar: string
}

export interface Experience {
  id: string
  role: string
  company: string
  duration: string
  description: string
  responsibilities: string[]
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  image: string
}

// In a real application, these functions would make API calls to your backend
// For now, they're just placeholders

export async function getProjects(): Promise<Project[]> {
  // This would be a fetch call to your API
  return []
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  // This would be a fetch call to your API
  return []
}

export async function getTestimonials(): Promise<Testimonial[]> {
  // This would be a fetch call to your API
  return []
}

export async function sendContactForm(data: any): Promise<{ success: boolean; message: string }> {
  // This would be a POST request to your API
  return { success: true, message: "Message sent successfully!" }
}

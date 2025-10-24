"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import ScrollReveal from "@/components/animations/scroll-reveal"
import StaggeredChildren from "@/components/animations/staggered-children"
import HoverCard from "@/components/animations/hover-card"

// Sample experience data - in a real app, this would come from a database
const experienceData = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    duration: "Jan 2022 - Present",
    description:
      "Lead the frontend development team in building modern web applications using React and Next.js. Implemented state management solutions and optimized application performance.",
    responsibilities: [
      "Architected and developed scalable frontend solutions",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with UX/UI designers to implement responsive designs",
      "Optimized application performance and reduced load times by 40%",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    duration: "Mar 2020 - Dec 2021",
    description:
      "Developed full-stack web applications using the MERN stack. Designed and implemented RESTful APIs and database schemas.",
    responsibilities: [
      "Built and maintained multiple client projects from concept to deployment",
      "Implemented authentication systems and user management features",
      "Designed and optimized MongoDB database schemas",
      "Integrated third-party APIs and payment gateways",
    ],
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "WebCraft Agency",
    duration: "Jun 2018 - Feb 2020",
    description:
      "Assisted in the development of client websites and web applications. Focused on frontend implementation and responsive design.",
    responsibilities: [
      "Developed responsive websites using HTML, CSS, and JavaScript",
      "Implemented UI components based on design mockups",
      "Fixed bugs and improved existing codebases",
      "Collaborated with the design team to ensure pixel-perfect implementations",
    ],
  },
]

// Sample certification data
const certificationData = [
  {
    id: 1,
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "Dec 2022",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "Aug 2021",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "React Advanced Certification",
    issuer: "Meta",
    date: "Mar 2021",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "Jan 2020",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="container py-24 scroll-mt-16">
      <ScrollReveal className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Experience & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and credentials in the tech industry.
          </p>
        </div>

        <Tabs defaultValue="experience" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger
                value="experience"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                Work Experience
              </TabsTrigger>
              <TabsTrigger
                value="certifications"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                Certifications
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="experience" className="mt-6 space-y-6">
            <StaggeredChildren>
              {experienceData.map((job) => (
                <HoverCard key={job.id} scale={1.02} shadow>
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                        <div>
                          <CardTitle>{job.role}</CardTitle>
                          <CardDescription>{job.company}</CardDescription>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {job.duration}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>{job.description}</p>
                      <div>
                        <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {job.responsibilities.map((responsibility, i) => (
                            <motion.li
                              key={i}
                              className="text-muted-foreground"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.1 * i }}
                            >
                              {responsibility}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </HoverCard>
              ))}
            </StaggeredChildren>
          </TabsContent>

          <TabsContent value="certifications" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StaggeredChildren direction="up">
                {certificationData.map((cert) => (
                  <HoverCard key={cert.id} scale={1.03} shadow>
                    <Card className="overflow-hidden">
                      <div className="relative h-40 w-full group">
                        <Image
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{cert.name}</CardTitle>
                        <CardDescription>
                          {cert.issuer} • {cert.date}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </HoverCard>
                ))}
              </StaggeredChildren>
            </div>
          </TabsContent>
        </Tabs>
      </ScrollReveal>
    </section>
  )
}

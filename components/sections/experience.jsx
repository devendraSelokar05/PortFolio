"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/animations/scroll-reveal";
import StaggeredChildren from "@/components/animations/staggered-children";
import HoverCard from "@/components/animations/hover-card";

// Sample experience data - in a real app, this would come from a database
const experienceData = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Dukaanse India Pvt. Ltd",
    duration: "Jun 2026 - Present",
    description:
      "Building and maintaining DukaanSe, a hyperlocal grocery delivery platform, across the frontend and backend using React, Redux, Node.js, and MongoDB.",
    responsibilities: [
      "Develop and maintain features across the React frontend and Node.js backend",
      "Work on the Gullak Coins rewards and two-way referral system for customers and shopkeepers",
      "Design and integrate REST APIs and MongoDB data models for orders, shops, and rewards",
      "Manage application state with Redux and keep the UI responsive across devices",
    ],
  },
  {
    id: 2,
    role: "Node.js Developer",
    company: "Talentrise Technokrate Pvt. Ltd",
    duration: "Jun 2025 - May 2026",
    description:
      "Joined full-time after my internship and built backend systems and APIs for client projects using Node.js, Express, and MongoDB, including a taxi booking platform with web and mobile app support.",
    responsibilities: [
      "Built and maintained REST APIs for the taxi booking system, covering ride booking, driver management, and payments",
      "Implemented live features such as customer-driver chat, real-time ride tracking, and trip sharing",
      "Handled automated invoices, payment and refund flows, and dynamic pricing logic",
      "Designed MongoDB schemas and implemented authentication and role-based access",
      "Delivered projects from development to deployment alongside the frontend and mobile teams",
    ],
  },
  {
    id: 3,
    role: "Node.js Developer Intern",
    company: "Talentrise Technokrate Pvt. Ltd",
    duration: "Mar 2025 - Jun 2025",
    description:
      "Three-month internship focused on learning backend development with Node.js and MongoDB while contributing to live client projects.",
    responsibilities: [
      "Built REST API endpoints with Node.js and Express under senior developer guidance",
      "Worked with MongoDB for data modeling, queries, and CRUD operations",
      "Fixed bugs, wrote cleaner code through code reviews, and learned Git team workflows",
      "Earned a full-time offer based on performance during the internship",
    ],
  },
];

// Sample certification data
const certificationData = [
  {
    id: 1,
    name: "Full Stack Web Development - Certificate",
    issuer: "The Tools Academy",
    date: "Oct 2024",
    image: "/projects/FullStack-Certification.png",
  },
  {
    id: 2,
    name: "FullStack Developer Internship Certificate",
    issuer: "Talentrise Technokrate Pvt.Ltd",
    date: "Jun 2025",
    pdf: "/projects/Devendra Selokar.docx (1).pdf",
  },
  {
    id: 3,
    name: "AI Certification",
    issuer: "Be10x",
    date: "Feb 2025",
    pdf: "/projects/Certificate.pdf",
  },

];
export default function Experience() {
  return (
    <section id="experience" className="container py-24 scroll-mt-16">
      <ScrollReveal className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Experience & Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and credentials in the tech industry.
          </p>
        </div>

        <Tabs defaultValue="experience" className="w-full">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
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
                        <h4 className="font-medium mb-2">
                          Key Responsibilities:
                        </h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {job.responsibilities.map((responsibility, i) => (
                            <motion.li
                              key={i}
                              className="text-muted-foreground"
                              initial={{
                                opacity: 0,
                                x: -10,
                              }}
                              whileInView={{
                                opacity: 1,
                                x: 0,
                              }}
                              viewport={{
                                once: true,
                              }}
                              transition={{
                                duration: 0.3,
                                delay: 0.1 * i,
                              }}
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
                      <div className="relative h-60 w-full group cursor-pointer">
                        {cert.pdf ? (
                          <a
                            href={encodeURI(cert.pdf)}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${cert.name} (PDF)`}
                            className="block h-full w-full overflow-hidden"
                          >
                            {/* pointer-events-none so clicks reach the link instead of the PDF viewer;
                                extra 20px width pushes the viewer's own scrollbar outside the clipped box */}
                            <object
                              data={`${encodeURI(cert.pdf)}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                              type="application/pdf"
                              className="pointer-events-none h-full w-[calc(100%+20px)]"
                            >
                              <span className="flex h-full items-center justify-center text-sm font-medium text-primary">
                                View certificate (PDF)
                              </span>
                            </object>
                          </a>
                        ) : (
                          <Image
                            src={cert.image || "/placeholder.svg"}
                            alt={cert.name}
                            fill
                            className="object-contain transition-transform duration-500 group-hover:scale-110"
                          />
                        )}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
  );
}

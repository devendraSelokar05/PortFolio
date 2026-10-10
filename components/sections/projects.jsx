"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Smartphone } from "lucide-react";
import ScrollReveal from "@/components/animations/scroll-reveal";
import HoverCard from "@/components/animations/hover-card";

// Sample project data - in a real app, this would come from a database
const projectsData = [
  {
    id: 1,
    title: "Zotto — Sanitary Pad E-Commerce Platform",
    description:
      "A pincode-based sanitary pad delivery platform with role-based panels for SuperAdmin, Branch Admin, and Delivery Boy — from inventory to doorstep.",
    image: "/projects/zotto.png",
    tags: ["Node.js", "MongoDB", "Redux"],
    demoLink: "https://zotto.in/",
    category: ["Backend"],
  },
  {
    id: 2,
    title: "Dukaanse — Grocery Delivery Platform",
    description:
      "DukaanSe is a hyperlocal grocery platform that helps nearby stores take their businesses online while allowing customers to shop from local stores with home delivery or self-pickup. It features a Gullak Coins rewards system with signup, order-completion, and referral-based rewards, along with coin-based discounts for self-pickup orders.The platform also includes a two-way referral system, allowing customers to refer shops and friends, while shopkeepers can refer customers and other shops. Shopkeepers can earn coins through successful referrals and distribute them to customers as bonuses, creating a rewarding local shopping ecosystem.",
    image: "/projects/dukaanse.png",
    tags: ["Full Stack", "Backend", "React", "Node.js", "MongoDB", "Redux"],
    demoLink: "https://www.dukaanseindia.com/",
    appLink: [
      {
        label: "DukaanSe Customer App",
        url: "https://play.google.com/store/apps/details?id=com.dukaan.customer&pcampaignid=web_share",
      },
      {
        label: "DukaanSe Shop App",
        url: "https://play.google.com/store/apps/details?id=com.dukkanshop&pcampaignid=web_share",
      },
    ],
    category: ["Frontend","Backend", "Full Stack"],
  },
  {
    id: 3,
    title: "Taxi Booking System",
    description:
      "A feature-rich taxi booking system inspired by platforms like Ola and Uber. Customers make an advance payment to confirm their ride, which is then offered to drivers with the required vehicle type. The platform includes live customer-driver chat, SOS, live trip sharing, automated invoices, and real-time ride tracking for a seamless and secure booking experience.It also supports online and advance bookings, driver-side ride management, automated payment/refund handling, and dynamic pricing based on city, vehicle type, surge, and night charges.",
    image:
      "https://play-lh.googleusercontent.com/b5EtQitWn897QEGp4KVDRk5UKPj6MN17L3WmasPlCqZrOQjGXcZeeYJSLMCnKivQifFKbYISF9UeuSfdSOXAEg=w5120-h2880-rw",
    tags: ["Backend", "Node.js", "Express", "MongoDB"],
    demoLink: "https://taxi.technokrate.com/",
    appLink: [
      {
        label: "SKG User",
        url: "https://play.google.com/store/apps/details?id=com.skg.user&pcampaignid=web_share",
      },
      {
        label: "SKG Driver",
        url: "https://play.google.com/store/apps/details?id=com.skg.driver&pcampaignid=web_share",
      },
    ],
    // githubLink: "https://github.com",
    category: ["Frontend", "Backend"],
  },
  {
    id: 4,
    title: "Pench Foods & Dairy Product",
    description: "A platform for selling food and dairy products online.",
    image: "/projects/pench-foods.png",
    tags: ["Frontend", "Next.js", "Tailwind CSS"],
    demoLink: "https://penchfoods.com/",
    githubLink: "https://github.com",
    category: "Frontend",
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description:
      "A real-time chat application with private messaging and group chat functionality.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Full Stack", "React", "Node.js", "Socket.io"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "Full Stack",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current and forecasted weather data from multiple APIs.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Frontend", "React", "API Integration"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "Frontend",
  },
];
const categories = ["All", "Frontend", "Full Stack", "Backend", ];
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) =>
          Array.isArray(project.category)
            ? project.category.includes(activeCategory)
            : project.category === activeCategory,
        );
  return (
    <section id="projects" className="container py-24 scroll-mt-16">
      <ScrollReveal className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects showcasing my skills in frontend and
            backend development.
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-2 pt-4"
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
              delay: 0.2,
            }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <Button
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait" initial={false}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.3,
                  delay: Math.min(index * 0.05, 0.3),
                }}
                layout="position"
              >
                <HoverCard scale={1.03} shadow border>
                  <Card className="h-full flex flex-col overflow-hidden group">
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="shrink-0"
                      >
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="group"
                        >
                          <Link
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                            Website
                          </Link>
                        </Button>
                      </motion.div>

                      {project.appLink?.map((app) => (
                        <motion.div
                          key={app.url}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="shrink-0"
                        >
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="group"
                          >
                            <Link
                              href={app.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Smartphone className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                              {app.label}
                            </Link>
                          </Button>
                        </motion.div>
                      ))}
                    </CardFooter>
                  </Card>
                </HoverCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </ScrollReveal>
    </section>
  );
}

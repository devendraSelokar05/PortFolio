"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Smartphone } from "lucide-react";
import ScrollReveal from "@/components/animations/scroll-reveal";
import HoverCard from "@/components/animations/hover-card";

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
      "DukaanSe is a hyperlocal grocery platform that helps nearby stores take their businesses online while allowing customers to shop from local stores with home delivery or self-pickup. It features a Gullak Coins rewards system with signup, order-completion, and referral-based rewards, along with coin-based discounts for self-pickup orders. The platform also includes a two-way referral system, allowing customers to refer shops and friends, while shopkeepers can refer customers and other shops. Shopkeepers can earn coins through successful referrals and distribute them to customers as bonuses, creating a rewarding local shopping ecosystem.",
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
    category: ["Frontend", "Backend", "Full Stack"],
  },
  {
    id: 3,
    title: "Taxi Booking System",
    description:
      "A feature-rich taxi booking system inspired by platforms like Ola and Uber. Customers make an advance payment to confirm their ride, which is then offered to drivers with the required vehicle type. The platform includes live customer-driver chat, SOS, live trip sharing, automated invoices, and real-time ride tracking for a seamless and secure booking experience. It also supports online and advance bookings, driver-side ride management, automated payment/refund handling, and dynamic pricing based on city, vehicle type, surge, and night charges.",
    // Behtar: image download karke public/projects/taxi.png me rakho
    // aur yahan "/projects/taxi.png" use karo.
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
    category: ["Frontend", "Backend"],
  },
  {
    id: 4,
    title: "Pench Foods & Dairy Product",
    description: "A platform for selling food and dairy products online.",
    image: "https://penchadmin.netlify.app/images/LOGIN-1.png",
    tags: ["Frontend", "Next.js", "Tailwind CSS"],
    demoLink: "https://penchfoods.com/",
    githubLink: "https://github.com",
    category: ["Frontend"],
  },
];

const categories = ["All", "Frontend", "Full Stack", "Backend"];

/* Image jo load na ho to placeholder dikhaye (broken alt text nahi) */
function ProjectImage({ src, alt }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-52 w-full shrink-0 overflow-hidden bg-muted">
      {failed ? (
        <div className="flex h-full w-full items-center justify-center px-4 text-center text-sm text-muted-foreground">
          {alt}
        </div>
      ) : (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={() => setFailed(true)}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}

/* Lamba description 4 lines me clamp, "Read more" se khulega */
function ProjectDescription({ text }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > 160;

  return (
    <div>
      <p
        className={`text-sm text-muted-foreground ${
          expanded ? "" : "line-clamp-4"
        }`}
      >
        {text}
      </p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-1 text-xs font-medium text-primary hover:underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) =>
          project.category.includes(activeCategory),
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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

        {/* items-stretch + h-full = saare cards same height */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait" initial={false}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.3,
                  delay: Math.min(index * 0.05, 0.3),
                }}
                layout="position"
              >
                <HoverCard scale={1.03} shadow border className="h-full">
                  <Card className="group flex h-full flex-col overflow-hidden">
                    <ProjectImage src={project.image} alt={project.title} />

                    <CardHeader className="space-y-2">
                      <CardTitle className="line-clamp-2 min-h-[3.5rem]">
                        {project.title}
                      </CardTitle>
                      <ProjectDescription text={project.description} />
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

                    {/* flex-wrap: saare buttons dikhenge, hamesha card ke neeche */}
                    <CardFooter className="mt-auto flex flex-wrap gap-2">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
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
                            <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                            Website
                          </Link>
                        </Button>
                      </motion.div>

                      {project.appLink?.map((app) => (
                        <motion.div
                          key={app.url}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
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
                              <Smartphone className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
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
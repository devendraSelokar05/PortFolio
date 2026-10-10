"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import ScrollReveal from "@/components/animations/scroll-reveal";
import HoverCard from "@/components/animations/hover-card";

// Sample testimonials data - in a real app, this would come from a database
const testimonialsData = [{
  id: 1,
  name: "Sarah Johnson",
  position: "CTO at TechStart",
  company: "TechStart",
  testimonial: "Rishabh is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are impressive. He transformed our outdated website into a modern, user-friendly platform that has significantly improved our customer engagement.",
  avatar: "/placeholder.svg?height=100&width=100"
}, {
  id: 2,
  name: "Michael Chen",
  position: "Product Manager",
  company: "InnovateTech",
  testimonial: "Working with Rishabh was a pleasure. He understood our requirements quickly and delivered a solution that exceeded our expectations. His technical expertise and communication skills made the entire development process smooth and efficient.",
  avatar: "/placeholder.svg?height=100&width=100"
}, {
  id: 3,
  name: "Emily Rodriguez",
  position: "Founder",
  company: "DesignHub",
  testimonial: "Rishabh is a talented developer with a keen eye for design. He helped us build a complex web application with a seamless user experience. His ability to translate our vision into a functional product was remarkable.",
  avatar: "/placeholder.svg?height=100&width=100"
}, {
  id: 4,
  name: "David Kim",
  position: "Engineering Lead",
  company: "SoftSolutions",
  testimonial: "I've worked with many developers, but Rishabh stands out for his technical skills and work ethic. He's proactive, solution-oriented, and delivers clean, maintainable code. A true asset to any development team.",
  avatar: "/placeholder.svg?height=100&width=100"
}];
export default function Testimonials() {
  return <section id="testimonials" className="container py-24 scroll-mt-16">
      <ScrollReveal className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">What people say about working with me.</p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                <div className="h-full p-1">
                  <HoverCard scale={1.03} shadow>
                    <Card className="h-full flex flex-col">
                      <CardHeader className="pb-2">
                        <motion.div initial={{
                      scale: 0.8,
                      opacity: 0
                    }} whileInView={{
                      scale: 1,
                      opacity: 1
                    }} viewport={{
                      once: true
                    }} transition={{
                      duration: 0.5,
                      delay: 0.2
                    }}>
                          <Quote className="h-8 w-8 text-primary opacity-50" />
                        </motion.div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <motion.p className="italic" initial={{
                      opacity: 0
                    }} whileInView={{
                      opacity: 1
                    }} viewport={{
                      once: true
                    }} transition={{
                      duration: 0.5,
                      delay: 0.3
                    }}>
                          {testimonial.testimonial}
                        </motion.p>
                      </CardContent>
                      <CardFooter>
                        <motion.div className="flex items-center gap-4" initial={{
                      x: -20,
                      opacity: 0
                    }} whileInView={{
                      x: 0,
                      opacity: 1
                    }} viewport={{
                      once: true
                    }} transition={{
                      duration: 0.5,
                      delay: 0.4
                    }}>
                          <div className="relative h-12 w-12 rounded-full overflow-hidden">
                            <Image src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
                          </div>
                          <div>
                            <p className="font-medium">{testimonial.name}</p>
                            <CardDescription>
                              {testimonial.position}, {testimonial.company}
                            </CardDescription>
                          </div>
                        </motion.div>
                      </CardFooter>
                    </Card>
                  </HoverCard>
                </div>
              </CarouselItem>)}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-2">
            <motion.div whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }}>
              <CarouselPrevious className="relative inset-0 translate-y-0" />
            </motion.div>
            <motion.div whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }}>
              <CarouselNext className="relative inset-0 translate-y-0" />
            </motion.div>
          </div>
        </Carousel>
      </ScrollReveal>
    </section>;
}
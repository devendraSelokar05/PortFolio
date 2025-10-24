"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Calendar, Github, Linkedin, Mail, Twitter } from "lucide-react"
import ScrollReveal from "@/components/animations/scroll-reveal"
import HoverCard from "@/components/animations/hover-card"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    form.reset()

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })
  }

  const socialLinks = [
    { name: "Email", icon: <Mail className="h-5 w-5" />, href: "mailto:contact@rishabluthra.dev" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com" },
    { name: "GitHub", icon: <Github className="h-5 w-5" />, href: "https://github.com" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com" },
    { name: "Schedule a Call", icon: <Calendar className="h-5 w-5" />, href: "https://calendly.com" },
  ]

  return (
    <section id="contact" className="container py-24 scroll-mt-16">
      <ScrollReveal className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal direction="right">
            <HoverCard scale={1.02} shadow>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Connect with me through any of these platforms.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-4">
                    {socialLinks.map((link, index) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <motion.a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.div whileHover={{ rotate: 15 }} transition={{ duration: 0.2 }}>
                            {link.icon}
                          </motion.div>
                          <span>{link.name}</span>
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </HoverCard>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <HoverCard scale={1.02} shadow>
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your name"
                                  {...field}
                                  className="transition-all focus-visible:ring-primary"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your email"
                                  {...field}
                                  className="transition-all focus-visible:ring-primary"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Subject of your message"
                                {...field}
                                className="transition-all focus-visible:ring-primary"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Your message"
                                className="min-h-32 resize-none transition-all focus-visible:ring-primary"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button type="submit" className="w-full relative overflow-hidden group" disabled={isSubmitting}>
                          <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                          <motion.span
                            className="absolute inset-0 bg-primary/20"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "0%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </Button>
                      </motion.div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </HoverCard>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </section>
  )
}

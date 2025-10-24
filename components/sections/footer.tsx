"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Mail className="h-5 w-5" />, href: "mailto:contact@rishabluthra.dev", label: "Email" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", label: "Twitter" },
  ]

  const navLinks = [
    { name: "Home", href: "/#" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <motion.footer
      className="border-t"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold">Rishabh Luthra</h3>
            <p className="text-muted-foreground">
              Full Stack Developer specializing in building exceptional digital experiences.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:bg-primary/10">
                    <Link href={link.href} aria-label={link.label}>
                      {link.icon}
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <p className="text-muted-foreground">
              Have a project in mind or want to work together? Feel free to reach out!
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="relative overflow-hidden group">
                <Link href="/#contact">
                  <span className="relative z-10">Contact Me</span>
                  <motion.span
                    className="absolute inset-0 bg-primary/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="border-t mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-sm text-muted-foreground">© {currentYear} Rishabh Luthra. All Rights Reserved.</p>
          <p className="text-sm text-muted-foreground">Built with Next.js, TypeScript & Tailwind CSS</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Eye } from "lucide-react"

export function ResumePageClient() {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/resume-image.png"
    link.download = "Devendra_Selokar_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <main className="container py-12 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header with navigation and download button */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="ghost" asChild className="w-fit">
            <Link href="/#about">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>

          <div className="flex gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={handleDownload} className="gap-2 relative overflow-hidden group">
                <Download className="h-4 w-4 group-hover:animate-bounce" />
                <span className="relative z-10">Download Resume</span>
                <motion.span
                  className="absolute inset-0 bg-primary/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" onClick={() => window.print()} className="gap-2 relative overflow-hidden group">
                <Eye className="h-4 w-4 group-hover:animate-pulse" />
                <span className="relative z-10">Print Resume</span>
                <motion.span
                  className="absolute inset-0 bg-primary/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden print:shadow-none print:rounded-none"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Resume Image */}
          <div className="relative w-full">
            <Image
              src=""
              alt="Devendra Selokar Resume"
              width={800}
              height={1000}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Mobile-friendly text version */}
        <motion.div
          className="lg:hidden bg-card rounded-lg p-6 space-y-6 print:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-center">
            <h1 className="text-2xl font-bold">DEVENDRA SELOKAR</h1>
            <p className="text-muted-foreground">selokardevendra529@gmail.com | 9021118364 | Nagpur</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Summary</h2>
            <p className="text-sm text-muted-foreground">
              A motivated Full Stack Developer with expertise in the MERN stack and proficiency in responsive web
              design, RESTful APIs. Bachelor's degree in Computer Applications (BCA, 2023) with a comprehensive
              certification in Full Stack Web Development. Passionate about delivering scalable, user-centric
              applications and solving real-world challenges.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Education</h2>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-medium">Bachelor of Computer Applications (BCA)</p>
                <p className="text-muted-foreground">City Premier College, Nagpur | Graduated: June 2023</p>
              </div>
              <div>
                <p className="font-medium">12th Class (Science)</p>
                <p className="text-muted-foreground">
                  Dharampeth M.P Deo Memorial Science College, Nagpur | Completed: March 2020
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Skills</h2>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-medium">Frontend:</span> HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS
              </div>
              <div>
                <span className="font-medium">Backend:</span> Node.js, Express.js, MongoDB, MySQL
              </div>
              <div>
                <span className="font-medium">Tools:</span> Git & GitHub, Postman
              </div>
              <div>
                <span className="font-medium">Others:</span> REST API Development, Server Side Rendering & Team
                Collaboration
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.div
          className="text-center text-sm text-muted-foreground print:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>For the best viewing experience, please use the download or print options above.</p>
        </motion.div>
      </div>
    </main>
  )
}

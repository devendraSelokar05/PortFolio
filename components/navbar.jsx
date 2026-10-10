"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GradientText from "./animations/gradient-text";
const navItems = [{
  name: "Home",
  path: "/#"
}, {
  name: "About",
  path: "/#about"
}, {
  name: "Projects",
  path: "/#projects"
}, {
  name: "Experience",
  path: "/#experience"
}, {
  name: "Blog",
  path: "/#blog"
}, {
  name: "Contact",
  path: "/#contact"
}];
export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; // Offset

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight && sectionId) {
          setActiveSection(`#${sectionId}`);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleNavClick = (e, path) => {
    e.preventDefault();
    const targetId = path.split("#")[1];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        // Offset for navbar
        behavior: "smooth"
      });

      // Update active section
      setActiveSection(`#${targetId}`);

      // Close mobile menu if open
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };
  return <motion.header className={cn("sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200", scrolled ? "bg-background/95 shadow-sm" : "bg-background/50")} initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.2,
    type: "tween"
  }}>
      <div className="container flex h-16 items-center justify-between">
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5
      }}>
          <Link href="/#" className="flex items-center space-x-2" onClick={e => handleNavClick(e, "/#")}>
            <span className="text-xl font-bold"><GradientText text="D.S" className="font-bold" /></span>
          </Link>
        </motion.div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:gap-6">
          {navItems.map((item, index) => <motion.div key={item.path} initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3,
          delay: index * 0.1
        }}>
              <Link href={item.path} className={cn("text-sm font-medium transition-colors hover:text-primary relative py-2", activeSection === item.path.split("#")[1] || activeSection === "" && item.path === "/#" ? "text-primary" : "text-muted-foreground")} onClick={e => handleNavClick(e, item.path)}>
                {item.name}
                {(activeSection === item.path.split("#")[1] || activeSection === "" && item.path === "/#") && <motion.div className="absolute bottom-0 left-0 h-0.5 w-full bg-primary" layoutId="navbar-indicator" transition={{
              type: "spring",
              duration: 0.5
            }} />}
              </Link>
            </motion.div>)}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile menu button */}
          <motion.div whileTap={{
          scale: 0.9
        }}>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? <motion.div key="close" initial={{
                rotate: -90,
                opacity: 0
              }} animate={{
                rotate: 0,
                opacity: 1
              }} exit={{
                rotate: 90,
                opacity: 0
              }} transition={{
                duration: 0.2
              }}>
                    <X className="h-5 w-5" />
                  </motion.div> : <motion.div key="menu" initial={{
                rotate: 90,
                opacity: 0
              }} animate={{
                rotate: 0,
                opacity: 1
              }} exit={{
                rotate: -90,
                opacity: 0
              }} transition={{
                duration: 0.2
              }}>
                    <Menu className="h-5 w-5" />
                  </motion.div>}
              </AnimatePresence>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileMenuOpen && <motion.div className="md:hidden" initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} transition={{
        duration: 0.3
      }}>
            <div className="container py-4 grid gap-4">
              {navItems.map((item, index) => <motion.div key={item.path} initial={{
            opacity: 0,
            x: -10
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.2,
            delay: index * 0.05
          }}>
                  <Link href={item.path} className={cn("text-sm font-medium transition-colors hover:text-primary block py-2", activeSection === item.path.split("#")[1] || activeSection === "" && item.path === "/#" ? "text-primary" : "text-muted-foreground")} onClick={e => handleNavClick(e, item.path)}>
                    {item.name}
                  </Link>
                </motion.div>)}
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.header>;
}
"use client";

import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import dynamic from "next/dynamic";

// Import the Hero section normally since it's the first visible component
import Hero from "@/components/sections/hero";

// Dynamically import other sections to improve initial load time
const About = dynamic(() => import("@/components/sections/about"), {
  ssr: true
});
const Projects = dynamic(() => import("@/components/sections/projects"), {
  ssr: true
});
const Experience = dynamic(() => import("@/components/sections/experience"), {
  ssr: true
});
const Skills = dynamic(() => import("@/components/sections/skills"), {
  ssr: true
});
// const Testimonials = dynamic(() => import("@/components/sections/testimonials"), {
//   ssr: true
// });
const Blog = dynamic(() => import("@/components/sections/blog"), {
  ssr: true
});
const Contact = dynamic(() => import("@/components/sections/contact"), {
  ssr: true
});
const Footer = dynamic(() => import("@/components/sections/footer"), {
  ssr: true
});
export default function Home() {
  const [scope, animate] = useAnimate();

  // Simplified page load animation
  useEffect(() => {
    animate(scope.current, {
      opacity: 1
    }, {
      duration: 0.3
    });
  }, [animate, scope]);
  return <motion.main ref={scope} className="min-h-screen overflow-x-hidden" initial={{
    opacity: 0
  }}>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      {/* <Testimonials /> */}
      <Blog />
      <Contact />
      <Footer />
    </motion.main>;
}
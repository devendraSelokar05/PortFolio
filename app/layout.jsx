import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import SmoothScroll from "@/components/smooth-scroll";
import Layout from "@/components/layout";
import SplashCursor from "@/components/animations/splash-cursor";
import { CursorProvider } from "@/components/animations/cursor-context";
const inter = Inter({
  subsets: ["latin"]
});
export const metadata = {
  title: "Devendra Selokar | Full Stack Developer",
  description: "Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB",
  keywords: ["developer", "portfolio", "react", "next.js", "node.js", "mongodb", "full stack"],
  authors: [{
    name: "Devendra Selokar"
  }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rishabluthra.dev",
    title: "Devendra Selokar | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB",
    siteName: "Rishabh Luthra Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishabh Luthra | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB"
  },
  generator: 'v0.dev'
};
export default function RootLayout({
  children
}) {
  return <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CursorProvider>
            <Layout>
              <Navbar />
              {children}
              <Toaster />
              <SmoothScroll />
              <SplashCursor />
            </Layout>
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>;
}
import './globals.css';
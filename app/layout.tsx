import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import ThemeProvider from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

const neueHaas = localFont({
  src: "../fonts/NeueHaasGrotesk-Medium.ttf",
  variable: "--font-neue-haas",
  weight: "500",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adityaguptadev.me"),
  title: {
    default:
      "Aditya Gupta - Full Stack Developer | MERN Stack & Java Developer",
    template: "%s | Aditya Gupta",
  },
  description:
    "Aditya Gupta - MCA student at VIT Vellore specializing in full-stack development with MERN stack, competitive programming, and building scalable web applications.",
  keywords: [
    "Aditya Gupta",
    "Full Stack Developer",
    "MERN Stack",
    "Java Developer",
    "React Developer",
    "Node.js",
    "Competitive Programming",
    "Web Development",
    "VIT Vellore",
    "Portfolio",
  ],
  authors: [{ name: "Aditya Gupta" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Aditya Gupta - Full Stack Developer Portfolio",
    description:
      "MCA student at VIT Vellore specializing in MERN stack development, competitive programming, and building innovative web applications.",
    url: "https://adityaguptadev.me/",
    siteName: "Aditya Gupta Portfolio",
    images: [
      {
        url: "/PP.jpg",
        width: 800,
        height: 800,
        alt: "Aditya Gupta",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@heytheadee",
    creator: "@heytheadee",
    title: "Aditya Gupta - Full Stack Developer Portfolio",
    description:
      "MCA student at VIT Vellore specializing in MERN stack development and competitive programming.",
    images: ["/PP.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${neueHaas.variable} antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen">
            {/* Sidebar Navigation */}
            <Sidebar />

            {/* Mobile Navigation */}
            <MobileNav />

            {/* Main Content */}
            <main className="flex-1 md:ml-48 px-6 py-8 md:px-16 md:py-16 mt-32 md:mt-0">
              <div className="max-w-3xl">{children}</div>
            </main>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

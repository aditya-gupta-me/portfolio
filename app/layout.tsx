import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    default: "Aditya Gupta - Full Stack Developer",
    template: "%s | Aditya Gupta",
  },
  description:
    "Aditya Gupta - Full Stack Developer specializing in full-stack development with TypeScript, React.js, Node.js, Next.js, Postgre,SQL competitive programming, cloud technologies, and building scalable web applications.",
  keywords: [
    "Aditya Gupta",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Node.js",
    "Competitive Programming",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Aditya Gupta" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Aditya Gupta - Full Stack Developer Portfolio",
    description:
      "Aditya Gupta - Full Stack Developer specializing in full-stack development with TypeScript, React.js, Node.js, Next.js, Postgre,SQL competitive programming, cloud technologies, and building scalable web applications.",
    url: "https://adityaguptadev.me/",
    siteName: "Aditya Gupta Portfolio",
    images: [
      {
        url: "/avatar.png",
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
      "Aditya Gupta - Full Stack Developer specializing in full-stack development with TypeScript, React.js, Node.js, Next.js, Postgre,SQL competitive programming, cloud technologies, and building scalable web applications.",
    images: ["/avatar.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${neueHaas.variable} antialiased min-h-screen flex flex-col bg-[#FAF9F7] dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-1 w-full pt-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import type { Metadata, Viewport } from "next";
import Script from "next/script";

const neueHaas = localFont({
  src: "../fonts/NeueHaasGrotesk-Medium.ttf",
  variable: "--font-neue-haas",
  weight: "500",
  display: "swap",
  adjustFontFallback: "Arial",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF9F7" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://adityaguptadev.me"),
  title: {
    default: "Aditya Gupta — Full Stack Developer",
    template: "%s | Aditya Gupta",
  },
  description:
    "Full Stack Developer building production-ready web applications with TypeScript, React, Next.js, Node.js, and PostgreSQL. Based in India, open to opportunities.",
  authors: [{ name: "Aditya Gupta", url: "https://adityaguptadev.me" }],
  creator: "Aditya Gupta",
  alternates: {
    canonical: "https://adityaguptadev.me",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Aditya Gupta — Full Stack Developer",
    description:
      "Full Stack Developer building production-ready web applications with TypeScript, React, Next.js, Node.js, and PostgreSQL. Based in India, open to opportunities.",
    url: "https://adityaguptadev.me",
    siteName: "Aditya Gupta",
    locale: "en_US",
    // TODO: create /public/og-image.png at 1200x630px
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aditya Gupta — Full Stack Developer",
        type: "image/png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@heytheadee",
    creator: "@heytheadee",
    title: "Aditya Gupta — Full Stack Developer",
    description:
      "Full Stack Developer building production-ready web applications with TypeScript, React, Next.js, Node.js, and PostgreSQL. Based in India, open to opportunities.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aditya Gupta — Full Stack Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aditya Gupta",
    url: "https://adityaguptadev.me",
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://github.com/YOUR_GITHUB_USERNAME", // TODO: replace YOUR_GITHUB_USERNAME
      "https://linkedin.com/in/YOUR_LINKEDIN", // TODO: replace YOUR_LINKEDIN
      "https://twitter.com/heytheadee",
    ],
    knowsAbout: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Full Stack Development",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${neueHaas.variable} antialiased min-h-screen flex flex-col bg-[#FAF9F7] dark:bg-[#0a0a0a] text-black dark:text-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-medium focus:bg-black dark:focus:bg-white focus:text-white dark:focus:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1 w-full pt-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        {/* umami for analytics */}
        <Script src="https://cloud.umami.is/script.js"
          data-website-id="5c8298b4-fce7-468d-8880-9afbb17ad24d"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

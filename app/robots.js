export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/assets/", "/fonts/"],
    },
    sitemap: "https://adityaguptadev.me/sitemap.xml",
  };
}

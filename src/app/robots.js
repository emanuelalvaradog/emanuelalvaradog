export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://emanuelalvarado.com/sitemap.xml",
  };
}

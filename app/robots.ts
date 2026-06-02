import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://aibgin.info/sitemap.xml",
    host: "https://aibgin.info",
  };
}

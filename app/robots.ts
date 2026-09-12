import type { MetadataRoute } from "next";
import { getSiteConfig } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  const siteConfig = getSiteConfig();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"]
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`
  };
}

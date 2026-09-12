import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getSolutionsConfig, getDocsConfig, getAlternativesConfig } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;
  const now = new Date().toISOString();

  // Core Static Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0
    },
    {
      url: `${baseUrl}/product`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    }
  ];

  // Dynamic Solution Vertical Pages
  const solutionRoutes: MetadataRoute.Sitemap = getSolutionsConfig().solutions.map((s) => ({
    url: `${baseUrl}/solutions/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  // Dynamic Documentation Topic Pages
  const docRoutes: MetadataRoute.Sitemap = getDocsConfig().topics.map((t) => ({
    url: `${baseUrl}/docs/${t.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9
  }));

  // Dynamic Alternative Comparison Pages
  const alternativeRoutes: MetadataRoute.Sitemap = getAlternativesConfig().comparisons.map((a) => ({
    url: `${baseUrl}/alternatives/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6
  }));

  return [...staticRoutes, ...docRoutes, ...solutionRoutes, ...alternativeRoutes];
}

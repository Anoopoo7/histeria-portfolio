import type { MetadataRoute } from "next";
import { getSiteConfig, getSolutionsConfig, getDocsConfig, getAlternativesConfig } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteConfig = getSiteConfig();
  const baseUrl = siteConfig.siteUrl;

  const staticRoutes = [
    "",
    "/product",
    "/pricing",
    "/docs"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  const solutionRoutes = getSolutionsConfig().solutions.map((s) => ({
    url: `${baseUrl}/solutions/${s.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const docRoutes = getDocsConfig().topics.map((t) => ({
    url: `${baseUrl}/docs/${t.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.8
  }));

  const alternativeRoutes = getAlternativesConfig().comparisons.map((a) => ({
    url: `${baseUrl}/alternatives/${a.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...solutionRoutes, ...docRoutes, ...alternativeRoutes];
}

import type { Metadata } from "next";
import { getSeoConfig, getSiteConfig } from "@/lib/content";

export function generatePageMetadata(
  pageKey?: string,
  overrideTitle?: string,
  overrideDescription?: string
): Metadata {
  const seoConfig = getSeoConfig();
  const siteConfig = getSiteConfig();

  const pageMeta = pageKey ? seoConfig.pages[pageKey] : undefined;

  const title = overrideTitle || pageMeta?.title || seoConfig.default.title;
  const description = overrideDescription || pageMeta?.description || seoConfig.default.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: siteConfig.siteName,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    }
  };
}

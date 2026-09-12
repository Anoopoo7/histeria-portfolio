import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { getSeoConfig } from "@/lib/content";

export interface GenerateMetadataOptions {
  pageKey?: string;
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}

export function generatePageMetadata(options: GenerateMetadataOptions = {}): Metadata {
  const seoConfig = getSeoConfig();
  const pageMeta = options.pageKey ? seoConfig.pages[options.pageKey] : undefined;

  const title = options.title || pageMeta?.title || seoConfig.default.title;
  const description = options.description || pageMeta?.description || seoConfig.default.description;
  const keywords = options.keywords || pageMeta?.keywords || seoConfig.default.keywords;
  const pagePath = options.path || pageMeta?.path || "";

  // Canonical URL calculation
  const canonicalUrl = `${siteConfig.siteUrl}${pagePath.startsWith("/") ? pagePath : `/${pagePath}`}`;
  const ogImageUrl = options.image || `${siteConfig.siteUrl}/opengraph-image`;

  const isNoIndex = options.noIndex || false;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(siteConfig.siteUrl),
    verification: {
      google: "MQVIS8YBo22gbU2oAmLR0hcyDSHptrTqvF-sIjP7mek",
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
    robots: isNoIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

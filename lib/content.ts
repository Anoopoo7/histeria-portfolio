import siteConfigData from "@/content/config.json";
import productData from "@/content/product.json";
import seoData from "@/content/seo.json";
import plansData from "@/content/plans.json";
import solutionsData from "@/content/solutions.json";
import docsData from "@/content/docs.json";
import navigationData from "@/content/navigation.json";
import faqData from "@/content/faq.json";
import footerData from "@/content/footer.json";
import alternativesData from "@/content/alternatives.json";

import type {
  SiteConfig,
  ProductConfig,
  SeoConfig,
  PlansConfig,
  SolutionsConfig,
  DocsConfig,
  NavConfig,
  FaqConfig,
  FooterConfig,
  AlternativesConfig,
  SolutionItem,
  DocTopic,
  AlternativeItem
} from "@/types/content";

import { siteConfig } from "@/lib/site-config";

export function getSiteConfig(): SiteConfig {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || siteConfigData.appUrl;
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || siteConfigData.apiBaseUrl;

  return {
    ...siteConfigData,
    siteUrl: siteConfig.siteUrl,
    appUrl,
    apiBaseUrl
  };
}

export function getProductConfig(): ProductConfig {
  return productData as ProductConfig;
}

export function getSeoConfig(): SeoConfig {
  return seoData as SeoConfig;
}

export function getPlansConfig(): PlansConfig {
  return plansData as PlansConfig;
}

export function getSolutionsConfig(): SolutionsConfig {
  return solutionsData as SolutionsConfig;
}

export function getSolutionBySlug(slug: string): SolutionItem | undefined {
  return (solutionsData as SolutionsConfig).solutions.find((s) => s.slug === slug);
}

export function getDocsConfig(): DocsConfig {
  return docsData as DocsConfig;
}

export function getDocTopicBySlug(slug: string): DocTopic | undefined {
  return (docsData as DocsConfig).topics.find((t) => t.slug === slug);
}

export function getNavigationConfig(): NavConfig {
  return navigationData as NavConfig;
}

export function getFaqConfig(): FaqConfig {
  return faqData as FaqConfig;
}

export function getFooterConfig(): FooterConfig {
  return footerData as FooterConfig;
}

export function getAlternativesConfig(): AlternativesConfig {
  return alternativesData as AlternativesConfig;
}

export function getAlternativeBySlug(slug: string): AlternativeItem | undefined {
  return (alternativesData as AlternativesConfig).comparisons.find((c) => c.slug === slug);
}

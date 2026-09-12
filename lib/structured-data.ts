import { siteConfig } from "@/lib/site-config";
import { getProductConfig } from "@/lib/content";

export function organizationSchema() {
  const product = getProductConfig();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/favicon.ico`,
    description: product.description,
  };
}

export function websiteSchema() {
  const product = getProductConfig();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: product.description,
  };
}

export function softwareApplicationSchema() {
  const product = getProductConfig();
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    operatingSystem: "Cloud API",
    applicationCategory: "DeveloperApplication",
    description: product.description,
    url: siteConfig.siteUrl,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      url: `${siteConfig.siteUrl}/pricing`
    }
  };
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((b, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: b.name,
      item: b.item.startsWith("http") ? b.item : `${siteConfig.siteUrl}${b.item.startsWith("/") ? b.item : `/${b.item}`}`
    }))
  };
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export function faqSchema(faqs: FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer
      }
    }))
  };
}

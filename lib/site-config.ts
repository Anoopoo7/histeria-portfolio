function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    const url = process.env.NEXT_PUBLIC_SITE_URL;
    return url.startsWith("http") ? url : `https://${url}`;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://histeriamails.vercel.app";
}

export const siteConfig = {
  name: "Histeria",
  siteUrl: resolveSiteUrl(),
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://histeriamails.vercel.app",
  loginUrl: process.env.NEXT_PUBLIC_LOGIN_URL || "https://histeriamails.vercel.app/login",
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "https://api.histeria.dev/v1",
  description: "Simple transactional email infrastructure for modern applications.",
  tagline: "Transactional email, without the complexity.",
  locale: "en_US",
  language: "en",
  twitterHandle: "@histeriamails",
};

export function getBaseUrl(): string {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return siteConfig.siteUrl;
}

export const siteConfig = {
  name: "Histeria",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://histeria.dev",
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
  return process.env.NEXT_PUBLIC_SITE_URL || "https://histeria.dev";
}

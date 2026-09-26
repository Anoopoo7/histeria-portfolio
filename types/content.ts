export interface SiteConfig {
  siteName: string;
  siteUrl: string;
  appUrl: string;
  loginUrl: string;
  apiBaseUrl: string;
  contactWebhookUrl: string;
  cta: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
    exploreApi: { label: string; href: string };
    viewTemplates: { label: string; href: string };
  };
}

export interface ProductConfig {
  name: string;
  category: string;
  tagline: string;
  positioning: string;
  description: string;
  capabilities: string[];
  integrations: string[];
  templateTypes: string[];
  templateStatuses: string[];
  emailStatuses: string[];
  useCases: string[];
  authentication: string[];
  security: string[];
}

export interface SeoPageMetadata {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}

export interface SeoConfig {
  default: SeoPageMetadata;
  pages: Record<string, SeoPageMetadata>;
}

export interface PlanItem {
  code: string;
  name: string;
  tagline: string;
  price: number | null;
  currency: string | null;
  billingInterval: string | null;
  monthlyEmailLimit: number | null;
  templateLimit: number | null;
  memberLimit: number | null;
  isPopular: boolean;
  features: string[];
}

export interface PlansConfig {
  currency: string;
  billingIntervals: string[];
  plans: PlanItem[];
}

export interface SolutionStep {
  step: number;
  name: string;
  detail: string;
}

export interface SolutionItem {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  trigger: string;
  flow: SolutionStep[];
  useCases: string[];
  codeExample: string;
}

export interface SolutionsConfig {
  solutions: SolutionItem[];
}

export interface DocTopic {
  slug: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  endpoint: {
    method: string;
    path: string;
  } | null;
}

export interface DocsConfig {
  topics: DocTopic[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export interface NavConfig {
  main: NavItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqConfig {
  faqs: FaqItem[];
}

export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterConfig {
  sections: FooterSection[];
  copyright: string;
}

export interface ComparisonDimension {
  name: string;
  histeria: string;
  competitor: string;
}

export interface AlternativeItem {
  slug: string;
  competitorName: string;
  title: string;
  subtitle: string;
  description: string;
  dimensions: ComparisonDimension[];
}

export interface AlternativesConfig {
  comparisons: AlternativeItem[];
}

import Link from "next/link";
import Hero from "@/components/marketing/Hero";
import ApiShowcase from "@/components/marketing/ApiShowcase";
import VisualVsCodeSection from "@/components/marketing/VisualVsCodeSection";
import TemplateVersioningSection from "@/components/marketing/TemplateVersioningSection";
import EmailLifecycleVisualizer from "@/components/marketing/EmailLifecycleVisualizer";
import DashboardMockup from "@/components/marketing/DashboardMockup";
import SmtpSection from "@/components/marketing/SmtpSection";
import ApiKeySection from "@/components/marketing/ApiKeySection";
import PricingCardGrid from "@/components/pricing/PricingCardGrid";
import { getSiteConfig } from "@/lib/content";
import { ArrowRight, Terminal, Zap } from "lucide-react";

export default function HomePage() {
  const siteConfig = getSiteConfig();

  return (
    <div className="space-y-0">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Send (Transactional Email API) */}
      <ApiShowcase />

      {/* 3. Build (Visual Builder + Code Editor) */}
      <VisualVsCodeSection />

      {/* 4. Version (Template Versioning) */}
      <TemplateVersioningSection />

      {/* 5. Track (Email Lifecycle Visualizer) */}
      <EmailLifecycleVisualizer />

      {/* 6. Observe (Email Logs Timeline & Analytics) */}
      <DashboardMockup />

      {/* 7. Integrate (SMTP Protocol) */}
      <SmtpSection />

      {/* 8. Secure (API Key Management) */}
      <ApiKeySection />

      {/* 9. Scale (Usage & Subscription Plans) */}
      <PricingCardGrid />

      {/* 10. Final CTA Banner */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#07090e] to-[#0d1222]">
        <div className="gradient-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/25" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-600/40 border border-indigo-400/40">
            <Zap className="h-7 w-7 fill-white/20" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Start sending transactional email with Histeria.
          </h2>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Get your API key in seconds and trigger your first application email in minutes with clean developer documentation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href={siteConfig.cta.primary.href}
              target={siteConfig.cta.primary.href.startsWith("http") ? "_blank" : undefined}
              rel={siteConfig.cta.primary.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-indigo-600/40 hover:bg-indigo-500 transition-all hover:scale-[1.02]"
            >
              {siteConfig.cta.primary.label}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href={siteConfig.cta.secondary.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition-all"
            >
              <Terminal className="h-4 w-4 text-indigo-400" />
              {siteConfig.cta.secondary.label}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

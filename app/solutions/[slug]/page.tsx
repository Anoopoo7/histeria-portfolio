import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getSolutionsConfig, getSolutionBySlug, getSiteConfig } from "@/lib/content";
import { generatePageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import { ArrowRight, CheckCircle2, Terminal, Layers } from "lucide-react";

export function generateStaticParams() {
  const solutions = getSolutionsConfig().solutions;
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return generatePageMetadata();

  return generatePageMetadata({
    pageKey: `solutions-${slug}`,
    title: `${solution.title} | Histeria`,
    description: solution.subtitle,
    path: `/solutions/${slug}`
  });
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  const siteConfig = getSiteConfig();

  if (!solution) {
    notFound();
  }

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Solutions", item: `/solutions/${solution.slug}` },
    { name: solution.title, item: `/solutions/${solution.slug}` }
  ]);

  return (
    <div className="py-16 md:py-24 border-b border-white/10 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300 capitalize">
            <Layers className="h-3.5 w-3.5 text-indigo-400" />
            Solution Vertical • {solution.slug}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {solution.title}
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {solution.subtitle}
          </p>
        </div>

        {/* Trigger & Overview */}
        <div className="p-6 rounded-2xl border border-white/15 bg-[#090c17] glass-panel space-y-4">
          <h2 className="text-lg font-bold text-white">Application Event Trigger</h2>
          <p className="text-sm text-slate-300 leading-relaxed">{solution.description}</p>
          <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-xs font-mono text-indigo-200">
            <span className="font-bold text-indigo-400">Trigger:</span> {solution.trigger}
          </div>
        </div>

        {/* Step-by-Step Flow Diagram */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white text-center">
            Integration Pipeline Flow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {solution.flow.map((step) => (
              <div key={step.step} className="p-4 rounded-xl border border-white/10 bg-[#080b13] space-y-2">
                <div className="text-[10px] font-mono text-indigo-400 uppercase font-bold">
                  Step 0{step.step}
                </div>
                <div className="text-sm font-bold text-white">{step.name}</div>
                <div className="text-xs text-slate-400 leading-normal">{step.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="p-6 rounded-2xl border border-white/15 bg-[#090c17] glass-panel space-y-4">
          <h2 className="text-lg font-bold text-white">Primary Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {solution.useCases.map((uc) => (
              <div key={uc} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200 font-medium">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{uc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Integration Code */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Terminal className="h-5 w-5 text-indigo-400" />
              Developer API Integration Code
            </h2>
            <span className="text-xs font-mono text-slate-400">POST /v1/emails/send</span>
          </div>
          <div className="rounded-xl border border-white/15 bg-[#05070d] p-4 text-xs font-mono text-indigo-200 overflow-x-auto">
            <pre><code>{solution.codeExample}</code></pre>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-white/10">
          <Link
            href={siteConfig.cta.primary.href}
            target={siteConfig.cta.primary.href.startsWith("http") ? "_blank" : undefined}
            rel={siteConfig.cta.primary.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all"
          >
            {siteConfig.cta.primary.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAlternativesConfig, getAlternativeBySlug, getSiteConfig } from "@/lib/content";
import { generatePageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import { ArrowRight, Scale } from "lucide-react";

export function generateStaticParams() {
  const comparisons = getAlternativesConfig().comparisons;
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getAlternativeBySlug(slug);
  if (!comparison) return generatePageMetadata();

  return generatePageMetadata({
    pageKey: `alt-${slug}`,
    title: comparison.title,
    description: comparison.subtitle,
    path: `/alternatives/${slug}`
  });
}

export default async function AlternativePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comparison = getAlternativeBySlug(slug);
  const siteConfig = getSiteConfig();

  if (!comparison) {
    notFound();
  }

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Alternatives", item: `/alternatives/${comparison.slug}` },
    { name: `Histeria vs ${comparison.competitorName}`, item: `/alternatives/${comparison.slug}` }
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
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300">
            <Scale className="h-3.5 w-3.5 text-indigo-400" />
            Developer Platform Comparison
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {comparison.title}
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {comparison.subtitle}
          </p>
        </div>

        {/* Overview */}
        <div className="p-6 rounded-2xl border border-white/15 bg-[#090c17] glass-panel space-y-4">
          <h2 className="text-lg font-bold text-white">Comparison Overview</h2>
          <p className="text-sm text-slate-300 leading-relaxed">{comparison.description}</p>
        </div>

        {/* Comparison Table */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white text-center">
            Detailed Dimension Comparison
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-white/15 bg-[#080b13]">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-white/10 bg-[#0c101c] text-white font-mono">
                  <th className="p-4">Dimension</th>
                  <th className="p-4 text-indigo-400">Histeria Platform</th>
                  <th className="p-4 text-slate-400">{comparison.competitorName}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-slate-300">
                {comparison.dimensions.map((dim, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-semibold text-white font-mono">{dim.name}</td>
                    <td className="p-4 font-medium text-indigo-200 bg-indigo-950/20">{dim.histeria}</td>
                    <td className="p-4 text-slate-400">{dim.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8 border-t border-white/10 space-y-4">
          <h3 className="text-xl font-bold text-white">Ready for clean transactional email infrastructure?</h3>
          <div>
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
    </div>
  );
}

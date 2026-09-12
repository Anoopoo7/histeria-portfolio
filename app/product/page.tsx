import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { faqSchema, breadcrumbSchema } from "@/lib/structured-data";
import { getProductConfig, getSiteConfig, getFaqConfig } from "@/lib/content";
import { CheckCircle2, ArrowRight, ShieldCheck, Terminal, Server, Key, FileText, Cpu } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({ pageKey: "product" });

export default function ProductPage() {
  const product = getProductConfig();
  const siteConfig = getSiteConfig();
  const faqConfig = getFaqConfig();

  const faqsJsonLd = faqSchema(faqConfig.faqs);
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Product", item: "/product" }
  ]);

  return (
    <div className="py-16 md:py-24 border-b border-white/10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300">
            <FileText className="h-3.5 w-3.5 text-indigo-400" />
            Canonical Product Facts
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Product Specifications & Overview
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Technical summary of Histeria transactional email infrastructure capabilities, API protocols, templates, and security.
          </p>
        </div>

        {/* Fact Sheet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Core Identity */}
          <div className="p-6 rounded-2xl border border-white/15 bg-[#090c17] glass-panel space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Cpu className="h-5 w-5 text-indigo-400" />
              What is Histeria?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {product.description}
            </p>
            <div className="text-xs text-indigo-300 font-mono bg-indigo-950/40 p-3 rounded-lg border border-indigo-500/30">
              Positioning: {product.positioning}
            </div>
          </div>

          {/* Supported Protocols */}
          <div className="p-6 rounded-2xl border border-white/15 bg-[#090c17] glass-panel space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Server className="h-5 w-5 text-indigo-400" />
              Supported Integration Protocols
            </h2>
            <ul className="space-y-2 text-sm text-slate-300">
              {product.integrations.map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-400">
              Trigger emails asynchronously using REST API endpoint <code className="text-indigo-300 font-mono">POST /v1/emails/send</code> or standard SMTP host connection.
            </p>
          </div>

          {/* Core Capabilities */}
          <div className="p-6 rounded-2xl border border-white/15 bg-[#090c17] glass-panel space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Terminal className="h-5 w-5 text-indigo-400" />
              Verified Product Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {product.capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security Features */}
          <div className="p-6 rounded-2xl border border-white/15 bg-[#090c17] glass-panel space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Key className="h-5 w-5 text-indigo-400" />
              Security & Auth Specification
            </h2>
            <ul className="space-y-2 text-xs text-slate-300">
              {product.security.map((sec) => (
                <li key={sec} className="flex items-start gap-2">
                  <ShieldCheck className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{sec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Structured Canonical Q&A */}
        <div className="space-y-6 pt-6 border-t border-white/10">
          <h2 className="text-2xl font-bold text-white text-center">
            Frequently Asked Canonical Questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqConfig.faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-white/10 bg-[#080b13] space-y-2">
                <h3 className="text-sm font-bold text-white">{faq.question}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Link
            href={siteConfig.cta.primary.href}
            target={siteConfig.cta.primary.href.startsWith("http") ? "_blank" : undefined}
            rel={siteConfig.cta.primary.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all"
          >
            Explore Developer Documentation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

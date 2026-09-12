"use client";

import Link from "next/link";
import { getProductConfig, getSiteConfig } from "@/lib/content";
import { ArrowRight, Terminal, Server, Mail, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  const product = getProductConfig();
  const siteConfig = getSiteConfig();

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 border-b border-white/10">
      {/* Background Ambient Glows */}
      <div className="gradient-glow top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/30" />
      <div className="gradient-glow top-32 left-1/4 w-[400px] h-[200px] bg-purple-600/20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300">
            <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />
            Developer Email Infrastructure
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {product.tagline}
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {product.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href={siteConfig.cta.primary.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-xl shadow-indigo-600/30 hover:bg-indigo-500 transition-all hover:scale-[1.02]"
            >
              {siteConfig.cta.primary.label}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href={siteConfig.cta.secondary.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-base font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition-all"
            >
              <Terminal className="h-4 w-4 text-indigo-400" />
              {siteConfig.cta.secondary.label}
            </Link>
          </div>
        </div>

        {/* Hero Visual Flow Diagram */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-white/15 bg-[#090c16]/90 p-6 md:p-8 shadow-2xl glass-panel relative overflow-hidden">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-6 flex items-center justify-between">
              <span>Delivery Pipeline Visualizer</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Stream
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              {/* App Box */}
              <div className="p-4 rounded-xl border border-white/10 bg-[#0d1220] text-center space-y-2">
                <div className="flex h-10 w-10 mx-auto items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  <Server className="h-5 w-5" />
                </div>
                <div className="text-sm font-semibold text-white">Your Application</div>
                <div className="text-[11px] font-mono text-slate-400">Node / Python / Go / React</div>
              </div>

              {/* Arrow 1 */}
              <div className="text-center py-2 md:py-0">
                <div className="hidden md:flex flex-col items-center">
                  <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800/50 mb-1">
                    POST /v1/emails/send
                  </span>
                  <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-pulse" />
                </div>
                <div className="md:hidden text-[11px] font-mono text-indigo-300">
                  ↓ POST /v1/emails/send
                </div>
              </div>

              {/* Histeria Engine */}
              <div className="p-4 rounded-xl border border-indigo-500/40 bg-indigo-950/40 text-center space-y-2 shadow-lg shadow-indigo-500/10">
                <div className="flex h-10 w-10 mx-auto items-center justify-center rounded-lg bg-indigo-600 text-white shadow-md">
                  <Zap className="h-5 w-5 fill-white/20" />
                </div>
                <div className="text-sm font-bold text-white">Histeria Engine</div>
                <div className="text-[11px] font-mono text-indigo-300">Template • Queue • Auth</div>
              </div>

              {/* Arrow 2 */}
              <div className="text-center py-2 md:py-0">
                <div className="hidden md:flex flex-col items-center">
                  <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/50 mb-1">
                    Async Delivery
                  </span>
                  <div className="h-0.5 w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-emerald-500 animate-pulse" />
                </div>
                <div className="md:hidden text-[11px] font-mono text-emerald-300">
                  ↓ Async Delivery
                </div>
              </div>

              {/* Recipient Box */}
              <div className="p-4 rounded-xl border border-white/10 bg-[#0d1220] text-center space-y-2">
                <div className="flex h-10 w-10 mx-auto items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-sm font-semibold text-white">Recipient Inbox</div>
                <div className="text-[11px] font-mono text-emerald-400 flex items-center justify-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Delivered & Tracked
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

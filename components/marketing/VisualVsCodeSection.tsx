"use client";

import { useState } from "react";
import { Layout, Code, Sparkles, ArrowDown, Layers, FileCode, Check } from "lucide-react";

export default function VisualVsCodeSection() {
  const [activeTab, setActiveTab] = useState<"visual" | "code">("visual");

  return (
    <section className="py-20 border-b border-white/10 relative bg-[#06080e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            Template Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Build once. Send everywhere.
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Build visually or work directly with HTML. Both become reusable Histeria templates ready to be triggered via your API.
          </p>
        </div>

        {/* Tab Toggle Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-[#0e121d] border border-white/10 shadow-lg">
            <button
              onClick={() => setActiveTab("visual")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "visual"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Layout className="h-4 w-4" />
              Visual Builder
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "code"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Code className="h-4 w-4" />
              Code Editor (HTML)
            </button>
          </div>
        </div>

        {/* Editor Mockup Area */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-white/15 bg-[#0a0d16] p-6 md:p-8 shadow-2xl glass-panel">
          {activeTab === "visual" ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Layout className="h-4 w-4 text-indigo-400" />
                  Drag & Drop Visual Email Composition
                </div>
                <div className="text-xs text-slate-400 font-mono">Template: order-confirmation</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Block Palette */}
                <div className="p-4 rounded-xl border border-white/10 bg-[#0d111d] space-y-3">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Blocks</div>
                  <div className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-xs text-slate-300 flex items-center justify-between cursor-grab">
                    <span>Header Logo Block</span>
                    <Layers className="h-3.5 w-3.5 text-slate-400" />
                  </div>
                  <div className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-xs text-slate-300 flex items-center justify-between cursor-grab">
                    <span>Text & Variable {"{{customerName}}"}</span>
                    <Layers className="h-3.5 w-3.5 text-slate-400" />
                  </div>
                  <div className="p-2.5 rounded-lg border border-indigo-500/40 bg-indigo-500/10 text-xs text-indigo-200 flex items-center justify-between cursor-grab">
                    <span>CTA Button Block</span>
                    <Layers className="h-3.5 w-3.5 text-indigo-400" />
                  </div>
                  <div className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-xs text-slate-300 flex items-center justify-between cursor-grab">
                    <span>Order Summary Table</span>
                    <Layers className="h-3.5 w-3.5 text-slate-400" />
                  </div>
                </div>

                {/* Canvas Canvas Preview */}
                <div className="md:col-span-2 p-6 rounded-xl border border-white/10 bg-[#070910] space-y-4">
                  <div className="text-center border-b border-white/10 pb-3">
                    <div className="text-xs text-slate-500 font-mono">HEADER BLOCK</div>
                    <div className="text-lg font-bold text-white mt-1">Acme Store</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-slate-500 font-mono">TEXT BLOCK WITH DYNAMIC VARS</div>
                    <p className="text-sm text-slate-300">
                      Hi <span className="text-indigo-300 font-mono bg-indigo-950/60 px-1.5 py-0.5 rounded">{"{{customerName}}"}</span>, thanks for your order!
                    </p>
                  </div>
                  <div className="text-center pt-2">
                    <div className="inline-block px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold shadow-md">
                      View Order #{"{{orderNumber}}"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <FileCode className="h-4 w-4 text-indigo-400" />
                  HTML & Template Variable Code Editor
                </div>
                <div className="text-xs text-slate-400 font-mono">Type: CODE</div>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-[#05070d] font-mono text-xs text-indigo-200 overflow-x-auto leading-relaxed">
                <pre>{`<!DOCTYPE html>
<html>
  <head>
    <style> body { font-family: sans-serif; } </style>
  </head>
  <body>
    <h1>Order Confirmation #{{orderNumber}}</h1>
    <p>Dear {{customerName}},</p>
    <p>We received your payment of {{total}}.</p>
    <a href="{{trackingUrl}}">Track Shipment</a>
  </body>
</html>`}</pre>
              </div>
            </div>
          )}

          {/* Convergence Diagram */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-indigo-400">
              <ArrowDown className="h-4 w-4 animate-bounce text-indigo-400" />
              Compiles to reusable Histeria Template
            </div>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-indigo-950/60 border border-indigo-500/40 text-xs font-semibold text-white">
              <Check className="h-4 w-4 text-emerald-400" />
              <span>Trigger from API via <code className="text-indigo-300 font-mono">templateId</code> or slug</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

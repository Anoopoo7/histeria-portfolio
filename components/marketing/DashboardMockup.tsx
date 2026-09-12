"use client";

import { useState } from "react";
import { Search, Filter, Clock, AlertCircle } from "lucide-react";

export default function DashboardMockup() {
  const [activeTab, setActiveTab] = useState<"logs" | "overview">("logs");

  return (
    <section className="py-20 border-b border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300">
            <Clock className="h-3.5 w-3.5 text-indigo-400" />
            Developer Observability
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Every email. One clear timeline.
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Inspect individual email records with queue times, send times, provider message IDs, event history, and HTML preview.
          </p>
        </div>

        {/* Mockup Header Control */}
        <div className="max-w-5xl mx-auto mb-4 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("logs")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "logs"
                  ? "bg-indigo-600 text-white"
                  : "bg-white/5 text-slate-400 hover:text-white"
              }`}
            >
              Email Log Timeline
            </button>
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "overview"
                  ? "bg-indigo-600 text-white"
                  : "bg-white/5 text-slate-400 hover:text-white"
              }`}
            >
              Analytics Overview
            </button>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 px-3 py-1 text-[11px] font-mono text-amber-300">
            <AlertCircle className="h-3 w-3" />
            Example Data
          </div>
        </div>

        {/* Dashboard Shell Mockup */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-white/15 bg-[#090c17] p-6 shadow-2xl glass-panel">
          {activeTab === "logs" ? (
            <div className="space-y-6">
              {/* Filter Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-500" />
                    <input
                      type="text"
                      readOnly
                      value="customer@example.com"
                      className="w-full rounded-lg border border-white/10 bg-[#060810] pl-8 pr-3 py-1.5 text-xs text-slate-300 font-mono focus:outline-none"
                    />
                  </div>
                  <button className="p-1.5 rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-white">
                    <Filter className="h-4 w-4" />
                  </button>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Showing 1 record for ORDER-123
                </div>
              </div>

              {/* Selected Email Record Header */}
              <div className="p-4 rounded-xl border border-indigo-500/30 bg-indigo-950/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white font-mono">ORDER-123</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-mono font-bold">
                      DELIVERED & CLICKED
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    To: <code className="text-indigo-300 font-mono">customer@example.com</code> | Template: <code className="text-slate-300 font-mono">order-confirmation</code>
                  </div>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  ID: <code className="text-slate-300">email_98ab71c2</code>
                </div>
              </div>

              {/* Step-by-step Timeline */}
              <div className="space-y-3 pl-2 border-l-2 border-indigo-500/40 ml-4 py-1">
                <div className="relative pl-6">
                  <span className="absolute -left-[31px] top-0 h-4 w-4 rounded-full bg-amber-500/20 border-2 border-amber-400" />
                  <div className="text-xs font-mono text-slate-400">10:30:01 AM UTC</div>
                  <div className="text-sm font-semibold text-white">QUEUED</div>
                  <div className="text-xs text-slate-400">API request accepted via POST /v1/emails/send</div>
                </div>

                <div className="relative pl-6 pt-2">
                  <span className="absolute -left-[31px] top-2 h-4 w-4 rounded-full bg-blue-500/20 border-2 border-blue-400" />
                  <div className="text-xs font-mono text-slate-400">10:30:02 AM UTC</div>
                  <div className="text-sm font-semibold text-white">SENT</div>
                  <div className="text-xs text-slate-400">Dispatched via worker node. Provider Msg ID: <code className="text-slate-300 font-mono">msg_77812x</code></div>
                </div>

                <div className="relative pl-6 pt-2">
                  <span className="absolute -left-[31px] top-2 h-4 w-4 rounded-full bg-emerald-500/20 border-2 border-emerald-400" />
                  <div className="text-xs font-mono text-slate-400">10:30:03 AM UTC</div>
                  <div className="text-sm font-semibold text-white">DELIVERED</div>
                  <div className="text-xs text-slate-400">Accepted by recipient mail server. Delivery time: 1.2s</div>
                </div>

                <div className="relative pl-6 pt-2">
                  <span className="absolute -left-[31px] top-2 h-4 w-4 rounded-full bg-purple-500/20 border-2 border-purple-400" />
                  <div className="text-xs font-mono text-slate-400">10:32:18 AM UTC</div>
                  <div className="text-sm font-semibold text-white">OPENED</div>
                  <div className="text-xs text-slate-400">First open logged (Open count: 1)</div>
                </div>

                <div className="relative pl-6 pt-2">
                  <span className="absolute -left-[31px] top-2 h-4 w-4 rounded-full bg-cyan-500/20 border-2 border-cyan-400" />
                  <div className="text-xs font-mono text-slate-400">10:33:04 AM UTC</div>
                  <div className="text-sm font-semibold text-white">CLICKED</div>
                  <div className="text-xs text-slate-400">Recipient clicked tracking URL (Click count: 1)</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-xs text-slate-400 font-mono flex items-center justify-between border-b border-white/10 pb-3">
                <span>Account Overview Dashboard</span>
                <span className="text-amber-400 font-semibold">[ Example Data for Mockup Preview ]</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-1">
                  <div className="text-xs text-slate-400 font-medium">Delivered Rate</div>
                  <div className="text-2xl font-bold text-white">98.4%</div>
                  <div className="text-[10px] text-slate-500 font-mono">Example Data</div>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-1">
                  <div className="text-xs text-slate-400 font-medium">Open Rate</div>
                  <div className="text-2xl font-bold text-purple-400">72.1%</div>
                  <div className="text-[10px] text-slate-500 font-mono">Example Data</div>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-1">
                  <div className="text-xs text-slate-400 font-medium">Click Rate</div>
                  <div className="text-2xl font-bold text-cyan-400">18.4%</div>
                  <div className="text-[10px] text-slate-500 font-mono">Example Data</div>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-1">
                  <div className="text-xs text-slate-400 font-medium">Bounce Rate</div>
                  <div className="text-2xl font-bold text-rose-400">1.2%</div>
                  <div className="text-[10px] text-slate-500 font-mono">Example Data</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

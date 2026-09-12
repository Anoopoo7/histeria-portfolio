import { GitBranch, CheckCircle2 } from "lucide-react";

export default function TemplateVersioningSection() {
  return (
    <section className="py-20 border-b border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-mono text-indigo-300">
              <GitBranch className="h-3.5 w-3.5" />
              Immutable Versioning
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Version your transactional emails safely.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Keep template changes controlled with immutable version history and explicit current active pointers while your production applications continue sending.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Immutable Versions</span> — Modify copy and layout in draft versions without risking live production emails.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Explicit Current Pointer</span> — Set a designated Current Version. The API automatically serves the active version for your templateId.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Status Flags</span> — Manage DRAFT, ACTIVE, and ARCHIVED states with full visibility.
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Version Cards */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/15 bg-[#0a0d17] p-6 shadow-2xl glass-panel space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-sm font-bold text-white">Order Confirmation Template</div>
                  <div className="text-xs text-slate-400 font-mono">Slug: order-confirmation</div>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  ACTIVE
                </div>
              </div>

              {/* Version List Item v3 */}
              <div className="p-4 rounded-xl border border-indigo-500/40 bg-indigo-950/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center text-xs font-mono font-bold text-indigo-300">
                    v3
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white flex items-center gap-2">
                      New Checkout Layout
                      <span className="rounded bg-indigo-500/20 px-2 py-0.5 text-[10px] font-mono text-indigo-300 border border-indigo-500/30 font-bold">
                        CURRENT
                      </span>
                    </div>
                    <div className="text-xs text-slate-400">Updated button styling & item grid</div>
                  </div>
                </div>
                <div className="text-xs text-slate-400 font-mono">Set Active: Today</div>
              </div>

              {/* Version List Item v2 */}
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex items-center justify-between opacity-80">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-xs font-mono font-bold text-slate-300">
                    v2
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-200">Added Tracking URL variable</div>
                    <div className="text-xs text-slate-400">Previous production version</div>
                  </div>
                </div>
                <div className="text-xs text-slate-500 font-mono">Archived</div>
              </div>

              {/* Version List Item v1 */}
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex items-center justify-between opacity-60">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-xs font-mono font-bold text-slate-400">
                    v1
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-300">Initial HTML layout</div>
                    <div className="text-xs text-slate-500">Base template version</div>
                  </div>
                </div>
                <div className="text-xs text-slate-500 font-mono">Archived</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

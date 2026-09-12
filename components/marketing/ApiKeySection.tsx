import { Key, AlertTriangle, Trash2 } from "lucide-react";

export default function ApiKeySection() {
  return (
    <section className="py-20 border-b border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-mono text-indigo-300">
              <Key className="h-3.5 w-3.5" />
              Developer Security
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Control access with production-ready API keys.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Create secure API keys for your production applications and manage them directly from your dashboard with granular name labels, key prefixes, expiration controls, and instant revocation.
            </p>

            <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-950/20 text-xs text-amber-300 space-y-1">
              <div className="font-semibold flex items-center gap-1.5 text-amber-200">
                <AlertTriangle className="h-4 w-4 text-amber-400" />
                One-Time Secret Disclosure
              </div>
              <p>
                The actual raw API secret key is displayed only once when created. Histeria stores cryptographic hashes for authentication security.
              </p>
            </div>
          </div>

          {/* Right Visual API Keys UI Mockup */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/15 bg-[#090c17] p-6 shadow-2xl glass-panel space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-sm font-bold text-white">Organization API Keys</div>
                  <div className="text-xs text-slate-400">Manage production & development application access</div>
                </div>
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-all shadow-md"
                >
                  + Create API Key
                </button>
              </div>

              {/* Key 1: Production */}
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">Production Store App</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-mono font-bold">
                      ACTIVE
                    </span>
                  </div>
                  <button className="text-slate-500 hover:text-rose-400 transition-colors" title="Revoke Key">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Prefix: <code className="text-indigo-300">ck_live_981a...</code></span>
                  <span>Expires: Never</span>
                  <span>Last used: Today</span>
                </div>
              </div>

              {/* Key 2: Staging */}
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-200">Staging Server</span>
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/40 text-[10px] font-mono font-bold">
                      ACTIVE
                    </span>
                  </div>
                  <button className="text-slate-500 hover:text-rose-400 transition-colors" title="Revoke Key">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Prefix: <code className="text-indigo-300">ck_test_4482...</code></span>
                  <span>Expires: 30 Days</span>
                  <span>Last used: Yesterday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

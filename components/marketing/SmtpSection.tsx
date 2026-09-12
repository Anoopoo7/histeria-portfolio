import { Server, CheckCircle2, MailCheck } from "lucide-react";

export default function SmtpSection() {
  return (
    <section className="py-20 border-b border-white/10 relative bg-[#06080e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-mono text-indigo-300">
              <Server className="h-3.5 w-3.5" />
              SMTP Protocol Support
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Already using SMTP? Keep your existing workflow.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Configure organization SMTP settings and send transactional email through Histeria without rebuilding your application around a new API.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Universal Compatibility</span> — Works with standard SMTP libraries in Node, PHP, Python, Java, Rails, and Go.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Organization Settings</span> — Custom host, port, TLS/SSL security, sender name, and reply-to configuration.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Built-in Test Dispatch</span> — Send a test email from the dashboard to verify credentials instantly.
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual SMTP Config Mockup */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/15 bg-[#090c17] p-6 shadow-2xl glass-panel space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <Server className="h-4 w-4 text-indigo-400" />
                  Organization SMTP Configuration
                </div>
                <div className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <MailCheck className="h-3.5 w-3.5" /> Ready for Connection
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <label className="text-slate-400 font-medium">SMTP Host</label>
                  <input
                    type="text"
                    readOnly
                    value="smtp.histeria.dev"
                    className="w-full rounded-lg border border-white/10 bg-[#060810] px-3 py-2 text-slate-200 font-mono focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-400 font-medium">Port & Security</label>
                  <input
                    type="text"
                    readOnly
                    value="587 (TLS / Secure Connection)"
                    className="w-full rounded-lg border border-white/10 bg-[#060810] px-3 py-2 text-slate-200 font-mono focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-400 font-medium">SMTP Username</label>
                  <input
                    type="text"
                    readOnly
                    value="org_smtp_user_7712"
                    className="w-full rounded-lg border border-white/10 bg-[#060810] px-3 py-2 text-slate-200 font-mono focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-400 font-medium">SMTP Password</label>
                  <input
                    type="password"
                    readOnly
                    value="••••••••••••••••"
                    className="w-full rounded-lg border border-white/10 bg-[#060810] px-3 py-2 text-slate-400 font-mono focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-400 font-medium">Default From Name & Email</label>
                  <input
                    type="text"
                    readOnly
                    value="Acme App <noreply@acme.com>"
                    className="w-full rounded-lg border border-white/10 bg-[#060810] px-3 py-2 text-slate-200 font-mono focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-400 font-medium">Default Reply-To</label>
                  <input
                    type="text"
                    readOnly
                    value="support@acme.com"
                    className="w-full rounded-lg border border-white/10 bg-[#060810] px-3 py-2 text-slate-200 font-mono focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 text-xs font-semibold hover:bg-indigo-600/50 transition-all"
                >
                  Send Test Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

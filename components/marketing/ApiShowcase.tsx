import CodeSnippetTab from "@/components/code/CodeSnippetTab";
import { Terminal, Send, CheckCircle2 } from "lucide-react";

export default function ApiShowcase() {
  return (
    <section className="py-20 border-b border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-mono text-indigo-300">
              <Terminal className="h-3.5 w-3.5" />
              REST API Reference
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Send transactional email with one API request.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Trigger emails directly from your backend or microservices. Pass a template slug, recipient address, dynamic JSON variables, and authentication header.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Simple Request Contract</div>
                  <div className="text-xs text-slate-400">Accepts templateId, to, cc, bcc, optional subject override, and dynamic data object.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Asynchronous Dispatch</div>
                  <div className="text-xs text-slate-400">API immediately acknowledges requests with a unique email ID and QUEUED status.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Secure Header Auth</div>
                  <div className="text-xs text-slate-400">Authenticate requests using organization-isolated API keys (`x-api-key`).</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Code Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between px-2 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <Send className="h-4 w-4 text-indigo-400" />
                POST /v1/emails/send
              </span>
              <span className="text-emerald-400">202 Accepted</span>
            </div>

            <CodeSnippetTab />

            {/* Expected Response Mockup */}
            <div className="rounded-xl border border-white/10 bg-[#080b12] p-4 text-xs font-mono">
              <div className="text-slate-400 mb-1 flex items-center justify-between">
                <span>Response Body</span>
                <span className="text-emerald-400">Status: QUEUED</span>
              </div>
              <pre className="text-emerald-300">
                <code>{`{\n  "id": "email_98ab71c2",\n  "status": "QUEUED"\n}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

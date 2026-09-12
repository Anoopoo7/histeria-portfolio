"use client";

import { useState } from "react";
import { Activity, Clock, Cpu, Send, CheckCircle2, AlertTriangle, Eye, MousePointerClick, RefreshCw } from "lucide-react";

export default function EmailLifecycleVisualizer() {
  const [activeStep, setActiveStep] = useState<number>(3); // 0 to 5

  const deliverySteps = [
    { name: "QUEUED", icon: Clock, desc: "Accepted by API & placed in async send queue", color: "text-amber-400 bg-amber-500/10 border-amber-500/30" },
    { name: "PROCESSING", icon: Cpu, desc: "Worker renders template & compiles variables", color: "text-blue-400 bg-blue-500/10 border-blue-500/30" },
    { name: "SENT", icon: Send, desc: "Dispatched to recipient server", color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30" },
    { name: "DELIVERED", icon: CheckCircle2, desc: "Accepted by recipient mail server", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" }
  ];

  const outcomes = [
    { name: "BOUNCED", icon: AlertTriangle, desc: "Mailbox unavailable or domain rejected", color: "text-rose-400 bg-rose-500/10 border-rose-500/30" },
    { name: "FAILED", icon: AlertTriangle, desc: "Delivery failure during transport", color: "text-rose-400 bg-rose-500/10 border-rose-500/30" }
  ];

  const trackingEvents = [
    { name: "OPENED", icon: Eye, desc: "Recipient opened email (open count & timestamp logged)", color: "text-purple-400 bg-purple-500/10 border-purple-500/30" },
    { name: "CLICKED", icon: MousePointerClick, desc: "Recipient clicked link (click count & timestamp logged)", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30" }
  ];

  return (
    <section className="py-20 border-b border-white/10 relative bg-[#05070d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300">
            <Activity className="h-3.5 w-3.5 text-indigo-400" />
            Email Observability
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            See what happened after an email was sent.
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Histeria tracks explicit delivery state progression, failure conditions, and recipient engagement timestamps.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Delivery Flow */}
          <div className="rounded-2xl border border-white/15 bg-[#090c17] p-6 md:p-8 shadow-2xl glass-panel">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-6 flex items-center justify-between">
              <span>Delivery Pipeline States</span>
              <button
                onClick={() => setActiveStep((prev) => (prev + 1) % 4)}
                className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-xs font-sans transition-colors"
              >
                <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                Simulate State Transition
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {deliverySteps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = idx <= activeStep;
                return (
                  <div
                    key={step.name}
                    onClick={() => setActiveStep(idx)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isActive
                        ? step.color + " shadow-lg"
                        : "border-white/10 bg-white/5 opacity-50 hover:opacity-80"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <Icon className="h-5 w-5" />
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/40">
                        Step 0{idx + 1}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white mb-1">{step.name}</div>
                    <div className="text-xs text-slate-300 leading-normal">{step.desc}</div>
                  </div>
                );
              })}
            </div>

            {/* Sub-sections: Outcomes & Tracking */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Failure Branches */}
              <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-950/20 space-y-3">
                <div className="text-xs font-semibold text-rose-300 uppercase tracking-wider flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-rose-400" />
                  Possible Delivery Outcomes
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {outcomes.map((o) => (
                    <div key={o.name} className={`p-3 rounded-lg border text-xs ${o.color}`}>
                      <div className="font-bold text-white">{o.name}</div>
                      <div className="text-[11px] text-slate-300 mt-1">{o.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engagement Tracking */}
              <div className="p-4 rounded-xl border border-purple-500/20 bg-purple-950/20 space-y-3">
                <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider flex items-center gap-2">
                  <Eye className="h-4 w-4 text-purple-400" />
                  Post-Delivery Tracking Events
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {trackingEvents.map((t) => (
                    <div key={t.name} className={`p-3 rounded-lg border text-xs ${t.color}`}>
                      <div className="font-bold text-white">{t.name}</div>
                      <div className="text-[11px] text-slate-300 mt-1">{t.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

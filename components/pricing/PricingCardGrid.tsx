"use client";

import { useState } from "react";
import Link from "next/link";
import { getPlansConfig, getSiteConfig } from "@/lib/content";
import { Check, ArrowRight, Sparkles } from "lucide-react";

export default function PricingCardGrid() {
  const plansConfig = getPlansConfig();
  const siteConfig = getSiteConfig();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const hasAnnual = plansConfig.billingIntervals.includes("annual");

  return (
    <section className="py-20 border-b border-white/10 relative" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            Simple Subscription Plans
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Start small. Scale when you need to.
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Transparent pricing based on your transactional email volume, template needs, and team seats.
          </p>

          {/* Billing Cycle Toggle if annual is configured */}
          {hasAnnual && (
            <div className="flex items-center justify-center gap-3 pt-2">
              <span className={`text-xs font-semibold ${billingCycle === "monthly" ? "text-white" : "text-slate-400"}`}>
                Monthly Billing
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-900/60 border border-indigo-500/40 p-0.5"
              >
                <span
                  className={`inline-block h-5 w-5 rounded-full bg-indigo-400 transform transition-transform ${
                    billingCycle === "annual" ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
              <span className={`text-xs font-semibold ${billingCycle === "annual" ? "text-white" : "text-slate-400"}`}>
                Annual Billing
              </span>
            </div>
          )}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plansConfig.plans.map((plan) => {
            const isPopular = plan.isPopular;

            return (
              <div
                key={plan.code}
                className={`rounded-2xl border p-8 flex flex-col justify-between transition-all relative ${
                  isPopular
                    ? "border-indigo-500/60 bg-[#0d1222] shadow-2xl shadow-indigo-600/20 scale-[1.02]"
                    : "border-white/10 bg-[#080b13] hover:border-white/20"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-indigo-600 text-white text-[11px] font-bold tracking-wide uppercase shadow-md">
                    Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[32px]">{plan.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="border-y border-white/10 py-4">
                    {plan.price !== null ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-white">
                          ${plan.price}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          / month
                        </span>
                      </div>
                    ) : (
                      <div className="text-2xl font-bold text-white">
                        Contact us
                      </div>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 text-xs text-slate-300">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-4 border-t border-white/10">
                  <Link
                    href={siteConfig.cta.primary.href}
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-sm font-semibold transition-all ${
                      isPopular
                        ? "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/30"
                        : "border border-white/15 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {plan.price !== null ? "Get Started" : "Contact Sales"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

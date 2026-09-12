"use client";

import { useState } from "react";
import Link from "next/link";
import { getNavigationConfig, getSiteConfig } from "@/lib/content";
import { Zap, ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const navConfig = getNavigationConfig();
  const siteConfig = getSiteConfig();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 glass-panel">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600/20 border border-indigo-500/40 text-indigo-400 group-hover:bg-indigo-600/30 group-hover:border-indigo-400 transition-all">
                <Zap className="h-5 w-5 fill-indigo-400/20" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors">
                {siteConfig.siteName}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navConfig.main.map((item) => {
                if (item.children) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setSolutionsDropdownOpen(true)}
                      onMouseLeave={() => setSolutionsDropdownOpen(false)}
                    >
                      <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-md transition-colors">
                        {item.label}
                        <ChevronDown className="h-4 w-4 opacity-70" />
                      </button>

                      {solutionsDropdownOpen && (
                        <div className="absolute left-0 top-full pt-2 w-80">
                          <div className="glass-panel rounded-xl p-2 border border-white/10 shadow-2xl bg-[#0c101b]/95">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block p-2.5 rounded-lg hover:bg-indigo-600/10 hover:border-indigo-500/20 border border-transparent transition-all"
                              >
                                <div className="text-sm font-semibold text-white">
                                  {child.label}
                                </div>
                                {child.description && (
                                  <div className="text-xs text-slate-400 mt-0.5">
                                    {child.description}
                                  </div>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href={siteConfig.loginUrl || siteConfig.appUrl}
              target={(siteConfig.loginUrl || siteConfig.appUrl).startsWith("http") ? "_blank" : undefined}
              rel={(siteConfig.loginUrl || siteConfig.appUrl).startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href={siteConfig.cta.primary.href}
              target={siteConfig.cta.primary.href.startsWith("http") ? "_blank" : undefined}
              rel={siteConfig.cta.primary.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 hover:shadow-indigo-500/35 transition-all"
            >
              {siteConfig.cta.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-white/10 bg-[#07090e]/95 px-4 pt-3 pb-6">
          <div className="space-y-1">
            {navConfig.main.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-indigo-600/10 hover:text-white"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1 mt-1 border-l border-white/10">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-1.5 rounded-md text-sm text-slate-400 hover:text-indigo-300"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href={siteConfig.loginUrl || siteConfig.appUrl}
              target={(siteConfig.loginUrl || siteConfig.appUrl).startsWith("http") ? "_blank" : undefined}
              rel={(siteConfig.loginUrl || siteConfig.appUrl).startsWith("http") ? "noopener noreferrer" : undefined}
              className="w-full text-center py-2 text-sm font-medium text-slate-300 hover:text-white"
            >
              Sign In
            </Link>
            <Link
              href={siteConfig.cta.primary.href}
              target={siteConfig.cta.primary.href.startsWith("http") ? "_blank" : undefined}
              rel={siteConfig.cta.primary.href.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500"
            >
              {siteConfig.cta.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

import Link from "next/link";
import { getFooterConfig, getSiteConfig } from "@/lib/content";
import { Zap } from "lucide-react";

export default function Footer() {
  const footerConfig = getFooterConfig();
  const siteConfig = getSiteConfig();

  return (
    <footer className="w-full border-t border-white/10 bg-[#040609] pt-16 pb-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600/20 border border-indigo-500/40 text-indigo-400">
                <Zap className="h-4 w-4 fill-indigo-400/20" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {siteConfig.siteName}
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Transactional email infrastructure for modern software applications.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              API Operational
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerConfig.sections.map((section) => (
              <div key={section.title} className="space-y-3">
                <h3 className="text-xs font-semibold text-white tracking-wider uppercase">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="hover:text-indigo-300 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{footerConfig.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/product" className="hover:text-slate-300 transition-colors">
              Product Overview
            </Link>
            <Link href="/docs" className="hover:text-slate-300 transition-colors">
              Developer Docs
            </Link>
            <Link href="/pricing" className="hover:text-slate-300 transition-colors">
              Pricing Plans
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

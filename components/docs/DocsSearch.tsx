"use client";

import { useState } from "react";
import Link from "next/link";
import { getDocsConfig } from "@/lib/content";
import { Search, FileText } from "lucide-react";

export default function DocsSearch() {
  const docsConfig = getDocsConfig();
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? docsConfig.topics.filter(
        (t) =>
          t.title.toLowerCase().includes(query.toLowerCase()) ||
          t.summary.toLowerCase().includes(query.toLowerCase()) ||
          t.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
        <input
          type="text"
          placeholder="Search documentation topics..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-white/15 bg-[#080b13] pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
        />
      </div>

      {query.trim() !== "" && (
        <div className="absolute left-0 right-0 top-full mt-2 z-50 rounded-xl border border-white/15 bg-[#0a0e1a] p-2 shadow-2xl space-y-1">
          {filtered.length > 0 ? (
            filtered.map((t) => (
              <Link
                key={t.slug}
                href={`/docs/${t.slug}`}
                onClick={() => setQuery("")}
                className="block p-2 rounded-lg hover:bg-indigo-600/20 text-xs text-slate-200 transition-colors"
              >
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5 text-indigo-400" />
                  {t.title}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{t.summary}</div>
              </Link>
            ))
          ) : (
            <div className="p-3 text-xs text-slate-400 text-center">No documentation topics match &quot;{query}&quot;</div>
          )}
        </div>
      )}
    </div>
  );
}

import Link from "next/link";
import { getDocsConfig } from "@/lib/content";

export default function DocsSidebar({ activeSlug }: { activeSlug?: string }) {
  const docsConfig = getDocsConfig();

  // Group topics by category
  const categoriesMap: Record<string, typeof docsConfig.topics> = {};
  docsConfig.topics.forEach((t) => {
    if (!categoriesMap[t.category]) {
      categoriesMap[t.category] = [];
    }
    categoriesMap[t.category].push(t);
  });

  return (
    <aside className="w-full lg:w-64 shrink-0 border-r border-white/10 p-4 space-y-6 bg-[#06080e]/80">
      <div className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
        Developer Portal
      </div>

      <nav className="space-y-6">
        {Object.entries(categoriesMap).map(([category, topics]) => (
          <div key={category} className="space-y-2">
            <h4 className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2">
              {category}
            </h4>
            <ul className="space-y-1">
              {topics.map((t) => {
                const isActive = activeSlug === t.slug || (!activeSlug && t.slug === "getting-started");
                return (
                  <li key={t.slug}>
                    <Link
                      href={`/docs/${t.slug}`}
                      className={`block px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isActive
                          ? "bg-indigo-600/30 text-indigo-200 border border-indigo-500/40 font-semibold"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {t.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

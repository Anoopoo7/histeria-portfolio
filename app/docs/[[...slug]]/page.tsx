import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import DocsSidebar from "@/components/docs/DocsSidebar";
import DocsSearch from "@/components/docs/DocsSearch";
import CodeSnippetTab from "@/components/code/CodeSnippetTab";
import MarkdownRenderer from "@/components/docs/MarkdownRenderer";
import { getDocsConfig, getDocTopicBySlug } from "@/lib/content";
import { generatePageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import { Terminal, ArrowRight, ArrowLeft, BookOpen } from "lucide-react";

export function generateStaticParams() {
  const topics = getDocsConfig().topics;
  const paramsList = topics.map((t) => ({ slug: [t.slug] }));
  return [{ slug: [] }, ...paramsList];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slugStr = resolvedParams.slug?.[0] || "getting-started";
  const topic = getDocTopicBySlug(slugStr);

  if (!topic) return generatePageMetadata({ pageKey: "docs" });

  return generatePageMetadata({
    title: `${topic.title} | Histeria Developer Docs`,
    description: topic.summary,
    path: `/docs/${topic.slug}`
  });
}

export default async function DocsPage({
  params
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const slugStr = resolvedParams.slug?.[0] || "getting-started";
  const docsConfig = getDocsConfig();

  const currentTopic = getDocTopicBySlug(slugStr);

  if (!currentTopic) {
    notFound();
  }

  // Prev / Next navigation
  const currentIndex = docsConfig.topics.findIndex((t) => t.slug === currentTopic.slug);
  const prevTopic = currentIndex > 0 ? docsConfig.topics[currentIndex - 1] : null;
  const nextTopic = currentIndex < docsConfig.topics.length - 1 ? docsConfig.topics[currentIndex + 1] : null;

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Docs", item: "/docs" },
    { name: currentTopic.title, item: `/docs/${currentTopic.slug}` }
  ]);

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] border-b border-white/10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Sidebar */}
      <DocsSidebar activeSlug={currentTopic.slug} />

      {/* Main Content Area */}
      <div className="flex-1 flex justify-center w-full">
        <main className="w-full max-w-4xl p-6 md:p-10 space-y-10">
          {/* Top Header & Search Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5" />
                {currentTopic.category}
              </div>
              <h1 className="text-3xl font-extrabold text-white mt-1">
                {currentTopic.title}
              </h1>
            </div>

            <DocsSearch />
          </div>

          {/* Summary Banner */}
          <div className="p-4 rounded-xl border border-indigo-500/30 bg-indigo-950/20 text-sm text-indigo-200">
            {currentTopic.summary}
          </div>

          {/* Endpoint Card if applicable */}
          {currentTopic.endpoint && (
            <div className="p-4 rounded-xl border border-white/15 bg-[#090c17] space-y-2">
              <div className="text-xs text-slate-400 font-mono">Target API Endpoint</div>
              <div className="flex items-center gap-3 font-mono text-sm">
                <span className="px-2.5 py-1 rounded bg-indigo-600 font-bold text-white text-xs">
                  {currentTopic.endpoint.method}
                </span>
                <code className="text-emerald-300">{currentTopic.endpoint.path}</code>
              </div>
            </div>
          )}

          {/* Main Content Body with Markdown Rendering */}
          <MarkdownRenderer content={currentTopic.content} />

          {/* Interactive Code Snippets for send-email topic */}
          {currentTopic.slug === "send-email" && (
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Terminal className="h-4 w-4 text-indigo-400" />
                Multi-Language API Snippets
              </h3>
              <CodeSnippetTab />
            </div>
          )}

          {/* Prev / Next Topic Navigation Footer */}
          <div className="pt-8 border-t border-white/10 flex items-center justify-between gap-4">
            {prevTopic ? (
              <Link
                href={`/docs/${prevTopic.slug}`}
                className="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs text-slate-300 transition-all flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <div>
                  <div className="text-[10px] text-slate-400 font-mono">PREVIOUS</div>
                  <div className="font-semibold text-white">{prevTopic.title}</div>
                </div>
              </Link>
            ) : <div />}

            {nextTopic ? (
              <Link
                href={`/docs/${nextTopic.slug}`}
                className="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs text-slate-300 transition-all flex items-center gap-2 text-right"
              >
                <div>
                  <div className="text-[10px] text-slate-400 font-mono">NEXT</div>
                  <div className="font-semibold text-white">{nextTopic.title}</div>
                </div>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : <div />}
          </div>
        </main>
      </div>
    </div>
  );
}

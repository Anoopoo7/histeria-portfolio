"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1 text-[11px] font-sans px-2 py-0.5 rounded border border-white/10 bg-white/5 text-slate-400 hover:text-white transition-all"
    >
      {copied ? (
        <>
          <Check className="h-3 w-3 text-emerald-400" />
          <span className="text-emerald-400">Copied</span>
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}

function parseFormattedText(text: string) {
  // Regex to match **bold** and `inline code`
  const parts = [];
  let lastIdx = 0;
  const regex = /(\*\*(.*?)\*\*|`(.*?)`)/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      parts.push(text.substring(lastIdx, match.index));
    }

    if (match[1].startsWith("**")) {
      parts.push(
        <strong key={match.index} className="font-semibold text-white">
          {match[2]}
        </strong>
      );
    } else if (match[1].startsWith("`")) {
      parts.push(
        <code
          key={match.index}
          className="rounded bg-indigo-950/70 border border-indigo-500/30 px-1.5 py-0.5 text-indigo-300 font-mono text-xs"
        >
          {match[3]}
        </code>
      );
    }

    lastIdx = regex.lastIndex;
  }

  if (lastIdx < text.length) {
    parts.push(text.substring(lastIdx));
  }

  return parts;
}

type ContentBlock =
  | { type: "code"; language: string; code: string }
  | { type: "text"; content: string };

export default function MarkdownRenderer({ content }: { content: string }) {
  // Split by code blocks first
  const blockRegex = /```(\w+)?\n([\s\S]*?)```/g;
  const blocks: ContentBlock[] = [];
  let lastIndex = 0;
  let blockMatch;

  while ((blockMatch = blockRegex.exec(content)) !== null) {
    if (blockMatch.index > lastIndex) {
      blocks.push({
        type: "text",
        content: content.substring(lastIndex, blockMatch.index)
      });
    }

    blocks.push({
      type: "code",
      language: blockMatch[1] || "text",
      code: blockMatch[2].trim()
    });

    lastIndex = blockRegex.lastIndex;
  }

  if (lastIndex < content.length) {
    blocks.push({
      type: "text",
      content: content.substring(lastIndex)
    });
  }

  return (
    <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
      {blocks.map((block, bIdx) => {
        if (block.type === "code") {
          return (
            <div
              key={bIdx}
              className="rounded-xl border border-white/15 bg-[#05070f] p-4 shadow-xl font-mono text-xs overflow-x-auto space-y-2"
            >
              <div className="flex items-center justify-between text-slate-400 font-sans border-b border-white/10 pb-2 mb-2">
                <span className="uppercase text-[10px] font-mono font-bold text-indigo-400 tracking-wider">
                  {block.language}
                </span>
                <CopyButton text={block.code} />
              </div>
              <pre className="text-indigo-200">
                <code>{block.code}</code>
              </pre>
            </div>
          );
        }

        // Render Markdown Text Blocks (headings, lists, tables, paragraphs)
        const lines = block.content.split("\n");
        const renderedElements = [];
        let inTable = false;
        let tableHeader: string[] = [];
        let tableRows: string[][] = [];
        let listItems: string[] = [];
        let isOrderedList = false;

        const flushList = (key: string) => {
          if (listItems.length > 0) {
            const ListTag = isOrderedList ? "ol" : "ul";
            renderedElements.push(
              <ListTag
                key={key}
                className={`space-y-1.5 my-3 text-slate-300 ${
                  isOrderedList ? "list-decimal pl-5" : "list-disc pl-5"
                }`}
              >
                {listItems.map((item, idx) => (
                  <li key={idx}>{parseFormattedText(item)}</li>
                ))}
              </ListTag>
            );
            listItems = [];
          }
        };

        const flushTable = (key: string) => {
          if (tableHeader.length > 0) {
            renderedElements.push(
              <div key={key} className="overflow-x-auto rounded-xl border border-white/15 my-4 bg-[#080b13]">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-[#0c101c] font-mono text-white">
                      {tableHeader.map((h, hIdx) => (
                        <th key={hIdx} className="p-3 font-semibold">
                          {parseFormattedText(h.trim())}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-slate-300">
                    {tableRows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-white/5 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-3">
                            {parseFormattedText(cell.trim())}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
            tableHeader = [];
            tableRows = [];
            inTable = false;
          }
        };

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();

          // Markdown Table Row parsing
          if (line.startsWith("|") && line.endsWith("|")) {
            flushList(`list-${bIdx}-${i}`);
            const cells = line
              .split("|")
              .slice(1, -1)
              .map((c) => c.trim());

            if (!inTable) {
              inTable = true;
              tableHeader = cells;
            } else if (line.includes("---")) {
              // Divider row, ignore
              continue;
            } else {
              tableRows.push(cells);
            }
            continue;
          } else if (inTable) {
            flushTable(`table-${bIdx}-${i}`);
          }

          // Markdown Headings
          if (line.startsWith("### ")) {
            flushList(`list-${bIdx}-${i}`);
            renderedElements.push(
              <h3
                key={`h3-${bIdx}-${i}`}
                className="text-lg font-bold text-white tracking-tight mt-6 mb-2 flex items-center gap-2"
              >
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                {parseFormattedText(line.replace("### ", ""))}
              </h3>
            );
            continue;
          }

          // Markdown Lists
          if (line.startsWith("- ") || line.startsWith("* ")) {
            isOrderedList = false;
            listItems.push(line.substring(2));
            continue;
          } else if (/^\d+\.\s/.test(line)) {
            isOrderedList = true;
            listItems.push(line.replace(/^\d+\.\s/, ""));
            continue;
          } else {
            flushList(`list-${bIdx}-${i}`);
          }

          // Normal Paragraphs
          if (line !== "") {
            renderedElements.push(
              <p key={`p-${bIdx}-${i}`} className="leading-relaxed">
                {parseFormattedText(line)}
              </p>
            );
          }
        }

        flushList(`list-${bIdx}-end`);
        flushTable(`table-${bIdx}-end`);

        return <div key={bIdx} className="space-y-3">{renderedElements}</div>;
      })}
    </div>
  );
}

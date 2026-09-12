"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export interface CodeSnippetMap {
  curl: string;
  javascript: string;
  typescript: string;
  python: string;
  java: string;
  php: string;
}

const defaultSnippets: CodeSnippetMap = {
  curl: `curl -X POST https://api.histeria.dev/v1/emails/send \\
  -H "x-api-key: ck_live_secret_key_123" \\
  -H "Content-Type: application/json" \\
  -d '{
    "templateId": "order-confirmation",
    "to": "customer@example.com",
    "data": {
      "customerName": "John Doe",
      "orderNumber": "ORD-9812",
      "total": "$149.00"
    }
  }'`,

  javascript: `const response = await fetch('https://api.histeria.dev/v1/emails/send', {
  method: 'POST',
  headers: {
    'x-api-key': 'ck_live_secret_key_123',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    templateId: 'order-confirmation',
    to: 'customer@example.com',
    data: {
      customerName: 'John Doe',
      orderNumber: 'ORD-9812',
      total: '$149.00'
    }
  })
});

const result = await response.json();
console.log(result.id, result.status); // EMAIL_ID, QUEUED`,

  typescript: `interface SendEmailPayload {
  templateId: string;
  to: string;
  data: Record<string, unknown>;
}

async function sendTransactionEmail(payload: SendEmailPayload) {
  const res = await fetch('https://api.histeria.dev/v1/emails/send', {
    method: 'POST',
    headers: {
      'x-api-key': process.env.HISTERIA_API_KEY!,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
  return res.json();
}`,

  python: `import requests

url = "https://api.histeria.dev/v1/emails/send"
headers = {
    "x-api-key": "ck_live_secret_key_123",
    "Content-Type": "application/json"
}
payload = {
    "templateId": "order-confirmation",
    "to": "customer@example.com",
    "data": {
        "customerName": "John Doe",
        "orderNumber": "ORD-9812"
    }
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`,

  java: `HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.histeria.dev/v1/emails/send"))
    .header("x-api-key", "ck_live_secret_key_123")
    .header("Content-Type", "application/json")
    .POST(HttpRequest.BodyPublishers.ofString("""
        {
          "templateId": "order-confirmation",
          "to": "customer@example.com",
          "data": { "customerName": "John Doe" }
        }
        """))
    .build();

HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());`,

  php: `<?php
$ch = curl_init('https://api.histeria.dev/v1/emails/send');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'x-api-key: ck_live_secret_key_123',
        'Content-Type: application/json'
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'templateId' => 'order-confirmation',
        'to' => 'customer@example.com',
        'data' => [ 'customerName' => 'John Doe' ]
    ]),
    CURLOPT_RETURNTRANSFER => true
]);
$response = curl_exec($ch);
curl_close($ch);`
};

export default function CodeSnippetTab({ snippets = defaultSnippets }: { snippets?: Partial<CodeSnippetMap> }) {
  const allSnippets = { ...defaultSnippets, ...snippets };
  const [activeTab, setActiveTab] = useState<keyof CodeSnippetMap>("curl");
  const [copied, setCopied] = useState(false);

  const languages: { key: keyof CodeSnippetMap; label: string }[] = [
    { key: "curl", label: "cURL" },
    { key: "javascript", label: "JavaScript" },
    { key: "typescript", label: "TypeScript" },
    { key: "python", label: "Python" },
    { key: "java", label: "Java" },
    { key: "php", label: "PHP" }
  ];

  const currentCode = allSnippets[activeTab] || "";

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-white/10 bg-[#0b0e17] shadow-2xl overflow-hidden">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 bg-[#080b12]">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80"></span>
            <span className="h-3 w-3 rounded-full bg-amber-500/80"></span>
            <span className="h-3 w-3 rounded-full bg-emerald-500/80"></span>
          </div>
          {languages.map((lang) => (
            <button
              key={lang.key}
              onClick={() => setActiveTab(lang.key)}
              className={`px-3 py-1 text-xs font-mono rounded-md transition-all whitespace-nowrap ${
                activeTab === lang.key
                  ? "bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 font-semibold"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>

        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300 hover:bg-white/10 hover:text-white transition-all shrink-0 ml-2"
          title="Copy code snippet"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Display */}
      <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-indigo-100 bg-[#070a12]">
        <pre className="selection:bg-indigo-600/40 selection:text-white">
          <code>{currentCode}</code>
        </pre>
      </div>
    </div>
  );
}

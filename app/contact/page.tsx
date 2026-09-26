import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { generatePageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import { MessageSquare } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  pageKey: "contact",
  title: "Contact Us | Histeria Transactional Email",
  description: "Get in touch with the Histeria team for technical inquiries, integration support, feedback, and enterprise email infrastructure plans.",
  path: "/contact"
});

export default function ContactPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Contact Us", item: "/contact" }
  ]);

  return (
    <div className="py-16 md:py-24 border-b border-white/10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300">
            <MessageSquare className="h-3.5 w-3.5 text-indigo-400" />
            Get in Touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact Histeria Support & Engineering
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about our REST API, custom throughput limits, or SMTP relay integration? Fill out the mandatory fields below to reach our team.
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
}

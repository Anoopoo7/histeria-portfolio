import type { Metadata } from "next";
import PricingCardGrid from "@/components/pricing/PricingCardGrid";
import { generatePageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = generatePageMetadata({ pageKey: "pricing" });

export default function PricingPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Pricing", item: "/pricing" }
  ]);

  return (
    <div className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PricingCardGrid />
    </div>
  );
}

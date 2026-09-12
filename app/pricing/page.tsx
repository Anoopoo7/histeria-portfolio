import type { Metadata } from "next";
import PricingCardGrid from "@/components/pricing/PricingCardGrid";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata("pricing");

export default function PricingPage() {
  return (
    <div className="py-12">
      <PricingCardGrid />
    </div>
  );
}

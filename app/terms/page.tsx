import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "DocNear terms of service — rules and guidelines for using the platform.",
};

export default function TermsPage() {
  return (
    <ComingSoon
      title="Terms of Service"
      description="Our terms of service are being finalised. Please check back soon for the complete document."
    />
  );
}

import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "DocNear privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <ComingSoon
      title="Privacy Policy"
      description="Our full privacy policy is being drafted by our legal team. We take your health data seriously — it is always encrypted and never sold."
    />
  );
}

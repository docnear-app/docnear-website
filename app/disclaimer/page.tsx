import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "DocNear medical disclaimer — important information about the platform's scope.",
};

export default function DisclaimerPage() {
  return (
    <ComingSoon
      title="Disclaimer"
      description="DocNear helps you find and book verified doctors. We are not a substitute for professional medical advice. Full disclaimer coming soon."
    />
  );
}

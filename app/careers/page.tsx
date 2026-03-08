import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the DocNear team and help build India's most trusted healthcare platform.",
};

export default function CareersPage() {
  return (
    <ComingSoon
      title="Join Our Team"
      description="We're building India's most trusted healthcare platform. Exciting roles are opening up soon — watch this space."
    />
  );
}

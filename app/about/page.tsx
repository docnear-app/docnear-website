import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about DocNear — our mission to make quality healthcare accessible to every Indian.",
};

export default function AboutPage() {
  return (
    <ComingSoon
      title="About DocNear"
      description="We're putting together our story. Learn about our mission to connect every patient with a trusted, verified doctor nearby."
    />
  );
}

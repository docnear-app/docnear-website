import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the DocNear team.",
};

export default function ContactPage() {
  return (
    <ComingSoon
      title="Contact Us"
      description="Have a question or partnership enquiry? Reach us at hello@docnear.in — a proper contact form is on its way."
    />
  );
}

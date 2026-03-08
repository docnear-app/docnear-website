import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Blog",
  description: "Health tips, platform updates, and insights from the DocNear team.",
};

export default function BlogPage() {
  return (
    <ComingSoon
      title="DocNear Blog"
      description="Health tips, doctor insights, and platform updates — coming soon. Stay tuned."
    />
  );
}

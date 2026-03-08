import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import DocNearLogo from "@/components/ui/DocNearLogo";

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <Link href="/" className="mb-12">
        <DocNearLogo size="lg" />
      </Link>

      <div className="text-center max-w-md mx-auto">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100 mb-4">
          Coming Soon
        </span>

        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>

        <p className="mt-3 text-sm text-gray-500 leading-relaxed">{description}</p>

        <div className="mt-8">
          <Button asChild className="rounded-full bg-teal-600 hover:bg-teal-700 text-white px-7">
            <Link href="/">
              <ArrowLeft size={16} className="mr-2" aria-hidden="true" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      <p className="mt-16 text-xs text-gray-300">
        © {new Date().getFullYear()} DocNear. All rights reserved.
      </p>
    </main>
  );
}

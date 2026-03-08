import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WaitlistBanner from "@/components/sections/WaitlistBanner";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import ForDoctors from "@/components/sections/ForDoctors";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";
import JsonLd from "@/components/seo/JsonLd";
import { getFaqSchema } from "@/lib/structured-data";
import ChatWidget from "@/components/chat/ChatWidget";
import HomeShell from "@/app/home-shell";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://docnear.in",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={getFaqSchema()} />
      <HomeShell>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-white text-teal-700 px-4 py-2 rounded-lg z-[9999] font-medium text-sm shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          <Hero />
          <WaitlistBanner />
          <Features />
          <HowItWorks />
          <ForDoctors />
          <Testimonials />
          <Pricing />
          <Faq />
          <Cta />
        </main>
        <Footer />
        <ChatWidget />
      </HomeShell>
    </>
  );
}

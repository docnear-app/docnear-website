import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import {
  getOrganizationSchema,
  getWebSiteSchema,
  getSoftwareAppSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: {
    default: "DocNear — Find Trusted Doctors Near You",
    template: "%s | DocNear",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getWebSiteSchema()} />
        <JsonLd data={getSoftwareAppSchema()} />
        <link rel="canonical" href="https://docnear.in" />
        <meta name="theme-color" content="#0d9488" />
      </head>
      {/* suppressHydrationWarning covers all browser extension attribute injections globally */}
      <body className="font-sans antialiased bg-white text-gray-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

import Link from "next/link";
import DocNearLogo from "@/components/ui/DocNearLogo";
import { SITE_EMAIL, SITE_NAME } from "@/constants/site";
import { Separator } from "@/components/ui/separator";
import { FOOTER_GROUPS } from "@/data/footer-links";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <DocNearLogo inverted />
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              India&apos;s trusted platform connecting patients with verified doctors nearby. Book
              appointments, manage health, and stay well.
            </p>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="mt-4 block text-sm text-teal-400 hover:text-teal-300 transition-colors"
            >
              {SITE_EMAIL}
            </a>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="text-white font-semibold text-sm mb-4">{group.heading}</h3>
              <ul className="space-y-3" role="list">
                {group.links.map((link) => (
                  <li key={`${group.heading}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10 bg-gray-800" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            &copy; {year} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs">Built with ❤️ for India&apos;s healthcare</p>
        </div>
      </div>
    </footer>
  );
}

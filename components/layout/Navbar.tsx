// "use client";

// import { useState, useEffect, useCallback } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { NAV_ITEMS } from "@/data/navigation";
// import { BOOKING_URL, DOCTORS_JOIN_URL } from "@/constants/site";
// import DocNearLogo from "@/components/ui/DocNearLogo";

// export default function Navbar() {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMobileOpen, setIsMobileOpen] = useState(false);

//     const handleScroll = useCallback(() => {
//         setIsScrolled(window.scrollY > 20);
//     }, []);

//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll, { passive: true });
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, [handleScroll]);

//     const closeMobile = useCallback(() => setIsMobileOpen(false), []);
//     const toggleMobile = useCallback(() => setIsMobileOpen((p) => !p), []);

//     // Navbar is "light" when scrolled OR when mobile menu is open
//     const isLight = isScrolled || isMobileOpen;

//     return (
//         <header
//             className={cn(
//                 "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
//                 isLight
//                     ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
//                     : "bg-transparent"
//             )}
//             role="banner"
//         >
//             <nav
//                 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
//                 aria-label="Main navigation"
//             >
//                 <Link href="/" aria-label="DocNear Home" onClick={closeMobile}>
//                     <DocNearLogo />
//                 </Link>

//                 {/* Desktop nav links */}
//                 <ul className="hidden lg:flex items-center gap-8" role="list">
//                     {NAV_ITEMS.map((item) => (
//                         <li key={item.href}>
//                             <Link
//                                 href={item.href}
//                                 className={cn(
//                                     "text-sm font-medium transition-colors",
//                                     isLight
//                                         ? "text-gray-600 hover:text-teal-600"
//                                         : "text-white/80 hover:text-white"
//                                 )}
//                             >
//                                 {item.label}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>

//                 {/* Desktop CTA buttons */}
//                 <div className="hidden lg:flex items-center gap-3">
//                     <Link
//                         href={DOCTORS_JOIN_URL}
//                         className={cn(
//                             "text-sm font-medium transition-colors px-4 py-2",
//                             isLight
//                                 ? "text-teal-600 hover:text-teal-700"
//                                 : "text-white/80 hover:text-white"
//                         )}
//                     >
//                         For Doctors
//                     </Link>
//                     <Button
//                         asChild
//                         size="sm"
//                         className="rounded-full bg-teal-600 hover:bg-teal-700 text-white px-5"
//                     >
//                         <Link href={BOOKING_URL}>Book a Doctor</Link>
//                     </Button>
//                 </div>

//                 {/* Mobile hamburger / close button */}
//                 <button
//                     className={cn(
//                         "lg:hidden p-2 rounded-md transition-colors",
//                         // Always dark when menu is open (white background)
//                         // On hero (not scrolled, menu closed) use white for visibility
//                         isMobileOpen
//                             ? "text-gray-700 hover:text-teal-600"
//                             : isScrolled
//                                 ? "text-gray-700 hover:text-teal-600"
//                                 : "text-white hover:text-teal-200"
//                     )}
//                     onClick={toggleMobile}
//                     aria-expanded={isMobileOpen}
//                     aria-controls="mobile-menu"
//                     aria-label="Toggle navigation menu"
//                 >
//                     {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//             </nav>

//             {/* Mobile menu drawer */}
//             {isMobileOpen && (
//                 <div
//                     id="mobile-menu"
//                     className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1"
//                 >
//                     {NAV_ITEMS.map((item) => (
//                         <Link
//                             key={item.href}
//                             href={item.href}
//                             onClick={closeMobile}
//                             className="block px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
//                         >
//                             {item.label}
//                         </Link>
//                     ))}
//                     <div className="pt-3 space-y-2 border-t border-gray-100 mt-2">
//                         <Button
//                             asChild
//                             variant="outline"
//                             className="w-full rounded-full border-teal-600 text-teal-600 hover:bg-teal-50"
//                         >
//                             <Link href={DOCTORS_JOIN_URL} onClick={closeMobile}>
//                                 Join as Doctor
//                             </Link>
//                         </Button>
//                         <Button
//                             asChild
//                             className="w-full rounded-full bg-teal-600 hover:bg-teal-700 text-white"
//                         >
//                             <Link href={BOOKING_URL} onClick={closeMobile}>
//                                 Book a Doctor
//                             </Link>
//                         </Button>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// }

"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/data/navigation";
import { BOOKING_URL, DOCTORS_JOIN_URL } from "@/constants/site";
import DocNearLogo from "@/components/ui/DocNearLogo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const closeMobile = useCallback(() => setIsMobileOpen(false), []);
  const toggleMobile = useCallback(() => setIsMobileOpen((p) => !p), []);

  // Navbar is "light" when scrolled OR when mobile menu is open
  const isLight = isScrolled || isMobileOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isLight
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent",
      )}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo — white text on hero, dark text on sticky white navbar */}
        <Link href="/" aria-label="DocNear Home" onClick={closeMobile}>
          <DocNearLogo inverted={!isLight} />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isLight ? "text-gray-600 hover:text-teal-600" : "text-white/80 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href={DOCTORS_JOIN_URL}
            className={cn(
              "text-sm font-medium transition-colors px-4 py-2",
              isLight ? "text-teal-600 hover:text-teal-700" : "text-white/80 hover:text-white",
            )}
          >
            For Doctors
          </Link>
          <Button
            asChild
            size="sm"
            className={cn(
              "rounded-full px-5 font-semibold transition-all",
              isLight
                ? "bg-teal-600 hover:bg-teal-700 text-white"
                : "bg-white text-teal-900 hover:bg-teal-50",
            )}
          >
            <Link href={BOOKING_URL}>Book a Doctor</Link>
          </Button>
        </div>

        {/* Mobile hamburger / close */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-md transition-colors",
            isMobileOpen
              ? "text-gray-700 hover:text-teal-600"
              : isScrolled
                ? "text-gray-700 hover:text-teal-600"
                : "text-white hover:text-teal-200",
          )}
          onClick={toggleMobile}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu drawer */}
      {isMobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobile}
              className="block px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 space-y-2 border-t border-gray-100 mt-2">
            <Button
              asChild
              variant="outline"
              className="w-full rounded-full border-teal-600 text-teal-600 hover:bg-teal-50"
            >
              <Link href={DOCTORS_JOIN_URL} onClick={closeMobile}>
                Join as Doctor
              </Link>
            </Button>
            <Button
              asChild
              className="w-full rounded-full bg-teal-600 hover:bg-teal-700 text-white"
            >
              <Link href={BOOKING_URL} onClick={closeMobile}>
                Book a Doctor
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

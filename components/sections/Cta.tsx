import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKING_URL, DOCTORS_JOIN_URL } from "@/constants/site";

export default function Cta() {
  return (
    <section
      className="py-20 lg:py-28 bg-gradient-to-br from-teal-950 via-teal-900 to-cyan-900"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Your health deserves the best care — starting today
        </h2>
        <p className="mt-5 text-lg text-teal-100/70 max-w-xl mx-auto leading-relaxed">
          Join 50,000+ patients and 2,000+ verified doctors already on DocNear. Takes less than 2
          minutes to get started.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white text-teal-900 hover:bg-teal-50 font-semibold shadow-lg px-8"
          >
            <Link href={BOOKING_URL}>
              Find a Doctor Now
              <ArrowRight size={18} className="ml-2" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-2 border-white/40 hover:border-white text-white bg-transparent hover:bg-white/10 px-8"
          >
            <Link href={DOCTORS_JOIN_URL}>Join as a Doctor — Free</Link>
          </Button>
        </div>

        <p className="mt-6 text-sm text-teal-300">
          Free forever for patients · 30-day free trial for doctors · No credit card needed
        </p>
      </div>
    </section>
  );
}

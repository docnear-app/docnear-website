import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BOOKING_URL, DOCTORS_JOIN_URL } from "@/constants/site";
import { STATS } from "@/data/stats";
import type { StatItem } from "@/types";

const TRUST_BADGES = ["KYC Verified Doctors", "Free for Patients", "Instant Booking"];

function LivePill() {
  return (
    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-teal-200">
      <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" aria-hidden="true" />
      Now live in 200+ cities across India
    </div>
  );
}

function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-600/5 rounded-full blur-3xl" />
    </div>
  );
}

function TrustBadgeRow() {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      {TRUST_BADGES.map((badge) => (
        <div key={badge} className="flex items-center gap-2 text-sm text-teal-200">
          <CheckCircle2 size={16} className="text-teal-400" aria-hidden="true" />
          {badge}
        </div>
      ))}
    </div>
  );
}

function StatCard({ stat }: { stat: StatItem }) {
  return (
    <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
      <p className="text-3xl font-bold text-white">{stat.value}</p>
      <p className="text-sm text-teal-300 mt-1">{stat.label}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-teal-950 via-teal-900 to-cyan-900 overflow-hidden"
      aria-label="Hero — DocNear homepage"
    >
      <HeroBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <LivePill />

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Your Trusted Doctor, <span className="text-teal-300">Just Around the Corner</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-teal-100/80 max-w-2xl mx-auto leading-relaxed">
            Find verified doctors near you, book appointments instantly, and manage your health
            records — all in one place. Free for patients, always.
          </p>

          <TrustBadgeRow />

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-teal-900 hover:bg-teal-50 font-semibold shadow-lg hover:shadow-xl px-8"
            >
              <Link href={BOOKING_URL}>
                Find a Doctor Near Me
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

          <div className="mt-6 flex items-center justify-center gap-2">
            <Badge variant="secondary" className="bg-white/10 text-teal-200 border-0">
              No credit card required
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-teal-200 border-0">
              HIPAA-aligned encryption
            </Badge>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

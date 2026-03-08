import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DOCTORS_JOIN_URL } from "@/constants/site";
import SectionHeading from "@/components/ui/SectionHeading";

const DOCTOR_BENEFITS = [
  "Verified doctor profile with KYC trust badge",
  "Smart appointment calendar and auto-reminders",
  "Digital prescription pad built into your dashboard",
  "Profile view and booking conversion analytics",
  "Connect with peer doctors on the community feed",
  "Reach more patients in your city — guaranteed",
];

interface DoctorStat {
  value: string;
  label: string;
  color: string;
}

const DOCTOR_STATS: DoctorStat[] = [
  { value: "40+", label: "Avg. new patients/month", color: "text-teal-400" },
  { value: "8 hrs", label: "Saved on scheduling/week", color: "text-cyan-400" },
  { value: "96%", label: "Doctor satisfaction rate", color: "text-emerald-400" },
  { value: "200+", label: "Cities with active doctors", color: "text-teal-300" },
];

function DoctorStatGrid() {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
      <p className="text-teal-200 text-sm font-medium mb-6">DocNear doctors report on average:</p>
      <div className="grid grid-cols-2 gap-4">
        {DOCTOR_STATS.map((stat) => (
          <div
            key={stat.label}
            className="text-center p-5 bg-white/5 rounded-2xl border border-white/10"
          >
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-teal-200 mt-1 leading-snug">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ForDoctors() {
  return (
    <section
      id="for-doctors"
      className="py-20 lg:py-28 bg-gradient-to-br from-teal-950 to-teal-900"
      aria-labelledby="for-doctors-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading
              label="For Doctors"
              title="Grow your practice with DocNear"
              subtitle="Join thousands of verified doctors managing appointments, reaching more patients, and building their digital reputation — all from one powerful platform."
              centered={false}
              inverted
            />

            <ul className="mt-8 space-y-3" role="list">
              {DOCTOR_BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2
                    size={17}
                    className="text-teal-400 mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-teal-100 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="rounded-full bg-white text-teal-900 hover:bg-teal-50 font-semibold px-7"
              >
                <Link href={DOCTORS_JOIN_URL}>
                  Join DocNear — Free
                  <ArrowRight size={16} className="ml-2" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="link"
                className="text-teal-200 hover:text-white underline-offset-4"
              >
                <Link href="#pricing">View pricing plans</Link>
              </Button>
            </div>
          </div>
          <DoctorStatGrid />
        </div>
      </div>
    </section>
  );
}

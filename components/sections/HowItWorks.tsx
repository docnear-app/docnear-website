import { Search, CalendarDays, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PATIENT_STEPS } from "@/data/steps";
import type { Step } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";

const STEP_ICON_MAP: Record<string, LucideIcon> = {
  Search,
  CalendarDays,
  CheckCircle2,
};

function StepCard({ step, isLast }: { step: Step; isLast: boolean }) {
  const IconComponent = STEP_ICON_MAP[step.icon];
  return (
    <div className="flex-1 flex flex-col items-center text-center relative">
      <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center shadow-lg mb-5">
        {IconComponent ? (
          <IconComponent size={28} className="text-white" aria-hidden="true" />
        ) : (
          <span className="text-white font-bold text-xl">{step.step}</span>
        )}
      </div>
      {!isLast && (
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-8 left-[calc(50%+40px)] right-[calc(-50%+40px)] h-px bg-gradient-to-r from-teal-300 to-teal-100"
        />
      )}
      <span className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-2">
        Step {step.step}
      </span>
      <h3 className="text-base font-semibold text-gray-900 mb-2">{step.title}</h3>
      <p className="text-sm text-gray-500 max-w-xs leading-relaxed">{step.description}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="How it Works"
          title="Book your doctor in 3 simple steps"
          subtitle="No phone calls. No waiting. No confusion. Open DocNear and get it done in minutes."
        />
        <div className="mt-16 flex flex-col lg:flex-row gap-10 lg:gap-4">
          {PATIENT_STEPS.map((step, i) => (
            <StepCard key={step.step} step={step} isLast={i === PATIENT_STEPS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

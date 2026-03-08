import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PRICING_PLANS } from "@/data/pricing";
import type { PricingPlan } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { DOCTORS_JOIN_URL } from "@/constants/site";

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl p-8 border transition-all",
        plan.highlighted
          ? "bg-teal-600 border-teal-500 shadow-2xl lg:scale-105 z-10"
          : "bg-white border-gray-100 shadow-sm hover:shadow-md",
      )}
    >
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <Badge className="bg-amber-400 text-amber-900 hover:bg-amber-400 text-xs font-bold px-4 py-1">
            {plan.badge}
          </Badge>
        </div>
      )}

      <div>
        <h3
          className={cn(
            "text-sm font-semibold",
            plan.highlighted ? "text-teal-100" : "text-gray-500",
          )}
        >
          {plan.name}
        </h3>
        <div className="mt-3 flex items-baseline gap-1">
          <span
            className={cn(
              "text-4xl font-bold tracking-tight",
              plan.highlighted ? "text-white" : "text-gray-900",
            )}
          >
            {plan.price}
          </span>
          <span className={cn("text-sm", plan.highlighted ? "text-teal-200" : "text-gray-400")}>
            /{plan.period}
          </span>
        </div>
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed",
            plan.highlighted ? "text-teal-100" : "text-gray-500",
          )}
        >
          {plan.description}
        </p>
      </div>

      <ul className="mt-8 space-y-3 flex-1" role="list">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <CheckCircle2
              size={15}
              className={cn(
                "mt-0.5 shrink-0",
                plan.highlighted ? "text-teal-200" : "text-teal-600",
              )}
              aria-hidden="true"
            />
            <span className={cn("text-sm", plan.highlighted ? "text-teal-50" : "text-gray-600")}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        className={cn(
          "mt-8 w-full rounded-full font-semibold",
          plan.highlighted
            ? "bg-white text-teal-700 hover:bg-teal-50 shadow-md"
            : "border-2 border-teal-600 text-teal-600 bg-transparent hover:bg-teal-50",
        )}
        variant={plan.highlighted ? "default" : "outline"}
      >
        <Link href={DOCTORS_JOIN_URL}>{plan.cta}</Link>
      </Button>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Simple Pricing"
          title="Transparent pricing for doctors"
          subtitle="Patients always use DocNear for free. Doctors choose the plan that fits their practice."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-400">
          All prices include GST. Cancel anytime. No lock-in contracts.
        </p>
      </div>
    </section>
  );
}

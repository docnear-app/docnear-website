import type { PricingPlan } from "@/types";

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect to get started and see DocNear in action.",
    features: [
      "Up to 3 appointment slots/day",
      "Basic verified doctor profile",
      "Patient appointment history",
      "SMS reminders for patients",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₹499",
    period: "per month",
    description: "For active doctors growing their patient base.",
    features: [
      "Unlimited appointment slots",
      "Digital prescription pad",
      "Lab report management",
      "Advanced profile analytics",
      "Priority in search results",
      "WhatsApp + SMS reminders",
    ],
    cta: "Start 30-Day Free Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Featured",
    price: "₹999",
    period: "per month",
    description: "For top doctors who want to dominate local search.",
    features: [
      "Everything in Pro",
      "Featured listing — top of city search",
      "Free KYC verification included",
      "Doctor community feed access",
      "Dedicated onboarding support",
      "Custom profile branding",
    ],
    cta: "Become a Featured Doctor",
    highlighted: false,
  },
];

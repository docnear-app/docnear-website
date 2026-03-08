import type { Step } from "@/types";

export const PATIENT_STEPS: Step[] = [
  {
    step: "01",
    icon: "Search",
    title: "Search Your Doctor",
    description:
      "Enter your city and specialty or doctor name. Filter by language, fees, and verified rating.",
  },
  {
    step: "02",
    icon: "CalendarDays",
    title: "Pick a Time Slot",
    description: "See real-time availability. Pick the date and time that works best for you.",
  },
  {
    step: "03",
    icon: "CheckCircle2",
    title: "Confirm & Visit",
    description: "Get instant confirmation via SMS. Visit the clinic or consult online. Done.",
  },
];

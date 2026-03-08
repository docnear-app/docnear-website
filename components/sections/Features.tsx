"use client";

import { useState, useCallback } from "react";
import {
  MapPin,
  CalendarCheck,
  FileText,
  FlaskConical,
  Shield,
  Clock,
  UserCheck,
  Calendar,
  BarChart3,
  Stethoscope,
  Users,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PATIENT_FEATURES, DOCTOR_FEATURES } from "@/data/features";
import type { Feature, FeatureTab } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  MapPin,
  CalendarCheck,
  FileText,
  FlaskConical,
  Shield,
  Clock,
  UserCheck,
  Calendar,
  BarChart3,
  Stethoscope,
  Users,
  TrendingUp,
};

function FeatureCard({ feature }: { feature: Feature }) {
  const IconComponent = ICON_MAP[feature.icon];
  return (
    <article className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-teal-100 transition-all group">
      {feature.tag && (
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="text-xs bg-teal-50 text-teal-700 border-teal-100">
            {feature.tag}
          </Badge>
        </div>
      )}
      <div className="w-12 h-12 bg-teal-50 group-hover:bg-teal-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
        {IconComponent && <IconComponent size={22} className="text-teal-600" aria-hidden="true" />}
      </div>
      <h3 className="text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
    </article>
  );
}

const TABS: { id: FeatureTab; label: string }[] = [
  { id: "patients", label: "For Patients" },
  { id: "doctors", label: "For Doctors" },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState<FeatureTab>("patients");

  const handleTabChange = useCallback((tab: FeatureTab) => {
    setActiveTab(tab);
  }, []);

  const features = activeTab === "patients" ? PATIENT_FEATURES : DOCTOR_FEATURES;

  return (
    <section id="features" className="py-20 lg:py-28 bg-gray-50" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Features"
          title="Everything you need, nothing you don't"
          subtitle="Powerful tools for patients and doctors — built for India's real healthcare needs."
        />

        <div className="mt-10 flex justify-center">
          <div
            className="inline-flex bg-gray-100 rounded-full p-1"
            role="tablist"
            aria-label="Feature category tabs"
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all",
                  activeTab === tab.id
                    ? "bg-white text-teal-700 shadow-sm"
                    : "text-gray-500 hover:text-gray-700",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="tabpanel"
          aria-label={`Features for ${activeTab}`}
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

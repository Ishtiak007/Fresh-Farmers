"use client";

import React from "react";
import { Truck, Refrigerator, FlaskConical, BadgeCheck } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Truck,
    iconColor: "#F97316",
    iconBg: "#FFF7ED",
    title: "Fast Delivery",
    description: "Get the fastest delivery inside Dhaka and Bogura city.",
  },
  {
    id: 2,
    icon: Refrigerator,
    iconColor: "#22C55E",
    iconBg: "#F0FFF4",
    title: "Sanitary Storage",
    description: "Our poultry is stored in sanitary facilities and coolers.",
  },
  {
    id: 3,
    icon: FlaskConical,
    iconColor: "#F43F5E",
    iconBg: "#FFF0F3",
    title: "Assured Quality",
    description:
      "Our poultry is lab tested for antibiotic residues and quality.",
  },
  {
    id: 4,
    icon: BadgeCheck,
    iconColor: "#818CF8",
    iconBg: "#F5F3FF",
    title: "100% Halal Certified",
    description:
      "Processed under strict halal guidelines with expert supervision.",
  },
];

export default function FeaturesSection() {
  return (
    <div className="bg-white w-full h-[476px]">
      <section className="max-w-[1440px] mx-auto py-10  my-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl border border-[#f0f0f0] shadow-[0_1px_4px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-10"
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: feature.iconBg }}
                >
                  <Icon size={20} color={feature.iconColor} strokeWidth={1.8} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[15px] font-semibold text-[#1a1a1a] leading-snug font-sans m-0">
                    {feature.title}
                  </h3>
                  <p className="text-[13px] text-[#888] leading-[1.55] font-sans m-0">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import {
  Brush,
  Camera,
  Check,
  Crown,
  HandHelping,
  HeartHandshake,
  Scissors,
  Shirt,
  Sparkles,
} from "lucide-react";
import type { ComponentType } from "react";

type ServiceUsage = {
  service: string;
  description: string;
  included: boolean;
  icon: ComponentType<{ className?: string }>;
};

const serviceUsage: ServiceUsage[] = [
  {
    service: "Bridal makeup",
    description:
      "Tailored makeup design with long-wear and camera-aware finish.",
    included: true,
    icon: Brush,
  },
  {
    service: "Hair styling",
    description: "Hairstyle structure matched to event flow and accessories.",
    included: true,
    icon: Scissors,
  },
  {
    service: "Dressing assistance",
    description: "Support for gown readiness and final bridal presentation.",
    included: true,
    icon: Shirt,
  },
  {
    service: "Veil placement",
    description: "Secure veil and accessory setup for ceremony transitions.",
    included: true,
    icon: Crown,
  },
  {
    service: "Bridesmaids styling",
    description: "Coordinated companion styling for visual harmony.",
    included: true,
    icon: Sparkles,
  },
  {
    service: "Consultation",
    description:
      "Planning call to align expectations, timeline, and look direction.",
    included: true,
    icon: HeartHandshake,
  },
  {
    service: "Trial session",
    description: "Preview and refine styling choices before wedding day.",
    included: true,
    icon: HandHelping,
  },
  {
    service: "Wedding day support",
    description: "On-site readiness and touch-up coordination.",
    included: true,
    icon: Check,
  },
  {
    service: "Photography preparation",
    description: "Lighting-aware finishing adjustments for portraits.",
    included: true,
    icon: Camera,
  },
];

const ProjectServicesSection = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Services used in each project
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Transparent service breakdown behind portfolio outcomes.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceUsage.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.service}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="rounded-2xl border border-stone-200 bg-[#fdfaf7] p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#8b5e3c]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] ${
                      item.included
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-stone-200 text-stone-700"
                    }`}
                  >
                    {item.included ? "Included" : "Optional"}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-stone-900">
                  {item.service}
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectServicesSection;

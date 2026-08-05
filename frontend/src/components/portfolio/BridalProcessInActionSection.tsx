import { motion } from "framer-motion";
import {
  CalendarDays,
  Camera,
  CheckCircle2,
  HeartHandshake,
  Sparkles,
  Timer,
} from "lucide-react";
import type { ComponentType } from "react";

type ProcessStep = {
  title: string;
  description: string;
  image: string;
  icon: ComponentType<{ className?: string }>;
};

const processSteps: ProcessStep[] = [
  {
    title: "Initial consultation",
    description:
      "Understanding vision, preferences, event flow, and practical requirements.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    icon: HeartHandshake,
  },
  {
    title: "Planning and timeline",
    description:
      "Sequencing preparation windows and assigning roles for event efficiency.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
    icon: CalendarDays,
  },
  {
    title: "Trial session",
    description:
      "Testing makeup and hairstyle direction with adjustments before wedding day.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    icon: CheckCircle2,
  },
  {
    title: "Wedding morning prep",
    description:
      "Calm setup, structured product prep, and hygiene-first workflow.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    icon: Timer,
  },
  {
    title: "Styling and finishing",
    description:
      "Bridal application, hair structure, accessories, and final checks.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    icon: Sparkles,
  },
  {
    title: "Photography and ceremony support",
    description:
      "Touch-ups and support during portraits, ceremony, and celebration.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    icon: Camera,
  },
];

const BridalProcessInActionSection = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Bridal process in action
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            A clear workflow followed across real portfolio projects.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-[#fdfaf7]"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#8b5e3c]">
                    <Icon className="h-4 w-4" />
                    Stage {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-stone-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-stone-600">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BridalProcessInActionSection;

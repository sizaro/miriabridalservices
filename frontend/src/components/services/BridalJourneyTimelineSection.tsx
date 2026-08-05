import { motion } from "framer-motion";
import {
  CalendarClock,
  Gem,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const journey = [
  {
    title: "Consultation",
    description:
      "Discuss your event details, style preferences, and service priorities.",
    icon: MessageCircle,
  },
  {
    title: "Package Selection",
    description:
      "Choose the most suitable package or request a custom proposal.",
    icon: Gem,
  },
  {
    title: "Trial Session",
    description:
      "Refine your look and confirm product choices before wedding week.",
    icon: Sparkles,
  },
  {
    title: "Preparation",
    description:
      "Receive timeline planning, prep guidance, and event-day checklist support.",
    icon: CalendarClock,
  },
  {
    title: "Wedding Day",
    description:
      "Experience on-site execution with calm, premium beauty coordination.",
    icon: HeartHandshake,
  },
  {
    title: "Post-Wedding Follow-Up",
    description:
      "Receive follow-up care tips, photos recap support, and future booking guidance.",
    icon: ShieldCheck,
  },
];

const BridalJourneyTimelineSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55 }}
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">
            Bridal journey timeline
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Understand the full process from first call to post-wedding care.
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {journey.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="relative rounded-[1.25rem] border border-stone-200 bg-[#fdfaf7] px-5 py-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f1e1cf] text-[#8b5e3c]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5e3c]">
                      Stage {index + 1}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-stone-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-stone-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default BridalJourneyTimelineSection;

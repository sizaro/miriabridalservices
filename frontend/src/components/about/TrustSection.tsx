import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock3,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const stats = [
  { label: "Brides served", value: "350+" },
  { label: "Events completed", value: "420+" },
  { label: "Students trained", value: "120+" },
  { label: "Client satisfaction", value: "98%" },
];

const trustCards = [
  {
    title: "Personalized consultations",
    description:
      "Every bridal plan starts with clear listening and tailored guidance.",
    icon: HeartHandshake,
  },
  {
    title: "Professional products",
    description:
      "Professional-grade selections adapted to skin needs and finish goals.",
    icon: Sparkles,
  },
  {
    title: "Reliable time management",
    description:
      "Structured preparation flow to keep wedding-day timelines on track.",
    icon: Clock3,
  },
  {
    title: "Experienced artists",
    description:
      "Trained team members with practical event and studio experience.",
    icon: Users,
  },
  {
    title: "Wedding-day support",
    description:
      "Calm and coordinated on-site support from setup through final checks.",
    icon: BadgeCheck,
  },
  {
    title: "Respectful service",
    description:
      "Clients are treated with dignity, care, and honest communication.",
    icon: ShieldCheck,
  },
];

const TrustSection = () => {
  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
              Why brides trust us
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
              Professional structure with emotional reassurance.
            </h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <motion.article
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="rounded-2xl border border-stone-200 bg-white p-4"
                >
                  <p className="text-3xl font-semibold text-stone-900">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-stone-600">{stat.label}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1300&q=80"
            alt="Calm bride assisted by bridal beauty team"
            className="h-[420px] w-full rounded-[1.9rem] object-cover shadow-md"
            loading="lazy"
          />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-2xl border border-stone-200 bg-white p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f1e1cf] text-[#8b5e3c]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-stone-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {card.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

import { motion } from "framer-motion";
import {
  BadgeCheck,
  BookOpen,
  Brush,
  Heart,
  Lightbulb,
  Shield,
  Sparkles,
  Timer,
} from "lucide-react";

const pillars = [
  {
    title: "Mission",
    description:
      "Deliver professional bridal beauty, styling, consultation, and training services with personalized care and clear communication.",
  },
  {
    title: "Vision",
    description:
      "Become a trusted bridal beauty and training brand known for excellence, creativity, professionalism, and meaningful impact.",
  },
  {
    title: "Brand Promise",
    description:
      "Listen carefully, prepare thoroughly, arrive reliably, and treat every bride with dignity, respect, and intentional support.",
  },
];

const values = [
  {
    title: "Excellence",
    description: "We pursue high standards in every detail and final result.",
    icon: Sparkles,
  },
  {
    title: "Integrity",
    description: "We communicate honestly and act with professional ethics.",
    icon: Shield,
  },
  {
    title: "Creativity",
    description: "We shape looks that honor each bride's unique identity.",
    icon: Brush,
  },
  {
    title: "Personal Care",
    description: "We prioritize comfort, confidence, and emotional ease.",
    icon: Heart,
  },
  {
    title: "Reliability",
    description: "We respect time, plan thoroughly, and show up prepared.",
    icon: Timer,
  },
  {
    title: "Respect",
    description: "We treat every client and partner with dignity and value.",
    icon: BadgeCheck,
  },
  {
    title: "Continuous Learning",
    description:
      "We keep improving through training, practice, and reflection.",
    icon: BookOpen,
  },
  {
    title: "Professionalism",
    description: "We uphold clean systems, discipline, and polished delivery.",
    icon: Lightbulb,
  },
];

const MissionVisionValues = () => {
  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Mission, vision, and values
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            The standards guiding every bridal and training experience.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[1.7rem] border border-stone-200 bg-white p-6"
            >
              <h3 className="text-2xl font-semibold text-stone-900">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-2xl border border-stone-200 bg-white p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f1e1cf] text-[#8b5e3c]">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4 text-base font-semibold text-stone-900">
                  {value.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {value.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;

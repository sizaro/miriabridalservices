import { motion } from "framer-motion";
import { Award, Camera, Newspaper, Tv } from "lucide-react";
import type { ComponentType } from "react";

type RecognitionCard = {
  title: string;
  source: string;
  year: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

const recognitionCards: RecognitionCard[] = [
  {
    title: "Bridal excellence showcase placeholder",
    source: "Industry showcase",
    year: "2026",
    description: "Reserved for future bridal exhibition or event recognition.",
    icon: Award,
  },
  {
    title: "Editorial publication placeholder",
    source: "Magazine or online feature",
    year: "2025",
    description:
      "Space for portfolio publication and visual storytelling highlights.",
    icon: Newspaper,
  },
  {
    title: "Media appearance placeholder",
    source: "Broadcast or interview",
    year: "2026",
    description:
      "Future slot for television, podcast, or event media coverage.",
    icon: Tv,
  },
  {
    title: "Creative collaboration feature",
    source: "Vendor collaboration",
    year: "2024",
    description:
      "Placeholder for documented collaborations with wedding partners.",
    icon: Camera,
  },
];

const RecognitionMediaSection = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Recognition and media
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            A prepared framework for honors, coverage, and public features.
          </h2>
          <p className="mt-5 text-base leading-8 text-stone-600">
            This section supports future awards, publications, and external
            recognition while reinforcing a commitment to continued quality and
            improvement.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {recognitionCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="rounded-[1.5rem] border border-stone-200 bg-[#fdfaf7] p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#8b5e3c]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-stone-900">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm text-stone-500">
                  {card.source} | {card.year}
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-600">
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

export default RecognitionMediaSection;

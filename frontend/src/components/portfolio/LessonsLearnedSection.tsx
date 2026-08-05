import { motion } from "framer-motion";
import {
  Clock3,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const lessons = [
  {
    title: "Preparation first",
    description:
      "Clear preparation prevents rushed decisions and protects quality.",
    icon: Sparkles,
  },
  {
    title: "Communication matters",
    description: "Consistent updates keep clients calm and fully informed.",
    icon: Handshake,
  },
  {
    title: "Flexibility is essential",
    description:
      "Every event has unique variables requiring adaptive execution.",
    icon: Lightbulb,
  },
  {
    title: "Teamwork improves outcomes",
    description:
      "Coordinated roles create smoother transitions and better consistency.",
    icon: Users,
  },
  {
    title: "Punctuality builds trust",
    description:
      "Time discipline supports both client confidence and event flow.",
    icon: Clock3,
  },
  {
    title: "Client care stays central",
    description:
      "Respect, listening, and empathy remain core to every service.",
    icon: ShieldCheck,
  },
];

const LessonsLearnedSection = () => {
  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Lessons learned and experience
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Every bridal event refines our standards and strengthens outcomes.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson, index) => {
            const Icon = lesson.icon;
            return (
              <motion.article
                key={lesson.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="rounded-2xl border border-stone-200 bg-white p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f1e1cf] text-[#8b5e3c]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-stone-900">
                  {lesson.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {lesson.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LessonsLearnedSection;

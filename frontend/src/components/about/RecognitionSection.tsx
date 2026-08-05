import { motion } from "framer-motion";
import { Award, BadgeCheck, GraduationCap, Medal } from "lucide-react";

const recognitionItems = [
  {
    title: "Advanced Bridal Technique Program",
    issuer: "Training Institute Placeholder",
    year: "2024",
    description:
      "Structured practical development in bridal artistry and event execution.",
    icon: GraduationCap,
  },
  {
    title: "Professional Hygiene and Safety Workshop",
    issuer: "Standards Body Placeholder",
    year: "2023",
    description:
      "Focused learning on studio sanitation and client-safe procedures.",
    icon: BadgeCheck,
  },
  {
    title: "Creative Styling Masterclass",
    issuer: "Industry Mentor Placeholder",
    year: "2022",
    description:
      "Applied training in contemporary bridal concepts and look design.",
    icon: Award,
  },
  {
    title: "Service Excellence Recognition Placeholder",
    issuer: "Community Event Platform",
    year: "2025",
    description:
      "Placeholder slot for future recognition, media mention, or partnership honor.",
    icon: Medal,
  },
];

const RecognitionSection = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Awards and certifications
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Professional growth documented through learning and development.
          </h2>
          <p className="mt-5 text-base leading-8 text-stone-600">
            This section is designed for current and future achievements,
            including certificates, workshops, recognitions, and verified
            professional records.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {recognitionItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-[1.5rem] border border-stone-200 bg-[#fdfaf7] p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#8b5e3c]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-stone-500">
                  {item.issuer} | {item.year}
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-600">
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

export default RecognitionSection;

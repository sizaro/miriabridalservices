import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Beginner Beauty Foundations",
    description:
      "Core makeup and styling techniques for aspiring professionals entering bridal beauty.",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Advanced Bridal Artistry",
    description:
      "Elevated bridal techniques, style adaptation, and event-focused execution strategies.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Beauty Business Development",
    description:
      "Client management, pricing strategy, branding, and booking systems for growth.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Certification Program",
    description:
      "Structured practical assessment and graduation pathway for bridal service proficiency.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
  },
];

const TrainingAcademySection = () => {
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
            Training academy
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Building the next generation of bridal beauty professionals.
          </h2>
          <p className="mt-4 text-sm leading-7 text-stone-600">
            Miriam Bridal Services trains aspiring artists through practical,
            business, and certification-focused programs.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-[#fdfaf7]"
            >
              <img
                src={program.image}
                alt={program.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-stone-900">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {program.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
          >
            Apply for Training <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default TrainingAcademySection;

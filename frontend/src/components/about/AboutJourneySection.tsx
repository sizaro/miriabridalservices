import { motion } from "framer-motion";

const milestones = [
  {
    year: "2018",
    title: "Boutique launch",
    detail: "Started with one studio suite and private consultations.",
  },
  {
    year: "2020",
    title: "Expanded offerings",
    detail: "Added full wedding day coordination and styling.",
  },
  {
    year: "2023",
    title: "Team growth",
    detail: "Built a multi-artist team serving local and destination clients.",
  },
  {
    year: "Today",
    title: "Luxury bridal partner",
    detail: "Delivering a complete bridal experience with elevated standards.",
  },
];

const AboutJourneySection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="bg-[#f7efe8] py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">
            Our journey
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            A growing bridal brand shaped by service excellence.
          </h2>
        </div>
        <div className="mt-10 grid gap-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              className="rounded-2xl border border-stone-200 bg-white px-5 py-5 sm:px-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8b5e3c]">
                {milestone.year}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-stone-900">
                {milestone.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-stone-600">
                {milestone.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutJourneySection;

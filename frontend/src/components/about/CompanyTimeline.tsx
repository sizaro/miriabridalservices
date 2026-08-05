import { motion } from "framer-motion";
import { Flag, Rocket, Sparkles, Users } from "lucide-react";

const milestones = [
  {
    year: "2018",
    title: "Foundation",
    description:
      "Miriam Bridal Services was established to provide intentional bridal beauty with personal care.",
    icon: Flag,
  },
  {
    year: "2019",
    title: "First Major Bridal Events",
    description:
      "Delivered coordinated styling for larger wedding teams and multi-phase ceremonies.",
    icon: Sparkles,
  },
  {
    year: "2021",
    title: "Signature Packages Introduced",
    description:
      "Launched structured bridal service packages with consultation and timeline planning.",
    icon: Rocket,
  },
  {
    year: "2023",
    title: "Training Services Launch",
    description:
      "Added practical training tracks to support aspiring beauty professionals.",
    icon: Users,
  },
  {
    year: "2025",
    title: "Studio and Team Expansion",
    description:
      "Expanded workstations and service coverage to support more brides and students.",
    icon: Flag,
  },
  {
    year: "Future",
    title: "Regional Bridal Excellence Goals",
    description:
      "Building stronger systems, collaborations, and learning pathways for long-term impact.",
    icon: Rocket,
  },
];

const CompanyTimeline = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Company journey
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Growth shaped through practice, learning, and commitment.
          </h2>
        </div>

        <div className="mt-10 relative border-l border-stone-200 pl-6 sm:pl-8">
          {milestones.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative mb-8 rounded-2xl border border-stone-200 bg-[#fdfaf7] p-5"
              >
                <span className="absolute -left-[2.35rem] top-6 flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 bg-white text-[#8b5e3c]">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5e3c]">
                  {item.year}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-stone-900">
                  {item.title}
                </h3>
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

export default CompanyTimeline;

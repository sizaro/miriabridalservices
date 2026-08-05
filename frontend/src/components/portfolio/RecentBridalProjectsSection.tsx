import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ProjectStory = {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  testimonial: string;
  services: string[];
  team: string[];
  image: string;
};

const recentProjects: ProjectStory[] = [
  {
    id: "project-1",
    title: "Classic church wedding glow",
    category: "Church wedding",
    location: "Provo, Utah",
    year: "2026",
    description:
      "A polished bridal look designed for indoor lighting and long ceremony timing.",
    testimonial: "The process was calm, organized, and beautifully personal.",
    services: ["Makeup", "Hair styling", "Trial session"],
    team: ["Founder", "Hair stylist"],
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1100&q=80",
  },
  {
    id: "project-2",
    title: "Traditional introduction elegance",
    category: "Traditional ceremony",
    location: "Orem, Utah",
    year: "2025",
    description:
      "Modern softness blended with cultural accessories and structured morning prep.",
    testimonial: "Everything felt intentional and handled with care.",
    services: ["Consultation", "Dressing support", "Veil placement"],
    team: ["Founder", "Assistant"],
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=80",
  },
  {
    id: "project-3",
    title: "Outdoor sunset bridal story",
    category: "Outdoor wedding",
    location: "Salt Lake City, Utah",
    year: "2026",
    description:
      "Weather-aware products and touch-up planning for ceremony and portraits.",
    testimonial: "I looked fresh from the first photo to the final dance.",
    services: ["Long-wear makeup", "Bridesmaids styling", "Touch-up"],
    team: ["Lead stylist", "Event support"],
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1100&q=80",
  },
  {
    id: "project-4",
    title: "Luxury reception transformation",
    category: "Luxury bridal styling",
    location: "Park City, Utah",
    year: "2024",
    description:
      "Dual-look package with timeline-managed transition between ceremony and evening reception.",
    testimonial: "Two different looks, one smooth experience.",
    services: ["Dual styling", "Photography prep", "Wedding-day support"],
    team: ["Founder", "Makeup artist", "Consultant"],
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1100&q=80",
  },
];

const RecentBridalProjectsSection = () => {
  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Recent bridal projects
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Complete wedding stories, not just final images.
          </h2>
        </div>

        <div className="mt-10 columns-1 gap-6 md:columns-2">
          {recentProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="mb-6 break-inside-avoid overflow-hidden rounded-[1.7rem] border border-stone-200 bg-white"
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full object-cover ${index % 2 === 0 ? "h-64" : "h-80"}`}
                loading="lazy"
              />

              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-[#8b5e3c]">
                  {project.category} | {project.location}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-stone-900">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {project.description}
                </p>
                <p className="mt-3 text-sm italic text-stone-700">
                  "{project.testimonial}"
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={`${project.id}-${service}`}
                      className="rounded-full border border-stone-200 bg-[#fdfaf7] px-3 py-1 text-xs font-medium text-stone-700"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs uppercase tracking-[0.12em] text-stone-500">
                    Team: {project.team.join(", ")} | {project.year}
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#8b5e3c] transition hover:text-[#6f462b]"
                  >
                    View full story <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBridalProjectsSection;

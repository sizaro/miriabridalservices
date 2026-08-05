import { motion } from "framer-motion";

type Category = {
  title: string;
  description: string;
  projectsCount: string;
  image: string;
};

const categories: Category[] = [
  {
    title: "Church weddings",
    description:
      "Classic and timeless looks for ceremony-focused wedding days.",
    projectsCount: "42 featured projects",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Traditional introductions",
    description:
      "Cultural elegance with personalized accessory and attire harmony.",
    projectsCount: "35 featured projects",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Engagement ceremonies",
    description:
      "Soft-glam storytelling for pre-wedding celebrations and portraits.",
    projectsCount: "30 featured projects",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Luxury bridal styling",
    description:
      "Refined premium experiences with elevated preparation standards.",
    projectsCount: "26 featured projects",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Outdoor weddings",
    description:
      "Weather-resilient beauty plans for daylight and open-air venues.",
    projectsCount: "31 featured projects",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Photoshoots",
    description:
      "Portfolio-grade styling for editorial and bridal concept sessions.",
    projectsCount: "22 featured projects",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Bridesmaids styling",
    description:
      "Coordinated team looks supporting the bride's overall aesthetic.",
    projectsCount: "29 featured projects",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Destination weddings",
    description: "Travel-ready preparation for weddings beyond the local area.",
    projectsCount: "14 featured projects",
    image:
      "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?auto=format&fit=crop&w=1000&q=80",
  },
];

const WeddingCategoriesSection = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Wedding categories
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Explore portfolio work by wedding style and story type.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="group overflow-hidden rounded-[1.5rem] border border-stone-200 bg-[#fdfaf7]"
            >
              <div className="overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-stone-900">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {category.description}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#8b5e3c]">
                  {category.projectsCount}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingCategoriesSection;

import { motion } from "framer-motion";
import {
  Brush,
  Crown,
  Flower2,
  Gem,
  GraduationCap,
  Users,
  WandSparkles,
} from "lucide-react";

const categories = [
  {
    id: "bridal-makeup",
    title: "Bridal Makeup",
    description:
      "Refined bridal makeup crafted for long wear, flash photography, and timeless elegance.",
    icon: Brush,
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hair-styling",
    title: "Hair Styling",
    description:
      "Signature bridal hairstyles tailored to gown details, face shape, and wedding theme.",
    icon: Crown,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "wedding-styling",
    title: "Wedding Styling",
    description:
      "Holistic beauty and style direction from preparation suite to ceremony-ready reveal.",
    icon: WandSparkles,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "bridesmaids-styling",
    title: "Bridesmaids Styling",
    description:
      "Coordinated glam for your bridal party with polished consistency and efficient timing.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "traditional-ceremony",
    title: "Traditional Ceremony Styling",
    description:
      "Specialized looks for traditional introductions, ceremonies, and multi-outfit celebrations.",
    icon: Flower2,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "luxury-packages",
    title: "Luxury Packages",
    description:
      "Premium all-inclusive offerings designed for brides seeking complete event-day support.",
    icon: Gem,
    image:
      "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "training-academy",
    title: "Training Academy",
    description:
      "Professional beauty education for aspiring artists focused on bridal excellence.",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80",
  },
];

const ServiceCategoriesSection = () => {
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
            Service categories
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Discover services tailored for every part of your bridal
            celebration.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-[#fdfaf7] shadow-sm transition"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-52 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f1e1cf] text-[#8b5e3c]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-stone-900">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-stone-600">
                    {category.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceCategoriesSection;

import { motion } from "framer-motion";

const addons = [
  {
    title: "Eyelash Application",
    description:
      "Premium lash customization for enhanced eye definition and photo-ready finishes.",
    price: "$25+",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Veil Placement",
    description:
      "Secure and elegant veil positioning aligned with hairstyle and ceremony timing.",
    price: "$35+",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Flower Girl Styling",
    description:
      "Soft and age-appropriate hair and makeup details for younger bridal party members.",
    price: "$55+",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Bridesmaids Styling",
    description:
      "Consistent beauty direction for the bridal party while honoring each individual look.",
    price: "$110+",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Touch-Up Kits",
    description:
      "Curated essentials for maintaining your bridal look through photos and reception.",
    price: "$45+",
    image:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Wedding Day Support",
    description:
      "Extended on-site artist availability for touch-ups and look transitions.",
    price: "$160+",
    image:
      "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Additional Makeup Session",
    description:
      "Optional second makeup look for cultural events or reception transformations.",
    price: "$130+",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Destination Travel Services",
    description:
      "Out-of-town bridal support with travel-ready scheduling and logistics planning.",
    price: "$250+",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Photography Preparation",
    description:
      "Detail checks for portraits, including neckline, veil, and makeup harmony.",
    price: "$75+",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
  },
];

const AddOnServicesSection = () => {
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
            Add-on services
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Customize your bridal package with elegant service enhancements.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {addons.map((addon, index) => (
            <motion.article
              key={addon.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              whileHover={{ y: -5 }}
              className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-[#fdfaf7]"
            >
              <img
                src={addon.image}
                alt={addon.title}
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-stone-900">
                  {addon.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {addon.description}
                </p>
                <p className="mt-3 text-sm font-semibold text-[#8b5e3c]">
                  Starting at {addon.price}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AddOnServicesSection;

import { motion } from "framer-motion";

const portfolio = [
  {
    title: "Wedding portraits",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Engagement ceremony",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Traditional introduction",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Bridal portraits",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Bridesmaids moment",
    image:
      "https://images.unsplash.com/photo-1477506350614-fcdc29a3b157?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Preparation suite",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80",
  },
];

const PortfolioShowcaseSection = () => {
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
            Portfolio showcase
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Recent bridal work prepared for future lightbox and gallery
            integration.
          </h2>
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {portfolio.map((item, index) => (
            <motion.figure
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="mb-4 break-inside-avoid overflow-hidden rounded-[1.25rem] border border-stone-200 bg-[#fdfaf7]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-sm font-medium text-stone-700">
                {item.title}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioShowcaseSection;

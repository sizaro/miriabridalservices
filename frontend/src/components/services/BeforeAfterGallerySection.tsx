import { motion } from "framer-motion";

const items = [
  {
    before:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80",
    after:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
    caption:
      "Soft glam transformation with natural finish and elegant eye definition.",
  },
  {
    before:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1000&q=80",
    after:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80",
    caption:
      "Traditional ceremony-ready look with fuller complexion coverage and structured styling.",
  },
  {
    before:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80",
    after:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
    caption:
      "High-luxury bridal result designed for long event durations and portrait sessions.",
  },
];

const BeforeAfterGallerySection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55 }}
      className="bg-[#f7efe8] py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">
            Before &amp; after gallery
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Transformation previews with space for future comparison sliders.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((entry, index) => (
            <motion.article
              key={entry.caption}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white"
            >
              <div className="grid grid-cols-2">
                <img
                  src={entry.before}
                  alt="Before transformation"
                  className="h-52 w-full object-cover"
                />
                <img
                  src={entry.after}
                  alt="After transformation"
                  className="h-52 w-full object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5e3c]">
                  Before / After
                </p>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {entry.caption}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BeforeAfterGallerySection;

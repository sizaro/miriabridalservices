import { motion } from "framer-motion";

const inspirationImages = [
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
    alt: "Bride smiling with confidence before ceremony",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    alt: "Elegant bridal portrait in natural light",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    alt: "Wedding morning preparation and joy",
  },
];

const InspirationSection = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Inspiration
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Confidence, preparation, elegance, and unforgettable moments.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-stone-600">
            Your bridal journey can be as intentional and memorable as the
            stories you have explored here.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {inspirationImages.map((image, index) => (
            <motion.img
              key={image.src}
              src={image.src}
              alt={image.alt}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="h-72 w-full rounded-[1.4rem] object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;

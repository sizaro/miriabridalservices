import { motion } from "framer-motion";

const scenes = [
  {
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1100&q=80",
    caption: "Product arrangement before bridal session",
  },
  {
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1100&q=80",
    caption: "Consultation and facial structure planning",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1100&q=80",
    caption: "Team coordination during preparation flow",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=80",
    caption: "Student practice and guided correction",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1100&q=80",
    caption: "Hair styling trial and accessory placement",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1100&q=80",
    caption: "Calm wedding-morning support with bride",
  },
];

const BehindTheScenesSection = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Behind the scenes
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Beautiful results come from disciplined preparation.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {scenes.map((scene, index) => (
            <motion.figure
              key={scene.image}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="group overflow-hidden rounded-[1.4rem] border border-stone-200"
            >
              <div className="relative overflow-hidden">
                <img
                  src={scene.image}
                  alt={scene.caption}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/5 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <figcaption className="bg-[#fdfaf7] px-4 py-3 text-sm leading-6 text-stone-700">
                {scene.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BehindTheScenesSection;

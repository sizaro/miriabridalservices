import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1000&q=80",
    alt: "Bride with bouquet in natural light",
    label: "Garden ceremony prep",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    alt: "Bride adjusting veil in studio mirror",
    label: "Studio veil finishing",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80",
    alt: "Wedding table and floral details",
    label: "Reception details",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
    alt: "Couple at wedding venue entrance",
    label: "Venue reveal moment",
  },
  {
    src: "https://images.unsplash.com/photo-1537907510278-aec37af536cc?auto=format&fit=crop&w=1000&q=80",
    alt: "Bride makeup touch-up close shot",
    label: "Final touch-up",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80",
    alt: "Elegant bridal portrait in white dress",
    label: "Classic bridal portrait",
  },
];

const GalleryImageGridSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="bg-[#f7efe8] py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-72 w-full object-cover"
              />
              <figcaption className="flex items-center gap-2 px-4 py-4 text-sm font-medium text-stone-700">
                <ImageIcon className="h-4 w-4 text-[#8b5e3c]" />
                {item.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default GalleryImageGridSection;

import { motion } from 'framer-motion';

const galleryItems = [
  { title: 'Soft glam finish', subtitle: 'Romantic and refined', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80' },
  { title: 'Modern bridal look', subtitle: 'Clean, elegant, timeless', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80' },
  { title: 'Signature styling', subtitle: 'Personalized to your vision', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80' },
  { title: 'Wedding-day details', subtitle: 'Every moment beautifully considered', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80' },
];

const GallerySection = () => {
  return (
    <motion.section id="gallery" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">Gallery</p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">Inspiration that reflects beauty, poise, and celebration.</h2>
          </div>
          <a href="#contact" className="text-sm font-semibold text-[#8b5e3c] transition hover:text-[#6f462b]">Request a private consultation →</a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {galleryItems.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
              <img src={item.image} alt={item.title} className="h-[260px] w-full object-cover" />
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5e3c]">Featured look</p>
                <h3 className="mt-3 text-2xl font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default GallerySection;

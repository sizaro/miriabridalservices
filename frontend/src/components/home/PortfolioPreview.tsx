import { motion } from 'framer-motion';

const portfolioItems = [
  { title: 'Bridal portraits', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80' },
  { title: 'Luxury details', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80' },
  { title: 'Wedding-day styling', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80' },
];

const PortfolioPreview = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-[#f7efe8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">Portfolio</p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">A curated view of the refined beauty we create.</h2>
          </div>
          <a href="#gallery" className="text-sm font-semibold text-[#8b5e3c] hover:text-[#6f462b]">View gallery</a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
              <img src={item.image} alt={item.title} className="h-[240px] w-full object-cover" />
              <div className="p-5"><h3 className="text-lg font-semibold text-stone-900">{item.title}</h3></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioPreview;

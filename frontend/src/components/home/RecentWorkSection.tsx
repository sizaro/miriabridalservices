import { motion } from 'framer-motion';

const recentWork = [
  { title: 'Modern Glam Bridal Styling', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80' },
  { title: 'Soft Romantic Wedding Details', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80' },
  { title: 'Luxury Bridal Portrait Session', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80' },
];

const RecentWorkSection = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">Recent work</p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">Celebrations and styling moments captured with care.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {recentWork.map((work, index) => (
            <motion.div key={work.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
              <img src={work.image} alt={work.title} className="h-[240px] w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-stone-900">{work.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default RecentWorkSection;

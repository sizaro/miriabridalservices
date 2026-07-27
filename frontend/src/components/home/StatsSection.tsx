import { motion } from 'framer-motion';

const stats = [
  { value: '100+', label: 'Bridal experiences styled' },
  { value: '4.9/5', label: 'Client satisfaction rating' },
  { value: '24/7', label: 'Planning and support access' },
  { value: '12+', label: 'Years of refined service' },
];

const StatsSection = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-[#f7efe8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.img initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80" alt="Bridal celebration details" className="h-[280px] w-full rounded-[2rem] object-cover shadow-md" />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="rounded-[1.5rem] border border-stone-200 bg-white p-6 text-center shadow-sm">
              <p className="text-3xl font-semibold text-stone-900">{stat.value}</p>
              <p className="mt-2 text-sm text-stone-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;

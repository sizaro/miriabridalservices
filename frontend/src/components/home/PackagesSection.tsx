import { motion } from 'framer-motion';

const packages = [
  { name: 'Signature Bridal Styling', price: '$450+', description: 'A polished bridal styling experience with luxury finishing touches and personalized guidance.' },
  { name: 'Full Wedding-Day Support', price: '$900+', description: 'Complete styling support and day-of coordination for a calm, elegant celebration.' },
  { name: 'Private Consultation', price: '$150', description: 'A personal planning session to shape your bridal vision and timeline.' },
];

const PackagesSection = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:items-center">
        <motion.img initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1100&q=80" alt="Bridal package options" className="h-[360px] w-full rounded-[2rem] object-cover shadow-md" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">Packages</p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">Flexible options for every bridal celebration.</h2>
          <div className="mt-8 grid gap-6">
            {packages.map((pkg, index) => (
              <motion.div key={pkg.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="rounded-[1.75rem] border border-stone-200 bg-[#fdfaf7] p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5e3c]">{pkg.price}</p>
                <h3 className="mt-4 text-xl font-semibold text-stone-900">{pkg.name}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">{pkg.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PackagesSection;

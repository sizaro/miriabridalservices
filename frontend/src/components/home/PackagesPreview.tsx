import { motion } from 'framer-motion';

const packages = [
  { title: 'Signature Bridal Styling', price: '$450+', description: 'Luxury bridal styling with personalized finishing touches.' },
  { title: 'Full Wedding-Day Support', price: '$900+', description: 'Complete planning support and styling services for the day.' },
  { title: 'Private Consultation', price: '$150', description: 'A guided planning session to build your ideal bridal experience.' },
];

const PackagesPreview = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">Packages</p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">Flexible packages for every wedding style and schedule.</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div key={pkg.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} className="rounded-[1.75rem] border border-stone-200 bg-[#fdfaf7] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5e3c]">{pkg.price}</p>
              <h3 className="mt-4 text-xl font-semibold text-stone-900">{pkg.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">{pkg.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PackagesPreview;

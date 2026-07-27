import { motion } from 'framer-motion';

const details = ['Boutique, highly personalized care', 'Elegant styling for every season and setting', 'Flexible planning with calm, thoughtful guidance'];

const WhyChooseUsSection = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <motion.img initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80" alt="Bridal styling preparation" className="h-[420px] w-full rounded-[2rem] object-cover shadow-md" />
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">Why choose us</p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">Beautiful service, thoughtful planning, and a refined bridal atmosphere.</h2>
          <p className="mt-6 text-lg leading-8 text-stone-600">Our team creates a graceful experience that makes every moment feel elevated, personal, and naturally memorable.</p>

          <div className="mt-8 space-y-3">
            {details.map((detail, index) => (
              <motion.div key={detail} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="rounded-2xl border border-stone-200 bg-[#fdfaf7] px-4 py-3 text-sm font-medium text-stone-700">
                {detail}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUsSection;

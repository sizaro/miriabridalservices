import { motion } from 'framer-motion';

const reasons = ['Personalized bridal styling', 'Luxury service and detail', 'Thoughtful communication throughout'];

const WhyChooseUs = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:items-center">
        <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80" alt="Elegant bridal styling moment" className="h-[380px] w-full rounded-[2rem] object-cover shadow-md" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">Why choose us</p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">Because your bridal experience should feel effortless, polished, and deeply personal.</h2>
          <div className="mt-8 space-y-3">
            {reasons.map((reason, index) => (
              <motion.div key={reason} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} className="rounded-2xl border border-stone-200 bg-[#fdfaf7] px-4 py-4 text-sm font-medium text-stone-700">{reason}</motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;

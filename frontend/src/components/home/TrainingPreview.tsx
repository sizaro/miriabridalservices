import { motion } from 'framer-motion';

const TrainingPreview = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">Training</p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">Professional training and styling insight for modern bridal excellence.</h2>
          <p className="mt-6 text-lg leading-8 text-stone-600">We bring refined technique and polished service into every bridal experience.</p>
        </div>
        <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80" alt="Training and styling session" className="h-[360px] w-full rounded-[2rem] object-cover shadow-md" />
      </div>
    </motion.section>
  );
};

export default TrainingPreview;

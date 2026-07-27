import { motion } from 'framer-motion';

const AboutPreview = () => {
  return (
    <motion.section id="about" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80" alt="Luxury bridal consultation" className="h-[380px] w-full rounded-[2rem] object-cover shadow-md" />
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">About us</p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">A boutique bridal experience built around elegance, comfort, and confidence.</h2>
          <p className="mt-6 text-lg leading-8 text-stone-600">We blend beauty, hospitality, and thoughtful planning to shape every bridal moment with grace, clarity, and timeless style.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {['Personalized styling plans', 'Luxury finishing touches', 'Private consultations', 'Support from start to finish'].map((item) => (
              <div key={item} className="rounded-2xl border border-stone-200 bg-[#fdfaf7] px-4 py-4 text-sm font-medium text-stone-700">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPreview;

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ConsultationPreview = () => {
  return (
    <motion.section id="booking" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-[#f7efe8] py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">Consultation</p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">Schedule a private consultation to explore your bridal vision.</h2>
          <p className="mt-6 text-lg leading-8 text-stone-600">We offer thoughtful guidance, availability planning, and tailored recommendations for your celebration.</p>
          <a href="#contact" className="mt-8 inline-flex items-center rounded-full bg-[#8b5e3c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6f462b]">Book your consultation <ArrowRight className="ml-2 h-4 w-4" /></a>
        </div>
        <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80" alt="Bridal consultation setup" className="h-[360px] w-full rounded-[2rem] object-cover shadow-md" />
      </div>
    </motion.section>
  );
};

export default ConsultationPreview;

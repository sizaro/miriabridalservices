import { motion } from 'framer-motion';
import { Camera, Clock3, Heart, Sparkles } from 'lucide-react';

const services = [
  { title: 'Bridal styling', description: 'Elegant hair, makeup, and polished finishing touches.', icon: Sparkles },
  { title: 'Wedding-day coordination', description: 'Thoughtful support for a calm and beautiful timeline.', icon: Clock3 },
  { title: 'Photography guidance', description: 'Beautiful recommendations for portraits and details.', icon: Camera },
  { title: 'Luxury consultations', description: 'Private, tailored planning for your unique bridal style.', icon: Heart },
];

const ServicesPreview = () => {
  return (
    <motion.section id="services" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-[#f7efe8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">Our services</p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">Professional bridal support designed around your celebration.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1e1cf] text-[#8b5e3c]"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-5 text-xl font-semibold text-stone-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesPreview;

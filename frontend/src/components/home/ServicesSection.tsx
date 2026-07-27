import { motion } from 'framer-motion';
import { Camera, Clock3, Heart, Sparkles } from 'lucide-react';

const services = [
  { title: 'Bridal styling', description: 'Elegant hair, makeup, and finishing touches for your special day.', icon: Sparkles },
  { title: 'Wedding-day coordination', description: 'Thoughtful coordination so your timeline feels calm and polished.', icon: Clock3 },
  { title: 'Photography guidance', description: 'Recommendations and support to help your bridal portraits shine.', icon: Camera },
  { title: 'Luxury consultations', description: 'A warm, private experience designed around your vision and priorities.', icon: Heart },
];

const ServicesSection = () => {
  return (
    <motion.section id="services" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-[#f7efe8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.img initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80" alt="Bridal services experience" className="h-[360px] w-full rounded-[2rem] object-cover shadow-md" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">Our services</p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">Services designed to make your bridal day feel effortless.</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div key={service.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1e1cf] text-[#8b5e3c]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-stone-900">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-stone-600">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;

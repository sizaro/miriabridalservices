import { motion } from 'framer-motion';
import { HeartHandshake, Sparkles, ShieldCheck } from 'lucide-react';

const points = [
  { title: 'Personalized planning', text: 'Every bridal experience is tailored to your style, schedule, and celebration.', icon: HeartHandshake },
  { title: 'Exceptional detail', text: 'We focus on the finishing touches that make your bridal look feel elevated.', icon: Sparkles },
  { title: 'Trusted support', text: 'You receive calm, thoughtful guidance from consultation through the big day.', icon: ShieldCheck },
];

const AboutSection = () => {
  return (
    <motion.section id="about" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80" alt="Bridal styling atmosphere" className="h-[360px] w-full rounded-[2rem] object-cover shadow-md" />
        </motion.div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">About us</p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">A boutique bridal experience rooted in comfort and luxury.</h2>
          <p className="mt-6 text-lg leading-8 text-stone-600">We blend beauty, hospitality, and thoughtful planning to create a bridal process that feels seamless from start to finish.</p>
          <div className="mt-8 grid gap-4">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <motion.div key={point.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-2xl border border-stone-200 bg-[#fdfaf7] p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f1e1cf] text-[#8b5e3c]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-stone-900">{point.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-stone-600">{point.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;

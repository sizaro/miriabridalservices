import { motion } from 'framer-motion';

const steps = [
  { title: 'Discover', description: 'We begin with a private conversation to understand your vision and priorities.' },
  { title: 'Design', description: 'We shape a custom plan that reflects your style, timeline, and ceremony setting.' },
  { title: 'Deliver', description: 'We guide every detail with calm professionalism so your day feels effortless.' },
];

const HowWeWorkSection = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80" alt="Bridal planning process" className="h-[360px] w-full rounded-[2rem] object-cover shadow-md" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">How we work</p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">A refined, transparent process from first consultation to final reveal.</h2>
            <div className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <motion.div key={step.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="rounded-[1.5rem] border border-stone-200 bg-[#fdfaf7] p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1e1cf] text-sm font-semibold text-[#8b5e3c]">0{index + 1}</span>
                    <h3 className="text-lg font-semibold text-stone-900">{step.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowWeWorkSection;

import { motion } from 'framer-motion';

const steps = [
  { title: 'Consultation', description: 'We begin with a thoughtful consultation to understand your vision, timeline, and wedding setting.' },
  { title: 'Styling plan', description: 'Every detail is curated with beauty, comfort, and personal expression in mind.' },
  { title: 'Wedding-day support', description: 'We support you with confidence and care so your celebration feels beautifully effortless.' },
];

const ProcessSection = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-[#fcf8f3] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.img initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80" alt="Bridal planning process" className="h-[360px] w-full rounded-[2rem] object-cover shadow-md" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">Our process</p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">A calm, polished process from start to finish.</h2>
            <div className="mt-8 grid gap-6">
              {steps.map((step, index) => (
                <motion.div key={step.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f1e1cf] text-sm font-semibold text-[#8b5e3c]">0{index + 1}</div>
                  <h3 className="mt-5 text-xl font-semibold text-stone-900">{step.title}</h3>
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

export default ProcessSection;

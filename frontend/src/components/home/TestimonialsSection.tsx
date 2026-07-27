import { motion } from 'framer-motion';

const testimonials = [
  { quote: 'Every detail felt thoughtful and luxurious. It was the most calm and beautiful experience I could have imagined.', name: 'Ava & Daniel', role: 'Bride and Groom' },
  { quote: 'The styling was elegant and unforgettable. I felt supported, confident, and absolutely radiant.', name: 'Megan T.', role: 'Bride' },
  { quote: 'The atmosphere was warm and polished. I knew I was in the best hands from the first meeting.', name: 'Sophie L.', role: 'Bride' },
];

const TestimonialsSection = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-[#f7efe8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.img initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80" alt="Happy bridal client" className="h-[360px] w-full rounded-[2rem] object-cover shadow-md" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">Testimonials</p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">Loved by brides who want beauty, comfort, and confidence.</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {testimonials.map((item, index) => (
                <motion.div key={item.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
                  <p className="text-base leading-8 text-stone-700">“{item.quote}”</p>
                  <div className="mt-6">
                    <p className="font-semibold text-stone-900">{item.name}</p>
                    <p className="text-sm text-stone-500">{item.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;

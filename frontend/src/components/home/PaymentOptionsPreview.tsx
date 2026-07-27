import { motion } from 'framer-motion';

const methods = ['Flexible booking deposits', 'Secure payment options', 'Transparent pricing guidance'];

const PaymentOptionsPreview = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-[#f7efe8] py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:items-center">
        <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80" alt="Bridal payment planning" className="h-[360px] w-full rounded-[2rem] object-cover shadow-md" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">Payment options</p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">Straightforward payment choices that keep planning comfortable.</h2>
          <div className="mt-8 space-y-3">
            {methods.map((method, index) => (
              <motion.div key={method} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} className="rounded-2xl border border-stone-200 bg-white px-4 py-4 text-sm font-medium text-stone-700">{method}</motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PaymentOptionsPreview;

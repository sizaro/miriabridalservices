import { motion } from 'framer-motion';

const PromotionBanner = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="border-b border-stone-200 bg-[#f8ede2]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-sm font-medium text-stone-700 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <span>Limited bridal availability this season — reserve your consultation this week.</span>
        <a href="#booking" className="font-semibold text-[#8b5e3c] hover:text-[#6f462b]">Book now</a>
      </div>
    </motion.section>
  );
};

export default PromotionBanner;

import { Gem, Sparkles } from "lucide-react";

const PackagesBrandStrip = () => {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-stone-200 bg-[#fdfaf7] px-6 py-10 text-center sm:px-10">
        <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b5e3c]">
          <Sparkles className="h-4 w-4" />
          Premium Bridal Craft
        </p>
        <p className="mt-4 text-base leading-7 text-stone-600">
          Every package is delivered with meticulous planning and polished
          execution to ensure your day feels as beautiful as it looks.
        </p>
        <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#8b5e3c]">
          <Gem className="h-4 w-4" />
          Signature quality, from first consultation to final reveal.
        </p>
      </div>
    </section>
  );
};

export default PackagesBrandStrip;

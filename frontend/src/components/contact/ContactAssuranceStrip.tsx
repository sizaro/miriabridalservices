import { ShieldCheck } from "lucide-react";

const ContactAssuranceStrip = () => {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-stone-200 bg-[#fdfaf7] px-6 py-10 text-center sm:px-10">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#8b5e3c]">
          <ShieldCheck className="h-4 w-4" />
          Transparent communication. Professional care. Reliable timelines.
        </p>
      </div>
    </section>
  );
};

export default ContactAssuranceStrip;

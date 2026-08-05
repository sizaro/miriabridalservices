import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const experts = [
  {
    name: "Miriam Johnson",
    role: "Lead Bridal Stylist",
    years: "10+ years",
    specialties: "Luxury bridal makeup, day-of coordination",
    certifications: "Certified Bridal Artist, Pro Skin Prep Specialist",
    bio: "Miriam leads the signature bridal experience with a calm, detail-first approach to elegant beauty.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Elena Roberts",
    role: "Senior Hair Artist",
    years: "8+ years",
    specialties: "Bridal updos, textured styling, veil architecture",
    certifications: "Advanced Styling Diploma",
    bio: "Elena creates movement-rich hairstyles that remain polished from first look to final dance.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Naomi Green",
    role: "Bridal Makeup Artist",
    years: "6+ years",
    specialties: "Soft glam, deep-tone artistry, camera-ready skin",
    certifications: "Complexion Excellence Certification",
    bio: "Naomi specializes in balanced complexion artistry tailored to each bride's natural features.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
];

const MeetBridalExpertsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55 }}
      className="bg-[#f7efe8] py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">
            Meet your bridal experts
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            A professional team committed to artistry, detail, and confidence.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {experts.map((expert, index) => (
            <motion.article
              key={expert.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-900">
                  {expert.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#8b5e3c]">
                  {expert.role}
                </p>
                <p className="mt-3 text-sm text-stone-700">
                  <span className="font-semibold text-stone-900">
                    Experience:
                  </span>{" "}
                  {expert.years}
                </p>
                <p className="mt-2 text-sm text-stone-700">
                  <span className="font-semibold text-stone-900">
                    Specialties:
                  </span>{" "}
                  {expert.specialties}
                </p>
                <p className="mt-2 text-sm text-stone-700">
                  <span className="font-semibold text-stone-900">
                    Certifications:
                  </span>{" "}
                  {expert.certifications}
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {expert.bio}
                </p>

                <div className="mt-5 flex items-center gap-3 text-stone-500">
                  <Sparkles className="h-4 w-4" />
                  <Mail className="h-4 w-4" />
                  <Link
                    to="/contact"
                    className="ml-auto inline-flex rounded-full border border-stone-300 px-3 py-1 text-xs font-semibold text-stone-700"
                  >
                    Profile Placeholder
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MeetBridalExpertsSection;

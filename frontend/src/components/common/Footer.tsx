import { Mail, MapPin, Phone, Sparkles, Camera, Users } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-stone-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c8a97e] text-stone-900">
                <Sparkles className="h-5 w-5" />
              </div>

              <h2 className="text-xl font-semibold">Miriam Bridal Services</h2>
            </div>

            <p className="mt-5 text-sm leading-7 text-stone-300">
              Creating timeless bridal experiences through elegant styling,
              personalized consultations, professional training, and beautiful
              wedding transformations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <ul className="mt-5 space-y-3 text-sm text-stone-300">
              <li>
                <a href="#home" className="transition hover:text-[#c8a97e]">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="transition hover:text-[#c8a97e]">
                  Services
                </a>
              </li>

              <li>
                <a href="#gallery" className="transition hover:text-[#c8a97e]">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#training" className="transition hover:text-[#c8a97e]">
                  Training Academy
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-[#c8a97e]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold">Our Services</h3>

            <ul className="mt-5 space-y-3 text-sm text-stone-300">
              <li>Bridal Makeup</li>

              <li>Wedding Styling</li>

              <li>Bridal Consultations</li>

              <li>Wedding Packages</li>

              <li>Professional Training</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>

            <div className="mt-5 space-y-4 text-sm text-stone-300">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-[#c8a97e]" />

                <span>Kampala, Uganda</span>
              </div>

              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-[#c8a97e]" />

                <span>+256 XXX XXX XXX</span>
              </div>

              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-[#c8a97e]" />

                <span>info@miriambridalservices.com</span>
              </div>
            </div>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="rounded-full border border-white/20 p-2 transition hover:bg-white/10"
              >
                <Users className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="rounded-full border border-white/20 p-2 transition hover:bg-white/10"
              >
                <Camera className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-stone-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} Miriam Bridal Services. All rights
              reserved.
            </p>
          </div>

          <p>
            Built and maintained by{" "}
            <a
              href="https://sizaforgetechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#c8a97e] transition hover:text-white"
            >
              SizaForge Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

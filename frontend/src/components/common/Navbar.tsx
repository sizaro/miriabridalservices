import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Packages", href: "/packages" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 text-stone-800"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#c8a97e] to-[#8b5e3c] font-semibold text-white">
              MBS
            </span>

            <span className="flex flex-col">
              <span className="text-base font-semibold">
                Miriam Bridal Services
              </span>

              <span className="text-sm text-stone-500">
                Elegant styling for every bride
              </span>
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Open menu"
            className="flex flex-col gap-1.5 rounded-md p-2 transition hover:bg-stone-100 md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <span className="h-0.5 w-6 bg-stone-800" />

            <span className="h-0.5 w-6 bg-stone-800" />

            <span className="h-0.5 w-6 bg-stone-800" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-semibold text-stone-700 transition hover:text-[#c8a97e]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-stone-900/40 transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed left-0 top-0 z-[70] flex h-full w-[80vw] max-w-[320px] flex-col bg-white p-5 shadow-[12px_0_30px_rgba(0,0,0,0.16)] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="mb-6 flex items-center justify-between border-b border-stone-200 pb-4">
          <span className="text-base font-semibold text-stone-900">Menu</span>

          <button
            type="button"
            aria-label="Close menu"
            className="text-2xl text-stone-600"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="border-b border-stone-100 py-3 text-base font-semibold text-stone-800 transition hover:text-[#c8a97e]"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiPackage } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#whyus" },
    { name: "Coverage", href: "#coverage" },
    { name: "Partner", href: "#partner" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/80 backdrop-blur-md shadow-lg shadow-black/20 py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-rose-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30 group-hover:scale-105 transition-transform">
            <FiPackage size={24} />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors">
            Wusool saree <span className="text-orange-500">delivery service</span>
          </h1>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-white hover:text-orange-400 transition-colors text-sm font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#partner"
            className="ml-4 px-6 py-2.5 rounded-full bg-white/10 text-white font-medium hover:bg-orange-500 transition-colors border border-white/10 hover:border-orange-500 text-sm shadow-lg hover:shadow-orange-500/25"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 shadow-2xl md:hidden flex flex-col items-center py-6 gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg text-slate-300 hover:text-orange-400 font-medium w-full text-center py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#partner"
              onClick={() => setOpen(false)}
              className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold shadow-lg shadow-orange-500/30 w-[80%] text-center"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
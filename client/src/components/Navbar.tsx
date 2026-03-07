import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScHRqJVI9TFfr4c_w9X7Bahh7q0BFkOy8_N2L8wkv1SQAeAuA/viewform?usp=sharing&ouid=115102210409702182625";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "COMPETITION", href: "#competition" },
  { label: "PRIZES", href: "#prizes" },
  { label: "TIMELINE", href: "#timeline" },
  { label: "CONTACT", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B0F19]/90 backdrop-blur-xl border-b border-purple-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="relative">
                <Zap
                  className="w-7 h-7 text-[#6A00FF]"
                  style={{ filter: "drop-shadow(0 0 8px rgba(106,0,255,0.8))" }}
                />
                <div className="absolute inset-0 animate-ping opacity-30">
                  <Zap className="w-7 h-7 text-[#6A00FF]" />
                </div>
              </div>
              <span
                className="font-orbitron font-bold text-lg text-white"
                style={{ textShadow: "0 0 20px rgba(106,0,255,0.6)" }}
              >
                BITCODE <span className="text-[#00E5FF]">V6.0</span>
              </span>
            </motion.div>

            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-gray-300 hover:text-[#00E5FF] transition-colors duration-200 font-grotesk text-xs font-bold tracking-widest relative group"
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00E5FF] group-hover:w-full transition-all duration-300" />
                </button>
              ))}
              <motion.a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                data-testid="nav-register-btn"
                className="px-5 py-2 rounded-md font-grotesk font-bold text-xs tracking-widest text-white border border-[#6A00FF] relative overflow-hidden group"
                style={{ boxShadow: "0 0 15px rgba(106,0,255,0.3)" }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#6A00FF] to-[#9333EA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">REGISTER NOW</span>
              </motion.a>
            </div>

            <button
              className="lg:hidden text-gray-300 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0B0F19]/95 backdrop-blur-xl border-b border-purple-500/20 py-6 px-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-gray-200 hover:text-[#00E5FF] font-grotesk text-sm font-bold tracking-widest text-left transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-5 py-3 rounded-md font-grotesk font-bold text-xs tracking-widest text-white bg-gradient-to-r from-[#6A00FF] to-[#9333EA] text-center"
            >
              REGISTER NOW
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

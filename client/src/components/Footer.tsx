import { motion } from "framer-motion";
import { Mail, Zap, MapPin, ExternalLink } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Competition", href: "#competition" },
  { label: "Prizes", href: "#prizes" },
  { label: "Timeline", href: "#timeline" },
  { label: "Judging", href: "#judging" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-10 px-4 border-t border-[#6A00FF]/15">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(106,0,255,0.05), transparent)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Zap
                className="w-7 h-7 text-[#6A00FF]"
                style={{ filter: "drop-shadow(0 0 8px rgba(106,0,255,0.8))" }}
              />
              <span
                className="font-orbitron font-bold text-xl text-white"
                style={{ textShadow: "0 0 20px rgba(106,0,255,0.5)" }}
              >
                BITCODE <span className="text-[#00E5FF]">V6.0</span>
              </span>
            </div>
            <p className="font-sans text-gray-400 text-sm leading-relaxed mb-4 max-w-xs">
              The premier inter-university coding competition where developers become wizards
              and code becomes magic. Organized by BITSA.
            </p>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#6A00FF]/20 text-xs font-grotesk font-medium"
              style={{ background: "rgba(106,0,255,0.08)", color: "#9333EA" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA] animate-pulse" />
              Magical Tech Universe Theme
            </div>
          </div>

          <div>
            <h4 className="font-grotesk font-bold text-white text-sm mb-5 uppercase tracking-widest">
              Navigate
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-sans text-gray-400 hover:text-[#00E5FF] transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <span
                      className="w-0 group-hover:w-3 h-[1px] bg-[#00E5FF] transition-all duration-300"
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-grotesk font-bold text-white text-sm mb-5 uppercase tracking-widest">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:bitsa@mgt.rjt.ac.lk"
                data-testid="footer-email"
                className="flex items-start gap-3 group"
              >
                <Mail className="w-4 h-4 text-[#6A00FF] mt-0.5 flex-shrink-0 group-hover:text-[#00E5FF] transition-colors" />
                <span className="font-sans text-gray-400 group-hover:text-[#00E5FF] transition-colors text-sm break-all">
                  bitsa@mgt.rjt.ac.lk
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#6A00FF] mt-0.5 flex-shrink-0" />
                <div className="font-sans text-gray-400 text-sm leading-relaxed">
                  <div className="text-gray-300 font-medium text-xs mb-1">BITSA</div>
                  <div>Department of Information Systems</div>
                  <div>Faculty of Management Studies</div>
                  <div>Rajarata University of Sri Lanka</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#6A00FF]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-gray-500 text-xs text-center sm:text-left">
            © 2025 BITSA · Department of Information Systems · Rajarata University of Sri Lanka
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:bitsa@mgt.rjt.ac.lk"
              className="flex items-center gap-1.5 font-sans text-gray-500 hover:text-[#6A00FF] transition-colors text-xs"
            >
              <ExternalLink className="w-3 h-3" />
              Contact Us
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <span
            className="font-orbitron text-xs text-transparent bg-clip-text opacity-30"
            style={{ backgroundImage: "linear-gradient(90deg, #6A00FF, #00E5FF, #6A00FF)" }}
          >
            DEBUG THE DARK · RISE WITH MAGIC · BITCODE V6.0
          </span>
        </motion.div>
      </div>
    </footer>
  );
}

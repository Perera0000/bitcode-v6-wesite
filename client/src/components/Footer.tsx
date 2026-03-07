import { motion } from "framer-motion";
import { Mail, Zap, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const REGISTER_URL =
  "https://forms.gle/t5rgVJw7FVczj8saA";

const footerLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "PRIZES", href: "#prizes" },
  { label: "TIMELINE", href: "#timeline" },
  { label: "CONTACT", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

type SocialIcon = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

interface Social {
  Icon: SocialIcon;
  label: string;
  href: string;
  hoverClass: string;
  glowStyle: string;
}

const socials: Social[] = [
  {
    Icon: FaFacebook as SocialIcon,
    label: "Facebook",
    href: "https://www.facebook.com/bitcoderusl",
    hoverClass: "hover:text-[#1877F2] hover:border-[#1877F2]/40",
    glowStyle: "0 0 16px rgba(24,119,242,0.5)",
  },
  {
    Icon: FaInstagram as SocialIcon,
    label: "Instagram",
    href: "https://www.instagram.com/bitsa_rusl?igsh=bTZwZzFkNWw4aXRl",
    hoverClass: "hover:text-[#E1306C] hover:border-[#E1306C]/40",
    glowStyle: "0 0 16px rgba(225,48,108,0.5)",
  },
  {
    Icon: FaYoutube as SocialIcon,
    label: "YouTube",
    href: "https://www.youtube.com/c/BITSA",
    hoverClass: "hover:text-[#FF0000] hover:border-[#FF0000]/40",
    glowStyle: "0 0 16px rgba(255,0,0,0.5)",
  },
  {
    Icon: FaLinkedin as SocialIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/bitsa-department-of-information-systems/posts/?feedView=all",
    hoverClass: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40",
    glowStyle: "0 0 16px rgba(10,102,194,0.5)",
  },
  {
    Icon: FaWhatsapp as SocialIcon,
    label: "WhatsApp",
    href: "https://whatsapp.com/channel/0029VanFP4BHrDZmg4GdJy2T",
    hoverClass: "hover:text-[#25D366] hover:border-[#25D366]/40",
    glowStyle: "0 0 16px rgba(37,211,102,0.5)",
  },
];

function SocialButton({ Icon, label, href, hoverClass }: Social) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      data-testid={`social-${label.toLowerCase()}`}
      whileHover={{ scale: 1.18, y: -2 }}
      whileTap={{ scale: 0.92 }}
      className={`w-9 h-9 rounded-xl flex items-center justify-center border border-white/8 text-gray-500 transition-all duration-300 ${hoverClass}`}
      style={{ background: "rgba(255,255,255,0.04)" }}
    >
      <Icon className="w-4 h-4" />
    </motion.a>
  );
}

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand + Social */}
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
            <p className="font-sans text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
              The premier inter-university coding competition where developers become wizards
              and code becomes magic. Organized by BITSA.
            </p>

            {/* Social Media Icons */}
            <div className="mb-5">
              <p className="font-grotesk text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                Follow Us
              </p>
              <div className="flex items-center flex-wrap gap-3">
                {socials.map((s) => (
                  <SocialButton key={s.label} {...s} />
                ))}
              </div>
            </div>

            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#6A00FF]/20 text-xs font-grotesk font-medium"
              style={{ background: "rgba(106,0,255,0.08)", color: "#9333EA" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA] animate-pulse" />
              Magical Tech Universe Theme
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-grotesk font-bold text-white text-xs mb-5 uppercase tracking-widest">
              Navigate
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-sans text-gray-400 hover:text-[#00E5FF] transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#00E5FF] transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-grotesk font-bold text-white text-xs mb-5 uppercase tracking-widest">
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

            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-register-btn"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-grotesk font-bold text-xs tracking-widest text-white relative overflow-hidden group transition-transform hover:scale-[1.03] active:scale-[0.97]"
              style={{
                background: "linear-gradient(135deg, #6A00FF, #9333EA)",
                boxShadow: "0 0 20px rgba(106,0,255,0.35)",
              }}
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <span className="relative">REGISTER NOW</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-[#6A00FF]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-gray-500 text-xs text-center sm:text-left">
            © 2025 BITSA · Department of Information Systems · Rajarata University of Sri Lanka
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-600 hover:text-gray-300 transition-colors duration-200"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
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

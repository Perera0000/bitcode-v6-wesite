import { motion } from "framer-motion";
import { Phone, Mail, User } from "lucide-react";

const contacts = [
  {
    name: "Mahesh Perera",
    phone: "0713457187",
    email: "mgt2022256@mgt.rjt.ac.lk",
    image: "/mahesh.png",
    color: "#6A00FF",
    colorRgb: "106,0,255",
    delay: 0,
  },
  {
    name: "Rashmi Layanvi",
    phone: "0715963424",
    email: "mgt2022068@mgt.rjt.ac.lk",
    image: "/rashmi.jpg",
    color: "#00E5FF",
    colorRgb: "0,229,255",
    delay: 0.12,
  },
  {
    name: "Sewwandi Senavirathna",
    phone: "0714900001",
    email: "mgt2022312@mgt.rjt.ac.lk",
    image: "/sewwandi.png",
    color: "#9333EA",
    colorRgb: "147,51,234",
    delay: 0.24,
  },
];

interface ContactCardProps {
  name: string;
  phone: string;
  email: string;
  image: string;
  color: string;
  colorRgb: string;
  delay: number;
  index: number;
}

function ContactCard({ name, phone, email, image, color, colorRgb, delay, index }: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      data-testid={`contact-card-${index}`}
      className="relative group rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        backdropFilter: "blur(16px)",
        border: `1px solid rgba(${colorRgb},0.18)`,
        transition: "box-shadow 0.4s ease, border-color 0.4s ease",
      }}
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `linear-gradient(145deg, rgba(${colorRgb},0.1) 0%, transparent 60%)`,
          boxShadow: `0 0 50px rgba(${colorRgb},0.2), 0 0 0 1px rgba(${colorRgb},0.3)`,
        }}
      />

      <div className="relative p-6 sm:p-8 flex flex-col items-center text-center">

        {/* ── Profile Image with animated ring ── */}
        <div className="relative mb-6 w-32 h-32 flex items-center justify-center">

          {/* Soft ambient glow behind the ring — always on, stronger on hover */}
          <div
            className="absolute inset-[-6px] rounded-full transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle, rgba(${colorRgb},0.25) 0%, transparent 70%)`,
              opacity: 0.6,
            }}
          />
          <div
            className="absolute inset-[-6px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle, rgba(${colorRgb},0.45) 0%, transparent 70%)`,
            }}
          />

          {/* Spinning conic-gradient ring — always spinning */}
          <div
            className="contact-ring-track absolute inset-[-3px] rounded-full"
            style={{
              background: `conic-gradient(from 0deg, ${color}, #00E5FF, #6A00FF, ${color})`,
            }}
          />

          {/* Blurred glow ring below the sharp ring */}
          <div
            className="contact-ring-glow absolute inset-[-4px] rounded-full"
            style={{
              background: `conic-gradient(from 0deg, ${color}, #00E5FF, ${color})`,
              filter: "blur(4px)",
              opacity: 0.55,
            }}
          />

          {/* Dark background mask — creates the "border" gap */}
          <div
            className="absolute inset-[3px] rounded-full"
            style={{ background: "#0F1120" }}
          />

          {/* Profile image */}
          <div className="absolute inset-[3px] rounded-full overflow-hidden z-10">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-[1.07]"
            />
          </div>

          {/* Online indicator dot */}
          <div
            data-testid={`contact-badge-${index}`}
            className="absolute bottom-1 right-1 z-20 w-5 h-5 rounded-full border-2 border-[#0B0F19] flex items-center justify-center"
            style={{ background: color, boxShadow: `0 0 10px ${color}` }}
          >
            <User className="w-2.5 h-2.5 text-white" />
          </div>
        </div>

        {/* ── Name — always fully visible ── */}
        <h3
          className="font-grotesk font-bold text-white text-lg leading-tight mb-0.5"
          style={{
            textShadow: "0 1px 3px rgba(0,0,0,0.8)",
          }}
        >
          {name}
        </h3>

        {/* Colored accent bar under name — expands on hover */}
        <div
          className="h-[2px] my-3 rounded-full transition-all duration-500"
          style={{
            width: "48px",
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          }}
        />

        {/* Contact links */}
        <div className="space-y-3 w-full">
          <a
            href={`tel:${phone}`}
            data-testid={`contact-phone-${index}`}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 group/link hover:scale-[1.02]"
            style={{
              background: `rgba(${colorRgb},0.07)`,
              border: `1px solid rgba(${colorRgb},0.15)`,
            }}
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: `rgba(${colorRgb},0.18)`,
                border: `1px solid rgba(${colorRgb},0.3)`,
              }}
            >
              <Phone className="w-3.5 h-3.5" style={{ color }} />
            </div>
            <span className="font-sans text-gray-200 text-sm group-hover/link:text-white transition-colors">
              {phone}
            </span>
          </a>

          <a
            href={`mailto:${email}`}
            data-testid={`contact-email-${index}`}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 group/link hover:scale-[1.02]"
            style={{
              background: `rgba(${colorRgb},0.07)`,
              border: `1px solid rgba(${colorRgb},0.15)`,
            }}
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: `rgba(${colorRgb},0.18)`,
                border: `1px solid rgba(${colorRgb},0.3)`,
              }}
            >
              <Mail className="w-3.5 h-3.5" style={{ color }} />
            </div>
            <span className="font-sans text-gray-200 text-xs break-all text-left group-hover/link:text-white transition-colors">
              {email}
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(ellipse, #6A00FF, #00E5FF, transparent)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-orbitron text-xs font-bold text-[#00E5FF] tracking-[0.3em] uppercase mb-4">
            Get in Touch
          </span>
          <h2
            className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl text-white"
            style={{ textShadow: "0 0 30px rgba(0,229,255,0.3)" }}
          >
            Contact{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #6A00FF, #00E5FF)" }}
            >
              Our Team
            </span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-[2px] w-24 bg-gradient-to-r from-[#6A00FF] to-[#00E5FF] rounded-full" />
          </div>
          <p className="mt-5 font-sans text-gray-400 text-sm sm:text-base max-w-lg mx-auto">
            Have questions about BITCODE V6.0? Our organizing team is ready to help you on your magical journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {contacts.map((person, i) => (
            <ContactCard key={i} {...person} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

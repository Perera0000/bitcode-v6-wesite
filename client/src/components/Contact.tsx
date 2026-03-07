import { motion } from "framer-motion";
import { Phone, Mail, User } from "lucide-react";

const contacts = [
  {
    name: "Mahesh Perera",
    phone: "0713457187",
    email: "mgt2022256@mgt.rjt.ac.lk",
    image: "/mahesh.png",
    color: "#6A00FF",
    delay: 0,
  },
  {
    name: "Rashmi Layanvi",
    phone: "0715963424",
    email: "mgt2022068@mgt.rjt.ac.lk",
    image: "/rashmi.jpg",
    color: "#00E5FF",
    delay: 0.12,
  },
  {
    name: "Sewwandi Senavirathna",
    phone: "0714900001",
    email: "mgt2022312@mgt.rjt.ac.lk",
    image: "/sewwandi.png",
    color: "#9333EA",
    delay: 0.24,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-4">
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
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: person.delay }}
              whileHover={{ y: -8 }}
              data-testid={`contact-card-${i}`}
              className="relative group rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(16px)",
                border: `1px solid ${person.color}25`,
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(145deg, ${person.color}12 0%, transparent 60%)`,
                  boxShadow: `inset 0 0 40px ${person.color}10`,
                }}
              />

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ boxShadow: `0 0 40px ${person.color}25, 0 0 0 1px ${person.color}35` }}
              />

              <div className="relative p-6 sm:p-7 flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md scale-110"
                    style={{ background: `${person.color}40` }}
                  />
                  <div
                    className="relative w-28 h-28 rounded-full overflow-hidden border-2 transition-all duration-500"
                    style={{
                      borderColor: `${person.color}40`,
                    }}
                  >
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                      style={{ background: `linear-gradient(to bottom, transparent 60%, ${person.color})` }}
                    />
                  </div>

                  <div
                    className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-[#0B0F19] flex items-center justify-center"
                    style={{ background: person.color, boxShadow: `0 0 10px ${person.color}` }}
                  >
                    <User className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>

                <h3
                  className="font-grotesk font-bold text-white text-lg mb-1 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                  style={{
                    backgroundImage: `linear-gradient(135deg, white, ${person.color})`,
                  }}
                >
                  {person.name}
                </h3>

                <div
                  className="w-12 h-[1px] my-3 rounded-full transition-all duration-500 group-hover:w-20"
                  style={{ background: `linear-gradient(90deg, transparent, ${person.color}, transparent)` }}
                />

                <div className="space-y-3 w-full mt-1">
                  <a
                    href={`tel:${person.phone}`}
                    data-testid={`contact-phone-${i}`}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 group/link"
                    style={{
                      background: `${person.color}08`,
                      border: `1px solid ${person.color}15`,
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                      style={{
                        background: `${person.color}20`,
                        border: `1px solid ${person.color}30`,
                      }}
                    >
                      <Phone
                        className="w-3.5 h-3.5"
                        style={{ color: person.color }}
                      />
                    </div>
                    <span className="font-sans text-gray-300 text-sm group-hover/link:text-white transition-colors">
                      {person.phone}
                    </span>
                  </a>

                  <a
                    href={`mailto:${person.email}`}
                    data-testid={`contact-email-${i}`}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 group/link"
                    style={{
                      background: `${person.color}08`,
                      border: `1px solid ${person.color}15`,
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                      style={{
                        background: `${person.color}20`,
                        border: `1px solid ${person.color}30`,
                      }}
                    >
                      <Mail
                        className="w-3.5 h-3.5"
                        style={{ color: person.color }}
                      />
                    </div>
                    <span className="font-sans text-gray-300 text-xs break-all text-left group-hover/link:text-white transition-colors">
                      {person.email}
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

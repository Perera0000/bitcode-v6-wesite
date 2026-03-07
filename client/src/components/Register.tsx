import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Users } from "lucide-react";

const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScHRqJVI9TFfr4c_w9X7Bahh7q0BFkOy8_N2L8wkv1SQAeAuA/viewform?usp=sharing&ouid=115102210409702182625";

export default function Register() {
  return (
    <section id="register" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(ellipse, rgba(106,0,255,0.2), rgba(0,229,255,0.08), transparent)" }}
        />
        <div
          className="absolute left-1/4 top-1/4 w-48 h-48 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(ellipse, #6A00FF, transparent)" }}
        />
        <div
          className="absolute right-1/4 bottom-1/4 w-48 h-48 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(ellipse, #00E5FF, transparent)" }}
        />

        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? "#6A00FF" : "#00E5FF",
              boxShadow: i % 2 === 0 ? "0 0 6px #6A00FF" : "0 0 6px #00E5FF",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex mb-6"
          >
            <Sparkles
              className="w-12 h-12"
              style={{ color: "#6A00FF", filter: "drop-shadow(0 0 15px rgba(106,0,255,0.8))" }}
            />
          </motion.div>

          <h2
            className="font-orbitron font-black text-3xl sm:text-4xl md:text-6xl text-white leading-tight"
            style={{ textShadow: "0 0 40px rgba(106,0,255,0.4)" }}
          >
            Join the{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #6A00FF, #9333EA, #00E5FF)" }}
            >
              Magical
            </span>
            <br />
            Coding Battle
          </h2>

          <p className="mt-6 font-sans text-gray-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Gather your team, sharpen your spells, and enter the arena. The most prestigious
            coding competition in Sri Lanka awaits your magic.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 font-sans text-sm">
              <Users className="w-4 h-4 text-[#6A00FF]" />
              <span>Team participation</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-600" />
            <div className="flex items-center gap-2 text-gray-400 font-sans text-sm">
              <Sparkles className="w-4 h-4 text-[#00E5FF]" />
              <span>Open to all universities</span>
            </div>
          </div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              data-testid="register-team-btn"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-orbitron font-bold text-base text-white relative overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #6A00FF, #9333EA, #6A00FF)",
                backgroundSize: "200% 100%",
                boxShadow: "0 0 40px rgba(106,0,255,0.5), 0 0 80px rgba(106,0,255,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <Sparkles className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Register Your Team</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <p className="mt-6 font-sans text-gray-500 text-xs">
            Registration opens March 10, 2025 · Closes March 21, 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid sm:grid-cols-3 gap-6"
        >
          {[
            { step: "01", title: "Form Your Team", desc: "Assemble your wizard crew and choose your coding spells." },
            { step: "02", title: "Register Online", desc: "Complete registration before March 21 to secure your spot." },
            { step: "03", title: "Enter the Arena", desc: "Take on the pre-selection, then battle in the final hackathon." },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-center p-5 rounded-xl border border-[#6A00FF]/15"
              style={{ background: "rgba(106,0,255,0.05)" }}
            >
              <div
                className="font-orbitron font-black text-3xl text-transparent bg-clip-text mb-3"
                style={{ backgroundImage: "linear-gradient(135deg, #6A00FF, #00E5FF)" }}
              >
                {s.step}
              </div>
              <h4 className="font-grotesk font-bold text-white text-sm mb-2">{s.title}</h4>
              <p className="font-sans text-gray-400 text-xs leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

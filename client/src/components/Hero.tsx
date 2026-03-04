import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

const floatingOrbs = [
  { size: 300, x: "10%", y: "20%", color: "rgba(106,0,255,0.12)", delay: 0 },
  { size: 400, x: "70%", y: "10%", color: "rgba(0,229,255,0.08)", delay: 1 },
  { size: 200, x: "80%", y: "60%", color: "rgba(147,51,234,0.15)", delay: 2 },
  { size: 250, x: "5%", y: "70%", color: "rgba(0,229,255,0.1)", delay: 0.5 },
];

const magicSpells = ["Debugging...", "Compiling...", "Deploying...", "Casting Spells..."];

export default function Hero() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" id="hero">
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 6 + orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6A00FF]/40 bg-[#6A00FF]/10 text-[#00E5FF] text-sm font-grotesk font-medium backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            BITSA Presents
            <Sparkles className="w-4 h-4" />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1
            className="font-orbitron font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none tracking-tighter"
            style={{
              textShadow: "0 0 40px rgba(106,0,255,0.5), 0 0 80px rgba(106,0,255,0.2)",
            }}
          >
            BIT
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #6A00FF 0%, #9333EA 40%, #00E5FF 100%)",
              }}
            >
              CODE
            </span>
          </h1>
          <div className="flex items-center justify-center gap-4 mt-2">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#6A00FF]" />
            <span
              className="font-orbitron font-bold text-2xl sm:text-3xl md:text-4xl text-[#00E5FF]"
              style={{ textShadow: "0 0 20px rgba(0,229,255,0.6)" }}
            >
              V6.0
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#00E5FF]" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 font-grotesk font-medium text-base sm:text-lg text-gray-400 uppercase tracking-[0.3em]"
        >
          Inter University Coding Competition
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8"
        >
          <h2
            className="font-grotesk font-bold text-2xl sm:text-3xl md:text-4xl text-white"
            style={{ textShadow: "0 0 30px rgba(147,51,234,0.5)" }}
          >
            Debug the Dark.{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #9333EA, #00E5FF)",
              }}
            >
              Rise with Magic.
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-4 font-sans text-gray-400 text-sm sm:text-base max-w-xl mx-auto"
        >
          Where coders become wizards and code becomes magic.
          Join the most prestigious coding battle in Sri Lanka.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNav("#register")}
            data-testid="hero-register-btn"
            className="relative px-8 py-4 rounded-md font-grotesk font-bold text-base text-white overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, #6A00FF, #9333EA)",
              boxShadow: "0 0 30px rgba(106,0,255,0.5), 0 0 60px rgba(106,0,255,0.2)",
            }}
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Register Now
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNav("#about")}
            data-testid="hero-explore-btn"
            className="px-8 py-4 rounded-md font-grotesk font-bold text-base text-white border border-[#00E5FF]/40 backdrop-blur-sm relative overflow-hidden group"
            style={{ boxShadow: "0 0 20px rgba(0,229,255,0.15)" }}
          >
            <span className="absolute inset-0 bg-[#00E5FF] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            <span
              className="relative"
              style={{ textShadow: "0 0 10px rgba(0,229,255,0.3)" }}
            >
              Explore Event
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { value: "LKR 130K", label: "Prize Pool" },
            { value: "18 Hrs", label: "Final Hackathon" },
            { value: "30 Qns", label: "Pre-Selection" },
            { value: "Multi-Uni", label: "Competition" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.1 }}
              className="flex flex-col items-center"
            >
              <span
                className="font-orbitron font-bold text-xl sm:text-2xl text-white"
                style={{ textShadow: "0 0 15px rgba(0,229,255,0.5)" }}
              >
                {stat.value}
              </span>
              <span className="font-sans text-xs text-gray-400 mt-1 tracking-widest uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => handleNav("#about")}
        data-testid="hero-scroll-indicator"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-[#00E5FF] transition-colors cursor-pointer"
      >
        <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0B0F19)",
        }}
      />
    </section>
  );
}

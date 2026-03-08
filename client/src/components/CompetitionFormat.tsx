import { motion } from "framer-motion";
import { Monitor, Building, Clock, HelpCircle, Video, Code } from "lucide-react";

const languages = ["Python", "C", "C++", "Java", "C#", "JavaScript", "PHP", "TypeScript", "VB.NET"];

const difficultyColors: Record<string, string> = {
  Easy: "#22c55e",
  Medium: "#f59e0b",
  Hard: "#ef4444",
  Expert: "#8b5cf6",
};

export default function CompetitionFormat() {
  return (
    <section id="competition" className="relative py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-8"
          style={{ background: "radial-gradient(ellipse, #6A00FF, transparent)" }}
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
            The Battle
          </span>
          <h2
            className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl text-white"
            style={{ textShadow: "0 0 30px rgba(0,229,255,0.3)" }}
          >
            Competition{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #6A00FF, #00E5FF)" }}
            >
              Format
            </span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-[2px] w-24 bg-gradient-to-r from-[#6A00FF] to-[#00E5FF] rounded-full" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            data-testid="format-preselection"
            className="relative p-8 rounded-2xl border border-[#6A00FF]/25 overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, rgba(106,0,255,0.1), rgba(106,0,255,0.03))",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
              style={{ background: "radial-gradient(ellipse, #6A00FF, transparent)" }} />

            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center border border-[#6A00FF]/30"
                style={{ background: "rgba(106,0,255,0.2)" }}
              >
                <Monitor className="w-7 h-7 text-[#6A00FF]" style={{ filter: "drop-shadow(0 0 8px #6A00FF)" }} />
              </div>
              <div>
                <div className="font-sans text-xs font-bold text-[#6A00FF] tracking-widest uppercase">Round 01</div>
                <h3 className="font-orbitron font-bold text-white text-xl">Pre-Selection Round</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Code className="w-4 h-4 text-[#6A00FF] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-grotesk font-medium text-white text-sm">Platform: </span>
                  <span className="font-sans text-gray-300 text-sm">HackerRank Online Contest</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#6A00FF] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-grotesk font-medium text-white text-sm">Duration: </span>
                  <span className="font-sans text-gray-300 text-sm">3 Hours</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HelpCircle className="w-4 h-4 text-[#6A00FF] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-grotesk font-medium text-white text-sm">Questions: </span>
                  <span className="font-sans text-gray-300 text-sm">30 Questions</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Video className="w-4 h-4 text-[#6A00FF] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-grotesk font-medium text-white text-sm">Supervision: </span>
                  <span className="font-sans text-gray-300 text-sm">Via Zoom</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#6A00FF]/15">
              <p className="font-sans text-xs text-gray-500 mb-3 uppercase tracking-widest">Difficulty Levels</p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(difficultyColors).map(([level, color]) => (
                  <span
                    key={level}
                    className="px-3 py-1 rounded-full text-xs font-grotesk font-medium"
                    style={{
                      color,
                      background: `${color}15`,
                      border: `1px solid ${color}30`,
                    }}
                  >
                    {level}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            data-testid="format-final"
            className="relative p-8 rounded-2xl border border-[#00E5FF]/25 overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, rgba(0,229,255,0.08), rgba(0,229,255,0.02))",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
              style={{ background: "radial-gradient(ellipse, #00E5FF, transparent)" }} />

            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center border border-[#00E5FF]/30"
                style={{ background: "rgba(0,229,255,0.15)" }}
              >
                <Building className="w-7 h-7 text-[#00E5FF]" style={{ filter: "drop-shadow(0 0 8px #00E5FF)" }} />
              </div>
              <div>
                <div className="font-sans text-xs font-bold text-[#00E5FF] tracking-widest uppercase">Round 02</div>
                <h3 className="font-orbitron font-bold text-white text-xl">Final Hackathon</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#00E5FF] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-grotesk font-medium text-white text-sm">Duration: </span>
                  <span className="font-sans text-gray-300 text-sm">18 Hours Non-Stop</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building className="w-4 h-4 text-[#00E5FF] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-grotesk font-medium text-white text-sm">Venue: </span>
                  <span className="font-sans text-gray-300 text-sm">Rajarata University of Sri Lanka</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-5 rounded-xl border border-[#00E5FF]/15"
              style={{ background: "rgba(0,229,255,0.05)" }}>
              <p className="font-grotesk font-medium text-white text-sm mb-2">Challenge Format</p>
              <p className="font-sans text-gray-400 text-sm leading-relaxed">
                Teams build a <span className="text-[#00E5FF]">functional solution</span> to a real-world problem
                and present their work to an expert panel of industry judges. Innovation, technical quality,
                and impact are key evaluation criteria.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative p-8 rounded-2xl border border-[#9333EA]/20"
          style={{ background: "linear-gradient(135deg, rgba(147,51,234,0.08), transparent)" }}
        >
          <h3 className="font-orbitron font-bold text-white text-lg mb-6 text-center">
            Supported{" "}
            <span className="text-[#9333EA]" style={{ textShadow: "0 0 15px rgba(147,51,234,0.5)" }}>
              Spell Languages
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((lang, i) => (
              <motion.span
                key={lang}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.1 }}
                data-testid={`language-tag-${lang}`}
                className="px-4 py-2 rounded-lg text-sm font-grotesk font-semibold text-white border border-[#9333EA]/25 cursor-default"
                style={{
                  background: "rgba(147,51,234,0.12)",
                  boxShadow: "0 0 10px rgba(147,51,234,0.08)",
                }}
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

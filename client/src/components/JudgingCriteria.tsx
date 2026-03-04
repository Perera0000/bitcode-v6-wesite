import { motion } from "framer-motion";
import { Lightbulb, Globe, Code, Mic } from "lucide-react";

const criteria = [
  {
    icon: Lightbulb,
    title: "Innovation & Originality",
    percent: 30,
    desc: "How creative and unique is your solution? Does it break new ground?",
    color: "#6A00FF",
    gradient: "linear-gradient(90deg, #6A00FF, #9333EA)",
  },
  {
    icon: Globe,
    title: "Real World Impact",
    percent: 30,
    desc: "Does your solution address a genuine problem with meaningful impact?",
    color: "#00E5FF",
    gradient: "linear-gradient(90deg, #00E5FF, #0EA5E9)",
  },
  {
    icon: Code,
    title: "Technical Quality",
    percent: 20,
    desc: "Is the code clean, efficient, and well-structured? Is the solution robust?",
    color: "#9333EA",
    gradient: "linear-gradient(90deg, #9333EA, #7C3AED)",
  },
  {
    icon: Mic,
    title: "Presentation",
    percent: 20,
    desc: "How well does the team communicate and demonstrate their solution?",
    color: "#8B5CF6",
    gradient: "linear-gradient(90deg, #8B5CF6, #6A00FF)",
  },
];

export default function JudgingCriteria() {
  return (
    <section id="judging" className="relative py-28 px-4">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[300px] blur-3xl opacity-10"
          style={{ background: "radial-gradient(ellipse, #9333EA, transparent)" }}
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
          <span className="inline-block font-orbitron text-xs font-bold text-[#8B5CF6] tracking-[0.3em] uppercase mb-4">
            The Verdict
          </span>
          <h2
            className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl text-white"
            style={{ textShadow: "0 0 30px rgba(139,92,246,0.4)" }}
          >
            Judging{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #6A00FF, #8B5CF6, #00E5FF)" }}
            >
              Criteria
            </span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-[2px] w-24 bg-gradient-to-r from-[#6A00FF] to-[#8B5CF6] rounded-full" />
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {criteria.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              data-testid={`judging-criteria-${i}`}
              className="relative p-6 rounded-xl border group cursor-default"
              style={{
                background: `linear-gradient(135deg, ${c.color}10, transparent)`,
                borderColor: `${c.color}25`,
              }}
            >
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${c.color}15, transparent)` }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: `${c.color}20`,
                        border: `1px solid ${c.color}30`,
                        boxShadow: `0 0 15px ${c.color}20`,
                      }}
                    >
                      <c.icon
                        className="w-5 h-5"
                        style={{ color: c.color, filter: `drop-shadow(0 0 5px ${c.color})` }}
                      />
                    </div>
                    <h3 className="font-grotesk font-bold text-white text-sm sm:text-base">{c.title}</h3>
                  </div>
                  <div
                    className="font-orbitron font-black text-2xl"
                    style={{ color: c.color, textShadow: `0 0 15px ${c.color}` }}
                  >
                    {c.percent}%
                  </div>
                </div>

                <p className="font-sans text-gray-400 text-sm leading-relaxed mb-4">{c.desc}</p>

                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${c.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{
                      background: c.gradient,
                      boxShadow: `0 0 10px ${c.color}50`,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative p-6 sm:p-8 rounded-2xl border border-[#6A00FF]/20 overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(106,0,255,0.08), rgba(0,229,255,0.04))" }}
        >
          <div className="flex flex-wrap items-center justify-center gap-6">
            {criteria.map((c, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div
                  className="w-16 h-16 rounded-full border-4 flex items-center justify-center"
                  style={{
                    borderColor: c.color,
                    background: `${c.color}15`,
                    boxShadow: `0 0 20px ${c.color}30`,
                  }}
                >
                  <span
                    className="font-orbitron font-black text-base"
                    style={{ color: c.color }}
                  >
                    {c.percent}%
                  </span>
                </div>
                <span className="font-sans text-xs text-gray-400 text-center max-w-20">
                  {c.title.split(" ")[0]}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="font-sans text-gray-400 text-sm">
              All criteria are evaluated by industry professionals and academic experts
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

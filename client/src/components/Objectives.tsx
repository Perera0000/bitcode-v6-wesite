import { motion } from "framer-motion";
import { Code, Lightbulb, Target, Trophy, Network } from "lucide-react";

const objectives = [
  {
    icon: Code,
    title: "Demonstrate Skills",
    desc: "Showcase your coding and analytical abilities through challenging problems.",
    color: "#6A00FF",
    delay: 0,
  },
  {
    icon: Lightbulb,
    title: "Encourage Innovation",
    desc: "Foster creative thinking and teamwork to build impactful solutions.",
    color: "#9333EA",
    delay: 0.1,
  },
  {
    icon: Target,
    title: "Solve Real Problems",
    desc: "Apply technology to tackle meaningful real-world challenges.",
    color: "#00E5FF",
    delay: 0.2,
  },
  {
    icon: Trophy,
    title: "Competitive Spirit",
    desc: "Enhance competitive programming ability at the inter-university level.",
    color: "#6A00FF",
    delay: 0.3,
  },
  {
    icon: Network,
    title: "Industry Network",
    desc: "Build lasting connections with industry professionals and mentors.",
    color: "#9333EA",
    delay: 0.4,
  },
];

export default function Objectives() {
  return (
    <section id="objectives" className="relative py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(ellipse, #00E5FF, transparent)" }}
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
          <span className="inline-block font-orbitron text-xs font-bold text-[#6A00FF] tracking-[0.3em] uppercase mb-4">
            Our Mission
          </span>
          <h2
            className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl text-white"
            style={{ textShadow: "0 0 30px rgba(106,0,255,0.4)" }}
          >
            Competition{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #9333EA, #00E5FF)" }}
            >
              Objectives
            </span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-[2px] w-24 bg-gradient-to-r from-[#9333EA] to-[#00E5FF] rounded-full" />
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: obj.delay }}
              whileHover={{ y: -6, scale: 1.02 }}
              data-testid={`objective-card-${i}`}
              className="relative p-6 rounded-xl border group cursor-default"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                borderColor: `${obj.color}25`,
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-400"
                style={{
                  background: `linear-gradient(135deg, ${obj.color}12, transparent)`,
                  boxShadow: `0 0 30px ${obj.color}15`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${obj.color}25, ${obj.color}10)`,
                    border: `1px solid ${obj.color}30`,
                  }}
                >
                  <obj.icon
                    className="w-7 h-7 relative z-10"
                    style={{ color: obj.color, filter: `drop-shadow(0 0 8px ${obj.color})` }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `${obj.color}15` }}
                  />
                </div>

                <div
                  className="font-sans text-xs font-bold tracking-widest uppercase mb-2"
                  style={{ color: obj.color }}
                >
                  Objective {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-grotesk font-bold text-white text-lg mb-3">{obj.title}</h3>
                <p className="font-sans text-gray-400 text-sm leading-relaxed">{obj.desc}</p>

                <div
                  className="mt-5 h-[1px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${obj.color}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative p-6 rounded-xl border border-dashed border-[#6A00FF]/20 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(106,0,255,0.04), transparent)",
            }}
          >
            <div className="text-center">
              <div
                className="font-orbitron font-black text-4xl text-transparent bg-clip-text mb-2"
                style={{ backgroundImage: "linear-gradient(135deg, #6A00FF, #00E5FF)" }}
              >
                MAGIC
              </div>
              <p className="font-sans text-gray-400 text-sm">Where code meets wizardry</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

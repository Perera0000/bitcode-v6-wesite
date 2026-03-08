import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Users, Globe } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    desc: "Promoting logical thinking and programming expertise among university students across Sri Lanka.",
    color: "#6A00FF",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    desc: "Encouraging innovation and teamwork to solve complex real-world problems together.",
    color: "#00E5FF",
  },
  {
    icon: Globe,
    title: "Industry Connections",
    desc: "Building meaningful connections between students and industry professionals.",
    color: "#9333EA",
  },
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(ellipse, #6A00FF, transparent)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block font-orbitron text-xs font-bold text-[#00E5FF] tracking-[0.3em] uppercase mb-4">
            About the Competition
          </span>
          <h2
            className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl text-white"
            style={{ textShadow: "0 0 30px rgba(106,0,255,0.4)" }}
          >
            What is{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #6A00FF, #00E5FF)" }}
            >
              BITCODE?
            </span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-[2px] w-24 bg-gradient-to-r from-[#6A00FF] to-[#00E5FF] rounded-full" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedSection>
            <div
              className="relative p-8 rounded-xl border border-[#6A00FF]/20"
              style={{
                background: "linear-gradient(135deg, rgba(106,0,255,0.08) 0%, rgba(0,229,255,0.04) 100%)",
                boxShadow: "0 8px 32px rgba(106,0,255,0.12), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <div
                className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#6A00FF] rounded-tl-md"
              />
              <div
                className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#00E5FF] rounded-br-md"
              />
              <p className="font-sans text-gray-300 text-base sm:text-lg leading-relaxed">
                BITCODE is a{" "}
                <span className="text-[#00E5FF] font-medium">prestigious annual coding competition</span>{" "}
                organized by the Business Information Technology Students' Association (BITSA) of the Department
                of Information Systems, Faculty of Management Studies at{" "}
                <span className="text-[#9333EA] font-medium">Rajarata University of Sri Lanka</span>.
              </p>
              <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed mt-4">
                The competition promotes logical thinking, programming expertise, and problem-solving skills
                among university students — transforming developers into digital wizards who wield code as magic.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative aspect-square max-w-sm mx-auto">
              <div
                className="absolute inset-0 rounded-full opacity-20 blur-3xl"
                style={{ background: "radial-gradient(ellipse, #6A00FF, #00E5FF, transparent)" }}
              />
              <div
                className="relative w-full h-full rounded-2xl border border-[#6A00FF]/30 flex items-center justify-center overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(106,0,255,0.1), rgba(0,229,255,0.05))",
                }}
              >
                <div className="text-center p-8">
                  <div
                    className="font-orbitron font-black text-6xl sm:text-7xl text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(135deg, #6A00FF, #9333EA, #00E5FF)" }}
                  >
                    VI
                  </div>
                  <div className="mt-2 font-orbitron text-lg text-white">
                    6th Edition
                  </div>
                  <div className="mt-4 font-sans text-xs text-gray-400 tracking-widest uppercase">
                    Magical Tech Universe
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {["Python", "Java", "C++"].map((lang) => (
                      <div
                        key={lang}
                        className="px-2 py-1 rounded-md text-xs font-grotesk font-medium text-[#00E5FF] border border-[#00E5FF]/20"
                        style={{ background: "rgba(0,229,255,0.05)" }}
                      >
                        {lang}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-[#6A00FF] animate-pulse" style={{ animationDelay: "1s" }} />
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              data-testid={`about-pillar-${i}`}
              className="relative p-6 rounded-xl border cursor-default group"
              style={{
                background: `linear-gradient(135deg, ${pillar.color}10 0%, transparent 100%)`,
                borderColor: `${pillar.color}30`,
              }}
            >
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${pillar.color}15, transparent)` }}
              />
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{
                  background: `${pillar.color}20`,
                  border: `1px solid ${pillar.color}40`,
                  boxShadow: `0 0 20px ${pillar.color}30`,
                }}
              >
                <pillar.icon
                  className="w-6 h-6"
                  style={{ color: pillar.color, filter: `drop-shadow(0 0 6px ${pillar.color})` }}
                />
              </div>
              <h3 className="font-grotesk font-bold text-white text-base mb-2">{pillar.title}</h3>
              <p className="font-sans text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

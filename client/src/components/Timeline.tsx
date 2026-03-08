import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";

const events = [
  {
    date: "March 10",
    title: "Registration Opens",
    desc: "The gates of the magical coding battle open. Register your team and begin your journey.",
    status: "upcoming",
    color: "#6A00FF",
    icon: "🗝️",
  },
  {
    date: "March 21",
    title: "Registration Closes",
    desc: "Last chance to enter the arena. All teams must be registered before the portal closes.",
    status: "upcoming",
    color: "#9333EA",
    icon: "⏰",
  },
  {
    date: "March 26",
    title: "Pre-Selection Round",
    desc: "3-hour online coding contest on HackerRank. 30 spell-like problems await. Supervised via Zoom.",
    status: "upcoming",
    color: "#7C3AED",
    icon: "💻",
  },
  {
    date: "March 28",
    title: "Finalists Announcement",
    desc: "The chosen wizards are revealed. Top teams advance to the final magical hackathon.",
    status: "upcoming",
    color: "#00E5FF",
    icon: "⚡",
  },
  {
    date: "April 02",
    title: "Final Hackathon",
    desc: "6-hour physical hackathon at Rajarata University. Build your masterpiece and claim the throne.",
    status: "upcoming",
    color: "#0EA5E9",
    icon: "🏆",
  },
  {
    date: "April 02",
    title: "Award Ceremony",
    desc: "The greatest wizards of BITCODE V6.0 are crowned. Prizes, glory, and legend await.",
    status: "upcoming",
    color: "#FFD700",
    icon: "🎖️",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute right-0 top-0 w-96 h-96 rounded-full blur-3xl opacity-8"
          style={{ background: "radial-gradient(ellipse, rgba(0,229,255,0.15), transparent)" }}
        />
        <div
          className="absolute left-0 bottom-0 w-96 h-96 rounded-full blur-3xl opacity-8"
          style={{ background: "radial-gradient(ellipse, rgba(106,0,255,0.15), transparent)" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-orbitron text-xs font-bold text-[#9333EA] tracking-[0.3em] uppercase mb-4">
            The Journey
          </span>
          <h2
            className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl text-white"
            style={{ textShadow: "0 0 30px rgba(147,51,234,0.4)" }}
          >
            Event{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #6A00FF, #9333EA, #00E5FF)" }}
            >
              Timeline
            </span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-[2px] w-24 bg-gradient-to-r from-[#6A00FF] to-[#9333EA] rounded-full" />
          </div>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-[1px] sm:-translate-x-1/2"
            style={{
              background: "linear-gradient(to bottom, transparent, #6A00FF, #9333EA, #00E5FF, transparent)",
            }}
          />

          <div className="space-y-8">
            {events.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  data-testid={`timeline-event-${i}`}
                  className={`relative flex items-center gap-6 sm:gap-0 ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                >
                  <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="w-4 h-4 rounded-full border-2 border-white"
                      style={{
                        background: event.color,
                        boxShadow: `0 0 15px ${event.color}, 0 0 30px ${event.color}50`,
                      }}
                    />
                  </div>

                  <div className={`w-full pl-16 sm:pl-0 sm:w-5/12 ${isLeft ? "sm:pr-10 sm:text-right" : "sm:pl-10"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="relative p-5 rounded-xl border group cursor-default"
                      style={{
                        background: `linear-gradient(135deg, ${event.color}10, transparent)`,
                        borderColor: `${event.color}25`,
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `linear-gradient(135deg, ${event.color}15, transparent)` }}
                      />

                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? "sm:justify-end" : ""}`}>
                        <Calendar className="w-3 h-3" style={{ color: event.color }} />
                        <span
                          className="font-orbitron font-bold text-xs"
                          style={{ color: event.color, textShadow: `0 0 10px ${event.color}` }}
                        >
                          {event.date}
                        </span>
                      </div>
                      <h3 className="font-grotesk font-bold text-white text-base mb-1 relative z-10">
                        {event.title}
                      </h3>
                      <p className="font-sans text-gray-400 text-xs leading-relaxed relative z-10">
                        {event.desc}
                      </p>

                      <ChevronRight
                        className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${isLeft ? "hidden sm:block -right-6" : "hidden sm:block -left-6 rotate-180"
                          }`}
                        style={{ color: event.color }}
                      />
                    </motion.div>
                  </div>

                  <div className="hidden sm:block sm:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

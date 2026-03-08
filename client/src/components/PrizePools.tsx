import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star } from "lucide-react";

const topPrizes = [
  {
    place: "1st",
    amount: "LKR 50,000",
    icon: Trophy,
    color: "#FFD700",
    gradient: "linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,215,0,0.05))",
    border: "rgba(255,215,0,0.3)",
    glow: "rgba(255,215,0,0.3)",
    size: "lg",
    delay: 0.1,
  },
  {
    place: "2nd",
    amount: "LKR 30,000",
    icon: Medal,
    color: "#C0C0C0",
    gradient: "linear-gradient(135deg, rgba(192,192,192,0.15), rgba(192,192,192,0.03))",
    border: "rgba(192,192,192,0.25)",
    glow: "rgba(192,192,192,0.2)",
    size: "md",
    delay: 0,
  },
  {
    place: "3rd",
    amount: "LKR 15,000",
    icon: Award,
    color: "#CD7F32",
    gradient: "linear-gradient(135deg, rgba(205,127,50,0.15), rgba(205,127,50,0.03))",
    border: "rgba(205,127,50,0.25)",
    glow: "rgba(205,127,50,0.2)",
    size: "sm",
    delay: 0.2,
  },
];

export default function PrizePools() {
  return (
    <section id="prizes" className="relative py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-3xl opacity-8"
          style={{ background: "radial-gradient(ellipse, rgba(255,215,0,0.15), transparent)" }}
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
          <span className="inline-block font-orbitron text-xs font-bold text-[#FFD700] tracking-[0.3em] uppercase mb-4">
            The Reward
          </span>
          <h2
            className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl text-white"
            style={{ textShadow: "0 0 30px rgba(255,215,0,0.2)" }}
          >
            Prize{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FFD700, #FFA500)" }}
            >
              Pool
            </span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-[2px] w-24 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6"
          >
            <span className="font-grotesk text-gray-400 text-sm">Total Prize Pool</span>
            <div
              className="font-orbitron font-black text-4xl sm:text-5xl text-transparent bg-clip-text mt-1"
              style={{ backgroundImage: "linear-gradient(135deg, #FFD700, #FFA500, #FFD700)" }}
            >
              LKR 130,000
            </div>
          </motion.div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-6 mb-12">
          {[topPrizes[1], topPrizes[0], topPrizes[2]].map((prize, idx) => {
            const heights = ["h-52", "h-64", "h-44"];
            const isFirst = prize.place === "1st";
            return (
              <motion.div
                key={prize.place}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: prize.delay }}
                whileHover={{ y: -8 }}
                data-testid={`prize-${prize.place}`}
                className={`relative flex flex-col items-center justify-end p-6 rounded-2xl border w-full md:w-56 ${heights[idx]} cursor-default group`}
                style={{
                  background: prize.gradient,
                  borderColor: prize.border,
                  boxShadow: isFirst ? `0 0 40px ${prize.glow}, 0 0 80px rgba(255,215,0,0.08)` : `0 0 20px ${prize.glow}`,
                }}
              >
                {isFirst && (
                  <motion.div
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Star
                      className="w-8 h-8 fill-current"
                      style={{ color: "#FFD700", filter: "drop-shadow(0 0 8px #FFD700)" }}
                    />
                  </motion.div>
                )}

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `radial-gradient(ellipse at center, ${prize.glow} 0%, transparent 70%)` }} />

                <prize.icon
                  className="w-10 h-10 mb-4 relative z-10"
                  style={{ color: prize.color, filter: `drop-shadow(0 0 12px ${prize.color})` }}
                />
                <div
                  className="font-orbitron font-black text-3xl sm:text-4xl relative z-10"
                  style={{ color: prize.color, textShadow: `0 0 20px ${prize.color}` }}
                >
                  {prize.place}
                </div>
                <div
                  className="font-grotesk font-bold text-lg sm:text-xl text-white mt-2 relative z-10"
                  style={{ textShadow: `0 0 10px ${prize.color}` }}
                >
                  {prize.amount}
                </div>
                <div className="font-sans text-xs text-gray-400 mt-1 tracking-widest uppercase relative z-10">
                  Place
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative p-8 rounded-2xl border border-[#6A00FF]/20"
          style={{
            background: "linear-gradient(135deg, rgba(106,0,255,0.08), rgba(147,51,234,0.04))",
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-grotesk font-bold text-white text-xl mb-1">4th – 10th Place</h3>
              <p className="font-sans text-gray-400 text-sm">Top teams receive consolation prizes</p>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="font-orbitron font-bold text-2xl text-[#9333EA]"
                style={{ textShadow: "0 0 15px rgba(147,51,234,0.5)" }}
              >
                LKR 5,000
              </div>
              <div className="font-sans text-gray-400 text-sm">each team</div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-[#6A00FF]/15">
            <div className="grid grid-cols-7 gap-2">
              {[4, 5, 6, 7, 8, 9, 10].map((place) => (
                <motion.div
                  key={place}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (place - 4) * 0.07 }}
                  className="flex flex-col items-center gap-1 p-2 rounded-lg border border-[#9333EA]/15"
                  style={{ background: "rgba(147,51,234,0.06)" }}
                >
                  <span className="font-orbitron font-bold text-xs text-[#9333EA]">{place}</span>
                  <span className="font-sans text-xs text-gray-500">th</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What is BITCODE V6.0?",
    a: "BITCODE V6.0 is an inter university coding competition organized by the Business Information Technology Students' Association of Rajarata University. The event challenges university students to solve programming problems and develop innovative solutions through competitive coding and hackathon style challenges.",
  },
  {
    q: "Who can participate?",
    a: "Students currently enrolled in recognized government universities in Sri Lanka can participate. Each team must consist of three members including one team leader.",
  },
  {
    q: "What are the competition tracks?",
    a: "The competition includes programming challenges focusing on algorithms, data structures, and problem solving. Participants can use languages such as Python, Java, C, C++, JavaScript, and others supported by the HackerRank platform.",
  },
  {
    q: "How does the competition progress?",
    a: "The competition begins with an online Pre Selection Round where teams solve coding challenges. The top teams qualify for the Final Round which is an 18 hour physical hackathon held at Rajarata University.",
  },
  {
    q: "When do registrations open?",
    a: "Registrations open on March 10 and close on March 21. Teams must complete the official registration form before the deadline.",
  },
  {
    q: "Is there a registration fee?",
    a: "No. Participation in BITCODE V6.0 is completely free for all eligible university teams.",
  },
  {
    q: "What do winners receive?",
    a: "Winners receive cash prizes, certificates, and recognition for their technical achievements. The total prize pool is LKR 130,000.",
  },
];

function FAQItem({ item, index, isOpen, onToggle }: {
  item: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const accent = index % 3 === 0 ? "#6A00FF" : index % 3 === 1 ? "#00E5FF" : "#9333EA";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      data-testid={`faq-item-${index}`}
      className="relative rounded-xl overflow-hidden"
      style={{
        background: isOpen
          ? `linear-gradient(135deg, ${accent}10, rgba(255,255,255,0.03))`
          : "rgba(255,255,255,0.03)",
        border: `1px solid ${isOpen ? accent + "35" : "rgba(255,255,255,0.07)"}`,
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      {isOpen && (
        <div
          className="absolute left-0 top-0 bottom-0 w-[2px] rounded-l-xl"
          style={{ background: `linear-gradient(to bottom, ${accent}, transparent)` }}
        />
      )}

      <button
        onClick={onToggle}
        data-testid={`faq-toggle-${index}`}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left group"
      >
        <div className="flex items-center gap-4 min-w-0">
          <div
            className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300"
            style={{
              background: isOpen ? `${accent}20` : "rgba(255,255,255,0.05)",
              border: `1px solid ${isOpen ? accent + "40" : "rgba(255,255,255,0.08)"}`,
            }}
          >
            <HelpCircle
              className="w-4 h-4 transition-colors duration-300"
              style={{ color: isOpen ? accent : "rgba(255,255,255,0.4)" }}
            />
          </div>
          <span
            className="font-grotesk font-semibold text-sm sm:text-base transition-colors duration-300"
            style={{ color: isOpen ? "white" : "rgba(255,255,255,0.8)" }}
          >
            {item.q}
          </span>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: isOpen ? `${accent}20` : "rgba(255,255,255,0.05)",
            border: `1px solid ${isOpen ? accent + "40" : "rgba(255,255,255,0.08)"}`,
            transition: "background 0.3s, border-color 0.3s",
          }}
        >
          <ChevronDown
            className="w-4 h-4 transition-colors duration-300"
            style={{ color: isOpen ? accent : "rgba(255,255,255,0.5)" }}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 pl-[4.5rem]">
              <p className="font-sans text-gray-400 text-sm leading-relaxed">
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="relative py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute right-0 top-1/3 w-80 h-80 rounded-full blur-3xl opacity-8"
          style={{ background: "radial-gradient(ellipse, rgba(106,0,255,0.2), transparent)" }}
        />
        <div
          className="absolute left-0 bottom-1/3 w-80 h-80 rounded-full blur-3xl opacity-8"
          style={{ background: "radial-gradient(ellipse, rgba(0,229,255,0.15), transparent)" }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-orbitron text-xs font-bold text-[#9333EA] tracking-[0.3em] uppercase mb-4">
            Got Questions?
          </span>
          <h2
            className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl text-white"
            style={{ textShadow: "0 0 30px rgba(147,51,234,0.4)" }}
          >
            Frequently{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #9333EA, #00E5FF)" }}
            >
              Asked
            </span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-[2px] w-24 bg-gradient-to-r from-[#9333EA] to-[#00E5FF] rounded-full" />
          </div>
          <p className="mt-5 font-sans text-gray-400 text-sm sm:text-base max-w-md mx-auto">
            Everything you need to know before entering the magical coding arena.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="font-sans text-gray-500 text-sm">
            Still have questions?{" "}
            <a
              href="mailto:bitsa@mgt.rjt.ac.lk"
              className="font-medium transition-colors duration-200"
              style={{ color: "#00E5FF" }}
            >
              Contact us directly
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

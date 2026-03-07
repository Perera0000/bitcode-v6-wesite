import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";

interface Slide {
  src: string;
  caption: string;
}

const slides: Slide[] = [
  { src: "/past-event-1.jpg", caption: "BITCODE V5.0 — Opening Night" },
  { src: "/past-event-2.jpg", caption: "Teams Deep in the Code" },
  { src: "/past-event-3.jpg", caption: "Problem Solving Under Pressure" },
  { src: "/past-event-4.jpg", caption: "Champions Crowned — LKR 50,000" },
  { src: "/past-event-5.jpg", caption: "BITCODE V5.0 — Runner-Up Awards" },
  { src: "/past-event-6.jpg", caption: "Collaboration in Action" },
  { src: "/past-event-7.jpg", caption: "The Competition Heats Up" },
];

const AUTOPLAY_DELAY = 3500;

export default function PastEvent() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragStartX = useRef(0);

  const go = useCallback(
    (next: number, dir?: number) => {
      const d = dir ?? (next > current ? 1 : -1);
      setDirection(d);
      setCurrent((next + slides.length) % slides.length);
    },
    [current]
  );

  const prev = useCallback(() => go(current - 1, -1), [current, go]);
  const next = useCallback(() => go(current + 1, 1), [current, go]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => go(current + 1, 1), AUTOPLAY_DELAY);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current, paused, go]);

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, ease: [0.32, 0.72, 0, 1] },
    },
    exit: (d: number) => ({
      x: d > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.45, ease: [0.32, 0.72, 0, 1] },
    }),
  };

  return (
    <section id="past-event" className="relative py-24 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(ellipse, #6A00FF, #00E5FF, transparent)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00E5FF]/20 mb-6"
            style={{ background: "rgba(0,229,255,0.06)" }}>
            <Images className="w-4 h-4 text-[#00E5FF]" />
            <span className="font-grotesk text-xs font-bold text-[#00E5FF] uppercase tracking-widest">Gallery</span>
          </div>

          <h2
            className="font-orbitron font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight"
            style={{ textShadow: "0 0 40px rgba(106,0,255,0.3)" }}
          >
            PAST{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #6A00FF, #9333EA, #00E5FF)" }}
            >
              EVENT
            </span>
          </h2>

          <p className="mt-4 font-sans text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
            Take a look at highlights from previous BITCODE coding competitions.
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Main image frame */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 0 0 1px rgba(106,0,255,0.2), 0 0 60px rgba(106,0,255,0.15), 0 0 120px rgba(0,229,255,0.05)",
              background: "rgba(11,15,25,0.8)",
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Aspect ratio box */}
            <div className="relative w-full" style={{ paddingBottom: "52%" }}>
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.08}
                  onDragStart={(_, info) => {
                    dragStartX.current = info.point.x;
                    setPaused(true);
                  }}
                  onDragEnd={(_, info) => {
                    const diff = dragStartX.current - info.point.x;
                    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
                    setPaused(false);
                  }}
                >
                  <motion.img
                    src={slides[current].src}
                    alt={slides[current].caption}
                    data-testid={`past-event-img-${current}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                    draggable={false}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(11,15,25,0.85) 0%, rgba(11,15,25,0.15) 50%, transparent 100%)" }}
                  />
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 px-6 pb-5 pt-10 pointer-events-none">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-6 h-[2px] rounded-full"
                        style={{ background: "linear-gradient(90deg, #6A00FF, #00E5FF)" }}
                      />
                      <p className="font-grotesk text-sm font-semibold text-white/90">
                        {slides[current].caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Glow border overlay */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1px rgba(106,0,255,0.15)" }}
              />
            </div>

            {/* Arrow buttons */}
            <button
              onClick={prev}
              data-testid="past-event-prev"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
              style={{
                background: "rgba(11,15,25,0.75)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(106,0,255,0.25)",
                boxShadow: "0 0 16px rgba(106,0,255,0.2)",
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-white/80" />
            </button>

            <button
              onClick={next}
              data-testid="past-event-next"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
              style={{
                background: "rgba(11,15,25,0.75)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(106,0,255,0.25)",
                boxShadow: "0 0 16px rgba(106,0,255,0.2)",
              }}
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-white/80" />
            </button>

            {/* Counter badge */}
            <div
              className="absolute top-4 right-4 z-10 px-3 py-1 rounded-lg font-grotesk text-xs font-bold text-white/70"
              style={{
                background: "rgba(11,15,25,0.7)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {current + 1} / {slides.length}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-6" data-testid="past-event-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                data-testid={`past-event-dot-${i}`}
                aria-label={`Go to slide ${i + 1}`}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === current ? 28 : 8,
                  height: 8,
                  background: i === current
                    ? "linear-gradient(90deg, #6A00FF, #00E5FF)"
                    : "rgba(255,255,255,0.15)",
                  boxShadow: i === current ? "0 0 10px rgba(106,0,255,0.6)" : "none",
                }}
              />
            ))}
          </div>

          {/* Thumbnail strip */}
          <div className="mt-5 flex gap-3 overflow-x-auto pb-2 scrollbar-hide justify-center flex-wrap sm:flex-nowrap">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                data-testid={`past-event-thumb-${i}`}
                className="flex-shrink-0 w-16 sm:w-20 h-12 sm:h-14 rounded-lg overflow-hidden transition-all duration-300"
                style={{
                  border: i === current
                    ? "2px solid #6A00FF"
                    : "2px solid rgba(255,255,255,0.08)",
                  boxShadow: i === current ? "0 0 12px rgba(106,0,255,0.5)" : "none",
                  opacity: i === current ? 1 : 0.5,
                }}
              >
                <img
                  src={slide.src}
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

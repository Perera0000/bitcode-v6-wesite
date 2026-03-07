import { useRef, useState, Component, ReactNode } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const REGISTER_URL =
  "https://forms.gle/t5rgVJw7FVczj8saA";

/* ─── WebGL detection ─────────────────────────────────────── */
function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

/* ─── Error boundary around Spline ───────────────────────── */
class SplineErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

/* ─── Fallback gradient background ───────────────────────── */
const GalaxyFallback = () => (
  <>
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(106,0,255,0.4) 0%, rgba(147,51,234,0.15) 40%, #0B0F19 75%)",
      }}
    />
    {[
      { size: 380, x: "8%", y: "18%", color: "rgba(106,0,255,0.14)" },
      { size: 480, x: "68%", y: "8%", color: "rgba(0,229,255,0.09)" },
      { size: 260, x: "78%", y: "58%", color: "rgba(147,51,234,0.16)" },
      { size: 300, x: "3%", y: "65%", color: "rgba(0,229,255,0.11)" },
    ].map((orb, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full pointer-events-none blur-3xl"
        style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y, background: orb.color }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7 + i * 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
      />
    ))}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
  </>
);

/* ─── Component ───────────────────────────────────────────── */
export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const splineWrapRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLButtonElement>(null);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [webGLSupported] = useState(() => detectWebGL());

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    /* Galaxy: stay still, zoom massively as user scrolls */
    gsap.to(splineWrapRef.current, {
      scale: 5,
      transformOrigin: "50% 50%",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1.8,
      },
    });

    /* Hero UI: fade out + drift upward early in the scroll */
    gsap.to(heroContentRef.current, {
      opacity: 0,
      y: -80,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "38% top",
        scrub: 1,
      },
    });

    /* Scroll indicator: vanish quickly */
    gsap.to(scrollIndicatorRef.current, {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "18% top",
        scrub: 1,
      },
    });
  }, { scope: sectionRef });

  return (
    /*
     * Outer section is 250 vh tall — this gives GSAP 150 vh of
     * extra scroll space to run the zoom animation while the
     * sticky inner container stays pinned to the viewport.
     */
    <div ref={sectionRef} style={{ height: "250vh" }} id="hero">
      {/* ── Sticky viewport: pinned for the full 250 vh ── */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* 3D Galaxy */}
        <div
          ref={splineWrapRef}
          className="absolute inset-0 z-0 will-change-transform"
          style={{ pointerEvents: "none" }}
        >
          <div
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: splineLoaded ? 0 : 1, zIndex: 1 }}
          >
            <GalaxyFallback />
          </div>

          {webGLSupported && (
            <SplineErrorBoundary fallback={<GalaxyFallback />}>
              <Spline
                scene="https://prod.spline.design/EHeMmhu8d8IeXpBM/scene.splinecode"
                onLoad={() => setSplineLoaded(true)}
                style={{ width: "100%", height: "100%" }}
              />
            </SplineErrorBoundary>
          )}
        </div>

        {/* Vignette overlay */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 35%, rgba(11,15,25,0.55) 100%)",
          }}
        />

        {/* ── Hero UI ── */}
        <div
          ref={heroContentRef}
          data-testid="hero-content"
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 will-change-transform"
        >
          <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.72 }}
              transition={{ duration: 1.4, delay: 0.1 }}
              className="mb-6 font-sans font-light text-[11px] tracking-[0.28em] uppercase text-gray-300"
            >
              Organized by BITSA – Rajarata University
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h1
                className="font-orbitron font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none tracking-tighter"
                style={{ textShadow: "0 0 40px rgba(106,0,255,0.5), 0 0 80px rgba(106,0,255,0.2)" }}
              >
                BIT
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(135deg, #6A00FF 0%, #9333EA 40%, #00E5FF 100%)" }}
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
                  style={{ backgroundImage: "linear-gradient(90deg, #9333EA, #00E5FF)" }}
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
              <motion.a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
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
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleNav("#about")}
                data-testid="hero-explore-btn"
                className="px-8 py-4 rounded-md font-grotesk font-bold text-base text-white border border-[#00E5FF]/40 backdrop-blur-sm relative overflow-hidden group"
                style={{ boxShadow: "0 0 20px rgba(0,229,255,0.15)" }}
              >
                <span className="absolute inset-0 bg-[#00E5FF] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                <span className="relative" style={{ textShadow: "0 0 10px rgba(0,229,255,0.3)" }}>
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
        </div>

        {/* Scroll indicator */}
        <motion.button
          ref={scrollIndicatorRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          onClick={() => handleNav("#about")}
          data-testid="hero-scroll-indicator"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-[#00E5FF] transition-colors z-10 will-change-[opacity]"
        >
          <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>

        {/* Bottom blend into next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-[2]"
          style={{ background: "linear-gradient(to bottom, transparent, #0B0F19)" }}
        />
      </div>
    </div>
  );
}

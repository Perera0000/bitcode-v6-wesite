import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Volume2 } from "lucide-react";

export default function FloatingVideo() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        videoRef.current?.play().catch(() => {});
      }, 350);
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  return (
    <>
      {/* ── Floating Button ── */}
      <motion.button
        onClick={openModal}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-testid="floating-video-btn"
        aria-label="Watch promo video"
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{
          opacity: 1,
          scale: hovered ? 1.12 : 1,
          y: hovered ? -4 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #6A00FF, #9333EA)",
          boxShadow: hovered
            ? "0 0 0 3px rgba(0,229,255,0.5), 0 0 30px rgba(106,0,255,0.7), 0 0 60px rgba(106,0,255,0.3)"
            : "0 0 0 2px rgba(106,0,255,0.4), 0 0 20px rgba(106,0,255,0.5), 0 8px 24px rgba(0,0,0,0.4)",
        }}
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-25"
          style={{ background: "radial-gradient(circle, #6A00FF, transparent)" }}
        />
        {/* Outer glow ring */}
        <span
          className="absolute -inset-1 rounded-full opacity-30"
          style={{
            background: "transparent",
            border: "2px solid rgba(0,229,255,0.6)",
            filter: "blur(2px)",
          }}
        />

        <Play className="w-5 h-5 text-white relative z-10 ml-0.5" fill="white" />

        {/* Tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: 8, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.9 }}
              transition={{ duration: 0.18 }}
              className="absolute right-16 whitespace-nowrap px-3 py-1.5 rounded-lg font-grotesk text-xs font-bold text-white pointer-events-none"
              style={{
                background: "rgba(11,15,25,0.9)",
                border: "1px solid rgba(106,0,255,0.3)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 0 12px rgba(106,0,255,0.3)",
              }}
            >
              Watch Promo
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* ── Modal ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
              className="fixed inset-0 z-50"
              data-testid="video-modal-backdrop"
              style={{
                background: "rgba(7,10,18,0.88)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            />

            {/* Modal panel */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 24 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                data-testid="video-modal"
                className="relative w-full max-w-4xl pointer-events-auto rounded-2xl overflow-hidden"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(106,0,255,0.25), 0 0 80px rgba(106,0,255,0.2), 0 32px 80px rgba(0,0,0,0.7)",
                  background: "#0B0F19",
                }}
              >
                {/* Top bar */}
                <div
                  className="flex items-center justify-between px-5 py-3 border-b border-white/5"
                  style={{ background: "rgba(106,0,255,0.06)" }}
                >
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-[#6A00FF]" />
                    <span className="font-orbitron font-bold text-sm text-white">
                      BITCODE <span className="text-[#00E5FF]">V6.0</span>
                    </span>
                    <span className="font-grotesk text-xs text-gray-500 ml-1">— Promo Video</span>
                  </div>
                  <motion.button
                    onClick={closeModal}
                    data-testid="video-modal-close"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    aria-label="Close video"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Video */}
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <video
                    ref={videoRef}
                    src="/promo-video.mp4"
                    data-testid="promo-video"
                    controls
                    playsInline
                    className="absolute inset-0 w-full h-full object-contain bg-black"
                    style={{ outline: "none" }}
                  />
                  {/* Side glow lines */}
                  <div
                    className="absolute inset-y-0 left-0 w-[2px] pointer-events-none"
                    style={{
                      background: "linear-gradient(to bottom, transparent, #6A00FF, transparent)",
                      opacity: 0.4,
                    }}
                  />
                  <div
                    className="absolute inset-y-0 right-0 w-[2px] pointer-events-none"
                    style={{
                      background: "linear-gradient(to bottom, transparent, #00E5FF, transparent)",
                      opacity: 0.4,
                    }}
                  />
                </div>

                {/* Bottom accent */}
                <div
                  className="h-[3px] w-full"
                  style={{
                    background: "linear-gradient(90deg, #6A00FF, #9333EA, #00E5FF)",
                  }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

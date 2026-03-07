import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Volume2, Maximize2 } from "lucide-react";

export default function FloatingVideo() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const previewVideoRef = useRef<HTMLVideoElement>(null);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  /* Play / pause modal video with the modal */
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        modalVideoRef.current?.play().catch(() => {});
      }, 380);
    } else {
      if (modalVideoRef.current) {
        modalVideoRef.current.pause();
        modalVideoRef.current.currentTime = 0;
      }
    }
  }, [open]);

  /* Hover: play silent preview; leave: pause it */
  useEffect(() => {
    const vid = previewVideoRef.current;
    if (!vid) return;
    if (hovered) {
      vid.play().catch(() => {});
    } else {
      vid.pause();
      vid.currentTime = 0;
    }
  }, [hovered]);

  /* ESC closes */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  return (
    <>
      {/* ── Floating preview card ── */}
      <motion.button
        onClick={openModal}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-testid="floating-video-btn"
        aria-label="Watch promo video"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: hovered ? -4 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed bottom-6 right-6 z-40 flex flex-col overflow-hidden group"
        style={{
          width: 176,
          borderRadius: 14,
          background: "#0B0F19",
          boxShadow: hovered
            ? "0 0 0 1.5px rgba(0,229,255,0.6), 0 0 30px rgba(0,229,255,0.25), 0 16px 40px rgba(0,0,0,0.6)"
            : "0 0 0 1px rgba(106,0,255,0.35), 0 0 20px rgba(106,0,255,0.2), 0 8px 24px rgba(0,0,0,0.5)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        {/* Video thumbnail area */}
        <div className="relative w-full overflow-hidden" style={{ height: 99 }}>
          {/* Silent preview video — plays on hover */}
          <video
            ref={previewVideoRef}
            src="/promo-video.mp4"
            muted
            playsInline
            loop
            preload="metadata"
            className="w-full h-full object-cover"
            style={{ pointerEvents: "none" }}
          />

          {/* Dark tint overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: "linear-gradient(to bottom, rgba(11,15,25,0.35) 0%, rgba(11,15,25,0.6) 100%)",
              opacity: hovered ? 0.5 : 0.85,
            }}
          />

          {/* Play icon centred on thumbnail */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: hovered ? 1.15 : 1 }}
              transition={{ duration: 0.25 }}
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(106,0,255,0.85)",
                boxShadow: hovered
                  ? "0 0 0 4px rgba(0,229,255,0.3), 0 0 20px rgba(106,0,255,0.7)"
                  : "0 0 0 2px rgba(106,0,255,0.4), 0 0 12px rgba(106,0,255,0.5)",
              }}
            >
              <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
            </motion.div>
          </div>

          {/* Expand icon top-right */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Maximize2 className="w-3.5 h-3.5 text-white/70" />
          </div>

          {/* Pulse ring on button (bottom-left badge) */}
          <div className="absolute top-2 left-2">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                style={{ background: "#00E5FF" }}
              />
              <span
                className="relative inline-flex rounded-full h-2.5 w-2.5"
                style={{ background: "#00E5FF" }}
              />
            </span>
          </div>
        </div>

        {/* Bottom label bar */}
        <div
          className="flex items-center justify-between px-3 py-2"
          style={{
            background: "rgba(11,15,25,0.95)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div className="flex items-center gap-1.5">
            <Volume2 className="w-3 h-3 text-[#6A00FF]" />
            <span className="font-grotesk text-xs font-bold text-white/80">Watch Promo</span>
          </div>
          <span
            className="font-orbitron text-[9px] font-bold"
            style={{ color: "#00E5FF", textShadow: "0 0 6px rgba(0,229,255,0.5)" }}
          >
            V6.0
          </span>
        </div>

        {/* Bottom gradient line */}
        <div
          className="h-[2px] w-full"
          style={{ background: "linear-gradient(90deg, #6A00FF, #00E5FF)" }}
        />
      </motion.button>

      {/* ── Full modal ── */}
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
                background: "rgba(7,10,18,0.9)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
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
                    "0 0 0 1px rgba(106,0,255,0.3), 0 0 80px rgba(106,0,255,0.2), 0 32px 80px rgba(0,0,0,0.7)",
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

                {/* Video player */}
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <video
                    ref={modalVideoRef}
                    src="/promo-video.mp4"
                    data-testid="promo-video"
                    controls
                    playsInline
                    className="absolute inset-0 w-full h-full object-contain bg-black"
                    style={{ outline: "none" }}
                  />
                  <div
                    className="absolute inset-y-0 left-0 w-[2px] pointer-events-none"
                    style={{ background: "linear-gradient(to bottom, transparent, #6A00FF, transparent)", opacity: 0.4 }}
                  />
                  <div
                    className="absolute inset-y-0 right-0 w-[2px] pointer-events-none"
                    style={{ background: "linear-gradient(to bottom, transparent, #00E5FF, transparent)", opacity: 0.4 }}
                  />
                </div>

                {/* Bottom accent bar */}
                <div
                  className="h-[3px] w-full"
                  style={{ background: "linear-gradient(90deg, #6A00FF, #9333EA, #00E5FF)" }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

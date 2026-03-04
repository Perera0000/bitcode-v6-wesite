import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -200, y: -200 });
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      const el = cursorRef.current;
      if (el) {
        el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], [data-cursor-hover]") ||
          getComputedStyle(t).cursor === "pointer") {
        setIsHovering(true);
      }
    };

    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], [data-cursor-hover]") ||
          getComputedStyle(t).cursor === "pointer") {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [isMobile]);

  if (isMobile) return null;

  const scale = isClicking ? 0.88 : isHovering ? 1.22 : 1;
  const glowColor = isHovering ? "rgba(0,229,255,0.9)" : "rgba(255,255,255,0.7)";
  const glowSpread = isHovering ? "0 0 14px 3px rgba(0,229,255,0.55), 0 0 32px rgba(0,229,255,0.2)" : "0 0 8px 2px rgba(255,255,255,0.35)";

  return (
    <>
      <div
        id="cursor-arrow"
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 99999,
          willChange: "transform",
          transform: "translate(-200px, -200px)",
        }}
      >
        <div
          id="cursor-arrow-inner"
          style={{
            transformOrigin: "0 0",
            transform: `scale(${scale})`,
            transition: "transform 0.18s cubic-bezier(0.23,1,0.32,1), filter 0.18s ease",
            filter: isHovering
              ? "drop-shadow(0 0 6px rgba(0,229,255,0.9)) drop-shadow(0 0 12px rgba(0,229,255,0.5))"
              : "drop-shadow(0 0 4px rgba(255,255,255,0.6)) drop-shadow(0 0 2px rgba(200,200,255,0.3))",
          }}
        >
          <svg
            width="26"
            height="30"
            viewBox="0 0 26 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
          >
            <path
              d="M2 2L2 24L7.5 18.5L11.5 27L14.5 25.5L10.5 16.5H18L2 2Z"
              fill="white"
              stroke="rgba(0,0,0,0.25)"
              strokeWidth="1"
              strokeLinejoin="round"
            />
            {isHovering && (
              <path
                d="M2 2L2 24L7.5 18.5L11.5 27L14.5 25.5L10.5 16.5H18L2 2Z"
                fill="rgba(0,229,255,0.15)"
                stroke="rgba(0,229,255,0.6)"
                strokeWidth="0.5"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </div>

        {isHovering && (
          <div
            style={{
              position: "absolute",
              top: -6,
              left: -6,
              right: -6,
              bottom: -6,
              borderRadius: "50%",
              pointerEvents: "none",
              background: "radial-gradient(ellipse, rgba(0,229,255,0.12) 0%, transparent 70%)",
              animation: "cursorGlowPulse 1.5s ease-in-out infinite",
            }}
          />
        )}
      </div>

      <style>{`
        *, *::before, *::after {
          cursor: none !important;
        }

        @keyframes cursorGlowPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.25); }
        }
      `}</style>
    </>
  );
}

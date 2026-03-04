import { useEffect, useRef, useState, useCallback } from "react";

const CODE_SYMBOLS = ["</>", "{}", "( )", "=>", "//", "[]"];

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const symbolRef = useRef<HTMLSpanElement>(null);

  const mousePos = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const trailPos = useRef({ x: -200, y: -200 });

  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [symbol, setSymbol] = useState<string | null>(null);

  const lastSymbolTime = useRef(0);
  const symbolTimer = useRef<ReturnType<typeof setTimeout>>(null);

  const triggerSymbol = useCallback(() => {
    const now = Date.now();
    if (now - lastSymbolTime.current < 900) return;
    lastSymbolTime.current = now;
    const sym = CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)];
    setSymbol(sym);
    if (symbolTimer.current) clearTimeout(symbolTimer.current);
    symbolTimer.current = setTimeout(() => setSymbol(null), 750);
  }, []);

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
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.closest("a, button") ||
        getComputedStyle(t).cursor === "pointer"
      ) {
        setIsHovering(true);
        triggerSymbol();
      }
    };

    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button")) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });

    let raf: number;

    const loop = () => {
      const dot = dotRef.current;
      const ring = ringRef.current;
      const trail = trailRef.current;
      const { x, y } = mousePos.current;

      if (dot) {
        dot.style.transform = `translate(${x - 5}px, ${y - 5}px)`;
      }

      if (ring) {
        ringPos.current.x += (x - ringPos.current.x) * 0.13;
        ringPos.current.y += (y - ringPos.current.y) * 0.13;
        const rx = ringPos.current.x;
        const ry = ringPos.current.y;
        ring.style.transform = `translate(${rx - 22}px, ${ry - 22}px)`;
      }

      if (trail) {
        trailPos.current.x += (x - trailPos.current.x) * 0.055;
        trailPos.current.y += (y - trailPos.current.y) * 0.055;
        const tx = trailPos.current.x;
        const ty = trailPos.current.y;
        trail.style.transform = `translate(${tx - 3}px, ${ty - 3}px)`;
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      document.body.style.cursor = "";
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      if (symbolTimer.current) clearTimeout(symbolTimer.current);
    };
  }, [isMobile, triggerSymbol]);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;
    const size = isHovering ? 44 : 36;
    ring.style.width = `${size}px`;
    ring.style.height = `${size}px`;
    ring.style.borderColor = isHovering
      ? "rgba(106,0,255,0.85)"
      : "rgba(0,229,255,0.65)";
    ring.style.boxShadow = isHovering
      ? "0 0 18px rgba(106,0,255,0.55), inset 0 0 12px rgba(106,0,255,0.1)"
      : "0 0 12px rgba(0,229,255,0.35)";
    ring.style.background = isHovering
      ? "rgba(106,0,255,0.07)"
      : "rgba(0,229,255,0.03)";
  }, [isHovering]);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;
    dot.style.background = isClicking ? "#9333EA" : "#00E5FF";
    dot.style.boxShadow = isClicking
      ? "0 0 14px 5px rgba(147,51,234,0.9), 0 0 28px rgba(147,51,234,0.4)"
      : "0 0 10px 3px rgba(0,229,255,0.8), 0 0 22px rgba(0,229,255,0.4)";
    dot.style.transform = dot.style.transform;
  }, [isClicking]);

  if (isMobile) return null;

  return (
    <>
      <div
        id="cursor-dot"
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#00E5FF",
          boxShadow: "0 0 10px 3px rgba(0,229,255,0.8), 0 0 22px rgba(0,229,255,0.4)",
          pointerEvents: "none",
          zIndex: 99999,
          willChange: "transform",
          transition: "background 0.15s, box-shadow 0.15s",
        }}
      />

      <div
        id="cursor-ring"
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid rgba(0,229,255,0.65)",
          background: "rgba(0,229,255,0.03)",
          boxShadow: "0 0 12px rgba(0,229,255,0.35)",
          pointerEvents: "none",
          zIndex: 99998,
          willChange: "transform",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "width 0.22s cubic-bezier(0.23,1,0.32,1), height 0.22s cubic-bezier(0.23,1,0.32,1), border-color 0.2s, box-shadow 0.2s, background 0.2s",
        }}
      >
        {symbol && (
          <span
            ref={symbolRef}
            key={symbol + Date.now()}
            style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: "8px",
              fontWeight: 700,
              color: "#6A00FF",
              letterSpacing: "-0.5px",
              lineHeight: 1,
              animation: "cursorSymbol 0.75s ease forwards",
              whiteSpace: "nowrap",
              userSelect: "none",
              pointerEvents: "none",
              flexShrink: 0,
            }}
          >
            {symbol}
          </span>
        )}
      </div>

      <div
        id="cursor-trail"
        ref={trailRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "rgba(147,51,234,0.75)",
          boxShadow: "0 0 8px rgba(147,51,234,0.6)",
          pointerEvents: "none",
          zIndex: 99997,
          willChange: "transform",
          opacity: 0.7,
        }}
      />

      <style>{`
        *, *::before, *::after { cursor: none !important; }

        @keyframes cursorSymbol {
          0%   { opacity: 0; transform: scale(0.4); }
          20%  { opacity: 1; transform: scale(1.15); }
          55%  { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.85) translateY(-3px); }
        }
      `}</style>
    </>
  );
}

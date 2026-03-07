import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ringPos = useRef({ x: -200, y: -200 });
  const mousePos = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number>(0);
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

    /* Smooth trailing ring via lerp */
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.12);

      const ring = ringRef.current;
      if (ring) {
        ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      const dot = dotRef.current;
      if (dot) {
        dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.closest("a, button, [role='button'], [data-cursor-hover]") ||
        getComputedStyle(t).cursor === "pointer"
      ) {
        setIsHovering(true);
      }
    };

    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.closest("a, button, [role='button'], [data-cursor-hover]") ||
        getComputedStyle(t).cursor === "pointer"
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [isMobile]);

  if (isMobile) return null;

  const ringSize = isClicking ? 28 : isHovering ? 44 : 36;
  const dotSize = isClicking ? 3 : isHovering ? 5 : 4;

  const ringColor = isHovering
    ? "rgba(0,229,255,0.9)"
    : "rgba(106,0,255,0.75)";

  const ringGlow = isHovering
    ? "0 0 12px 3px rgba(0,229,255,0.55), 0 0 28px rgba(0,229,255,0.25)"
    : "0 0 8px 2px rgba(106,0,255,0.45), 0 0 20px rgba(106,0,255,0.2)";

  const dotColor = isHovering ? "#00E5FF" : "#ffffff";
  const dotGlow = isHovering
    ? "0 0 6px 2px rgba(0,229,255,0.8)"
    : "0 0 4px 1px rgba(255,255,255,0.6)";

  return (
    <>
      {/* Trailing glow ring */}
      <div
        ref={ringRef}
        data-testid="cursor-ring"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: ringSize,
          height: ringSize,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          willChange: "transform",
          transform: "translate(-200px, -200px) translate(-50%, -50%)",
          border: `1.5px solid ${ringColor}`,
          boxShadow: ringGlow,
          transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
          background: isHovering
            ? "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(106,0,255,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Precise dot */}
      <div
        ref={dotRef}
        data-testid="cursor-dot"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: dotSize,
          height: dotSize,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          willChange: "transform",
          transform: "translate(-200px, -200px) translate(-50%, -50%)",
          background: dotColor,
          boxShadow: dotGlow,
          transition: "width 0.15s ease, height 0.15s ease, background 0.15s ease, box-shadow 0.15s ease",
        }}
      />

      <style>{`
        *, *::before, *::after {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}

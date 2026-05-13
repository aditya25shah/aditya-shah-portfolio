import { useEffect, useRef } from "react";

// Lightweight canvas-based 3D-feel atmosphere: floating glass orbs with parallax & soft lighting.
// Pure 2D canvas for performance — no WebGL needed, runs smooth on low-end devices.
export function Atmosphere() {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Orb = { x: number; y: number; r: number; hue: number; sp: number; depth: number; phase: number };
    const orbs: Orb[] = Array.from({ length: 7 }).map((_, i) => ({
      x: Math.random(),
      y: Math.random(),
      r: 180 + Math.random() * 280,
      hue: 215 + Math.random() * 30,
      sp: 0.00008 + Math.random() * 0.00012,
      depth: 0.3 + (i / 7) * 0.7,
      phase: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);

    const render = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      // base vignette
      const g = ctx.createRadialGradient(w / 2, h * 0.3, 0, w / 2, h * 0.3, Math.max(w, h));
      g.addColorStop(0, "rgba(40,55,75,0.22)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";
      for (const o of orbs) {
        const px = (Math.sin(t * o.sp + o.phase) * 0.5 + o.x) * w + mouse.current.x * 30 * o.depth;
        const py = (Math.cos(t * o.sp * 0.8 + o.phase) * 0.5 + o.y) * h + mouse.current.y * 30 * o.depth;
        const grad = ctx.createRadialGradient(px, py, 0, px, py, o.r);
        const alpha = 0.18 * o.depth;
        grad.addColorStop(0, `hsla(${o.hue}, 40%, 70%, ${alpha})`);
        grad.addColorStop(0.5, `hsla(${o.hue}, 30%, 50%, ${alpha * 0.4})`);
        grad.addColorStop(1, "hsla(220, 20%, 20%, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, o.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";

      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden
    />
  );
}

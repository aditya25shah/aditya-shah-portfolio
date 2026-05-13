import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { VoxelScene } from "./VoxelScene";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden pt-28 pb-20">
      {/* 3D voxel scene background */}
      <motion.div style={{ opacity }} className="absolute inset-0 z-0">
        <VoxelScene className="absolute inset-0 h-full w-full" />
        {/* Soft fade to background at edges so text reads well */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_0%,oklch(0.18_0.006_250/0.65)_70%,oklch(0.18_0.006_250/0.95)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-pixel-grid opacity-40" />
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto flex min-h-[80vh] w-full max-w-6xl flex-col justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex w-fit items-center gap-3 border border-hairline bg-stone-dark/70 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-parchment shadow-block-sm backdrop-blur-sm"
        >
          <span className="block h-2 w-2 bg-bronze" />
          AI Engineer · Bengaluru
        </motion.div>

        <h1 className="text-pixel text-balance text-[clamp(1.6rem,4.5vw,3.2rem)] leading-[1.2] text-parchment">
          {["Aditya", "Shah"].map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="mr-4 inline-block"
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 max-w-xl font-mono text-base leading-relaxed text-foreground/80 sm:text-lg"
        >
          I build <span className="text-parchment">AI-powered developer tools</span> and quietly
          intelligent interfaces — engineered block by block, like the systems they live inside.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 bg-parchment px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-stone-dark shadow-block transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-block-hover active:translate-x-[2px] active:translate-y-[2px] active:shadow-block-sm"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            View Work
            <span aria-hidden>▸</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-hairline bg-stone-dark/70 px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-parchment backdrop-blur-sm transition-colors hover:bg-stone/70"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            Contact
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.3em] text-muted-foreground"
        style={{ fontFamily: "var(--font-pixel)" }}
      >
        <span className="animate-blink">▼ scroll</span>
      </motion.div>
    </section>
  );
}

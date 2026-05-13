import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const ease = [0.22, 1, 0.36, 1];

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-24">
      {/* Soft horizon line */}
      <motion.div
        style={{ scale, opacity }}
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent"
      />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-hairline bg-surface-elevated/40 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur"
        >
          <span className="h-1 w-1 rounded-full bg-accent-glow" />
          AI Engineer · Bengaluru, India
        </motion.div>

        <h1 className="text-display text-balance text-[clamp(3rem,9vw,8.5rem)] text-foreground">
          {"Building intelligent".split(" ").map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.15 + i * 0.08 }}
              className="mr-[0.25em] inline-block"
            >
              {w}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.45 }}
            className="inline-block italic metal-gradient"
          >
            digital systems.
          </motion.span>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.6 }}
            className="md:col-span-6 md:col-start-7 max-w-md text-base leading-relaxed text-muted-foreground"
          >
            Computer Science undergraduate crafting AI-powered developer tools, full-stack
            products, and quietly elegant interfaces — where engineering meets design intent.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.75 }}
          className="mt-14 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            View selected work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-3 text-sm text-foreground/85 transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        <span className="block animate-pulse">scroll</span>
      </motion.div>
    </section>
  );
}

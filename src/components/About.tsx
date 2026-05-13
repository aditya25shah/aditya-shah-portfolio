import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative z-10 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="md:col-span-4"
          >
            <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              About
            </div>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-hairline px-3 py-1.5 text-xs text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-accent-glow" />
              CGPA 8.71 · PES, Mandya
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 }}
            className="md:col-span-8"
          >
            <p className="text-display text-balance text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.1] text-foreground/95">
              I design and engineer the kind of software I'd want to use —
              <span className="italic text-muted-foreground"> calm, considered, and deeply intelligent.</span>
              Currently focused on developer tools, AI systems, and the quiet
              interfaces that sit between them.
            </p>

            <div className="mt-14 grid gap-10 sm:grid-cols-3">
              {[
                { k: "2000+", v: "teams beaten at BUILDVERSE national hackathon" },
                { k: "4", v: "shipped products spanning AI, automation & civic tech" },
                { k: "2028", v: "graduating B.E. CSE, P.E.S College of Engineering" },
              ].map((s) => (
                <div key={s.k} className="border-t border-hairline pt-5">
                  <div className="text-display text-3xl text-foreground">{s.k}</div>
                  <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

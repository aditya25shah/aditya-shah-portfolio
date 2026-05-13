import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative z-10 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative overflow-hidden rounded-3xl border border-hairline bg-gradient-to-b from-surface-elevated/60 to-surface/40 p-10 backdrop-blur-xl md:p-16"
        >
          <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-accent-glow/20 blur-3xl" />

          <div className="relative">
            <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Let's build</div>
            <h2 className="mt-4 text-display text-balance text-[clamp(2.5rem,7vw,6rem)]">
              Have something <br />
              <span className="italic metal-gradient">worth making?</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              I'm open to internships, collaborations, and ambitious side projects in AI,
              developer tooling, and product engineering.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-3">
              <a
                href="mailto:aditya546shah@gmail.com"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
              >
                aditya546shah@gmail.com
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="tel:+919942673363"
                className="inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3.5 text-sm text-foreground/85 transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                +91 99426 73363
              </a>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-3">
              {[
                { label: "GitHub", href: "https://github.com/", handle: "@adityashah" },
                { label: "LinkedIn", href: "https://linkedin.com/", handle: "/in/adityashah" },
                { label: "Location", href: "#", handle: "Mandya, India" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between bg-surface/60 px-5 py-4 text-sm transition-colors hover:bg-surface-elevated/80"
                >
                  <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {l.label}
                  </span>
                  <span className="text-foreground/85 transition-colors group-hover:text-foreground">
                    {l.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-8 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Aditya Shah</span>
          <span className="font-mono">Designed & engineered with intent.</span>
        </footer>
      </div>
    </section>
  );
}

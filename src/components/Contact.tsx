import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative z-10 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative border border-hairline bg-stone-dark/70 p-10 shadow-block backdrop-blur-md md:p-14"
        >
          {/* corner blocks */}
          <span className="absolute -top-2 -left-2 h-4 w-4 bg-bronze shadow-block-sm" />
          <span className="absolute -top-2 -right-2 h-4 w-4 bg-parchment shadow-block-sm" />
          <span className="absolute -bottom-2 -left-2 h-4 w-4 bg-slate-block shadow-block-sm" />
          <span className="absolute -bottom-2 -right-2 h-4 w-4 bg-stone-light shadow-block-sm" />

          <div className="text-pixel text-[10px] tracking-[0.25em] text-bronze">▣ Let's Build</div>
          <h2 className="mt-4 text-pixel text-balance text-[clamp(1.6rem,4vw,2.8rem)] leading-tight text-parchment">
            Have something <br />worth making?
          </h2>
          <p className="mt-6 max-w-md font-mono text-base leading-relaxed text-foreground/80">
            Open to internships, collaborations, and ambitious side projects in AI,
            developer tooling, and product engineering.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:aditya546shah@gmail.com"
              className="inline-flex items-center gap-3 bg-parchment px-5 py-3 text-pixel text-[10px] tracking-[0.18em] text-stone-dark shadow-block transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-block-hover"
            >
              aditya546shah@gmail.com ▸
            </a>
            <a
              href="tel:+919942673363"
              className="inline-flex items-center gap-2 border border-hairline bg-stone/60 px-5 py-3 text-pixel text-[10px] tracking-[0.18em] text-parchment transition-colors hover:bg-stone"
            >
              +91 99426 73363
            </a>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
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
                className="group flex items-center justify-between border border-hairline bg-stone/40 px-4 py-3 transition-colors hover:bg-stone/70"
              >
                <span className="text-pixel text-[9px] tracking-[0.2em] text-bronze">{l.label}</span>
                <span className="font-mono text-sm text-parchment/90 group-hover:text-parchment">
                  {l.handle}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        <footer className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-8 font-mono text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Aditya Shah</span>
          <span>Engineered block by block.</span>
        </footer>
      </div>
    </section>
  );
}

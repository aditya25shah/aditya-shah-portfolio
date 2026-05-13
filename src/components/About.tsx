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
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <div className="text-pixel text-[10px] tracking-[0.25em] text-bronze">▣ About</div>
            <div className="mt-6 inline-flex items-center gap-2 border border-hairline bg-stone-dark/60 px-3 py-2 text-pixel text-[9px] text-parchment">
              <span className="block h-2 w-2 bg-bronze" />
              CGPA 8.71 · PES Mandya
            </div>

            {/* Mini pixel avatar block */}
            <div className="mt-10 grid w-fit grid-cols-6 gap-px border border-hairline bg-stone-dark p-2 shadow-block">
              {/* 6x6 abstract pixel portrait */}
              {[
                "S","S","P","P","S","S",
                "S","P","P","P","P","S",
                "P","P","B","B","P","P",
                "P","P","B","B","P","P",
                "S","P","L","L","P","S",
                "S","S","P","P","S","S",
              ].map((c, i) => (
                <span
                  key={i}
                  className={`h-3 w-3 ${
                    c === "S" ? "bg-stone" : c === "P" ? "bg-parchment" : c === "B" ? "bg-stone-dark" : "bg-bronze"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-8"
          >
            <p className="text-balance font-mono text-[clamp(1.05rem,1.8vw,1.5rem)] leading-relaxed text-parchment/95">
              I design and engineer the kind of software I'd want to use —
              <span className="text-muted-foreground"> calm, considered, and quietly intelligent.</span>
              {" "}Currently focused on developer tools, AI systems, and the interfaces between them.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                { k: "2000+", v: "teams beaten at BUILDVERSE national hackathon" },
                { k: "04", v: "shipped products in AI, automation & civic tech" },
                { k: "2028", v: "graduating B.E. CSE, P.E.S College of Engineering" },
              ].map((s) => (
                <div key={s.k} className="border border-hairline bg-stone-dark/50 p-5 shadow-block-sm">
                  <div className="text-pixel text-2xl text-parchment">{s.k}</div>
                  <div className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

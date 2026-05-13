import { motion } from "framer-motion";

const groups = [
  { label: "Languages", items: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"] },
  { label: "Web & AI", items: ["React", "FastAPI", "HTML", "CSS", "Gemini AI", "REST APIs"] },
  { label: "Tooling", items: ["Git", "GitHub", "Vercel", "MySQL", "DSA", "OOP"] },
];

const achievements = [
  { year: "2025", title: "Winner — BUILDVERSE National Hackathon", note: "Sustainability track · 2000+ teams" },
  { year: "2024", title: "2nd Place — Bug Bingo Coding Competition", note: "Complex DSA under time constraints" },
];

export function Skills() {
  return (
    <section id="skills" className="relative z-10 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-16"
        >
          <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Toolkit</div>
          <h2 className="mt-4 text-display text-balance text-[clamp(2rem,5vw,4rem)]">
            A practical <span className="italic metal-gradient">stack</span>, used with intent.
          </h2>
        </motion.div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              className="bg-surface/60 p-8 backdrop-blur-sm"
            >
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{g.label}</div>
              <ul className="mt-6 space-y-3">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-sm text-foreground/85">
                    <span className="h-px w-4 bg-foreground/30" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <div className="mb-10 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Recognition</div>
          <div className="space-y-4">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                className="group flex items-baseline gap-6 border-t border-hairline pt-5"
              >
                <span className="font-mono text-xs text-muted-foreground">{a.year}</span>
                <div className="flex-1">
                  <div className="text-lg text-foreground">{a.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{a.note}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

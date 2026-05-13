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
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="text-pixel text-[10px] tracking-[0.25em] text-bronze">▣ Toolkit</div>
          <h2 className="mt-4 text-pixel text-balance text-[clamp(1.4rem,3.5vw,2.4rem)] leading-snug text-parchment">
            A practical stack, <br />used with intent.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-hairline bg-stone-dark/60 p-6 shadow-block backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <span className="block h-3 w-3 bg-bronze" />
                <span className="text-pixel text-[10px] tracking-[0.2em] text-parchment">{g.label}</span>
              </div>
              <ul className="mt-6 space-y-2.5">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-3 border border-transparent bg-stone/30 px-3 py-2 font-mono text-sm text-foreground/85 transition-colors hover:border-hairline hover:bg-stone/60"
                  >
                    <span className="block h-1.5 w-1.5 bg-stone-light" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <div className="mb-8 text-pixel text-[10px] tracking-[0.25em] text-bronze">▣ Recognition</div>
          <div className="space-y-4">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-baseline gap-6 border border-hairline bg-stone-dark/50 p-5 shadow-block-sm"
              >
                <span className="text-pixel text-[11px] text-bronze">{a.year}</span>
                <div className="flex-1">
                  <div className="font-mono text-base text-parchment">{a.title}</div>
                  <div className="mt-1 font-mono text-xs text-muted-foreground">{a.note}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

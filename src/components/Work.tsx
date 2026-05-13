import { motion } from "framer-motion";

const projects = [
  {
    n: "01",
    title: "CodevantaAI",
    blurb: "AI-powered code editor with deep GitHub integration, in-browser execution, and Gemini-driven generation.",
    tags: ["React", "TypeScript", "GitHub API", "Gemini"],
    role: "Full-stack · AI",
    year: "2025",
  },
  {
    n: "02",
    title: "DevCascade",
    blurb: "Workflow automation layer connecting GitHub, Jira, Jenkins, and Slack into a single CI/CD nervous system.",
    tags: ["APIs", "Automation", "CI/CD"],
    role: "Systems",
    year: "2025",
  },
  {
    n: "03",
    title: "RealQuest",
    blurb: "Civic and disaster reporting platform with location-aware flows for faster municipal response.",
    tags: ["Web", "Geo", "APIs"],
    role: "Product · Engineering",
    year: "2024",
  },
  {
    n: "04",
    title: "Jarvis Voice Assistant",
    blurb: "Voice-controlled system automation with speech recognition and contextual audio feedback.",
    tags: ["Python", "Speech", "Automation"],
    role: "AI · Tooling",
    year: "2024",
  },
];

export function Work() {
  return (
    <section id="work" className="relative z-10 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-20 flex items-end justify-between gap-8"
        >
          <div>
            <div className="mb-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Selected Work — 2024 / 2025
            </div>
            <h2 className="text-display text-balance text-[clamp(2.5rem,6vw,5rem)]">
              Case studies in <span className="italic metal-gradient">craft</span>.
            </h2>
          </div>
          <div className="hidden text-right text-sm text-muted-foreground md:block">
            04 / projects
          </div>
        </motion.div>

        <div className="space-y-px overflow-hidden rounded-2xl border border-hairline">
          {projects.map((p, i) => (
            <ProjectRow key={p.n} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: typeof projects[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: index * 0.06 }}
      className="group relative grid grid-cols-12 gap-6 bg-surface/40 p-8 backdrop-blur-sm transition-colors hover:bg-surface-elevated/60 md:p-10"
    >
      <div className="col-span-12 flex items-center gap-6 md:col-span-1">
        <span className="font-mono text-xs text-muted-foreground">{project.n}</span>
      </div>

      <div className="col-span-12 md:col-span-5">
        <h3 className="text-display text-3xl text-foreground md:text-4xl">{project.title}</h3>
        <div className="mt-2 text-xs text-muted-foreground">
          {project.role} · {project.year}
        </div>
      </div>

      <p className="col-span-12 text-base leading-relaxed text-muted-foreground md:col-span-4">
        {project.blurb}
      </p>

      <div className="col-span-12 flex flex-wrap items-start justify-end gap-1.5 md:col-span-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-hairline px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Hover line */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-foreground/40 to-transparent transition-all duration-700 group-hover:w-full" />
    </motion.article>
  );
}

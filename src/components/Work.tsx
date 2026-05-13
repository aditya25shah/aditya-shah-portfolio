import { motion } from "framer-motion";

const projects = [
  {
    n: "01",
    title: "CodevantaAI",
    blurb: "AI-powered code editor with deep GitHub integration, in-browser execution, and Gemini-driven generation.",
    tags: ["React", "TypeScript", "GitHub API", "Gemini"],
    role: "Full-stack · AI",
    year: "2025",
    color: "bg-bronze",
  },
  {
    n: "02",
    title: "DevCascade",
    blurb: "Workflow automation layer connecting GitHub, Jira, Jenkins, and Slack into a single CI/CD nervous system.",
    tags: ["APIs", "Automation", "CI/CD"],
    role: "Systems",
    year: "2025",
    color: "bg-slate-block",
  },
  {
    n: "03",
    title: "RealQuest",
    blurb: "Civic and disaster reporting platform with location-aware flows for faster municipal response.",
    tags: ["Web", "Geo", "APIs"],
    role: "Product · Engineering",
    year: "2024",
    color: "bg-stone-light",
  },
  {
    n: "04",
    title: "Jarvis Voice Assistant",
    blurb: "Voice-controlled system automation with speech recognition and contextual audio feedback.",
    tags: ["Python", "Speech", "Automation"],
    role: "AI · Tooling",
    year: "2024",
    color: "bg-parchment",
  },
];

export function Work() {
  return (
    <section id="work" className="relative z-10 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between gap-8"
        >
          <div>
            <div className="mb-4 text-pixel text-[10px] tracking-[0.25em] text-bronze">
              ▣ Selected Work
            </div>
            <h2 className="text-pixel text-balance text-[clamp(1.5rem,4vw,2.6rem)] leading-[1.3] text-parchment">
              Case studies <br />in craft.
            </h2>
          </div>
          <div className="hidden text-pixel text-[10px] text-muted-foreground md:block">
            04 / 04
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.n} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative border border-hairline bg-stone-dark/60 p-7 shadow-block backdrop-blur-sm transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-block-hover"
    >
      {/* corner block */}
      <div className="absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center bg-stone-dark shadow-block-sm">
        <span className={`block h-3 w-3 ${project.color}`} />
      </div>

      <div className="mb-4 flex items-baseline justify-between text-pixel text-[10px] text-muted-foreground">
        <span>{project.n}</span>
        <span>{project.year}</span>
      </div>

      <h3 className="text-pixel text-lg leading-snug text-parchment">{project.title}</h3>
      <div className="mt-2 font-mono text-xs uppercase tracking-wider text-bronze">
        {project.role}
      </div>

      <p className="mt-5 font-mono text-sm leading-relaxed text-foreground/75">
        {project.blurb}
      </p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span
            key={t}
            className="border border-hairline bg-stone/40 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground/70"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

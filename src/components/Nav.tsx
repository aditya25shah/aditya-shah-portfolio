import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 24));
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-500 ${
        scrolled ? "rounded-full glass px-5 py-2.5" : ""
      }`} style={scrolled ? { maxWidth: "min(64rem, calc(100% - 2rem))" } : undefined}>
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-7 w-7 items-center justify-center">
            <span className="absolute inset-0 rounded-md bg-gradient-to-br from-foreground/90 to-foreground/40" />
            <span className="absolute inset-[1px] rounded-[5px] bg-background" />
            <span className="relative font-display text-base text-foreground">A</span>
          </span>
          <span className="text-sm font-medium tracking-tight">Aditya Shah</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {[
            ["Work", "#work"],
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:aditya546shah@gmail.com"
          className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-elevated/40 px-4 py-1.5 text-xs font-medium tracking-wide text-foreground/90 backdrop-blur transition-all hover:border-foreground/30 hover:bg-surface-elevated/80"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Available
        </a>
      </div>
    </motion.header>
  );
}

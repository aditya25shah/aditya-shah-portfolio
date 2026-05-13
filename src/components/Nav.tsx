import { Link } from "@tanstack/react-router";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => scrollY.on("change", (v) => setScrolled(v > 24)), [scrollY]);

  const items = [
    ["Work", "#work"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Contact", "#contact"],
  ] as const;

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all ${
          scrolled ? "border border-hairline bg-stone-dark/80 px-4 py-2.5 backdrop-blur-md shadow-block-sm" : ""
        }`}
        style={scrolled ? { maxWidth: "min(64rem, calc(100% - 1.5rem))" } : undefined}
      >
        <Link to="/" className="flex items-center gap-2.5">
          {/* pixel logo block */}
          <div className="grid h-7 w-7 grid-cols-2 grid-rows-2 gap-px">
            <span className="bg-parchment" />
            <span className="bg-bronze" />
            <span className="bg-slate-block" />
            <span className="bg-stone-light" />
          </div>
          <span className="text-pixel text-[11px] text-parchment">Aditya</span>
        </Link>

        <nav className="hidden items-center gap-7 text-pixel text-[10px] text-muted-foreground md:flex">
          {items.map(([label, href]) => (
            <a key={href} href={href} className="transition-colors hover:text-parchment">
              {label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:aditya546shah@gmail.com"
          className="inline-flex items-center gap-2 border border-hairline bg-stone-dark/70 px-3 py-2 text-pixel text-[9px] text-parchment backdrop-blur transition-colors hover:bg-stone/80"
        >
          <span className="block h-2 w-2 animate-blink bg-emerald-400" />
          Available
        </a>
      </div>
    </motion.header>
  );
}

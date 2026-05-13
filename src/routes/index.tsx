import { createFileRoute } from "@tanstack/react-router";
import { Atmosphere } from "@/components/Atmosphere";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aditya Shah — AI Engineer & Product Developer" },
      {
        name: "description",
        content:
          "Portfolio of Aditya Shah — Computer Science engineer building AI-powered developer tools, full-stack systems, and quietly elegant interfaces.",
      },
      { property: "og:title", content: "Aditya Shah — AI Engineer & Product Developer" },
      {
        property: "og:description",
        content:
          "Selected work in AI, developer tools, and product engineering by Aditya Shah.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-atmosphere">
      <Atmosphere />
      <Nav />
      <Hero />
      <Work />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}

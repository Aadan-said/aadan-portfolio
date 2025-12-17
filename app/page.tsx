import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import MiniAppsPreview from "../components/MiniAppsPreview";
import BlogPreview from "../components/BlogPreview";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <MiniAppsPreview />
      <BlogPreview />
      <Contact />
    </div>
  );
}

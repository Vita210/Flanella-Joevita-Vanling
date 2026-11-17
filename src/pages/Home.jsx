import Hero from "../sections/Hero";
import Marquee from "../sections/Marquee";
import About from "../sections/About";
import Process from "../sections/Process";
import Education from "../sections/Education";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import GraphicDesign from "../sections/GraphicDesign";
import Certifications from "../sections/Certifications";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Process />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <GraphicDesign />
      <Certifications />
    </>
  );
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./i18n";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import TechSkills from "./components/TechSkills/TechSkills";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const { offsetTop, offsetHeight } = section;
      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      ) {
        const id = `${section.id}`;
        window.history.replaceState(null, "", id);
        return;
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <TechSkills />
        <Education />
        <Projects />
        <Contact />
        <ScrollToTop />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

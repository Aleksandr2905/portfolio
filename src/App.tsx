import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import TechSkills from "./components/TechSkills/TechSkills";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
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
      {/* <Footer /> */}
    </>
  );
}

export default App;

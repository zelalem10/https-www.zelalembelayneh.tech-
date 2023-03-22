// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">ZELALEM BELAYNEH TSIGE</h6>
        <p>© All CopyRights Reserved 2023</p>
      </footer>
    </div>
  );
};

export default App;

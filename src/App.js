import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter basename={ process.env.PUBLIC_URL}>
    <Header />
      <Routes>
      
      <Route exact path="/" element={<Hero />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/skills" element={<Skills />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/experience" element={<Experience />} />
      <Route exact path="/contact" element={<Contact />} />
      {/* <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact /> */}
      
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

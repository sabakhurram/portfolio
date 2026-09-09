import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects.jsx";
import ProjectDetails from "./pages/ProjectDetails";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects/:projectSlug"
          element={<ProjectDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
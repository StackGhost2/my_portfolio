import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Journey from "./components/sections/Journey";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      {/* Keep the page sections in the same order as the navigation. */}
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Services />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;

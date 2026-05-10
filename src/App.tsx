/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Background from "./components/Background";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen selection:bg-brand-cyan selection:text-white">
        <ScrollProgress />
        <Background />
        <CustomCursor />
        <Navbar />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </SmoothScroll>
  );
}

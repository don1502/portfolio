
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Contact from './components/Contact.tsx';
import LazySection from './components/LazySection.tsx';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <Navbar />
      <Hero />
      <LazySection threshold={0.15}>
        <Experience />
      </LazySection>
      <LazySection threshold={0.1} delay={100}>
        <Projects />
      </LazySection>
      <LazySection threshold={0.1} delay={100}>
        <Skills />
      </LazySection>
      <LazySection threshold={0.1} delay={100}>
        <Contact />
      </LazySection>
    </div>
  );
}

export default App;

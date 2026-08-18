// src/pages/Home.jsx
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <section
        id="projects"
        style={{
          padding: '6rem 0',
          background: 'var(--bg-mid)',
          overflow: 'hidden',
        }}
      >
        <Projects />
      </section>
      <section
        id="about"
        style={{
          padding: '6rem 2rem',
          background: 'var(--bg-deep)',
        }}
      >
        <About />
      </section>
      <section
        id="contact"
        style={{
          padding: '6rem 2rem',
          background: 'var(--bg-mid)',
        }}
      >
        <Contact />
      </section>
    </>
  );
}
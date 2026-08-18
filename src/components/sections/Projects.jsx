// src/components/sections/Projects.jsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Nebula Studio',
    category: 'Brand / Web',
    description: 'Immersive digital brand experience for a creative collective.',
    color: '#c8a46e',
  },
  {
    id: 2,
    title: 'Atlas Maps',
    category: 'Data / UI',
    description: 'Interactive cartography tool with real-time geospatial data.',
    color: '#b85c3a',
  },
  {
    id: 3,
    title: 'Echo Sound',
    category: 'Audio / Design',
    description: 'Minimalist music streaming interface with spatial audio.',
    color: '#8a7a6a',
  },
  {
    id: 4,
    title: 'Pulse Dashboard',
    category: 'SaaS / Product',
    description: 'Analytics dashboard built for speed and clarity.',
    color: '#c8a46e',
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Horizontal scroll transforms: each project slides left
  const xTransform = useTransform(scrollYProgress, [0, 1], ['0%', `-${(projects.length - 1) * 50}%`]);

  return (
    <div
      ref={containerRef}
      style={{
        height: '200vh', // Two viewports tall — one for scroll, one for the horizontal slide
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-mid)',
      }}
    >
      {/* Sticky container that holds the horizontal row */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{
            display: 'flex',
            gap: '4rem',
            padding: '0 6rem',
            x: xTransform,
            willChange: 'transform',
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                minWidth: '600px',
                maxWidth: '700px',
                height: '65vh',
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                border: '1px solid rgba(200, 164, 110, 0.08)',
                transition: 'transform 0.3s var(--ease-smooth), box-shadow 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 40px 80px rgba(0,0,0,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '4px',
                  background: project.color,
                  borderRadius: '2px',
                  marginBottom: '2rem',
                }}
              />
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.8rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: project.color,
                  marginBottom: '1rem',
                }}
              >
                {project.category}
              </p>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  maxWidth: '90%',
                }}
              >
                {project.description}
              </p>
              <a
                href="#"
                style={{
                  marginTop: '2rem',
                  color: 'var(--text-primary)',
                  borderBottom: '2px solid var(--accent-gold)',
                  paddingBottom: '4px',
                  display: 'inline-block',
                  width: 'fit-content',
                  transition: 'color 0.2s, border-color 0.2s',
                  fontSize: '0.9rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-gold)';
                  e.currentTarget.style.borderColor = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.borderColor = 'var(--accent-gold)';
                }}
              >
                View case study →
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
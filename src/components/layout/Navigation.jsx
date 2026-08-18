// src/components/layout/Navigation.jsx
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1.5rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
        background: scrolled ? 'rgba(15, 13, 12, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200, 164, 110, 0.1)' : 'none',
      }}
    >
      <Link
        to="/"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
        }}
      >
        JN.
      </Link>

      <div style={{ display: 'flex', gap: '2.5rem', fontSize: '0.9rem' }}>
        <a href="#projects" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
          Work
        </a>
        <a href="#about" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
          About
        </a>
        <a href="#contact" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
          Contact
        </a>
      </div>
    </nav>
  );
}
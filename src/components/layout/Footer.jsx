// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      style={{
        padding: '3rem 3rem 2rem',
        borderTop: '1px solid rgba(200, 164, 110, 0.12)',
        background: 'var(--bg-deep)',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '2rem',
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
      }}
    >
      <span>© {new Date().getFullYear()} — Built with React & Vite</span>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link to="/terms" style={{ transition: 'color 0.2s' }}>
          Terms
        </Link>
        <Link to="/privacy" style={{ transition: 'color 0.2s' }}>
          Privacy
        </Link>
        <a
          href="https://github.com/datboijanith"
          target="_blank"
          rel="noopener noreferrer"
          style={{ transition: 'color 0.2s' }}
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
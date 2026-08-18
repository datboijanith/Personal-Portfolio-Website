// src/components/sections/Contact.jsx
export default function Contact() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '3rem',
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em',
        }}
      >
        Contact
      </h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.9 }}>
        Let's build something meaningful together.
        <br />
        <a
          href="mailto:hello@janith.dev"
          style={{
            color: 'var(--accent-gold)',
            borderBottom: '1px solid var(--accent-gold)',
            paddingBottom: '2px',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.6)}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
        >
          hello@janith.dev
        </a>
      </p>
    </div>
  );
}
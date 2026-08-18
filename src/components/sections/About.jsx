// src/components/sections/About.jsx
export default function About() {
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
        About
      </h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.9 }}>
        I'm Janith — a developer based somewhere between code and design.
        I believe the best digital experiences feel intuitive, thoughtful,
        and just a little bit unexpected.
        <br /><br />
        This portfolio is a living document of that philosophy. No generic
        taglines, no filler — just craft.
      </p>
    </div>
  );
}
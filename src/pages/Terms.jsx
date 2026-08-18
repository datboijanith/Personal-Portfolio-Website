// src/pages/Terms.jsx
export default function Terms() {
  return (
    <div style={{ padding: '10rem 4rem 6rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', marginBottom: '2rem' }}>
        Terms of Service
      </h1>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
        This is a placeholder. Replace with your actual Terms of Service.
        <br /><br />
        By using this site, you agree to respect the work and content presented here.
        All projects and code are © {new Date().getFullYear()}.
      </p>
    </div>
  );
}
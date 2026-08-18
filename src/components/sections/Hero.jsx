// src/components/sections/Hero.jsx
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const child = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  return (
    <section
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 6rem',
        background: 'var(--bg-deep)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle blurred geometry — no radial orbs, just a soft glow */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, rgba(200,164,110,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: '900px', position: 'relative', zIndex: 2 }}
      >
        <motion.p
          variants={child}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent-gold)',
            marginBottom: '1.5rem',
          }}
        >
          Developer & Creative
        </motion.p>

        <motion.h1
          variants={child}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 10vw, 6rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
          }}
        >
          Building digital
          <br />
          <span style={{ color: 'var(--accent-gold)' }}>that resonates.</span>
        </motion.h1>

        <motion.p
          variants={child}
          style={{
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            maxWidth: '500px',
            marginTop: '2rem',
            lineHeight: 1.8,
          }}
        >
          I'm Janith — a developer who crafts immersive, human-centered
          experiences. No fluff, just meaningful code and design.
        </motion.p>

        <motion.a
          variants={child}
          href="#projects"
          style={{
            display: 'inline-block',
            marginTop: '3rem',
            padding: '0.9rem 2.8rem',
            background: 'var(--accent-gold)',
            color: 'var(--bg-deep)',
            fontWeight: 600,
            borderRadius: 'var(--radius-sm)',
            transition: 'transform 0.25s var(--ease-smooth), box-shadow 0.25s ease',
            cursor: 'pointer',
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 20px 40px rgba(200, 164, 110, 0.25)',
          }}
          whileTap={{ scale: 0.97 }}
        >
          View Projects
        </motion.a>
      </motion.div>
    </section>
  );
}
'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse]     = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    let tScroll = 0, cScroll = 0;
    let tMx = 0, tMy = 0, cMx = 0, cMy = 0;
    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      cScroll = lerp(cScroll, tScroll, 0.07);
      cMx     = lerp(cMx, tMx, 0.05);
      cMy     = lerp(cMy, tMy, 0.05);
      setScrollY(cScroll);
      setMouse({ x: cMx, y: cMy });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const onScroll = () => { tScroll = window.scrollY; };
    const onMouse  = (e) => {
      tMx = (e.clientX / window.innerWidth  - 0.5) * 24;
      tMy = (e.clientY / window.innerHeight - 0.5) * 16;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouse);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  const bgTransform      = `translate(${mouse.x * 0.4}px, calc(${scrollY * 0.42}px + ${mouse.y * 0.3}px)) scale(1.14)`;
  const contentTransform = `translateY(${-scrollY * 0.1}px)`;

  return (
    <section className={styles.hero} id="hero">

      {/* Parallax BG */}
      <div className={styles.bg} style={{ transform: bgTransform }} aria-hidden="true" />

      {/* Overlays */}
      <div className={styles.overlayTop}    aria-hidden="true" />
      <div className={styles.overlayBottom} aria-hidden="true" />

      {/* ── Watermark logo ── */}
      <img
        src="/ignite-logo.png"
        alt=""
        className={styles.watermark}
        aria-hidden="true"
      />

      {/* ── Desert silhouettes ── */}
      <img src="/tree-t.png"  alt="" className={styles.silhouetteTree}       aria-hidden="true" />
      <img src="/camel-t.png" alt="" className={styles.silhouetteCamel}      aria-hidden="true" />
      <img src="/camel-t.png" alt="" className={styles.silhouetteCamelFlip}  aria-hidden="true" />

      {/* ── Left edge: vertical IGNITE + horizontal 2026 ── */}
      <div className={styles.leftTypo} style={{ transform: contentTransform }}>
        <h1 className={styles.igniteVert}>IGNITE</h1>
        <span className={styles.yearHoriz}>2026</span>
      </div>

      {/* ── Centre content ── */}
      <div className={styles.inner} style={{ transform: contentTransform }}>

        {/* Pills */}
        <div className={styles.pills}>
          <span className={styles.pill}>
            <span className={styles.liveDot} aria-hidden="true" />
            Global Summit
          </span>
          <span className={styles.pill}>📍 Dubai, UAE</span>
          <span className={styles.pill}>2026 · By PIEDS × BITS Pilani</span>
        </div>

        {/* Tagline */}
        <p className={styles.tagline}>
          Building Tomorrow,&nbsp;<em className={styles.em}>Together.</em>
        </p>

        {/* Sub */}
        <p className={styles.sub}>
          IGNITE is the flagship global platform by PIEDS — connecting founders,
          investors, and industry leaders to shape the future of entrepreneurship.
        </p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <a href="#tickets" className={styles.ctaPrimary}>
            Apply Now
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#about" className={styles.ctaSecondary}>See how it works</a>
        </div>

        {/* Social proof */}
        <div className={styles.proof}>
          <div className={styles.avatars}>
            {[
              'https://framerusercontent.com/images/19wGOlJQp54zgd3vWysk6Wqafk.png',
              'https://framerusercontent.com/images/FsNbsa9jCpD7375FjsQuEO8JBw.webp',
              'https://framerusercontent.com/images/Novsmjw6IIhKDVyD7ZI2i4sAsE.webp',
              'https://framerusercontent.com/images/IVA2zVsD7sWebTDntsDdlviCksQ.webp',
            ].map((src, i) => (
              <img key={i} src={src} alt="" className={styles.avatar} style={{ zIndex: 4 - i }} />
            ))}
          </div>
          <p className={styles.proofText}>
            Joined by <strong>950+ changemakers</strong> across previous editions
          </p>
        </div>

      </div>

      {/* Stats bar */}
      <div className={styles.statsBar} style={{ transform: contentTransform }}>
        {[
          ['6',    'Days of building'],
          ['100',  'Selected innovators'],
          ['20+',  'MVPs launched'],
          ['₹10L+','Equity-free grants'],
        ].map(([v, l]) => (
          <div key={l} className={styles.stat}>
            <span className={styles.statVal}>{v}</span>
            <span className={styles.statLbl}>{l}</span>
          </div>
        ))}
      </div>

      {/* Scroll cue */}
      <div className={styles.scrollCue} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>

    </section>
  );
}

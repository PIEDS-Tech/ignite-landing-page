'use client';

import { useState, useEffect } from 'react';
import siteContent from '@/data/siteContent';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { nav } = siteContent;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoText}>{nav.logoText}</span>
          <span className={styles.logoYear}>{nav.logoYear}</span>
        </a>

        <div className={styles.navLinks}>
          {nav.links.map((link) => (
            <a key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </div>

        <a href={nav.ctaHref} className={styles.ctaButton}>
          {nav.ctaText}
        </a>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuInner}>
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.mobileLink}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
          <a href={nav.ctaHref} className={styles.mobileCta} onClick={handleLinkClick}>
            {nav.ctaText}
          </a>
        </div>
      </div>
    </nav>
  );
}

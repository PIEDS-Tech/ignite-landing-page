'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import siteContent from '@/data/siteContent';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { nav } = siteContent;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const pathname = usePathname();
  const onHome   = pathname === '/';

  // Prefix anchor links with '/' when not on the homepage
  const resolveHref = (href) => {
    if (href.startsWith('#')) return onHome ? href : `/${href}`;
    return href;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <img src="/ignite-logo.png" alt="IGNITE" className={styles.logoIcon} />
          <span className={styles.logoText}>IGNITE</span>
        </a>

        <div className={styles.navLinks}>
          {nav.links.map((link) => (
            <a key={link.label} href={resolveHref(link.href)} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </div>

        <a href={resolveHref(nav.ctaHref)} className={styles.ctaBtn}>{nav.ctaText}</a>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuInner}>
          {nav.links.map((link) => (
            <a key={link.label} href={resolveHref(link.href)} className={styles.mobileLink} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
          <a href={resolveHref(nav.ctaHref)} className={styles.mobileCta} onClick={handleLinkClick}>
            {nav.ctaText}
          </a>
        </div>
      </div>
    </nav>
  );
}

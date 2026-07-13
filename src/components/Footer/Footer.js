import siteContent from '@/data/siteContent';
import styles from './Footer.module.css';

export default function Footer() {
  const { footer, nav } = siteContent;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandText} aria-hidden="true">IGNITE</div>

        <p className={styles.tagline}>{footer.tagline}</p>

        <div className={styles.links}>
          {footer.links.map((link, i) => (
            <a key={i} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </div>

        <div className={styles.socialLinks}>
          {footer.social.map((social, i) => (
            <a key={i} href={social.href} className={styles.socialLink}>
              {social.label}
            </a>
          ))}
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>{footer.copyright}</p>
          <a href="#hero" className={styles.backToTop}>
            Back to top
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.glowOrb} aria-hidden="true" />
    </footer>
  );
}

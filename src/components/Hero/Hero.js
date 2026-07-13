import siteContent from '@/data/siteContent';
import styles from './Hero.module.css';

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.badge}>{hero.badge}</div>

        <h1 className={styles.headline}>
          {hero.headline}
          <br />
          <span className={styles.headlineAccent}>{hero.headlineAccent}</span>
        </h1>

        <p className={styles.description}>{hero.description}</p>

        <div className={styles.ctas}>
          <a href={hero.ctaPrimary.href} className={styles.ctaPrimary}>
            {hero.ctaPrimary.label}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href={hero.ctaSecondary.href} className={styles.ctaSecondary}>
            {hero.ctaSecondary.label}
          </a>
        </div>

        <div className={styles.stats}>
          {hero.stats.map((stat, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

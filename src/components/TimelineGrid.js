import styles from './TimelineGrid.module.css';

export default function TimelineGrid() {
  return (
    <section id="agenda" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>Event Timeline</div>
        <h2 className={styles.title}>IGNITE 2026 Timeline</h2>

        <div className={styles.timeline}>
          <div className={styles.row}>
            <div className={styles.time}>09:30 – 10:15</div>
            <div className={styles.content}>
              <h3 className={styles.sessionTitle}>Opening Keynote: The Future of Global Entrepreneurship</h3>
              <p className={styles.sessionDesc}>A visionary address on how founders and innovators are reshaping industries and economies across the world.</p>
              <div className={styles.tags}>
                <span>Keynote</span>
                <span>Global Vision</span>
              </div>
            </div>
            <div className={styles.meta}>
              <img src="https://framerusercontent.com/images/19wGOlJQp54zgd3vWysk6Wqafk.png" alt="" className={styles.avatar} />
              <div className={styles.metaText}>
                <span className={styles.hostedBy}>Keynote Speaker</span>
                <span className={styles.duration}>Duration: 45 mins</span>
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.time}>11:30 – 12:15</div>
            <div className={styles.content}>
              <h3 className={styles.sessionTitle}>Startup Showcase & Investor Interactions</h3>
              <p className={styles.sessionDesc}>Selected startups present their solutions to investors, mentors, and the global IGNITE community. Curated one-on-one sessions with active VC panels.</p>
              <div className={styles.tags}>
                <span>Startups</span>
                <span>Investors</span>
              </div>
            </div>
            <div className={styles.meta}>
              <img src="https://framerusercontent.com/images/FsNbsa9jCpD7375FjsQuEO8JBw.webp" alt="" className={styles.avatar} />
              <div className={styles.metaText}>
                <span className={styles.hostedBy}>Startup Founders & VCs</span>
                <span className={styles.duration}>Duration: 45 mins</span>
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.time}>15:00 – 17:00</div>
            <div className={styles.content}>
              <h3 className={styles.sessionTitle}>Grand Finale — Global Pitch & Awards</h3>
              <p className={styles.sessionDesc}>Finalists pitch to a global jury. Winners receive equity-free grants, mentorship, and international visibility to accelerate their ventures.</p>
              <div className={styles.tags}>
                <span>Pitching</span>
                <span>Awards</span>
              </div>
            </div>
            <div className={styles.meta}>
              <img src="https://framerusercontent.com/images/Novsmjw6IIhKDVyD7ZI2i4sAsE.webp" alt="" className={styles.avatar} />
              <div className={styles.metaText}>
                <span className={styles.hostedBy}>Global Jury Panel</span>
                <span className={styles.duration}>Duration: 2 hrs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

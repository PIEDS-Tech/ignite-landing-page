import styles from './TimelineGrid.module.css';

export default function TimelineGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>Event Timeline</div>
        <h2 className={styles.title}>IGNITE Timeline</h2>
        
        <div className={styles.timeline}>
          <div className={styles.row}>
            <div className={styles.time}>13:30 – 14:30</div>
            <div className={styles.content}>
              <h3 className={styles.sessionTitle}>Hands-On Workshops</h3>
              <p className={styles.sessionDesc}>Interactive sessions focused on building workflows, integrating AI into products, and working responsibly with AI.</p>
              <div className={styles.tags}>
                <span>Workshop</span>
                <span>Hands-on</span>
              </div>
            </div>
            <div className={styles.meta}>
              <img src="https://framerusercontent.com/images/19wGOlJQp54zgd3vWysk6Wqafk.png" alt="" className={styles.avatar} />
              <div className={styles.metaText}>
                <span className={styles.hostedBy}>Hosted by <strong>Mike Johasa</strong></span>
                <span className={styles.duration}>Duration: 60 mins</span>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.time}>12:45 – 13:30</div>
            <div className={styles.content}>
              <h3 className={styles.sessionTitle}>Lunch & Peer Meetups</h3>
              <p className={styles.sessionDesc}>Join small, topic-focused tables to discuss shared challenges and ideas.</p>
              <div className={styles.tags}>
                <span>Networking</span>
                <span>Meetups</span>
              </div>
            </div>
            <div className={styles.meta}>
              <img src="https://framerusercontent.com/images/FsNbsa9jCpD7375FjsQuEO8JBw.webp" alt="" className={styles.avatar} />
              <div className={styles.metaText}>
                <span className={styles.hostedBy}>Hosted by <strong>Steve Angelo</strong></span>
                <span className={styles.duration}>Duration: 45 mins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

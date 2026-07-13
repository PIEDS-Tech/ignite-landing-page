import styles from './SpeakersGrid.module.css';
import siteContent from '@/data/siteContent';

export default function SpeakersGrid() {
  const { speakers } = siteContent;
  const colors = ['#df6535', '#7a8c54', '#8a857e', '#94668b'];
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>Past Speakers & Panelists</div>
        <div className={styles.header}>
          <h2 className={styles.title}>Meet the Inspiring Voices of IGNITE.</h2>
          <div className={styles.descBlock}>
            <p className={styles.desc}>{speakers.description}</p>
          </div>
        </div>
        <div className={styles.grid}>
          {speakers.list.map((s, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imgWrapper} style={{ backgroundColor: colors[i % colors.length] }}>
                <img src={s.image} alt={s.name} className={styles.img} />
              </div>
              <h3 className={styles.name}>{s.name}</h3>
              <p className={styles.role}>{s.role}{s.company ? `, ${s.company}` : ''}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

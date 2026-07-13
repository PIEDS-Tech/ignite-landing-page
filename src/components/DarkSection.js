import styles from './DarkSection.module.css';

export default function DarkSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>Who should attend</div>
        <div className={styles.content}>
          <h2 className={styles.title}>Built for Students & Early-Stage Founders.</h2>
          <div className={styles.descBlock}>
            <p className={styles.desc}>Whether you’re a student with a big idea or an early-stage founder ready to build — IGNITE is your launchpad to go from zero to startup.</p>
          </div>
        </div>
        <div className={styles.grid}>
          {[
            { n: '01', title: 'Students', desc: 'Bring your idea and turn it into a validated, working MVP in just 6 days — surrounded by peers, mentors, and a community that gets it.' },
            { n: '02', title: 'Early-Stage Founders', desc: 'Pressure-test your concept, accelerate your build, and get direct access to investors and operators who can help you grow faster.' },
            { n: '03', title: 'Techies', desc: 'Move beyond side projects — build a real product in a structured, high-energy environment with the right mentorship to ship fast.' },
            { n: '04', title: 'Entrepreneurs', desc: 'Sharpen your vision, validate your market, and leave with frameworks and a network that will serve you long after the sprint ends.' },
            { n: '05', title: 'Innovators', desc: 'IGNITE is for anyone who believes in building over talking — students, founders, and tinkerers ready to go from idea to launch.', img: 'https://framerusercontent.com/images/EiaCvXKsU5JQTGRFzM9pDcS4sk.svg' }
          ].map((item, i) => (
            <div key={i} className={`${styles.card} ${item.img ? styles.cardLarge : ''}`}>
              <div className={styles.cardHeader}>
                <span className={styles.num}>{item.n}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
              <p className={styles.cardDesc}>{item.desc}</p>
              {item.img && <img src={item.img} alt="" className={styles.cardImg} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

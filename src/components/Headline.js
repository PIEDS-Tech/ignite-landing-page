import styles from './Headline.module.css';

export default function Headline() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>
          <span className={styles.corners}></span>
          About BITS Pilani
        </div>
        <h2 className={styles.text}>
          India's top startup{' '}
          <img src="https://framerusercontent.com/images/JbPxwvJBrFJUIUnPPorAlnIfpT4.png" className={styles.inlineImg} alt="" />
          {' '}sprint where innovators build and launch their MVP in{' '}
          <img src="https://framerusercontent.com/images/8uIHbH2tUvdXW29Doa9An2Os9o.png" className={styles.inlineImg} alt="" />
          {' '}just six <span className={styles.faded}>days.</span>
        </h2>
      </div>
    </section>
  );
}

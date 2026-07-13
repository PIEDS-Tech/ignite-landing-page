import styles from './Impact.module.css';

export default function Impact() {
  const items = [
    { t: "950+ Founders", c: "var(--color-text)" },
    { t: "60+ Active Investors", c: "var(--color-text-muted)" },
    { t: "₹10L+ Equity-Free Grants", c: "var(--color-text)" },
    { t: "300+ Startups Incubated", c: "var(--color-text-muted)" },
    { t: "Global Stage · Dubai 2026", c: "var(--color-text)" },
  ];
  return (
    <section id="impact" className={styles.section}>
      <div className={styles.label}>Legacy of IGNITE</div>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {[...items, ...items, ...items].map((item, i) => (
            <span key={i} className={styles.text} style={{color: item.c}}>{item.t}</span>
          ))}
        </div>
      </div>
      <div className={styles.images}>
         <img src="https://framerusercontent.com/images/CDhYOBo0RCgwcpOfMlDqVGPRzHo.jpg" alt="" className={styles.img} />
         <img src="https://framerusercontent.com/images/M7Xh8DUZcRnsPSVjcv1lVqdCtU.jpg" alt="" className={styles.img} />
         <img src="https://framerusercontent.com/images/LZYY71GfAAmwFGFURcEc4dfpoY.jpg" alt="" className={styles.img} />
      </div>
    </section>
  );
}

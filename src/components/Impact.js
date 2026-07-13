import styles from './Impact.module.css';

export default function Impact() {
  const items = [
    { t: "950+ Startups", c: "#3d2800" },
    { t: "$300K Raised by Alchemyst AI", c: "rgba(61,40,0,0.3)" },
    { t: "60+ VCs", c: "#3d2800" },
    { t: "₹10L+ Equity-Free Grants", c: "rgba(61,40,0,0.3)" }
  ];
  return (
    <section className={styles.section}>
      <div className={styles.label}>Impact Of IGNITE'24</div>
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

'use client';

import { useEffect, useState } from 'react';
import styles from './DarkSection.module.css';

const items = [
  { n: '01', title: 'Students', desc: 'Bring your idea and turn it into a validated, working MVP in just 6 days — surrounded by peers, mentors, and a community that gets it.' },
  { n: '02', title: 'Early-Stage Founders', desc: 'Pressure-test your concept, accelerate your build, and get direct access to investors and operators who can help you grow faster.' },
  { n: '03', title: 'Techies', desc: 'Move beyond side projects — build a real product in a structured, high-energy environment with the right mentorship to ship fast.' },
  { n: '04', title: 'Entrepreneurs', desc: 'Sharpen your vision, validate your market, and leave with frameworks and a network that will serve you long after the sprint ends.' },
  { n: '05', title: 'Innovators', desc: 'IGNITE is for anyone who believes in building over talking — students, founders, and tinkerers ready to go from idea to launch.' },
];

const N = items.length;
// How many cards visible each side of center
const SIDE = 2;
const VISIBLE = SIDE * 2 + 1; // 5

// Per-position visual config
const POSITIONS = {
  '-2': { scale: 0.70, opacity: 0.30, x: -520 },
  '-1': { scale: 0.85, opacity: 0.65, x: -270 },
   '0': { scale: 1.00, opacity: 1.00, x:    0 },
   '1': { scale: 0.85, opacity: 0.65, x:  270 },
   '2': { scale: 0.70, opacity: 0.30, x:  520 },
};

function cardStyle(offset) {
  const cfg = POSITIONS[String(offset)] ?? { scale: 0.5, opacity: 0, x: offset * 260 };
  return {
    transform: `translateX(${cfg.x}px) scale(${cfg.scale})`,
    opacity: cfg.opacity,
    zIndex: 10 - Math.abs(offset),
    transition: 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.55s ease',
  };
}

export default function DarkSection() {
  // `center` is the index of the item currently in the middle
  // Decrementing center shifts all cards rightward (left-to-right flow)
  const [center, setCenter] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCenter(c => (c + 1) % N);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  // Build the visible window: offsets -SIDE … 0 … +SIDE
  const slots = Array.from({ length: VISIBLE }, (_, i) => {
    const offset  = i - SIDE;                          // -2 to +2
    const itemIdx = ((center + offset) % N + N) % N;  // wrap around
    return { offset, itemIdx, item: items[itemIdx] };
  });

  return (
    <section id="who" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>Who should attend</div>
        <div className={styles.content}>
          <h2 className={styles.title}>Built for Students &amp; Early-Stage Founders.</h2>
          <div className={styles.descBlock}>
            <p className={styles.desc}>Whether you're a student with a big idea or an early-stage founder ready to build — IGNITE is your launchpad to go from zero to startup.</p>
          </div>
        </div>
      </div>

      {/* Full-width carousel */}
      <div className={styles.carousel}>
        <div className={styles.fadeLeft}  aria-hidden="true" />
        <div className={styles.fadeRight} aria-hidden="true" />

        <div className={styles.stage}>
          {slots.map(({ offset, itemIdx, item }) => (
            <div
              key={itemIdx}
              className={`${styles.card} ${offset === 0 ? styles.cardCenter : ''}`}
              style={cardStyle(offset)}
            >
              <span className={styles.num}>{item.n}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className={styles.dots}>
          {items.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === center ? styles.dotActive : ''}`}
              onClick={() => setCenter(i)}
              aria-label={`Go to ${items[i].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

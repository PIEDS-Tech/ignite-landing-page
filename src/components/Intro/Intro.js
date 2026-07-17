'use client';
import { useEffect, useRef, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
  useMapContext,
} from 'react-simple-maps';
import styles from './Intro.module.css';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const PILANI = [75.6, 28.37]; // BITS Pilani — [lon, lat]
const DUBAI  = [55.3, 25.2];  // Dubai, UAE

// Rendered inside ComposableMap so it can call useMapContext()
function FlightLayer({ flying, landed }) {
  const { projection } = useMapContext();

  const [pilX, pilY] = projection(PILANI);
  const [dubX, dubY] = projection(DUBAI);

  // Arc control point dips south over the Arabian Sea
  const cpX = (pilX + dubX) / 2;
  const cpY = (pilY + dubY) / 2 + 90;

  const flightPath = `M ${pilX.toFixed(1)} ${pilY.toFixed(1)} Q ${cpX.toFixed(1)} ${cpY.toFixed(1)} ${dubX.toFixed(1)} ${dubY.toFixed(1)}`;

  return (
    <g>
      {/* Animated route line */}
      <path
        className={`${styles.route} ${flying ? styles.routeDraw : ''}`}
        d={flightPath}
        fill="none"
        stroke="rgba(255,210,160,0.65)"
        strokeWidth="1.5"
        strokeDasharray="480"
        strokeDashoffset="480"
        strokeLinecap="round"
      />

      {/* ── Pilani marker ── */}
      <g transform={`translate(${pilX},${pilY})`}>
        <circle className={styles.pulse} r="6"
          fill="none" stroke="rgba(255,210,160,0.5)" strokeWidth="1.5" />
        <circle r="4.5" fill="rgba(255,210,160,0.9)" />
        <circle r="2" fill="#fff" />
      </g>
      <text x={pilX + 9} y={pilY - 5}  className={styles.cityLabel}>Pilani</text>
      <text x={pilX + 9} y={pilY + 9}  className={styles.countryLabel}>India</text>

      {/* ── Dubai marker ── */}
      <g transform={`translate(${dubX},${dubY})`}>
        <circle
          className={`${styles.pulse} ${landed ? styles.pulseLand : ''}`}
          r="6" fill="none" stroke="rgba(255,210,160,0.5)" strokeWidth="1.5"
        />
        <circle r="4.5" fill="rgba(255,210,160,0.9)" />
        <circle r="2" fill="#fff" />
      </g>
      <text x={dubX + 9} y={dubY - 5}  className={styles.cityLabel}>Dubai</text>
      <text x={dubX + 9} y={dubY + 9}  className={styles.countryLabel}>UAE</text>

      {/* ── Paper plane ── */}
      {flying && <AnimatedPlane path={flightPath} />}

      {/* ── Arrival badge ── */}
      {landed && (
        <g className={styles.arrivalGroup}>
          <text
            className={styles.arrivalText}
            x="450" y="478"
            textAnchor="middle"
          >
            ✦&nbsp; IGNITE 2026 · Dubai &nbsp;✦
          </text>
        </g>
      )}
    </g>
  );
}

// Separate component so useEffect fires on mount (when flying becomes true)
function AnimatedPlane({ path }) {
  const animRef = useRef(null);
  useEffect(() => {
    if (animRef.current) animRef.current.beginElement();
  }, []);

  return (
    <g className={styles.plane}>
      {/* Plane body points +X; rotate="auto" aligns nose to path tangent */}
      <polygon points="0,-8 16,0 0,5" fill="white" opacity="0.95" />
      <polygon points="0,-8 0,5 -5,2"  fill="rgba(255,210,160,0.8)" />
      <animateMotion
        ref={animRef}
        dur="2.3s"
        begin="indefinite"
        fill="freeze"
        path={path}
        rotate="auto"
        calcMode="spline"
        keyTimes="0;1"
        keySplines="0.25 0 0.75 1"
      />
    </g>
  );
}

export default function Intro({ onComplete }) {
  const [phase, setPhase] = useState('map');
  const cb = useRef(onComplete);
  useEffect(() => { cb.current = onComplete; }, [onComplete]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('fly'),  900),
      setTimeout(() => setPhase('land'), 3200),
      setTimeout(() => setPhase('exit'), 3750),
      setTimeout(() => cb.current(),    4350),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const flying  = ['fly', 'land', 'exit'].includes(phase);
  const landed  = ['land', 'exit'].includes(phase);
  const exiting = phase === 'exit';

  const skip = () => {
    setPhase('exit');
    setTimeout(() => cb.current(), 650);
  };

  return (
    <div
      className={`${styles.overlay} ${exiting ? styles.exit : ''}`}
      role="presentation"
    >
      <ComposableMap
        className={styles.map}
        width={900}
        height={500}
        projectionConfig={{
          center: [65, 25],
          scale: 720,
        }}
      >
        {/* Outer sphere */}
        <Sphere stroke="rgba(255,255,255,0.06)" strokeWidth={0.5} fill="none" />

        {/* Lat / lon grid */}
        <Graticule stroke="rgba(255,255,255,0.04)" strokeWidth={0.5} />

        {/* World countries */}
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map(geo => {
              const id    = parseInt(geo.id);
              const isIND = id === 356;
              const isUAE = id === 784;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill:        isIND || isUAE ? 'rgba(255,210,160,0.11)' : 'rgba(255,255,255,0.05)',
                      stroke:      isIND || isUAE ? 'rgba(255,210,160,0.28)' : 'rgba(255,255,255,0.11)',
                      strokeWidth: 0.5,
                      outline:     'none',
                    },
                    hover:   { outline: 'none' },
                    pressed: { outline: 'none' },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* Animated flight layer (uses useMapContext inside) */}
        <FlightLayer flying={flying} landed={landed} />
      </ComposableMap>

      {/* Logo watermark */}
      <div className={styles.logoWrap}>
        <img src="/ignite-logo.png" alt="" className={styles.logo} />
      </div>

      {/* Skip */}
      <button className={styles.skip} onClick={skip} aria-label="Skip intro">
        skip
      </button>
    </div>
  );
}

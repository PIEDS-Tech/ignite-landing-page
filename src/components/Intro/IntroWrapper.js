'use client';
import { useState } from 'react';
import Intro from './Intro';

export default function IntroWrapper() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return <Intro onComplete={() => setShow(false)} />;
}

import framerContent from '@/data/framerContent';

export const metadata = {
  title: 'IGNITE 26 - India\'s Most Intense Startup Sprint',
  description: '6 Days. 100 Innovators. 20+ MVPs. Build and launch your MVP from the beaches of Goa.',
};

export default function Home() {
  return (
    <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: framerContent }} />
  );
}

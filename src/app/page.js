import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features';
import Headline from '@/components/Headline';
import DarkSection from '@/components/DarkSection';
import SpeakersGrid from '@/components/SpeakersGrid';
import Impact from '@/components/Impact';
import TimelineGrid from '@/components/TimelineGrid';
import Tickets from '@/components/Tickets/Tickets';
import Sponsors from '@/components/Sponsors/Sponsors';
import Venue from '@/components/Venue/Venue';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <Features />
      <Headline />
      <DarkSection />
      <SpeakersGrid />
      <Impact />
      <TimelineGrid />
      {/* <Tickets /> */}
      <Venue />
      <Footer />
    </>
  );
}

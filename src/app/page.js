import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Sponsors from '@/components/Sponsors/Sponsors';
import About from '@/components/About/About';
import Speakers from '@/components/Speakers/Speakers';
import Agenda from '@/components/Agenda/Agenda';
import Tickets from '@/components/Tickets/Tickets';
import Venue from '@/components/Venue/Venue';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sponsors />
        <About />
        <Speakers />
        <Agenda />
        <Tickets />
        <Venue />
      </main>
      <Footer />
    </>
  );
}

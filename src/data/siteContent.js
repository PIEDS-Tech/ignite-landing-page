const siteContent = {
  meta: {
    title: 'IGNITE 2026 — Building Tomorrow, Together',
    description: 'IGNITE is the flagship global innovation and entrepreneurship platform by PIEDS, bringing together visionary founders, investors, and industry leaders to shape the future.',
    ogImage: 'https://framerusercontent.com/images/7nSs7VnwPoPuE8VzDBzu3tvMi8.jpg',
  },
  nav: {
    logoText: 'IGNITE',
    logoYear: '2026',
    links: [
      { label: 'About',    href: '#about' },
      { label: 'Speakers', href: '#speakers' },
      { label: 'Agenda',   href: '#agenda' },
      { label: 'Venue',    href: '#venue' },
      { label: 'About PIEDS',    href: '/pieds' },
    ],
    ctaText: 'APPLY NOW',
    ctaHref: '#venue',
  },
  hero: {
    badge: 'Dubai · 2026',
    headline: 'Building Tomorrow,',
    headlineAccent: 'Together.',
    description: 'IGNITE is the flagship global innovation and entrepreneurship platform by PIEDS — bringing together visionary founders, investors, industry leaders, and aspiring entrepreneurs to exchange ideas, build connections, and shape the future.',
    ctaPrimary: { label: 'Apply Now', href: '#venue' },
    ctaSecondary: { label: 'Learn More', href: '#about' },
    stats: [
      { value: '6',    label: 'Days of building' },
      { value: '100',  label: 'Selected innovators' },
      { value: '20+',  label: 'MVPs launched' },
      { value: '₹10L+', label: 'Equity-free grants' },
    ],
  },
  about: {
    label: 'About IGNITE',
    title: 'Ignite: The Startup',
    titleAccent: 'Catalyst.',
    description: 'IGNITE creates opportunities for startups, businesses, and changemakers to connect with global ecosystems — through keynote sessions, panel discussions, startup showcases, and curated networking experiences that inspire innovation and drive real-world impact.',
    audiences: [
      {
        title: 'Connect',
        description: 'Exchange ideas with visionary founders, investors, industry leaders, policymakers, and aspiring entrepreneurs from around the world.',
        icon: 'https://framerusercontent.com/images/Ow4AoJVwl2xpuCj7w4BHRB28ysc.svg',
      },
      {
        title: 'Build',
        description: 'Forge meaningful partnerships through hands-on workshops, startup showcases, and curated investor interactions that drive real-world impact.',
        icon: 'https://framerusercontent.com/images/o5c8ZUWfB40t6RvCTk7KKnM7l5I.svg',
      },
      {
        title: 'Shape',
        description: 'Be part of a platform that bridges industries, cultures, and entrepreneurial ecosystems — where ideas become opportunities and the future is built.',
        icon: 'https://framerusercontent.com/images/H3QMF2I41FYBAUQa9OyXUquJJxQ.svg',
      },
    ],
  },
  speakers: {
    label: 'Past Speakers & Panelists',
    title: 'Inspiring Voices',
    titleAccent: 'of IGNITE.',
    description: 'Visionary founders, active investors, policymakers, and global industry leaders — hand-picked changemakers who have built, scaled, and shaped the world\'s most ambitious ventures.',
    list: [
      { name: 'Awais Ahmed',   role: 'Founder & CEO',       company: 'Pixxel',            image: 'https://framerusercontent.com/images/19wGOlJQp54zgd3vWysk6Wqafk.png' },
      { name: 'Abhishek Shah', role: 'Investor & Advisor',  company: '',                  image: 'https://framerusercontent.com/images/FsNbsa9jCpD7375FjsQuEO8JBw.webp' },
      { name: 'Sanker Bora',   role: 'Co-founder',          company: 'DealShare & Myntra', image: 'https://framerusercontent.com/images/Novsmjw6IIhKDVyD7ZI2i4sAsE.webp' },
      { name: 'Aneesh Pai',    role: 'Entrepreneur & Mentor', company: '',                image: 'https://framerusercontent.com/images/IVA2zVsD7sWebTDntsDdlviCksQ.webp' },
    ],
  },
  agenda: {
    label: 'Event Timeline',
    title: 'IGNITE',
    titleAccent: 'Timeline',
    description: '',
    days: [
      {
        id: 'day-1',
        label: 'DAY 1',
        date: 'Innovation Summit',
        sessions: [
          { time: '09:00 – 09:30', title: 'Registration & Welcome', description: 'Check in, connect with fellow innovators, and set the tone for a transformative summit.', speaker: 'IGNITE Team', duration: '30 mins', tags: ['Introduction', 'Networking'] },
          { time: '09:30 – 10:15', title: 'Opening Keynote: The Future of Global Entrepreneurship', description: 'A visionary address on how founders and innovators are reshaping industries and economies across the world.', speaker: 'Keynote Speaker', duration: '45 mins', tags: ['Keynote', 'Global Vision'] },
          { time: '10:30 – 11:15', title: 'Panel: Bridging Ecosystems — From Local to Global', description: 'Industry leaders discuss how entrepreneurial ecosystems across borders collaborate to amplify impact.', speaker: 'Panel of Leaders', duration: '45 mins', tags: ['Panel', 'Ecosystems'] },
          { time: '11:30 – 12:15', title: 'Startup Showcase Round 1', description: 'Selected startups present their solutions to investors, mentors, and the global IGNITE community.', speaker: 'Startup Founders', duration: '45 mins', tags: ['Startups', 'Pitching'] },
          { time: '14:00 – 15:30', title: 'Investor Interaction Sessions', description: 'Curated one-on-one and small group sessions connecting founders directly with active venture capital panels.', speaker: 'VC & Angel Investors', duration: '90 mins', tags: ['Investors', 'Funding'] },
        ],
      },
      {
        id: 'day-2',
        label: 'DAY 2',
        date: 'Build & Launch',
        sessions: [
          { time: '09:30 – 10:00', title: 'Morning Networking Breakfast', description: 'Informal conversations with fellow founders, investors, and industry leaders over breakfast.', speaker: 'All Attendees', duration: '30 mins', tags: ['Networking', 'Breakfast'] },
          { time: '10:00 – 10:45', title: 'Keynote: Scaling Ventures Across Borders', description: 'How visionary founders navigate global markets, cultural nuances, and cross-border partnerships to scale.', speaker: 'Global Founder', duration: '45 mins', tags: ['Keynote', 'Scaling'] },
          { time: '11:00 – 11:45', title: 'Workshop: Building for Global Impact', description: 'Hands-on workshop exploring frameworks for designing ventures that solve problems at a global scale.', speaker: 'Industry Expert', duration: '45 mins', tags: ['Workshop', 'Impact'] },
          { time: '12:00 – 12:45', title: 'Panel: Policymakers & Entrepreneurs', description: 'A candid conversation between policymakers and founders on enabling ecosystems for innovation.', speaker: 'Policymakers & Founders', duration: '45 mins', tags: ['Policy', 'Ecosystem'] },
          { time: '15:00 – 17:00', title: 'Grand Finale — Startup Pitch & Awards', description: 'Finalists pitch to a global jury. Winners receive equity-free grants, mentorship, and international visibility.', speaker: 'Top Finalists', duration: '2 hrs', tags: ['Pitching', 'Awards'] },
        ],
      },
    ],
  },
  tickets: {
    label: 'Get Selected',
    title: 'Secure Your Spot at',
    titleAccent: 'IGNITE 2026',
    description: 'IGNITE 2026 is a highly selective global summit in Dubai. Applications are open to student-led teams, early-stage founders, and innovators with a drive to solve real-world problems.',
    plans: [
      {
        name: 'Delegate Pass',
        price: '$299',
        description: 'Full access to the IGNITE 2026 global summit.',
        features: ['Access to all keynotes and panels', 'Startup showcase attendance', 'Networking sessions', 'Digital program and recordings', 'Standard check-in'],
        cta: 'APPLY NOW',
        featured: false,
        icon: 'https://framerusercontent.com/images/MtnFEBLnoIRm6qLSHDEza33VtQg.svg',
      },
      {
        name: 'Founder Pass',
        price: '$599',
        description: 'Premium access with investor interactions and mentorship.',
        features: ['Investor one-on-one sessions', 'Priority pitching slot', 'Exclusive founder networking dinner', 'Full event recordings', 'IGNITE alumni community access'],
        cta: 'APPLY NOW',
        featured: true,
        icon: 'https://framerusercontent.com/images/oxVYUGu5fnvPmYPtKKqRv1LEb20.svg',
      },
    ],
  },
  venue: {
    label: 'Location',
    title: 'Dubai,',
    titleAccent: 'UAE',
    description: '2026 | IGNITE Global Summit',
    name: 'BITS Pilani, Dubai Campus',
    address: 'Dubai International Academic City, UAE',
    features: ['State-of-the-art campus facilities', 'Dubai International Academic City', 'Premier hospitality & global connectivity'],
    images: [
      { src: '/bits-dubai.jpg',                                                         alt: 'BITS Pilani Dubai Campus' },
      { src: 'https://framerusercontent.com/images/ipAHfDTsRyvhAr0360dua0CI.jpg',     alt: 'Event Space' },
      { src: 'https://framerusercontent.com/images/AGgTnqv7WNLDD9gJKbVesxEaN7o.jpg',  alt: 'Conference Hall' },
    ],
  },
  sponsors: {
    label: 'Our global sponsors & partners',
    logos: [
      { src: 'https://framerusercontent.com/images/U3UWEJ0rFiixMujWaZhxQdeJZVY.svg', alt: 'Partner' },
      { src: 'https://framerusercontent.com/images/ze736YGI30StVzZyhVvAd6JYYAM.svg', alt: 'Partner' },
      { src: 'https://framerusercontent.com/images/g1JspCWG2yP8BW4YdGf0oywBhA.svg',  alt: 'Partner' },
      { src: 'https://framerusercontent.com/images/JNfwKVs04XxypCyxC4tPm2POMsY.svg', alt: 'Partner' },
      { src: 'https://framerusercontent.com/images/K8zbe1EcvPteDnrdhXi8Vey7X3w.svg', alt: 'Partner' },
      { src: 'https://framerusercontent.com/images/7xdhspAvQu1xiTUjQCywqlxDAVM.svg', alt: 'Partner' },
    ],
  },
  footer: {
    tagline: 'Building Tomorrow, Together.',
    copyright: '© 2026 IGNITE · A PIEDS × BITS Pilani Event. All rights reserved.',
    links: [
      { label: 'Privacy Policy',  href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Code of Conduct', href: '#' },
    ],
    social: [
      { label: 'Twitter / X', href: '#' },
      { label: 'LinkedIn',    href: '#' },
      { label: 'Instagram',   href: '#' },
    ],
  },
};

export default siteContent;

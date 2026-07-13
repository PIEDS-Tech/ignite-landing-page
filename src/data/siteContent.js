const siteContent = {
  meta: {
    title: 'Ignite 2025 — India’s Most Intense Startup Sprint',
    description: 'India\'s top startup sprint where innovators build and launch their MVP in just six days.',
    ogImage: 'https://framerusercontent.com/images/7nSs7VnwPoPuE8VzDBzu3tvMi8.jpg',
  },
  nav: {
    logoText: 'IGNITE',
    logoYear: '2025',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Speakers', href: '#speakers' },
      { label: 'Agenda', href: '#agenda' },
      { label: 'Tickets', href: '#tickets' },
      { label: 'Venue', href: '#venue' },
    ],
    ctaText: 'REGISTER NOW',
    ctaHref: '#tickets',
  },
  hero: {
    badge: '7–11 Sep · BITS Pilani, Goa',
    headline: 'India\'s top startup sprint',
    headlineAccent: 'where innovators build and launch their MVP in just six days.',
    description: 'Whether you’re a student or an early-stage founder, IGNITE takes you from idea → MVP through a high-intensity blend of workshops, mentorship, and hands-on building — right from the beaches of Goa.',
    ctaPrimary: { label: 'REGISTER NOW', href: '#tickets' },
    ctaSecondary: { label: 'About BITS Pilani', href: '#venue' },
    stats: [
      { value: '6', label: 'Days' },
      { value: '100', label: 'Innovators' },
      { value: '20+', label: 'MVPs' },
    ],
    images: [
      { src: 'https://framerusercontent.com/images/A8Wev8Q00vjklJKzYiwivtzIEVM.png', alt: 'Speaker at Event' },
      { src: 'https://framerusercontent.com/images/FuVWIbguggxSJn75i9NlcLjASc.png', alt: 'Event Audience' },
    ],
  },
  about: {
    label: 'About IGNITE 2025',
    title: 'Built for Students &',
    titleAccent: 'Early-Stage Founders.',
    description: 'Whether you’re a student with a big idea or an early-stage founder ready to build — IGNITE is your launchpad to go from zero to startup.',
    audiences: [
      { title: 'Ideate', description: 'Workshops and expert sessions to validate your idea, sharpen your problem statement, and align your team around a clear vision.', icon: 'https://framerusercontent.com/images/Ow4AoJVwl2xpuCj7w4BHRB28ysc.svg' },
      { title: 'Build', description: 'Hands-on building sprints with 1-on-1 mentorship from founders and operators to take your concept from validated idea to working MVP.', icon: 'https://framerusercontent.com/images/o5c8ZUWfB40t6RvCTk7KKnM7l5I.svg' },
      { title: 'Launch', description: 'Present your MVP on Demo Day in front of investors, mentors, and the wider startup community — and compete for equity-free grants.', icon: 'https://framerusercontent.com/images/H3QMF2I41FYBAUQa9OyXUquJJxQ.svg' }
    ],
  },
  speakers: {
    label: 'Past Speakers & Panelists',
    title: 'Meet the Inspiring Voices',
    titleAccent: 'of IGNITE.',
    description: 'Founders, investors, and operators sharing real insights. Hand-picked entrepreneurs and industry leaders who have built and scaled companies.',
    list: [
      { name: 'Awais Ahmed', role: 'Founder & CEO', company: 'Pixxel', image: 'https://framerusercontent.com/images/19wGOlJQp54zgd3vWysk6Wqafk.png' },
      { name: 'Abhishek Shah', role: 'Investor & Advisor', company: '', image: 'https://framerusercontent.com/images/FsNbsa9jCpD7375FjsQuEO8JBw.webp' },
      { name: 'Sanker Bora', role: 'Co-founder', company: 'DealShare & Myntra', image: 'https://framerusercontent.com/images/Novsmjw6IIhKDVyD7ZI2i4sAsE.webp' },
      { name: 'Aneesh Pai', role: 'Entrepreneur & Mentor', company: '', image: 'https://framerusercontent.com/images/IVA2zVsD7sWebTDntsDdlviCksQ.webp' },
    ],
  },
  agenda: {
    label: 'Event Timeline',
    title: 'IGNITE',
    titleAccent: 'Timeline',
    description: '',
    days: [
      {
        id: '1-jul',
        label: '1 JUL',
        date: 'Applications',
        sessions: [
          { time: '09:00 – 09:30', title: 'Registration & Welcome', description: 'Check in, grab coffee, and connect with fellow attendees.', speaker: 'Event Team', duration: '30 mins', tags: ['Introduction', 'Networking'] },
          { time: '09:30 – 10:15', title: 'Opening Keynote: Building AI That Actually Ships', description: 'A practical look at how teams move from experimentation to production when working with AI.', speaker: 'Sarah Chen', duration: '45 mins', tags: ['Keynote', 'Applied AI'] },
          { time: '10:30 – 11:15', title: 'Designing AI-Powered Experiences', description: 'How product and design teams are rethinking workflows, interfaces, and trust in AI-driven systems.', speaker: 'Senior Engineer', duration: '45 mins', tags: ['Design', 'Product'] },
          { time: '11:30 – 12:15', title: 'Engineering AI in Production', description: 'Lessons from deploying, monitoring, and maintaining AI systems beyond the demo stage.', speaker: 'James Okafor', duration: '45 mins', tags: ['Engineering', 'Infrastructure'] },
          { time: '13:30 – 14:30', title: 'Hands-On Workshops', description: 'Interactive sessions focused on building workflows, integrating AI into products, and working responsibly with AI.', speaker: 'Mike Johasa', duration: '60 mins', tags: ['Workshop', 'Hands-on'] },
        ],
      },
      {
        id: '7-sep',
        label: '7 SEP',
        date: 'MVP Sprint',
        sessions: [
          { time: '09:30 – 10:00', title: 'Morning Coffee & Check-In', description: 'Ease into the day with coffee and informal conversations before sessions begin.', speaker: 'Steve Angelo', duration: '30 mins', tags: ['Networking', 'Coffee'] },
          { time: '10:00 – 10:45', title: 'Keynote: Scaling AI Beyond the First Use Case', description: 'How teams move from isolated AI experiments to sustainable, organization-wide adoption.', speaker: 'Mitiho James', duration: '45 mins', tags: ['Keynote', 'Scaling AI'] },
          { time: '11:00 – 11:45', title: 'Building AI-Ready Teams', description: 'Roles, skills, and collaboration models teams are adopting to work effectively with AI.', speaker: 'Org Design Expert', duration: '45 mins', tags: ['Teams', 'Operations'] },
          { time: '12:00 – 12:45', title: 'Responsible AI in Practice', description: 'Practical approaches to governance, risk, and trust when deploying AI systems.', speaker: 'James Okafor', duration: '45 mins', tags: ['Ethics', 'Governance'] },
          { time: '12:45 – 13:30', title: 'Lunch & Peer Meetups', description: 'Join small, topic-focused tables to discuss shared challenges and ideas.', speaker: 'Steve Angelo', duration: '45 mins', tags: ['Networking', 'Meetups'] },
        ],
      },
    ],
  },
  tickets: {
    label: 'Get Selected',
    title: 'Secure Your Spot at',
    titleAccent: 'IGNITE 2025',
    description: 'IGNITE 2025 is a highly selective 6-day sprint at BITS Pilani, Goa Campus. Applications are open to students and early-stage founders with a genuine startup idea.',
    plans: [
      {
        name: 'Core Pass',
        price: '$299',
        description: 'Standard access for attendees.',
        features: ['Full access to all talks and panels', 'Entry to main stage and spaces', 'Access to networking sessions', 'Digital program and session', 'Standard check-in'],
        cta: 'BUY NOW',
        featured: false,
        icon: 'https://framerusercontent.com/images/MtnFEBLnoIRm6qLSHDEza33VtQg.svg',
      },
      {
        name: 'Plus Pass',
        price: '$599',
        description: 'Premium access with exclusive perks.',
        features: ['Hands-on workshop sessions', 'Full event recordings post event', 'Forge swag kit included', 'Priority seating at all keynotes', 'Access to the exclusive Lounge'],
        cta: 'BUY NOW',
        featured: true,
        icon: 'https://framerusercontent.com/images/oxVYUGu5fnvPmYPtKKqRv1LEb20.svg',
      },
    ],
  },
  venue: {
    label: 'Location',
    title: 'BITS Pilani',
    titleAccent: 'Goa Campus',
    description: '7-12 SEP 2025 | 9:00 AM onwards',
    name: 'BITS Pilani, K.K. Birla Goa Campus',
    address: 'South Goa, India',
    features: ['State-of-the-art facilities', 'Easy transit access', 'Surrounded by hotels & dining'],
    images: [
      { src: 'https://framerusercontent.com/images/q5CAbxhi8kSJKB38EtQVvO7VQ9w.webp', alt: 'Venue Building' },
      { src: 'https://framerusercontent.com/images/ipAHfDTsRyvhAr0360dua0CI.jpg', alt: 'Event Space' },
      { src: 'https://framerusercontent.com/images/AGgTnqv7WNLDD9gJKbVesxEaN7o.jpg', alt: 'Conference Hall' },
    ],
  },
  sponsors: {
    label: 'Our sponsors & partners',
    logos: [
      { src: 'https://framerusercontent.com/images/U3UWEJ0rFiixMujWaZhxQdeJZVY.svg', alt: 'Sponsor' },
      { src: 'https://framerusercontent.com/images/ze736YGI30StVzZyhVvAd6JYYAM.svg', alt: 'Sponsor' },
      { src: 'https://framerusercontent.com/images/g1JspCWG2yP8BW4YdGf0oywBhA.svg', alt: 'Sponsor' },
      { src: 'https://framerusercontent.com/images/JNfwKVs04XxypCyxC4tPm2POMsY.svg', alt: 'Sponsor' },
      { src: 'https://framerusercontent.com/images/K8zbe1EcvPteDnrdhXi8Vey7X3w.svg', alt: 'Sponsor' },
      { src: 'https://framerusercontent.com/images/7xdhspAvQu1xiTUjQCywqlxDAVM.svg', alt: 'Sponsor' },
    ],
  },
  footer: {
    tagline: 'India’s Most Intense Startup Sprint',
    copyright: '© 2025 IGNITE Event. All rights reserved.',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Code of Conduct', href: '#' },
    ],
    social: [
      { label: 'Twitter', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Instagram', href: '#' },
    ],
  },
};

export default siteContent;

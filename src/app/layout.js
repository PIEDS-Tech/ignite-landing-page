import './globals.css';
import siteContent from '@/data/siteContent';

export const metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  openGraph: {
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: [{ url: siteContent.meta.ogImage }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: [siteContent.meta.ogImage],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

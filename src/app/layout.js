import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: "IGNITE 26 - India's Most Intense Startup Sprint",
  description: '6 Days. 100 Innovators. 20+ MVPs. Build and launch your MVP from the beaches of Goa.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

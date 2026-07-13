import './globals.css';

export const metadata = {
  title: 'IGNITE 2026 — Building Tomorrow, Together',
  description: 'IGNITE is the flagship global innovation and entrepreneurship platform by PIEDS, bringing together visionary founders, investors, and industry leaders to shape the future.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

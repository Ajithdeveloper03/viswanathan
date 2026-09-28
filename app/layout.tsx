import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import { Providers } from './providers';

/**
 * DM Sans — clean, modern geometric sans-serif
 * Used for: body text, navigation, labels, UI, buttons
 */
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['500', '600', '700', '800', '900'],
  style: ['normal'],
  display: 'swap',
});

/**
 * Playfair Display — authoritative editorial serif
 * Widely used by financial publications, law firms & consulting groups
 * Used for: all h1, h2, h3 headings
 */
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Viswanathan R Associates - Corporate Finance Advisory',
  description: 'Strategic Financial Advisory for Businesses, Investors, Banks, and Corporate Leaders.',
  keywords: 'Business Valuation, Financial Advisory, Corporate Finance, Insolvency',
  openGraph: {
    title: 'Viswanathan R Associates',
    description: 'Strategic Financial Advisory for Businesses, Investors, Banks, and Corporate Leaders.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfairDisplay.variable}`}>
      <body className="min-h-screen flex flex-col font-sans overflow-x-hidden">
        <Providers>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

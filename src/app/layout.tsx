import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://poincareplot.com'),

  applicationName: 'PoincaréPlot.com',

  title: 'Poincaré Plot | HRV, SD1, SD2 & RR Interval Analysis',

  description:
    'Learn about Poincaré plots, RR interval analysis, SD1, SD2, and heart rate variability. Explore the history, mathematics, and physiological interpretation of the Poincaré plot.',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Poincaré Plot | HRV, SD1, SD2 & RR Interval Analysis',

    description:
      'A reference on Poincaré plots, their mathematics, history, and use in heart rate variability analysis, including SD1, SD2, and RR intervals.',

    url: '/',

    siteName: 'PoincaréPlot.com',

    type: 'article',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Poincaré Plot | HRV, SD1, SD2 & RR Interval Analysis',

    description: 'Explore the mathematics, history, and interpretation of Poincaré plots, SD1, SD2, and RR interval variability.',
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>

      {process.env.NEXT_PUBLIC_GA_ID ? <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} /> : null}
    </html>
  );
}

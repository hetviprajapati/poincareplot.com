import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

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

  title: {
    default: 'Poincaré Plot | HRV, SD1, SD2 & RR Interval Analysis',
    template: '%s | PoincaréPlot.com',
  },

  description:
    'Learn about Poincaré plots, RR interval analysis, SD1, SD2, and heart rate variability. Explore the history, mathematics, and physiological interpretation of the Poincaré plot.',

  applicationName: 'PoincaréPlot.com',

  keywords: [
    'Poincaré plot',
    'Poincare plot',
    'Poincaré analysis',
    'Poincare analysis',
    'Poincaré plot HRV',
    'Poincare plot HRV',
    'Poincaré plot SD1 SD2',
    'SD1',
    'SD2',
    'RR interval',
    'RR interval analysis',
    'heart rate variability',
    'HRV',
    'Poincaré plot interpretation',
    'Poincaré plot explained',
    'Poincaré plot mathematics',
    'Poincaré plot history',
  ],

  alternates: {
    canonical: 'https://poincareplot.com/',
  },

  openGraph: {
    title: 'Poincaré Plot | HRV, SD1, SD2 & RR Interval Analysis',

    description:
      'A reference on Poincaré plots, their mathematics, history, and use in heart rate variability analysis, including SD1, SD2, and RR intervals.',

    url: 'https://poincareplot.com/',

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
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  );
}

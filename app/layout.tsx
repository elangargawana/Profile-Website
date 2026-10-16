import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/hooks/useLanguage';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Elang Argawana — Software Developer',
  description:
    'Personal portfolio of Elang Argawana, a web and mobile software developer based in Semarang, Indonesia, building thoughtful digital experiences and practical software solutions.',
  keywords: [
    'Elang Argawana',
    'software developer',
    'software development',
    'frontend developer',
    'fullstack developer',
    'web developer',
    'mobile developer',
    'Semarang',
    'Indonesia',
    'Next.js',
    'React',
    'Flutter',
  ],
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  authors: [{ name: 'Elang Argawana' }],
  creator: 'Elang Argawana',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Elang Argawana — Software Developer',
    description:
      'Personal portfolio of Elang Argawana, a web and mobile software developer based in Semarang, Indonesia.',
    siteName: 'Elang Argawana Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Elang Argawana — Software Developer',
    description:
      'Personal portfolio of Elang Argawana, a web and mobile software developer based in Semarang, Indonesia.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

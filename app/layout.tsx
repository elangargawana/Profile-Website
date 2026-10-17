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
  metadataBase: new URL('https://elangargawana.my.id'),
  title: {
    default: 'Elang Argawana — Software Developer',
    template: '%s | Elang Argawana',
  },
  description:
    'Personal portfolio of Elang Argawana, a web and mobile software developer based in Semarang, Indonesia, building thoughtful digital experiences and practical software solutions.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Elang Argawana',
    'software developer',
    'software engineering',
    'frontend developer',
    'fullstack developer',
    'web developer',
    'mobile developer',
    'Semarang',
    'Indonesia',
    'Next.js',
    'React',
    'Flutter',
    'TypeScript',
  ],
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  authors: [{ name: 'Elang Argawana', url: 'https://elangargawana.my.id' }],
  creator: 'Elang Argawana',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['id_ID'],
    url: 'https://elangargawana.my.id',
    title: 'Elang Argawana — Software Developer',
    description:
      'Personal portfolio of Elang Argawana, a web and mobile software developer based in Semarang, Indonesia.',
    siteName: 'Elang Argawana Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elang Argawana — Software Developer',
    description:
      'Personal portfolio of Elang Argawana, a web and mobile software developer based in Semarang, Indonesia.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://elangargawana.my.id/#person',
      name: 'Elang Argawana',
      jobTitle: 'Software Developer',
      description:
        'Web and mobile software developer based in Semarang, Indonesia, building thoughtful digital experiences and practical software solutions.',
      url: 'https://elangargawana.my.id',
      email: 'mailto:elangargawana.15@gmail.com',
      telephone: '+6282134081213',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Semarang',
        addressRegion: 'Central Java',
        addressCountry: 'ID',
      },
      sameAs: [
        'https://github.com/elangargawana',
        'https://www.linkedin.com/in/elang-argawana',
      ],
      knowsAbout: [
        'Software Engineering',
        'Web Development',
        'Mobile App Development',
        'Next.js',
        'React',
        'TypeScript',
        'Flutter',
        'Tailwind CSS',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://elangargawana.my.id/#website',
      url: 'https://elangargawana.my.id',
      name: 'Elang Argawana Portfolio',
      description:
        'Personal portfolio of Elang Argawana, a web and mobile software developer based in Semarang, Indonesia.',
      publisher: {
        '@id': 'https://elangargawana.my.id/#person',
      },
      inLanguage: ['en-US', 'id-ID'],
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

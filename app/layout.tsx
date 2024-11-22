import './globals.css';
import { Cormorant_Garamond, Open_Sans } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Metadata } from 'next'

const garamond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-garamond',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
});

export const metadata: Metadata = {
  title: {
    default: 'Gresson Law',
    template: '%s | Gresson Law'
  },
  
  description: 'Specialized legal services in Criminal, Civil, and Education Law in Auckland, New Zealand.',
  keywords: ['criminal law', 'civil law', 'education law', 'New Zealand lawyer', 'Auckland lawyer', 'barrister', 'solicitor', 'court', 'proceedings'],
  authors: [{ name: 'Elizabeth Gresson' }],
  creator: 'Elizabeth Gresson',
  metadataBase: new URL('https://gressonlaw.co.nz'),
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://gressonlaw.co.nz',
    title: 'Gresson Law',
    description: 'Specialized legal services in Criminal, Civil, and Education Law in Auckland, New Zealand.',
    siteName: 'Gresson Law'
  },
  robots: {
    index: true,
    follow: true
  },
  verification: {
    google: 'your-google-verification-code', 
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<head>
<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />

</head>
      <body className={`${garamond.variable} ${openSans.variable} font-sans`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

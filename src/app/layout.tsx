// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Open_Sans } from 'next/font/google';
import { ErrorBoundary } from '../components/ErrorBoundary';
import '@/styles/global.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BULKGRO - Agricultural Marketplace',
  description: 'Empowering farmers and agribusinesses with collaborative bulk purchasing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${openSans.variable}`}>
      <body className="font-body antialiased">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
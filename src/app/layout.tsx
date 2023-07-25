import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Odyssey Coffee',
  description: 'Odyssey Coffee - Kansas City'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-700 text-slate-100 mx-auto`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

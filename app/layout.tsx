import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'DevStak — Projects & Experiments', description: 'Explore projects, products, and developer tools built by DevStak.', openGraph: { title: 'DevStak — Projects & Experiments', description: 'A collection of products, experiments, and tools.' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }

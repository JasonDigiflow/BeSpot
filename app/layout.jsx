import { Inter } from 'next/font/google';
import '../styles/globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BeSpot - Le guide des lieux tendances validés par BeHype',
  description: 'Découvrez les meilleurs établissements CHR (cafés, hôtels, restaurants, loisirs) sélectionnés et validés par BeHype',
  keywords: 'restaurants, hotels, loisirs, guide, BeHype, BeSpot, CHR',
  openGraph: {
    title: 'BeSpot - Guide CHR par BeHype',
    description: 'Le guide des lieux tendances validés par BeHype',
    url: 'https://bespot.fr',
    siteName: 'BeSpot',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-bespot-light`}>
        <NavBar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
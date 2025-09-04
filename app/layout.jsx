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
      <body className={`${inter.className} bg-gradient-to-br from-gray-50 via-white to-gray-50`}>
        <NavBar />
        <main className="min-h-screen pt-20">
          {/* Premium gradient overlay */}
          <div className="fixed inset-0 -z-10 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full filter blur-3xl"></div>
          </div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
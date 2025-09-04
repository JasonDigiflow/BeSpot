import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-bespot-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-bespot-blue to-bespot-orange bg-clip-text text-transparent">
              BeSpot
            </h3>
            <p className="text-gray-400">
              Le guide des lieux tendances validés par BeHype
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/etablissements" className="text-gray-400 hover:text-white transition-colors">
                  Établissements
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-400 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Catégories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/etablissements?category=restaurant" className="text-gray-400 hover:text-white transition-colors">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link href="/etablissements?category=hotel" className="text-gray-400 hover:text-white transition-colors">
                  Hôtels
                </Link>
              </li>
              <li>
                <Link href="/etablissements?category=loisir" className="text-gray-400 hover:text-white transition-colors">
                  Loisirs
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  CGU
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2024 BeSpot - Propulsé par{' '}
            <span className="text-bespot-orange font-semibold">BeHype</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
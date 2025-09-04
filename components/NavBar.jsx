'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-bespot-blue to-bespot-orange bg-clip-text text-transparent">
            BeSpot
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-bespot-dark hover:text-bespot-blue transition-colors">
              Accueil
            </Link>
            <Link href="/etablissements" className="text-bespot-dark hover:text-bespot-blue transition-colors">
              Établissements
            </Link>
            <Link href="/a-propos" className="text-bespot-dark hover:text-bespot-blue transition-colors">
              À propos
            </Link>
            <Link href="/contact" className="text-bespot-dark hover:text-bespot-blue transition-colors">
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-bespot-dark"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-up">
            <Link href="/" className="block py-2 text-bespot-dark hover:text-bespot-blue transition-colors">
              Accueil
            </Link>
            <Link href="/etablissements" className="block py-2 text-bespot-dark hover:text-bespot-blue transition-colors">
              Établissements
            </Link>
            <Link href="/a-propos" className="block py-2 text-bespot-dark hover:text-bespot-blue transition-colors">
              À propos
            </Link>
            <Link href="/contact" className="block py-2 text-bespot-dark hover:text-bespot-blue transition-colors">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
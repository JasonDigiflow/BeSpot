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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-white/20' 
        : 'bg-gradient-to-b from-white/60 to-transparent backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="group flex items-center space-x-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-bespot-blue to-bespot-orange rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-bespot-blue to-bespot-orange text-white font-black text-xl px-3 py-1 rounded-lg">
                BS
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-bespot-blue to-bespot-orange bg-clip-text text-transparent">
              BeSpot
            </span>
            <span className="hidden lg:inline-block ml-2 px-2 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-semibold rounded-full">
              PREMIUM
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-2">
            <Link 
              href="/" 
              className="px-4 py-2 text-bespot-dark hover:text-white hover:bg-gradient-to-r hover:from-bespot-blue/80 hover:to-bespot-blue rounded-full transition-all duration-300 font-medium"
            >
              Accueil
            </Link>
            <Link 
              href="/etablissements" 
              className="px-4 py-2 text-bespot-dark hover:text-white hover:bg-gradient-to-r hover:from-bespot-blue/80 hover:to-bespot-blue rounded-full transition-all duration-300 font-medium"
            >
              Établissements
            </Link>
            <Link 
              href="/palmares" 
              className="relative px-4 py-2 text-bespot-dark hover:text-white hover:bg-gradient-to-r hover:from-bespot-orange/80 hover:to-bespot-orange rounded-full transition-all duration-300 font-medium group"
            >
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
              Palmarès
            </Link>
            <Link 
              href="/a-propos" 
              className="px-4 py-2 text-bespot-dark hover:text-white hover:bg-gradient-to-r hover:from-bespot-blue/80 hover:to-bespot-blue rounded-full transition-all duration-300 font-medium"
            >
              À propos
            </Link>
            <Link 
              href="/contact" 
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-bespot-blue to-bespot-orange text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:shadow-bespot-orange/25"
            >
              <span className="flex items-center">
                Contact VIP
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
          >
            <svg className="w-6 h-6 text-bespot-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white/10 backdrop-blur-xl rounded-lg mt-2 border border-white/20">
            <Link href="/" className="block px-4 py-3 text-bespot-dark hover:bg-white/20 transition-colors font-medium">
              Accueil
            </Link>
            <Link href="/etablissements" className="block px-4 py-3 text-bespot-dark hover:bg-white/20 transition-colors font-medium">
              Établissements
            </Link>
            <Link href="/palmares" className="block px-4 py-3 text-bespot-dark hover:bg-white/20 transition-colors font-medium">
              Palmarès
            </Link>
            <Link href="/a-propos" className="block px-4 py-3 text-bespot-dark hover:bg-white/20 transition-colors font-medium">
              À propos
            </Link>
            <Link href="/contact" className="block mx-4 mt-3 px-4 py-3 bg-gradient-to-r from-bespot-blue to-bespot-orange text-white text-center font-semibold rounded-full">
              Contact VIP
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
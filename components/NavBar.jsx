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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-black/70 backdrop-blur-2xl shadow-2xl' 
        : 'bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-bespot-blue via-purple-500 to-bespot-orange rounded-xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-black/50 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-xl">
                <span className="text-3xl font-black bg-gradient-to-r from-bespot-blue via-purple-400 to-bespot-orange bg-clip-text text-transparent">
                  BeSpot
                </span>
              </div>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className="relative px-5 py-2.5 text-white/90 hover:text-white font-medium group"
            >
              <span className="relative z-10 transition-all duration-300">Accueil</span>
              <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"></div>
            </Link>
            
            <Link 
              href="/etablissements" 
              className="relative px-5 py-2.5 text-white/90 hover:text-white font-medium group"
            >
              <span className="relative z-10 transition-all duration-300">Établissements</span>
              <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"></div>
            </Link>
            
            <Link 
              href="/palmares" 
              className="relative px-5 py-2.5 text-white/90 hover:text-white font-medium group"
            >
              <span className="relative z-10 flex items-center transition-all duration-300">
                Palmarès
                <span className="ml-2 w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse"></span>
              </span>
              <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"></div>
            </Link>
            
            <Link 
              href="/a-propos" 
              className="relative px-5 py-2.5 text-white/90 hover:text-white font-medium group"
            >
              <span className="relative z-10 transition-all duration-300">À propos</span>
              <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"></div>
            </Link>
            
            <div className="ml-6 relative">
              <Link 
                href="/contact" 
                className="relative inline-flex items-center px-7 py-3 overflow-hidden font-semibold text-white rounded-full group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-bespot-blue via-purple-500 to-bespot-orange"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-bespot-blue via-purple-500 to-bespot-orange blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative flex items-center">
                  Contact
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white"
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 bg-black/80 backdrop-blur-2xl rounded-2xl mt-2 border border-white/10">
            <Link href="/" className="block px-6 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all font-medium">
              Accueil
            </Link>
            <Link href="/etablissements" className="block px-6 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all font-medium">
              Établissements
            </Link>
            <Link href="/palmares" className="block px-6 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all font-medium">
              Palmarès
            </Link>
            <Link href="/a-propos" className="block px-6 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all font-medium">
              À propos
            </Link>
            <div className="px-6 mt-3">
              <Link href="/contact" className="block px-6 py-3 bg-gradient-to-r from-bespot-blue via-purple-500 to-bespot-orange text-white text-center font-semibold rounded-full">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
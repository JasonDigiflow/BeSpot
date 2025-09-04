import Link from 'next/link';
import Image from 'next/image';
import HeroGradient from '@/components/HeroGradient';
import CardPlace from '@/components/CardPlace';
import etablissements from '@/data/etablissements.json';

export default function Home() {
  const featuredPlaces = etablissements
    .filter(e => e.isPartner)
    .slice(0, 6);

  return (
    <>
      <HeroGradient>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-bespot-dark mb-6 animate-fade-in">
            BeSpot
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-slide-up">
            Le guide des lieux tendances validés par BeHype
          </p>
          <Link
            href="/etablissements"
            className="inline-block px-8 py-4 bg-gradient-to-r from-bespot-blue to-bespot-orange text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Découvrir les établissements
          </Link>
        </div>
      </HeroGradient>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-bespot-dark mb-12">
            Pourquoi BeSpot ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-bespot-blue to-bespot-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sélection validée</h3>
              <p className="text-gray-600">
                Chaque établissement est soigneusement sélectionné et validé par nos équipes
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-bespot-blue to-bespot-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Photos réelles</h3>
              <p className="text-gray-600">
                Des photos authentiques pour vous donner un aperçu fidèle de chaque lieu
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-bespot-blue to-bespot-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Visibilité locale</h3>
              <p className="text-gray-600">
                Trouvez facilement les meilleurs établissements près de chez vous
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-bespot-dark mb-4">
            Établissements partenaires
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Découvrez notre sélection d&apos;établissements partenaires BeHype
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPlaces.map((place) => (
              <CardPlace key={place.id} etablissement={place} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/etablissements"
              className="inline-block px-6 py-3 border-2 border-bespot-blue text-bespot-blue font-semibold rounded-full hover:bg-bespot-blue hover:text-white transition-all duration-300"
            >
              Voir tous les établissements
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-bespot-blue to-bespot-orange rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Vous êtes propriétaire d&apos;un établissement ?
            </h2>
            <p className="text-xl mb-8">
              Rejoignez BeHype et bénéficiez d&apos;une visibilité premium sur BeSpot
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-bespot-blue font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
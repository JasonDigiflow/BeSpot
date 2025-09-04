import Image from 'next/image';

export const metadata = {
  title: 'À propos - BeSpot',
  description: 'Découvrez BeSpot, le guide digital CHR qui référence les meilleurs établissements validés par BeHype',
};

export default function APropos() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-bespot-dark mb-8 text-center">
          À propos de BeSpot
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-bespot-dark mb-4">
            Notre mission
          </h2>
          <p className="text-gray-700 mb-4">
            BeSpot est le guide digital de référence pour découvrir les meilleurs établissements CHR 
            (Cafés, Hôtels, Restaurants et Loisirs) de votre région. Créé en complément de BeHype, 
            notre plateforme référence gratuitement tous les établissements tout en mettant en avant 
            nos partenaires avec des fiches premium et un badge distinctif.
          </p>
          <p className="text-gray-700">
            Notre objectif est de connecter les consommateurs avec des lieux de qualité, 
            soigneusement sélectionnés et validés par nos équipes. Nous croyons en la transparence 
            et l&apos;authenticité, c&apos;est pourquoi chaque établissement présent sur BeSpot a été 
            vérifié et validé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-bespot-blue to-bespot-orange rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-bespot-dark mb-3">
              Référencement gratuit
            </h3>
            <p className="text-gray-700">
              Tous les établissements peuvent être référencés gratuitement sur BeSpot. 
              Notre équipe vérifie chaque demande pour garantir la qualité de notre guide.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-bespot-blue to-bespot-orange rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-bespot-dark mb-3">
              Partenariat premium
            </h3>
            <p className="text-gray-700">
              Les établissements partenaires BeHype bénéficient automatiquement d&apos;une 
              visibilité premium avec badge distinctif et mise en avant dans les résultats.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-bespot-blue to-bespot-orange rounded-lg p-8 text-white mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Le modèle BeSpot
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p>Gratuit pour tous</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24h</div>
              <p>Validation rapide</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Premium</div>
              <p>Pour les partenaires BeHype</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-bespot-dark mb-4">
            Nos valeurs
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-bespot-orange rounded-full mt-2 mr-3"></div>
              <div>
                <h4 className="font-semibold text-bespot-dark mb-1">Transparence</h4>
                <p className="text-gray-700">
                  Chaque établissement est vérifié et les avis sont authentiques
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-bespot-orange rounded-full mt-2 mr-3"></div>
              <div>
                <h4 className="font-semibold text-bespot-dark mb-1">Qualité</h4>
                <p className="text-gray-700">
                  Nous sélectionnons uniquement des établissements qui répondent à nos critères de qualité
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-bespot-orange rounded-full mt-2 mr-3"></div>
              <div>
                <h4 className="font-semibold text-bespot-dark mb-1">Innovation</h4>
                <p className="text-gray-700">
                  En partenariat avec BeHype, nous innovons constamment pour améliorer la visibilité locale
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-bespot-orange rounded-full mt-2 mr-3"></div>
              <div>
                <h4 className="font-semibold text-bespot-dark mb-1">Communauté</h4>
                <p className="text-gray-700">
                  Nous créons des liens entre les établissements et leur clientèle locale
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
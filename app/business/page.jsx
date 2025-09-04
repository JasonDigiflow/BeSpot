import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Business - BeSpot Magazine Digital',
  description: 'Document interne : stratégie et concept du magazine digital BeSpot',
};

export default function BusinessPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header avec badge interne */}
        <div className="bg-gradient-to-r from-bespot-blue to-bespot-orange p-1 rounded-lg mb-8">
          <div className="bg-white rounded-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-4xl font-bold text-bespot-dark">
                BeSpot - Magazine Digital CHR
              </h1>
              <span className="px-4 py-2 bg-red-500 text-white rounded-full text-sm font-semibold">
                DOCUMENT INTERNE
              </span>
            </div>
            <p className="text-lg text-gray-700">
              Vision stratégique et modèle économique du guide digital BeSpot - Extension de l&apos;écosystème BeHype
            </p>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-bespot-dark mb-6 flex items-center">
            <span className="w-8 h-8 bg-bespot-orange rounded-full flex items-center justify-center text-white font-bold mr-3">1</span>
            Executive Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h3 className="font-bold text-bespot-dark mb-2">Concept</h3>
              <p className="text-gray-700">
                Guide digital CHR gratuit qui référence tous les établissements avec mise en avant premium des partenaires BeHype
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
              <h3 className="font-bold text-bespot-dark mb-2">Positionnement</h3>
              <p className="text-gray-700">
                Le TripAdvisor nouvelle génération avec validation éditoriale et campagnes d&apos;influence intégrées
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <h3 className="font-bold text-bespot-dark mb-2">Monétisation</h3>
              <p className="text-gray-700">
                Inclus dans l&apos;abonnement BeHype - Aucun coût additionnel pour les partenaires existants
              </p>
            </div>
          </div>
        </div>

        {/* Business Model Canvas */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-bespot-dark mb-6 flex items-center">
            <span className="w-8 h-8 bg-bespot-orange rounded-full flex items-center justify-center text-white font-bold mr-3">2</span>
            Modèle Économique
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
              <h3 className="font-bold text-green-800 mb-3">Sources de Revenus</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  <div>
                    <strong>Indirect via BeHype :</strong> Inclus dans les abonnements de base (89$-1990$/mois)
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  <div>
                    <strong>Publicité display :</strong> Bannières et encarts sponsorisés
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  <div>
                    <strong>Mise en avant premium :</strong> Positions payantes dans le palmarès + encarts VIP
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  <div>
                    <strong>Upsell Site Web :</strong> Référencement premium en complément des sites web BeHype
                  </div>
                </li>
              </ul>
            </div>

            <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
              <h3 className="font-bold text-blue-800 mb-3">Proposition de Valeur</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">B2C:</span>
                  <span>Guide gratuit, fiable et validé par des experts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">B2B:</span>
                  <span>Visibilité augmentée + données analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">USP:</span>
                  <span>Seul guide avec campagnes d&apos;influence intégrées</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-2 border-purple-200 rounded-lg p-6 bg-purple-50">
            <h3 className="font-bold text-purple-800 mb-3">Métriques Clés (KPI)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">10K+</div>
                <div className="text-sm text-gray-600">Établissements (cible 2025)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600">Partenaires premium</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">100K</div>
                <div className="text-sm text-gray-600">Visiteurs/mois (cible)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">15%</div>
                <div className="text-sm text-gray-600">Taux conversion BeHype</div>
              </div>
            </div>
          </div>
        </div>

        {/* Nouveau : Système de Gamification Palmarès */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-bespot-dark mb-6 flex items-center">
            <span className="w-8 h-8 bg-bespot-orange rounded-full flex items-center justify-center text-white font-bold mr-3">3</span>
            Palmarès : Gamification de la Marketplace
          </h2>
          
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-bespot-dark mb-4">Concept du Palmarès Trimestriel</h3>
            <p className="text-gray-700 mb-4">
              Chaque trimestre, nos influenceurs notent et classent les établissements par région. 
              Le Top 10 bénéficie d'une visibilité gratuite dans nos articles SEO optimisés, 
              créant une compétition saine et incitant les établissements à améliorer leur service.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-yellow-600 mb-2">Incitation à l'excellence</h4>
                <p className="text-sm text-gray-700">
                  Les établissements sont motivés à offrir le meilleur service pour être dans le Top 10
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-orange-600 mb-2">Contenu SEO régulier</h4>
                <p className="text-sm text-gray-700">
                  Articles trimestriels optimisés générant du trafic organique qualifié
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-red-600 mb-2">Opportunités d'upsell</h4>
                <p className="text-sm text-gray-700">
                  Positions garanties et mises en avant premium pour nos meilleurs clients
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
              <h3 className="font-bold text-green-800 mb-3">Bénéfices Gratuits (Top 10)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Présence dans l'article trimestriel
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Citation d'influenceur authentique
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Backlink SEO de qualité
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Badge "Top 10" à afficher
                </li>
              </ul>
            </div>
            
            <div className="border-2 border-gold-200 rounded-lg p-6 bg-yellow-50">
              <h3 className="font-bold text-yellow-800 mb-3">Options Payantes Premium</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">★</span>
                  Position garantie (Top 3) - 500$/trimestre
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">★</span>
                  Encart VIP détaillé - 300$/article
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">★</span>
                  Interview exclusive - 800$/article
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">★</span>
                  Sponsoring du palmarès régional - 2000$/trimestre
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-purple-50 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">Impact sur la Marketplace BeHype</h4>
            <p className="text-gray-700 mb-3">
              Ce système de gamification augmente l'engagement des établissements avec la plateforme BeHype. 
              Les établissements cherchent activement à obtenir plus de campagnes d'influence pour améliorer 
              leur notation et leur position dans le palmarès, créant un cercle vertueux d'engagement et de revenus.
            </p>
            <div className="bg-white/60 rounded-lg p-3 border border-purple-200">
              <h5 className="font-semibold text-purple-700 mb-2">🌐 Synergie avec les Sites Web BeHype</h5>
              <p className="text-sm text-gray-700">
                Les clients BeHype qui souscrivent à la création de site web peuvent bénéficier d'un 
                référencement premium automatique sur BeSpot, créant une valeur ajoutée significative 
                à l'offre site web (upsell de 200-500$/mois). Le site BeSpot devient ainsi une vitrine 
                supplémentaire qui renforce le SEO local et la visibilité en ligne globale du client.
              </p>
            </div>
          </div>
        </div>

        {/* Synergie avec BeHype */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-bespot-dark mb-6 flex items-center">
            <span className="w-8 h-8 bg-bespot-orange rounded-full flex items-center justify-center text-white font-bold mr-3">4</span>
            Synergie avec BeHype
          </h2>
          
          <div className="bg-gradient-to-r from-bespot-blue/10 to-bespot-orange/10 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-bespot-dark mb-4">Écosystème Intégré</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-bespot-blue mb-2">BeHype</h4>
                <p className="text-sm text-gray-700">
                  Plateforme d&apos;influence marketing - Génère les campagnes et le contenu
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-bespot-orange mb-2">BeSpot</h4>
                <p className="text-sm text-gray-700">
                  Magazine digital - Valorise le contenu et augmente la visibilité locale
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-600 mb-2">Synergie</h4>
                <p className="text-sm text-gray-700">
                  Cross-selling automatique et augmentation de la LTV client
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-bespot-dark mb-3">Avantages pour BeHype</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Argument de vente supplémentaire
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Augmentation de la valeur perçue
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Réduction du churn rate
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Génération de leads qualifiés
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-bespot-dark mb-3">Avantages pour les Partenaires</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Double exposition (BeHype + BeSpot)
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  SEO local renforcé
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Badge de confiance BeHype
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Analytics détaillés
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-bespot-dark mb-6 flex items-center">
            <span className="w-8 h-8 bg-bespot-orange rounded-full flex items-center justify-center text-white font-bold mr-3">5</span>
            Roadmap Produit
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="font-bold text-green-600 mb-2">Phase 1 : MVP (Q3 2025 - En cours) 🚀</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Site web responsive ✅</li>
                <li>• Référencement 20+ établissements ✅</li>
                <li>• Système de filtres et recherche ✅</li>
                <li>• Fiches premium partenaires ✅</li>
                <li>• Palmarès Q3 2025 (lancement imminent)</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="font-bold text-blue-600 mb-2">Phase 2 : Croissance (Q4 2025)</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Import automatique partenaires BeHype</li>
                <li>• Système d&apos;avis vérifiés</li>
                <li>• Newsletter hebdomadaire</li>
                <li>• App mobile PWA</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="font-bold text-purple-600 mb-2">Phase 3 : Expansion (Q1 2026)</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• API publique</li>
                <li>• Programme d&apos;affiliation</li>
                <li>• Réservations en ligne</li>
                <li>• Intelligence artificielle (recommandations)</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="font-bold text-orange-600 mb-2">Phase 4 : Monétisation (Q2-Q3 2026)</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Offres standalone BeSpot Premium</li>
                <li>• Marketplace de services</li>
                <li>• Data insights pour les marques</li>
                <li>• Expansion internationale</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Analyse Concurrentielle */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-bespot-dark mb-6 flex items-center">
            <span className="w-8 h-8 bg-bespot-orange rounded-full flex items-center justify-center text-white font-bold mr-3">6</span>
            Analyse Concurrentielle
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Critère</th>
                  <th className="border p-3 text-center">BeSpot</th>
                  <th className="border p-3 text-center">TripAdvisor</th>
                  <th className="border p-3 text-center">Google Maps</th>
                  <th className="border p-3 text-center">Yelp</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Référencement</td>
                  <td className="border p-3 text-center text-green-600">✓ Gratuit</td>
                  <td className="border p-3 text-center text-green-600">✓ Gratuit</td>
                  <td className="border p-3 text-center text-green-600">✓ Gratuit</td>
                  <td className="border p-3 text-center text-green-600">✓ Gratuit</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-medium">Validation éditoriale</td>
                  <td className="border p-3 text-center text-green-600">✓ Oui</td>
                  <td className="border p-3 text-center text-red-600">✗ Non</td>
                  <td className="border p-3 text-center text-red-600">✗ Non</td>
                  <td className="border p-3 text-center text-red-600">✗ Non</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Influence marketing</td>
                  <td className="border p-3 text-center text-green-600">✓ Intégré</td>
                  <td className="border p-3 text-center text-red-600">✗ Non</td>
                  <td className="border p-3 text-center text-red-600">✗ Non</td>
                  <td className="border p-3 text-center text-red-600">✗ Non</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-medium">Focus CHR</td>
                  <td className="border p-3 text-center text-green-600">✓ Exclusif</td>
                  <td className="border p-3 text-center text-orange-600">~ Partiel</td>
                  <td className="border p-3 text-center text-red-600">✗ Non</td>
                  <td className="border p-3 text-center text-orange-600">~ Partiel</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Tarif premium</td>
                  <td className="border p-3 text-center text-green-600">Inclus BeHype</td>
                  <td className="border p-3 text-center">€€€</td>
                  <td className="border p-3 text-center">€€</td>
                  <td className="border p-3 text-center">€€</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Notre Avantage Compétitif</h4>
            <p className="text-gray-700">
              BeSpot est le seul guide qui combine validation éditoriale, campagnes d&apos;influence intégrées et 
              focus exclusif sur le secteur CHR. Notre modèle &quot;freemium via BeHype&quot; nous permet d&apos;offrir 
              un service premium sans coût additionnel pour nos partenaires.
            </p>
          </div>
        </div>

        {/* Stratégie d'Acquisition */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-bespot-dark mb-6 flex items-center">
            <span className="w-8 h-8 bg-bespot-orange rounded-full flex items-center justify-center text-white font-bold mr-3">7</span>
            Stratégie d&apos;Acquisition
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-bespot-dark mb-4">Acquisition B2C (Visiteurs)</h3>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800">SEO Local</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Pages optimisées &quot;restaurants [ville]&quot;, &quot;hotels [ville]&quot;
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800">Content Marketing</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Articles blog, guides locaux, tendances CHR
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800">Social Media</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Instagram, TikTok - Contenus influenceurs BeHype
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-bespot-dark mb-4">Acquisition B2B (Établissements)</h3>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800">Upsell BeHype</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Conversion automatique des clients BeHype
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800">Prospection Directe</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Démarchage ciblé zones à fort potentiel
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800">Partenariats</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Offices de tourisme, associations CHR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Interne */}
        <div className="bg-gradient-to-r from-bespot-blue to-bespot-orange rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Prochaines Étapes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-5xl mb-3">📊</div>
              <h3 className="font-bold mb-2">Validation Metrics</h3>
              <p className="text-sm">
                Objectif : 100 établissements référencés fin Q3 2025
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-5xl mb-3">🤝</div>
              <h3 className="font-bold mb-2">Integration BeHype</h3>
              <p className="text-sm">
                Synchronisation automatique des comptes partenaires
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-5xl mb-3">🚀</div>
              <h3 className="font-bold mb-2">Go-to-Market</h3>
              <p className="text-sm">
                Lancement campagne de communication Q3-Q4 2025
              </p>
            </div>
          </div>
        </div>

        {/* Contact équipe */}
        <div className="mt-8 text-center text-gray-600">
          <p>Pour toute question sur la stratégie BeSpot, contacter :</p>
          <p className="font-semibold mt-2">
            Équipe Produit BeHype - product@behype.fr
          </p>
        </div>
      </div>
    </div>
  );
}
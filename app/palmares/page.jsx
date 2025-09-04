'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BadgePartner from '@/components/BadgePartner';
import RatingStars from '@/components/RatingStars';

export default function PalmaresPage() {
  const [selectedRegion, setSelectedRegion] = useState('provence-alpes-cote-azur');
  const [selectedQuarter, setSelectedQuarter] = useState('q3-2025');

  // Données des palmarès par trimestre et région
  const palmares = {
    'q3-2025': {
      'provence-alpes-cote-azur': {
        title: 'Top 10 Provence-Alpes-Côte d\'Azur - Été 2025',
        subtitle: 'Les établissements incontournables de la Côte d\'Azur sélectionnés par nos influenceurs',
        seoTitle: 'Meilleurs Restaurants et Hôtels Côte d\'Azur 2025 | BeSpot Palmarès',
        description: 'Découvrez le classement exclusif des 10 meilleurs établissements de la région PACA pour l\'été 2025. Une sélection minutieuse réalisée par notre réseau d\'influenceurs BeHype.',
        publishDate: '15 Juin 2025',
        author: 'Équipe éditoriale BeSpot',
        readTime: '8 min',
        establishments: [
          {
            rank: 1,
            name: 'Hôtel Carlton Cannes',
            category: 'hotel',
            city: 'Cannes',
            rating: 4.9,
            isPartner: true,
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
            influencerQuote: 'Un palace d\'exception avec un service irréprochable. La vue depuis la suite présidentielle est à couper le souffle.',
            influencer: '@luxurytravel_fr',
            highlights: ['Plage privée', 'Restaurant étoilé', 'Spa de luxe'],
            description: 'Situé sur la mythique Croisette, le Carlton incarne le luxe à la française. Ses 343 chambres et suites offrent une vue imprenable sur la Méditerranée.'
          },
          {
            rank: 2,
            name: 'Hotel Negresco',
            category: 'hotel',
            city: 'Nice',
            rating: 4.8,
            isPartner: true,
            image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
            influencerQuote: 'Le Negresco n\'est pas qu\'un hôtel, c\'est une expérience culturelle unique. Chaque chambre est une œuvre d\'art.',
            influencer: '@frenchriviera_insider',
            highlights: ['Architecture Belle Époque', 'Collection d\'art', 'Restaurant Le Chantecler'],
            description: 'Monument historique de la Promenade des Anglais, le Negresco fascine par son dôme rose et son intérieur somptueux depuis 1913.'
          },
          {
            rank: 3,
            name: 'Royal-Riviera',
            category: 'hotel',
            city: 'Saint-Jean-Cap-Ferrat',
            rating: 4.8,
            isPartner: false,
            image: 'https://images.unsplash.com/photo-1580041065738-e72023775cdc?w=800',
            influencerQuote: 'Un havre de paix sur la Côte d\'Azur. Les jardins méditerranéens sont un véritable enchantement.',
            influencer: '@mediterranean_dreams',
            highlights: ['Jardins luxuriants', 'Plage privée', 'Wellness center'],
            description: 'Niché dans un écrin de verdure face à la baie de Beaulieu, ce palace Belle Époque offre une expérience exclusive.'
          },
          {
            rank: 4,
            name: 'La Petite Maison',
            category: 'restaurant',
            city: 'Nice',
            rating: 4.7,
            isPartner: false,
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
            influencerQuote: 'La cuisine méditerranéenne dans toute sa splendeur. Les légumes farcis sont un must absolu!',
            influencer: '@foodie_coteazur',
            highlights: ['Cuisine niçoise', 'Produits locaux', 'Ambiance authentique'],
            description: 'Institution niçoise depuis 1992, ce restaurant célèbre la cuisine méditerranéenne avec des produits frais du marché.'
          },
          {
            rank: 5,
            name: 'Le Louis XV - Alain Ducasse',
            category: 'restaurant',
            city: 'Monaco',
            rating: 4.9,
            isPartner: false,
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
            influencerQuote: 'Une expérience gastronomique transcendante. Chaque plat est une œuvre d\'art culinaire.',
            influencer: '@michelin_hunter',
            highlights: ['3 étoiles Michelin', 'Cave exceptionnelle', 'Service royal'],
            description: 'Au cœur de l\'Hôtel de Paris, ce restaurant triplement étoilé sublime la haute gastronomie méditerranéenne.'
          },
          {
            rank: 6,
            name: 'Villa Ephrussi',
            category: 'loisir',
            city: 'Saint-Jean-Cap-Ferrat',
            rating: 4.6,
            isPartner: false,
            image: 'https://images.unsplash.com/photo-1565538420870-da08ff96a207?w=800',
            influencerQuote: 'Les jardins thématiques sont époustouflants. La vue sur la baie est la plus belle de la Côte.',
            influencer: '@culture_riviera',
            highlights: ['9 jardins thématiques', 'Vue panoramique', 'Collection d\'art'],
            description: 'Palais de style Renaissance construit par la baronne Ephrussi de Rothschild, entouré de jardins somptueux.'
          },
          {
            rank: 7,
            name: 'Château de la Chèvre d\'Or',
            category: 'hotel',
            city: 'Èze',
            rating: 4.8,
            isPartner: false,
            image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
            influencerQuote: 'Perché comme un nid d\'aigle, cet hôtel offre la plus belle vue de la Riviera.',
            influencer: '@luxe_escapes',
            highlights: ['Village médiéval', 'Restaurant 2 étoiles', 'Infinity pool'],
            description: 'Ensemble d\'anciennes maisons médiévales transformées en hôtel de luxe avec vue plongeante sur la Méditerranée.'
          },
          {
            rank: 8,
            name: 'Le Cap Estel',
            category: 'hotel',
            city: 'Èze',
            rating: 4.7,
            isPartner: false,
            image: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=800',
            influencerQuote: 'Un secret bien gardé de la Côte. L\'intimité et le luxe à l\'état pur.',
            influencer: '@hidden_gems_fr',
            highlights: ['Presqu\'île privée', 'Suites vue mer', 'Beach club exclusif'],
            description: 'Hôtel confidentiel sur une presqu\'île privée de 2 hectares, offrant une intimité absolue.'
          },
          {
            rank: 9,
            name: 'La Colombe d\'Or',
            category: 'restaurant',
            city: 'Saint-Paul-de-Vence',
            rating: 4.6,
            isPartner: false,
            image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
            influencerQuote: 'Dîner entouré de Picasso et Matisse, une expérience unique au monde.',
            influencer: '@artfood_lover',
            highlights: ['Collection d\'art unique', 'Terrasse mythique', 'Histoire légendaire'],
            description: 'Auberge-restaurant légendaire où les plus grands artistes du XXe siècle ont séjourné et laissé leurs œuvres.'
          },
          {
            rank: 10,
            name: 'Musée Oceanographique',
            category: 'loisir',
            city: 'Monaco',
            rating: 4.5,
            isPartner: false,
            image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
            influencerQuote: 'Un voyage fascinant dans les profondeurs marines. Le bassin aux requins est spectaculaire.',
            influencer: '@family_riviera',
            highlights: ['Aquariums géants', 'Vue sur Monaco', 'Restaurant panoramique'],
            description: 'Perché sur le Rocher de Monaco, ce musée centenaire abrite l\'une des plus belles collections marines d\'Europe.'
          }
        ]
      },
      'auvergne-rhone-alpes': {
        title: 'Top 10 Auvergne-Rhône-Alpes - Été 2025',
        subtitle: 'De Lyon aux sommets alpins, les meilleures adresses de la région',
        seoTitle: 'Meilleurs Restaurants et Hôtels Lyon Alpes 2025 | BeSpot Palmarès',
        description: 'Le classement des 10 établissements incontournables d\'Auvergne-Rhône-Alpes. Des bouchons lyonnais aux palaces alpins, découvrez les coups de cœur de nos influenceurs.',
        publishDate: '15 Juin 2025',
        author: 'Équipe éditoriale BeSpot',
        readTime: '8 min',
        establishments: [
          {
            rank: 1,
            name: 'La Table de Franck Putelat',
            category: 'restaurant',
            city: 'Carcassonne',
            rating: 4.9,
            isPartner: true,
            image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800',
            influencerQuote: 'Une créativité culinaire exceptionnelle face à la cité médiévale. Chaque plat raconte une histoire.',
            influencer: '@gastronomie_france',
            highlights: ['2 étoiles Michelin', 'Vue sur la cité', 'Cave remarquable'],
            description: 'Le chef doublement étoilé sublime les produits du terroir dans un cadre contemporain face aux remparts.'
          },
          {
            rank: 2,
            name: 'La Petite Venise',
            category: 'restaurant',
            city: 'Lyon',
            rating: 4.7,
            isPartner: true,
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
            influencerQuote: 'L\'Italie au cœur de Lyon. Les pâtes fraîches sont divines et la terrasse sur la Saône est magique.',
            influencer: '@lyon_foodie',
            highlights: ['Vue sur la Saône', 'Pâtes fraîches maison', 'Cave italienne'],
            description: 'Restaurant italien authentique dans le Vieux Lyon, réputé pour ses recettes traditionnelles et son ambiance romantique.'
          },
          {
            rank: 3,
            name: 'Sofitel Lyon Bellecour',
            category: 'hotel',
            city: 'Lyon',
            rating: 4.6,
            isPartner: false,
            image: 'https://images.unsplash.com/photo-1565031491910-e57fac031c41?w=800',
            influencerQuote: 'La vue depuis Les Trois Dômes est époustouflante. Lyon à 360 degrés!',
            influencer: '@hotel_insider',
            highlights: ['Restaurant panoramique', 'Spa', 'Emplacement central'],
            description: 'Hôtel 5 étoiles idéalement situé sur les quais du Rhône avec vue panoramique sur la ville.'
          },
          {
            rank: 4,
            name: 'Paul Bocuse',
            category: 'restaurant',
            city: 'Collonges-au-Mont-d\'Or',
            rating: 4.8,
            isPartner: false,
            image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800',
            influencerQuote: 'L\'institution de la gastronomie française. La soupe VGE est légendaire.',
            influencer: '@classic_cuisine',
            highlights: ['3 étoiles Michelin', 'Cuisine traditionnelle', 'Histoire culinaire'],
            description: 'Le temple de la gastronomie lyonnaise, où l\'excellence et la tradition se perpétuent depuis 1965.'
          },
          {
            rank: 5,
            name: 'Brasserie Georges',
            category: 'restaurant',
            city: 'Lyon',
            rating: 4.3,
            isPartner: false,
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
            influencerQuote: 'La plus grande brasserie de France! L\'ambiance Art Déco est unique.',
            influencer: '@lyon_traditions',
            highlights: ['Brasserie historique', 'Choucroute renommée', '700 places'],
            description: 'Institution lyonnaise depuis 1836, cette brasserie monumentale perpétue la tradition avec style.'
          },
          {
            rank: 6,
            name: 'Les Airelles Courchevel',
            category: 'hotel',
            city: 'Courchevel',
            rating: 4.9,
            isPartner: false,
            image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800',
            influencerQuote: 'Le palace ultime des Alpes. Ski-in ski-out avec un service digne d\'un conte de fées.',
            influencer: '@alpine_luxury',
            highlights: ['Ski aux pieds', 'Restaurants étoilés', 'Spa La Prairie'],
            description: 'Palace 5 étoiles au pied des pistes de Courchevel 1850, incarnation du luxe alpin à la française.'
          },
          {
            rank: 7,
            name: 'La Pyramide',
            category: 'restaurant',
            city: 'Vienne',
            rating: 4.7,
            isPartner: false,
            image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800',
            influencerQuote: 'Patrick Henriroux perpétue brillamment l\'héritage de Fernand Point.',
            influencer: '@heritage_gastro',
            highlights: ['2 étoiles Michelin', 'Jardin remarquable', 'Cave historique'],
            description: 'Restaurant mythique où Fernand Point a formé les plus grands chefs, aujourd\'hui sublimé par Patrick Henriroux.'
          },
          {
            rank: 8,
            name: 'Château de Bagnols',
            category: 'hotel',
            city: 'Bagnols',
            rating: 4.8,
            isPartner: false,
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
            influencerQuote: 'Dormir dans un château du XIIIe siècle, une expérience hors du temps.',
            influencer: '@castle_hotels',
            highlights: ['Monument historique', 'Restaurant gastronomique', 'Vignoble'],
            description: 'Château-hôtel médiéval au cœur du Beaujolais, alliant histoire, luxe et gastronomie.'
          },
          {
            rank: 9,
            name: 'Flocons de Sel',
            category: 'restaurant',
            city: 'Megève',
            rating: 4.8,
            isPartner: false,
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
            influencerQuote: 'Emmanuel Renaut sublime la montagne. Ses plats sont de véritables œuvres d\'art.',
            influencer: '@mountain_gourmet',
            highlights: ['3 étoiles Michelin', 'Produits locaux', 'Vue sur le Mont-Blanc'],
            description: 'Le chef triplement étoilé Emmanuel Renaut réinvente la cuisine de montagne avec créativité et élégance.'
          },
          {
            rank: 10,
            name: 'Musée des Confluences',
            category: 'loisir',
            city: 'Lyon',
            rating: 4.5,
            isPartner: false,
            image: 'https://images.unsplash.com/photo-1565538420870-da08ff96a207?w=800',
            influencerQuote: 'Architecture futuriste et collections fascinantes. Un voyage dans le temps et l\'espace.',
            influencer: '@culture_lyon',
            highlights: ['Architecture unique', 'Expositions interactives', 'Terrasse panoramique'],
            description: 'Musée de sciences et sociétés dans un bâtiment spectaculaire au confluent du Rhône et de la Saône.'
          }
        ]
      }
    },
    'q2-2025': {
      'provence-alpes-cote-azur': {
        title: 'Top 10 Provence-Alpes-Côte d\'Azur - Printemps 2025',
        subtitle: 'Les perles de la Riviera française plébiscitées par nos experts',
        seoTitle: 'Palmarès Printemps 2025 Restaurants Hôtels PACA | Guide BeSpot',
        description: 'Retrouvez le classement printanier des meilleurs établissements CHR de la région sud. Une sélection exclusive basée sur les retours de notre communauté d\'influenceurs.',
        publishDate: '15 Mars 2025',
        author: 'Équipe éditoriale BeSpot',
        readTime: '7 min',
        establishments: [] // Données similaires mais différentes pour varier
      }
    }
  };

  const currentPalmares = palmares[selectedQuarter]?.[selectedRegion];

  const regions = [
    { id: 'provence-alpes-cote-azur', name: 'Provence-Alpes-Côte d\'Azur' },
    { id: 'auvergne-rhone-alpes', name: 'Auvergne-Rhône-Alpes' },
    { id: 'ile-de-france', name: 'Île-de-France' },
    { id: 'nouvelle-aquitaine', name: 'Nouvelle-Aquitaine' },
    { id: 'occitanie', name: 'Occitanie' }
  ];

  const quarters = [
    { id: 'q3-2025', name: 'Q3 2025 - Été', current: true },
    { id: 'q2-2025', name: 'Q2 2025 - Printemps' },
    { id: 'q1-2025', name: 'Q1 2025 - Hiver' },
    { id: 'q4-2024', name: 'Q4 2024 - Automne' }
  ];

  // Schema.org pour le SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": currentPalmares?.seoTitle,
    "description": currentPalmares?.description,
    "author": {
      "@type": "Organization",
      "name": "BeSpot"
    },
    "datePublished": "2025-06-15",
    "publisher": {
      "@type": "Organization",
      "name": "BeSpot",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bespot.fr/logo.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-bespot-light to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-bespot-blue to-bespot-orange text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Palmarès BeSpot
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Les établissements d&apos;exception sélectionnés par nos influenceurs
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sélectionner une région
                </label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bespot-blue focus:border-transparent"
                >
                  {regions.map(region => (
                    <option key={region.id} value={region.id}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Trimestre
                </label>
                <select
                  value={selectedQuarter}
                  onChange={(e) => setSelectedQuarter(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bespot-blue focus:border-transparent"
                >
                  {quarters.map(quarter => (
                    <option key={quarter.id} value={quarter.id}>
                      {quarter.name} {quarter.current && '(Actuel)'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {currentPalmares ? (
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Article Header */}
              <header className="p-8 border-b">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span>{currentPalmares.publishDate}</span>
                  <span className="mx-2">•</span>
                  <span>{currentPalmares.readTime} de lecture</span>
                  <span className="mx-2">•</span>
                  <span>Par {currentPalmares.author}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-bespot-dark mb-4">
                  {currentPalmares.title}
                </h1>
                <p className="text-xl text-gray-700">
                  {currentPalmares.subtitle}
                </p>
              </header>

              {/* Article Content */}
              <div className="p-8">
                <div className="prose prose-lg max-w-none mb-12">
                  <p className="text-gray-700 leading-relaxed">
                    {currentPalmares.description}
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Chaque trimestre, notre réseau d&apos;influenceurs parcourt la région pour dénicher 
                    et évaluer les meilleures adresses. Ce palmarès est le fruit de centaines de visites, 
                    de dégustations et d&apos;expériences authentiques. Voici les 10 établissements qui ont 
                    marqué les esprits cette saison.
                  </p>
                </div>

                {/* Top 10 List */}
                <div className="space-y-8">
                  {currentPalmares.establishments.map((etablissement, index) => (
                    <div key={index} className="border-b pb-8 last:border-0">
                      <div className="flex items-start gap-6">
                        {/* Rank */}
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white ${
                            etablissement.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                            etablissement.rank === 2 ? 'bg-gradient-to-r from-gray-300 to-gray-500' :
                            etablissement.rank === 3 ? 'bg-gradient-to-r from-orange-400 to-orange-600' :
                            'bg-gradient-to-r from-bespot-blue to-bespot-blue/80'
                          }`}>
                            {etablissement.rank}
                          </div>
                        </div>

                        {/* Image */}
                        <div className="flex-shrink-0 hidden md:block">
                          <div className="relative w-48 h-32 rounded-lg overflow-hidden">
                            <Image
                              src={etablissement.image}
                              alt={etablissement.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h2 className="text-2xl font-bold text-bespot-dark flex items-center gap-2">
                                {etablissement.name}
                                {etablissement.isPartner && <BadgePartner />}
                              </h2>
                              <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                                <span className="capitalize">{etablissement.category}</span>
                                <span>•</span>
                                <span>{etablissement.city}</span>
                                <span>•</span>
                                <div className="flex items-center">
                                  <RatingStars rating={etablissement.rating} size="small" />
                                  <span className="ml-1 font-semibold">{etablissement.rating}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-700 mb-3">
                            {etablissement.description}
                          </p>

                          {/* Influencer Quote */}
                          <blockquote className="bg-bespot-light border-l-4 border-bespot-orange p-4 mb-3 rounded-r-lg">
                            <p className="italic text-gray-700">
                              &ldquo;{etablissement.influencerQuote}&rdquo;
                            </p>
                            <cite className="text-sm text-gray-600 mt-2 block">
                              — {etablissement.influencer}
                            </cite>
                          </blockquote>

                          {/* Highlights */}
                          <div className="flex flex-wrap gap-2">
                            {etablissement.highlights.map((highlight, idx) => (
                              <span key={idx} className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700">
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Article Footer */}
                <div className="mt-12 pt-8 border-t">
                  <div className="bg-gradient-to-r from-bespot-blue/10 to-bespot-orange/10 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-bespot-dark mb-3">
                      Méthodologie du Palmarès
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Ce classement est établi sur la base des évaluations de notre réseau de 50+ influenceurs 
                      partenaires BeHype. Chaque établissement est noté selon 5 critères : qualité du service, 
                      originalité, rapport qualité-prix, ambiance et expérience globale.
                    </p>
                    <p className="text-sm text-gray-600">
                      Les établissements partenaires BeHype sont identifiés par un badge distinctif mais sont 
                      évalués selon les mêmes critères objectifs que tous les autres établissements.
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-8">
                    <div>
                      <p className="text-sm text-gray-600">Partager cet article</p>
                      <div className="flex gap-3 mt-2">
                        <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                          <span className="sr-only">Facebook</span>
                          f
                        </button>
                        <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                          <span className="sr-only">Twitter</span>
                          X
                        </button>
                        <button className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                          <span className="sr-only">WhatsApp</span>
                          W
                        </button>
                      </div>
                    </div>

                    <Link
                      href="/etablissements"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-bespot-blue to-bespot-orange text-white font-semibold rounded-full hover:shadow-lg transition-shadow"
                    >
                      Découvrir tous les établissements
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-12 text-center">
              <p className="text-xl text-gray-600">
                Le palmarès pour cette période sera bientôt disponible.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
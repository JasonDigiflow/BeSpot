import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BadgePartner from '@/components/BadgePartner';
import RatingStars from '@/components/RatingStars';
import etablissements from '@/data/etablissements.json';

export async function generateStaticParams() {
  return etablissements.map((etablissement) => ({
    slug: etablissement.slug,
  }));
}

export async function generateMetadata({ params }) {
  const etablissement = etablissements.find(e => e.slug === params.slug);
  
  if (!etablissement) {
    return {
      title: 'Établissement non trouvé - BeSpot',
      description: 'Cet établissement n\'existe pas dans notre guide.',
    };
  }

  return {
    title: `${etablissement.name} - BeSpot`,
    description: etablissement.description,
    openGraph: {
      title: `${etablissement.name} - BeSpot`,
      description: etablissement.description,
      images: [etablissement.images[0]],
    },
  };
}

export default function EtablissementPage({ params }) {
  const etablissement = etablissements.find(e => e.slug === params.slug);

  if (!etablissement) {
    notFound();
  }

  const mockReviews = [
    { id: 1, author: "Marie L.", rating: 5, comment: "Excellent établissement, je recommande vivement !", date: "Il y a 2 jours" },
    { id: 2, author: "Jean P.", rating: 4, comment: "Très bon service, cadre agréable.", date: "Il y a 1 semaine" },
    { id: 3, author: "Sophie M.", rating: 5, comment: "Une expérience inoubliable, tout était parfait.", date: "Il y a 2 semaines" },
  ];

  // Images contextuelles selon le type d'établissement
  const contextualImages = {
    restaurant: {
      title: "Nos plats signature",
      images: [
        { url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400", alt: "Plat principal" },
        { url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400", alt: "Entrée raffinée" },
        { url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400", alt: "Pizza artisanale" },
        { url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400", alt: "Dessert gourmand" },
        { url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400", alt: "Salade fraîche" },
        { url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400", alt: "Burger gourmet" }
      ]
    },
    hotel: {
      title: "Nos chambres et suites",
      images: [
        { url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400", alt: "Suite deluxe" },
        { url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400", alt: "Chambre standard" },
        { url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400", alt: "Salle de bain luxe" },
        { url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400", alt: "Vue balcon" },
        { url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400", alt: "Chambre familiale" },
        { url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400", alt: "Espace détente" }
      ]
    },
    loisir: {
      title: "Activités et expériences",
      images: [
        { url: "https://images.unsplash.com/photo-1533727937480-da3a97967e95?w=400", alt: "Activité principale" },
        { url: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=400", alt: "Espace famille" },
        { url: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=400", alt: "Expérience unique" },
        { url: "https://images.unsplash.com/photo-1606924795730-839545d2b97e?w=400", alt: "Spectacle" },
        { url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400", alt: "Vue panoramique" },
        { url: "https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=400", alt: "Attraction" }
      ]
    }
  };

  const specificImages = contextualImages[etablissement.category] || contextualImages.loisir;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/etablissements" className="inline-flex items-center text-bespot-blue hover:text-blue-600 mb-6">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Retour aux établissements
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-96 w-full">
          <Image
            src={etablissement.images[0]}
            alt={etablissement.name}
            fill
            className="object-cover"
            priority
          />
          {etablissement.isPartner && (
            <div className="absolute top-4 left-4">
              <BadgePartner className="text-sm px-4 py-2" />
            </div>
          )}
        </div>

        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-bespot-dark mb-2">
                {etablissement.name}
              </h1>
              <p className="text-lg text-gray-600">
                {etablissement.city}, {etablissement.country}
              </p>
              <div className="flex items-center mt-2">
                <RatingStars rating={etablissement.rating} size="medium" />
                <span className="ml-2 text-lg font-semibold">{etablissement.rating.toFixed(1)}</span>
              </div>
            </div>
            {etablissement.isPartner && (
              <div className="mt-4 md:mt-0 p-4 bg-gradient-to-r from-bespot-blue/10 to-bespot-orange/10 rounded-lg">
                <p className="font-semibold text-bespot-dark mb-2">Établissement partenaire</p>
                <p className="text-sm text-gray-600">
                  Cet établissement fait partie de notre réseau de partenaires BeHype
                </p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-bespot-dark mb-4">Description</h2>
              <p className="text-gray-700 mb-6">{etablissement.description}</p>

              <h3 className="text-lg font-semibold text-bespot-dark mb-3">Informations pratiques</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 text-bespot-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{etablissement.address}</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 text-bespot-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Horaires : {etablissement.hours}</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-bespot-dark mt-6 mb-3">Points forts</h3>
              <div className="flex flex-wrap gap-2">
                {etablissement.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-bespot-light text-bespot-dark rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-bespot-dark mb-4">Galerie photos</h3>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {etablissement.images.slice(1, 5).map((image, index) => (
                  <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src={image || `https://picsum.photos/400/300?random=${index}`}
                      alt={`${etablissement.name} ${index + 2}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-bespot-dark mb-4">Localisation</h3>
              <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000!2d${etablissement.lng}!3d${etablissement.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQ1JzUwLjQiTiAywrA1MCcwOC42IkU!5e0!3m2!1sfr!2sfr!4v1234567890`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Section d'images contextuelles selon le type d'établissement */}
          <div className="mt-8 bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold text-bespot-dark mb-4">
              {specificImages.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {specificImages.images.map((image, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="absolute bottom-2 left-2 text-white text-sm font-medium">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {etablissement.isPartner && (
            <div className="mt-8 p-6 bg-gradient-to-r from-bespot-blue/5 to-bespot-orange/5 rounded-lg">
              <h3 className="text-xl font-semibold text-bespot-dark mb-4">
                Influence BeHype
              </h3>
              <p className="text-gray-700 mb-4">
                Découvrez les contenus créés par nos influenceurs partenaires pour cet établissement
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-gradient-to-r from-bespot-blue to-bespot-orange rounded-full mr-3"></div>
                      <div>
                        <p className="font-semibold text-sm">Influenceur {i}</p>
                        <p className="text-xs text-gray-600">@influenceur{i}</p>
                      </div>
                    </div>
                    <div className="h-32 bg-gray-200 rounded-lg mb-2"></div>
                    <p className="text-xs text-gray-600">Contenu bientôt disponible</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-bespot-dark mb-4">Avis clients</h3>
            <div className="space-y-4">
              {mockReviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-bespot-dark">{review.author}</p>
                      <RatingStars rating={review.rating} size="small" />
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
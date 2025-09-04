import Link from 'next/link';
import Image from 'next/image';
import BadgePartner from './BadgePartner';
import RatingStars from './RatingStars';

export default function CardPlace({ etablissement }) {
  const categoryLabels = {
    restaurant: 'Restaurant',
    hotel: 'Hôtel',
    loisir: 'Loisir'
  };

  return (
    <Link href={`/etablissements/${etablissement.slug}`}>
      <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={etablissement.images[0]}
            alt={etablissement.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {etablissement.isPartner && (
            <div className="absolute top-2 left-2">
              <BadgePartner />
            </div>
          )}
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
            {categoryLabels[etablissement.category]}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-bespot-dark mb-1 group-hover:text-bespot-blue transition-colors">
            {etablissement.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            {etablissement.city}, {etablissement.country}
          </p>
          <div className="flex items-center justify-between">
            <RatingStars rating={etablissement.rating} size="small" />
            <span className="text-sm font-medium text-gray-700">{etablissement.rating.toFixed(1)}</span>
          </div>
          {etablissement.tags && etablissement.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {etablissement.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
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

  const categoryColors = {
    restaurant: 'from-orange-400 to-red-400',
    hotel: 'from-blue-400 to-purple-400',
    loisir: 'from-green-400 to-teal-400'
  };

  return (
    <Link href={`/etablissements/${etablissement.slug}`}>
      <div className="group relative">
        {/* Glow effect for partners */}
        {etablissement.isPartner && (
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
        )}
        
        <div className={`relative bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden border ${
          etablissement.isPartner 
            ? 'border-yellow-400/30' 
            : 'border-white/30'
        } shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer`}>
          
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={etablissement.images[0]}
              alt={etablissement.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {etablissement.isPartner && (
              <div className="absolute top-3 left-3 z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-full blur-md"></div>
                  <BadgePartner className="relative" />
                </div>
              </div>
            )}
            
            <div className={`absolute top-3 right-3 px-3 py-1 bg-gradient-to-r ${categoryColors[etablissement.category]} text-white text-xs font-bold rounded-full shadow-lg`}>
              {categoryLabels[etablissement.category]}
            </div>
            
            {/* Rating overlay on hover */}
            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full">
                <RatingStars rating={etablissement.rating} size="small" />
              </div>
            </div>
          </div>
          
          <div className="p-5">
            <h3 className="text-xl font-bold text-bespot-dark mb-2 group-hover:bg-gradient-to-r group-hover:from-bespot-blue group-hover:to-bespot-orange group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              {etablissement.name}
            </h3>
            
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-gray-600 font-medium">
                {etablissement.city}, {etablissement.country}
              </p>
              <div className="flex items-center space-x-1">
                <span className="text-lg font-bold bg-gradient-to-r from-bespot-blue to-bespot-orange bg-clip-text text-transparent">
                  {etablissement.rating.toFixed(1)}
                </span>
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            
            {etablissement.tags && etablissement.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {etablissement.tags.slice(0, 3).map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-xs px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full font-medium hover:from-bespot-blue/10 hover:to-bespot-orange/10 hover:text-bespot-dark transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {/* VIP indicator for partners */}
            {etablissement.isPartner && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-yellow-600">
                    ✨ Établissement VIP
                  </span>
                  <span className="text-xs text-gray-500">
                    Validé BeHype
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
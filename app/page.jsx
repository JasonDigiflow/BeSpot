'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroGradient from '@/components/HeroGradient';
import CardPlace from '@/components/CardPlace';
import etablissements from '@/data/etablissements.json';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeInfluencerVideo, setActiveInfluencerVideo] = useState(0);

  const featuredPlaces = etablissements
    .filter(e => e.isPartner)
    .slice(0, 6);

  const testimonials = [
    {
      name: "Sarbacane",
      video: "https://res.cloudinary.com/dnpbzxerj/video/upload/v1752569488/sarbacane_testimonial_xxw185.mp4",
      description: "Restaurant gastronomique"
    },
    {
      name: "Le Môme",
      video: "https://res.cloudinary.com/dnpbzxerj/video/upload/v1752569489/le_mome_testimonial_isqam2.mp4",
      description: "Brasserie moderne"
    },
    {
      name: "P'tit Jardin",
      video: "https://res.cloudinary.com/dnpbzxerj/video/upload/v1752569488/ptit_jardin_testimonial_rzku6g.mp4",
      description: "Restaurant traditionnel"
    },
    {
      name: "Iveri",
      video: "https://res.cloudinary.com/dnpbzxerj/video/upload/v1752569487/iveri_testimonial_pphoxw.mp4",
      description: "Cuisine fusion"
    }
  ];

  const influencerVideos = [
    {
      title: "Promotion Instagram",
      video: "https://res.cloudinary.com/dnpbzxerj/video/upload/v1751919886/0707_uu4bx4.mov",
      platform: "Instagram Reels"
    },
    {
      title: "Story Lifestyle",
      iframe: "https://player.vimeo.com/video/1073079495?h=be914b4690&autoplay=1&muted=1&loop=1&background=1",
      platform: "Stories"
    },
    {
      title: "Review Gastronomique",
      iframe: "https://player.vimeo.com/video/1073079513?h=9f1047be83&autoplay=1&muted=1&loop=1&background=1",
      platform: "TikTok"
    },
    {
      title: "Visite Exclusive",
      iframe: "https://player.vimeo.com/video/1073079506?h=96fdc31456&autoplay=1&muted=1&loop=1&background=1",
      platform: "YouTube Shorts"
    }
  ];

  return (
    <>
      <HeroGradient>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 animate-fade-in">
            BeSpot
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-10 animate-slide-up font-light">
            Le guide des lieux tendances validés par BeHype
          </p>
          <Link
            href="/etablissements"
            className="inline-block px-10 py-4 bg-white/20 backdrop-blur-xl text-white font-bold rounded-full hover:bg-white/30 transform hover:scale-105 transition-all duration-300 border border-white/30"
          >
            Découvrir les établissements
          </Link>
        </div>
      </HeroGradient>

      {/* Section Témoignages Clients */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-bespot-dark mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Découvrez les témoignages de nos établissements partenaires qui ont boosté leur visibilité avec BeHype et BeSpot
          </p>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Video principale */}
              <div className="relative aspect-[9/16] lg:aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl">
                <video
                  key={activeTestimonial}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={testimonials[activeTestimonial].video} type="video/mp4" />
                </video>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-2xl font-bold">{testimonials[activeTestimonial].name}</h3>
                  <p className="text-white/80">{testimonials[activeTestimonial].description}</p>
                </div>
              </div>
              
              {/* Sélecteur de témoignages */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-bespot-dark mb-6">
                  Témoignages de nos partenaires
                </h3>
                {testimonials.map((testimonial, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                      activeTestimonial === index
                        ? 'bg-gradient-to-r from-bespot-blue/10 to-bespot-orange/10 border-bespot-blue shadow-lg'
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-bespot-dark">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{testimonial.description}</p>
                      </div>
                      {activeTestimonial === index && (
                        <div className="w-12 h-12 bg-gradient-to-r from-bespot-blue to-bespot-orange rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
                
                <div className="mt-6 p-6 bg-gradient-to-r from-bespot-blue to-bespot-orange rounded-2xl text-white">
                  <h4 className="font-bold text-xl mb-2">Rejoignez nos partenaires</h4>
                  <p className="text-white/90 mb-4">
                    Augmentez votre visibilité avec BeHype et BeSpot
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-2 bg-white text-bespot-blue font-semibold rounded-full hover:scale-105 transition-transform"
                  >
                    Devenir partenaire
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Exemples Influenceurs */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Campagnes d'influence en action
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Découvrez comment nos influenceurs mettent en valeur vos établissements sur tous les réseaux sociaux
          </p>
          
          <div className="max-w-7xl mx-auto">
            {/* Grille de vidéos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {influencerVideos.map((video, index) => (
                <div
                  key={index}
                  onClick={() => setActiveInfluencerVideo(index)}
                  className={`relative aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden cursor-pointer group ${
                    activeInfluencerVideo === index ? 'ring-4 ring-bespot-orange' : ''
                  }`}
                >
                  {video.iframe ? (
                    <iframe
                      src={video.iframe}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={video.video} type="video/mp4" />
                    </video>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-bold">{video.title}</p>
                      <p className="text-white/70 text-sm">{video.platform}</p>
                    </div>
                  </div>
                  
                  {/* Badge platform */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-semibold text-white">{video.platform}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-bespot-blue to-bespot-orange bg-clip-text text-transparent">
                  50+
                </div>
                <p className="text-gray-400 mt-2">Influenceurs actifs</p>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-bespot-blue to-bespot-orange bg-clip-text text-transparent">
                  1M+
                </div>
                <p className="text-gray-400 mt-2">Reach mensuel</p>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-bespot-blue to-bespot-orange bg-clip-text text-transparent">
                  500+
                </div>
                <p className="text-gray-400 mt-2">Contenus créés</p>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-bespot-blue to-bespot-orange bg-clip-text text-transparent">
                  98%
                </div>
                <p className="text-gray-400 mt-2">Satisfaction client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi BeSpot */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-bespot-dark mb-12">
            Pourquoi BeSpot ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-bespot-blue to-bespot-orange rounded-full opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
                <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <svg className="w-12 h-12 text-bespot-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Sélection validée</h3>
              <p className="text-gray-600">
                Chaque établissement est soigneusement sélectionné et validé par nos équipes
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-bespot-blue to-bespot-orange rounded-full opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
                <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <svg className="w-12 h-12 text-bespot-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Contenus authentiques</h3>
              <p className="text-gray-600">
                Des photos et vidéos réelles créées par nos influenceurs partenaires
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-bespot-blue to-bespot-orange rounded-full opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
                <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Visibilité locale</h3>
              <p className="text-gray-600">
                Trouvez facilement les meilleurs établissements près de chez vous
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Établissements partenaires */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-bespot-dark mb-4">
            Établissements partenaires
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Découvrez notre sélection d&apos;établissements partenaires BeHype
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredPlaces.map((place) => (
              <CardPlace key={place.id} etablissement={place} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/etablissements"
              className="inline-block px-8 py-4 bg-gradient-to-r from-bespot-blue to-bespot-orange text-white font-bold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Voir tous les établissements
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Vous êtes propriétaire d&apos;un établissement ?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Rejoignez BeHype et bénéficiez d&apos;une visibilité exceptionnelle sur BeSpot
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-gradient-to-r from-bespot-blue to-bespot-orange text-white font-bold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Devenir partenaire
              </Link>
              <Link
                href="/palmares"
                className="inline-block px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                Voir le palmarès
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
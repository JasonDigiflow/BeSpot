'use client';

export default function HeroGradient({ children }) {
  return (
    <div className="relative min-h-[750px] overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source 
            src="https://res.cloudinary.com/dnpbzxerj/video/upload/v1751631633/vidam_pres_horizontale_urwftf.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        
        {/* Additional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-bespot-blue/20 via-transparent to-bespot-orange/20"></div>
      </div>

      {/* Animated glass shards effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white transform -rotate-12 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white transform rotate-45 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Content container with premium glass effect */}
      <div className="relative z-10 text-center px-6 py-16 max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-16 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-700">
          
          {children}
          
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24">
            <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-white/30 rounded-tl-xl"></div>
          </div>
          <div className="absolute top-0 right-0 w-24 h-24">
            <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/30 rounded-tr-xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-24 h-24">
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/30 rounded-bl-xl"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-24 h-24">
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-white/30 rounded-br-xl"></div>
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-bespot-blue/10 via-transparent to-bespot-orange/10 blur-3xl opacity-50 -z-10"></div>
        </div>
      </div>

      {/* Floating light particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
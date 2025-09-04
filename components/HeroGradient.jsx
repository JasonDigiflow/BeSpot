'use client';

export default function HeroGradient({ children }) {
  return (
    <div className="relative min-h-[700px] overflow-hidden flex items-center justify-center">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-orange-100">
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000"></div>
      </div>

      {/* Glass overlay patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Content container with glass effect */}
      <div className="relative z-10 text-center px-6 py-12 max-w-5xl mx-auto">
        <div className="bg-white/30 backdrop-blur-2xl rounded-3xl p-12 border border-white/50 shadow-2xl">
          {/* VIP Badge */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wider">
                ✨ EXPERIENCE PREMIUM ✨
              </div>
            </div>
          </div>
          
          {children}
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4">
            <div className="w-20 h-20 bg-gradient-to-br from-white/40 to-white/10 rounded-full backdrop-blur-md"></div>
          </div>
          <div className="absolute bottom-4 left-4">
            <div className="w-16 h-16 bg-gradient-to-br from-white/40 to-white/10 rounded-full backdrop-blur-md"></div>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          >
            <div className={`w-2 h-2 bg-gradient-to-br ${
              i % 3 === 0 ? 'from-blue-400 to-purple-400' :
              i % 3 === 1 ? 'from-orange-400 to-pink-400' :
              'from-purple-400 to-indigo-400'
            } rounded-full opacity-30 blur-sm`}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
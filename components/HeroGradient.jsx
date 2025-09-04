export default function HeroGradient({ children }) {
  return (
    <div className="relative min-h-[600px] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-200 to-orange-200 animate-gradient"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-4000"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        {children}
      </div>
    </div>
  );
}
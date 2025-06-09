
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-blue-700 to-gray-800">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse-soft"></div>
        <div className="absolute bottom-32 right-32 w-20 h-20 bg-white rounded-full animate-pulse-soft delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse-soft delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center text-white relative z-10">
        {/* Profile Image Placeholder */}
        <div className={`w-32 h-32 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center">
            <span className="text-2xl font-poppins font-bold text-white">SP</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className={`font-poppins font-bold text-5xl md:text-7xl mb-4 transition-all duration-1000 delay-200 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          Siva Prasad Muppala
        </h1>

        {/* Tagline */}
        <h2 className={`font-poppins font-semibold text-2xl md:text-3xl mb-8 text-blue-200 transition-all duration-1000 delay-400 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          20+ Years of Software Engineering Excellence
        </h2>

        {/* Quote */}
        <blockquote className={`font-opensans italic text-lg md:text-xl max-w-4xl mx-auto mb-6 text-gray-200 transition-all duration-1000 delay-600 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          "The best software is not just a tool, but a partner in driving our business forward."
          <footer className="text-sm mt-2 text-blue-200">— Siva Prasad Muppala</footer>
        </blockquote>

        {/* Subtext */}
        <p className={`font-opensans text-lg text-blue-100 transition-all duration-1000 delay-800 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          Based in India | Serving Global Enterprises
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

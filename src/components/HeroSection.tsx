
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "50+", label: "Enterprise Projects" },
    { number: "15+", label: "Global Clients" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Parallax Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-blue-700 to-blue-900">
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Tech Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] repeat"></div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse-soft"></div>
        <div className="absolute bottom-32 right-32 w-20 h-20 bg-white rounded-full animate-pulse-soft delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse-soft delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white rounded-full animate-pulse-soft delay-500"></div>
      </div>

      <div className="container mx-auto px-4 text-center text-white relative z-10">
        {/* Enhanced Profile Section */}
        <div className={`w-40 h-40 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in animate-scale-up' : 'opacity-0'
        }`}>
          <div className="w-32 h-32 bg-white/30 rounded-full flex items-center justify-center">
            <span className="text-3xl font-poppins font-bold text-white">SPM</span>
          </div>
        </div>

        {/* Enhanced Main Heading */}
        <h1 className={`font-poppins font-bold text-5xl md:text-7xl mb-4 transition-all duration-1000 delay-200 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          Siva Prasad Muppala
        </h1>

        {/* Professional Badges */}
        <div className={`flex flex-wrap justify-center gap-3 mb-6 transition-all duration-1000 delay-300 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
            🏆 Senior Software Architect
          </Badge>
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
            ☁️ Cloud Native Expert
          </Badge>
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
            🤖 AI/ML Specialist
          </Badge>
        </div>

        {/* Enhanced Tagline */}
        <h2 className={`font-poppins font-semibold text-2xl md:text-4xl mb-8 text-blue-200 transition-all duration-1000 delay-400 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          Transforming Enterprises Through Strategic Technology Solutions
        </h2>

        {/* Value Proposition */}
        <p className={`font-opensans text-lg md:text-xl max-w-4xl mx-auto mb-8 text-blue-100 transition-all duration-1000 delay-500 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          Leading global enterprises to digital excellence with 20+ years of proven expertise in building 
          mission-critical systems that drive business growth and operational efficiency.
        </p>

        {/* Enhanced Quote */}
        <blockquote className={`font-opensans italic text-lg md:text-xl max-w-4xl mx-auto mb-8 text-gray-200 border-l-4 border-white/30 pl-6 transition-all duration-1000 delay-600 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          "Technology should be your strategic partner, not just a tool. I build solutions that don't just work—they transform your business."
          <footer className="text-sm mt-2 text-blue-200">— Siva Prasad Muppala</footer>
        </blockquote>

        {/* Statistics */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-700 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
              <div className="text-sm text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-800 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-white text-deep-blue hover:bg-gray-100 font-poppins font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Your Digital Transformation
          </Button>
          <Button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-deep-blue font-poppins font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300"
          >
            View Success Stories
          </Button>
        </div>

        {/* Location & Availability */}
        <p className={`font-opensans text-lg text-blue-100 mt-8 transition-all duration-1000 delay-900 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          🌍 Based in India • Serving Global Fortune 500 Companies • Available for Strategic Consulting
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

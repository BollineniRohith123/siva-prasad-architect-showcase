
import { useEffect, useRef, useState } from 'react';
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const expertiseAreas = [
    "Full Stack & Cloud Native Solutions",
    "AI/ML for Business Insights & Automation",
    "Real-Time Systems for Port, Fleet & Airbase Ops",
    "High-Security Platforms for Banking & Insurance",
    "Product Innovation & Digital Transformation",
    "End-to-End Delivery & Stakeholder Collaboration"
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-deep-blue mb-4">
            ABOUT SIVA
          </h2>
          <div className="w-24 h-1 bg-light-blue mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              A visionary software architect and development leader who believes software should act as a strategic growth partner, not just code. With over two decades of experience across industries like Logistics, Aviation, Banking, Insurance, and Healthcare, I deliver technology that transforms business outcomes. From on-ground logistics systems to AI-powered analytics engines, I build platforms that scale with business vision.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="font-poppins font-semibold text-2xl text-deep-blue mb-6">
              Expertise Snapshot
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {expertiseAreas.map((area, index) => (
                <div
                  key={index}
                  className={`flex items-center p-4 bg-white rounded-lg shadow-sm border-l-4 border-light-blue hover:shadow-md transition-all duration-300 delay-${(index + 1) * 100}`}
                >
                  <div className="w-2 h-2 bg-light-blue rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

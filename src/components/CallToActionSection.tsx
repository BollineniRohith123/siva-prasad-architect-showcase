
import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
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

  const handleContactClick = () => {
    window.location.href = 'mailto:siva.prasad@example.com';
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-deep-blue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white rounded-full animate-pulse-soft delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white rounded-full animate-pulse-soft delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Ready to transform your business with innovative software solutions? Get in touch with Siva today!
          </p>
          
          <Button
            onClick={handleContactClick}
            size="lg"
            className="bg-white text-deep-blue hover:bg-gray-100 font-poppins font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulse-soft"
          >
            Contact Siva
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;

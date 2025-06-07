
import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

  const contactMethods = [
    {
      title: "Strategic Consultation",
      description: "Book a 60-minute strategy session to discuss your digital transformation goals",
      action: "Schedule Consultation",
      icon: "📅",
      urgent: false
    },
    {
      title: "Project Inquiry",
      description: "Have a specific project in mind? Let's discuss requirements and timeline",
      action: "Discuss Project",
      icon: "💼",
      urgent: false
    },
    {
      title: "Urgent Support",
      description: "Need immediate technical assistance? Available for emergency consultations",
      action: "Get Immediate Help",
      icon: "🚨",
      urgent: true
    }
  ];

  const guarantees = [
    "✅ 100% Confidentiality & NDA Protection",
    "✅ Risk-Free Initial Consultation",
    "✅ Detailed Project Roadmap & Timeline",
    "✅ Transparent Pricing & No Hidden Costs",
    "✅ 24/7 Support During Project Lifecycle",
    "✅ Post-Deployment Maintenance & Optimization"
  ];

  const whyChoose = [
    {
      title: "Proven ROI",
      description: "Average 300% ROI within 18 months of project completion",
      icon: "📈"
    },
    {
      title: "Global Expertise",
      description: "Successfully delivered projects across 25+ countries",
      icon: "🌍"
    },
    {
      title: "Enterprise Ready",
      description: "Solutions built to handle millions of users and transactions",
      icon: "🏢"
    },
    {
      title: "Future-Proof",
      description: "Architectures designed to evolve with your business needs",
      icon: "🔮"
    }
  ];

  const handleContactClick = (type: string) => {
    // In a real implementation, these would route to specific contact forms or booking systems
    const emailSubject = encodeURIComponent(`${type} - Inquiry from Website`);
    const emailBody = encodeURIComponent(`Hello Siva,\n\nI'm interested in discussing ${type.toLowerCase()} for my organization.\n\nBest regards`);
    window.location.href = `mailto:siva.prasad@example.com?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-deep-blue text-white relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white rounded-full animate-pulse-soft delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white rounded-full animate-pulse-soft delay-1000"></div>
        <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-white rounded-full animate-pulse-soft delay-300"></div>
        <div className="absolute bottom-1/3 left-1/4 w-14 h-14 bg-white rounded-full animate-pulse-soft delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Join the ranks of successful enterprises who have accelerated their growth through strategic technology partnerships. 
            Let's turn your vision into reality.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto mb-8">
            <h3 className="font-poppins font-bold text-xl mb-4">What You Get:</h3>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="text-left text-blue-100">
                  {guarantee}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          {contactMethods.map((method, index) => (
            <Card 
              key={index} 
              className={`bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 ${
                method.urgent ? 'ring-2 ring-red-400 ring-opacity-50' : ''
              }`}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="font-poppins font-bold text-xl mb-3">
                  {method.title}
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  {method.description}
                </p>
                <Button
                  onClick={() => handleContactClick(method.title)}
                  className={`w-full font-poppins font-semibold transition-all duration-300 ${
                    method.urgent 
                      ? 'bg-red-600 hover:bg-red-700 text-white animate-pulse-soft' 
                      : 'bg-white text-deep-blue hover:bg-gray-100'
                  }`}
                >
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className={`mb-16 transition-all duration-1000 delay-400 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="font-poppins font-bold text-3xl text-center mb-8">
            Why Global Enterprises Choose Siva
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {whyChoose.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{reason.icon}</div>
                <h4 className="font-poppins font-bold text-lg mb-2">{reason.title}</h4>
                <p className="text-blue-200 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA */}
        <div className={`text-center transition-all duration-1000 delay-600 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-2xl mx-auto">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-6">
              Your Digital Transformation Starts Here
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Don't let your competitors gain the digital advantage. Schedule your strategic consultation today 
              and discover how technology can accelerate your business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleContactClick('Strategic Consultation')}
                size="lg"
                className="bg-white text-deep-blue hover:bg-gray-100 font-poppins font-bold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                🚀 Start Your Transformation
              </Button>
              <Button
                onClick={() => handleContactClick('Project Inquiry')}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-deep-blue font-poppins font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300"
              >
                💬 Discuss Your Project
              </Button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-blue-200 text-sm mb-2">
                📞 Prefer to talk directly?
              </p>
              <p className="text-white font-semibold">
                Available for immediate consultation: +91-XXX-XXX-XXXX
              </p>
              <p className="text-blue-200 text-xs mt-2">
                * Response guaranteed within 2 hours during business hours
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <div className="border-t border-white/20 pt-8">
            <p className="text-blue-200 text-sm mb-4">
              Trusted by Fortune 500 companies worldwide
            </p>
            <div className="flex justify-center items-center space-x-8 text-white/60">
              <span className="text-xs">🏆 AWS Partner</span>
              <span className="text-xs">🏆 Microsoft Partner</span>
              <span className="text-xs">🏆 Google Cloud Partner</span>
              <span className="text-xs">🏆 ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;

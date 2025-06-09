
import { useEffect, useRef, useState } from 'react';
import { Badge } from "@/components/ui/badge";

const BrandingMarketingSection = () => {
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

  const aiMarketingCapabilities = [
    "Intelligent Content Creation",
    "Automated Campaign Optimization",
    "Predictive Lead Scoring",
    "Dynamic Audience Segmentation",
    "Real-time Performance Analytics",
    "AI-Powered A/B Testing",
    "Conversion Rate Optimization",
    "Behavioral Trigger Automation",
    "Smart Budget Allocation",
    "Cross-Platform Integration",
    "Advanced Customer Journey Mapping",
    "Personalized User Experiences",
    "Data-Driven Decision Making",
    "ROI Maximization Strategies",
    "Brand Voice Consistency"
  ];

  const marketingExpertise = [
    "AI-Powered Content Strategy – Creating compelling narratives that convert prospects into loyal customers",
    "Lead Generation Mastery – Building automated funnels that generate 300% more qualified leads",
    "Brand Positioning Expert – Transforming businesses into market leaders through strategic brand development",
    "Performance Marketing – Driving measurable ROI through data-driven campaign optimization"
  ];

  return (
    <section ref={sectionRef} id="marketing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-deep-blue mb-4">
            BRANDING & DIGITAL MARKETING MASTERY
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Leveraging Generative AI to Transform Brands and Accelerate Lead Generation
          </p>
          <div className="w-24 h-1 bg-light-blue mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* AI Marketing Capabilities */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="font-poppins font-bold text-2xl text-deep-blue mb-6">
              AI-Driven Marketing Excellence
            </h3>
            <p className="text-gray-700 mb-6">
              Harnessing the power of artificial intelligence to create sophisticated marketing campaigns that deliver measurable results and sustainable business growth through strategic automation and data-driven insights.
            </p>
            <div className="flex flex-wrap gap-3">
              {aiMarketingCapabilities.map((capability, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-3 py-2 text-sm border-light-blue text-deep-blue hover:bg-light-blue hover:text-white transition-all duration-300 hover:shadow-md hover:scale-105"
                >
                  {capability}
                </Badge>
              ))}
            </div>
          </div>

          {/* Marketing Expertise */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="font-poppins font-bold text-2xl text-deep-blue mb-6">
              Core Marketing Expertise
            </h3>
            <ul className="space-y-4 mb-8">
              {marketingExpertise.map((expertise, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-light-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{expertise}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-6 rounded-lg border-l-4 border-light-blue">
              <h4 className="font-poppins font-semibold text-lg text-deep-blue mb-3">
                Lead Generation Philosophy
              </h4>
              <p className="text-gray-700 italic leading-relaxed">
                "In today's AI-driven world, successful lead generation isn't just about reaching more people—it's about reaching the right people with the right message at the right time. I combine the power of Generative AI with proven marketing strategies to create campaigns that don't just generate leads, but build lasting relationships that drive sustainable business growth."
              </p>
            </div>
          </div>
        </div>

        {/* Results & Achievements */}
        <div className={`mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="font-poppins font-bold text-2xl text-deep-blue mb-8 text-center">
            Proven Results & Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg border hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-light-blue mb-2">300%</div>
              <div className="text-gray-700">Average Lead Generation Increase</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg border hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-light-blue mb-2">50+</div>
              <div className="text-gray-700">Successful Brand Transformations</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg border hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-light-blue mb-2">$2M+</div>
              <div className="text-gray-700">Revenue Generated for Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingMarketingSection;

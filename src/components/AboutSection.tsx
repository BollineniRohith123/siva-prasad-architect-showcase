
import { useEffect, useRef, useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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

  const achievements = [
    {
      icon: "🏆",
      title: "Enterprise Architecture Excellence",
      description: "Led digital transformation initiatives for Fortune 500 companies, resulting in 40% operational efficiency improvements"
    },
    {
      icon: "🚀",
      title: "Innovation Leadership",
      description: "Pioneered AI-driven solutions that generated $50M+ in cost savings and revenue optimization for clients"
    },
    {
      icon: "🌐",
      title: "Global Delivery Management",
      description: "Successfully managed distributed teams across 12+ countries, delivering complex projects on time and within budget"
    },
    {
      icon: "🔒",
      title: "Security & Compliance Expert",
      description: "Architected high-security platforms meeting international standards including ISO 27001, SOC 2, and GDPR compliance"
    }
  ];

  const expertiseAreas = [
    {
      category: "Enterprise Architecture",
      skills: ["Microservices Design", "Event-Driven Architecture", "Domain-Driven Design", "API Gateway Management"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS Solutions Architecture", "Kubernetes Orchestration", "CI/CD Pipeline Design", "Infrastructure as Code"]
    },
    {
      category: "AI/ML Implementation",
      skills: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Real-time Decision Engines"]
    },
    {
      category: "Industry Specialization",
      skills: ["FinTech Solutions", "Healthcare Systems", "Logistics Optimization", "Aviation Technology"]
    }
  ];

  // Trusted by these major companies (using placeholder representations)
  const trustedCompanies = [
    { name: "Maersk", industry: "Logistics" },
    { name: "Maybank", industry: "Banking" },
    { name: "DBS Bank", industry: "Banking" },
    { name: "Etiqa Insurance", industry: "Insurance" },
    { name: "Royal Malaysian Airbase", industry: "Aviation" },
    { name: "Malindo Airlines", industry: "Aviation" },
    { name: "Hill-Rom", industry: "Healthcare" },
    { name: "Welch Allyn", industry: "Healthcare" }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-deep-blue mb-4">
            WHY CHOOSE SIVA FOR YOUR DIGITAL TRANSFORMATION
          </h2>
          <div className="w-24 h-1 bg-light-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two decades of turning complex business challenges into elegant, scalable technology solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Enhanced About Content */}
          <div className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-poppins font-bold text-3xl text-deep-blue mb-6">
                  Your Strategic Technology Partner
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  I'm not just another software developer—I'm your strategic technology partner who understands that every line of code should drive business value. With over 20 years of hands-on experience across critical industries, I've helped global enterprises transform their operations, reduce costs, and accelerate growth through intelligent technology solutions.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  My approach goes beyond technical implementation. I work closely with C-level executives, business stakeholders, and development teams to ensure that technology initiatives align perfectly with business objectives. From initial strategy to deployment and optimization, I deliver solutions that scale with your ambitions.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-deep-blue text-white px-3 py-2">
                    ✅ Proven ROI Delivery
                  </Badge>
                  <Badge className="bg-deep-blue text-white px-3 py-2">
                    ✅ Enterprise-Grade Security
                  </Badge>
                  <Badge className="bg-deep-blue text-white px-3 py-2">
                    ✅ 24/7 Support Excellence
                  </Badge>
                </div>
              </div>
              
              {/* Trusted By Section */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="font-poppins font-bold text-xl text-deep-blue mb-6 text-center">
                  Trusted by Industry Leaders
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {trustedCompanies.map((company, index) => (
                    <div key={index} className="text-center p-3 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-300">
                      <div className="font-semibold text-deep-blue text-sm">{company.name}</div>
                      <div className="text-xs text-gray-500">{company.industry}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className={`mb-16 transition-all duration-1000 delay-400 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="font-poppins font-bold text-2xl text-deep-blue mb-8 text-center">
              Proven Track Record of Excellence
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-lg hover:scale-105 transition-all duration-300 border-l-4 border-light-blue delay-${(index + 1) * 100}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <span className="text-3xl">{achievement.icon}</span>
                      <div>
                        <h4 className="font-poppins font-bold text-lg text-deep-blue mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Expertise Areas */}
          <div className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="font-poppins font-bold text-2xl text-deep-blue mb-8 text-center">
              Core Expertise & Specializations
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {expertiseAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="font-poppins font-bold text-xl text-deep-blue mb-4">
                    {area.category}
                  </h4>
                  <div className="space-y-2">
                    {area.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-light-blue hover:text-white transition-all duration-300 cursor-pointer group"
                      >
                        <div className="w-2 h-2 bg-light-blue rounded-full mr-3 group-hover:bg-white"></div>
                        <span className="font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
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

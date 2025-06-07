
import { useEffect, useRef, useState } from 'react';
import { Badge } from "@/components/ui/badge";

const TechnologyLeadershipSection = () => {
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

  const technologies = [
    "Java (Spring, Struts)",
    "Python (TensorFlow, Flask)",
    "JavaScript (React, Angular)",
    "Cassandra",
    "MySQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "CI/CD pipelines",
    "OpenCV",
    "Sentiment Analysis",
    "Predictive Engines",
    "NLP",
    "Real-time Decisioning"
  ];

  const leadershipRoles = [
    "Department Head & Solution Architect – Leading global delivery teams",
    "Client Strategist – Aligning technology delivery with business KPIs",
    "Mentor & Visionary – Cultivating innovation across cross-functional teams"
  ];

  return (
    <section ref={sectionRef} id="leadership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-deep-blue mb-4">
            TECHNOLOGY, LEADERSHIP & VISION
          </h2>
          <div className="w-24 h-1 bg-light-blue mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Technical Proficiency */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="font-poppins font-bold text-2xl text-deep-blue mb-6">
              Technical Proficiency
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-3 py-2 text-sm border-light-blue text-deep-blue hover:bg-light-blue hover:text-white transition-all duration-300 hover:shadow-md hover:scale-105"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Leadership & Vision */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="font-poppins font-bold text-2xl text-deep-blue mb-6">
              Leadership Roles & Vision
            </h3>
            <ul className="space-y-4 mb-8">
              {leadershipRoles.map((role, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-light-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{role}</span>
                </li>
              ))}
            </ul>
            
            <blockquote className="border-l-4 border-light-blue pl-6 py-4 bg-gray-50 rounded-r-lg">
              <p className="text-gray-700 italic leading-relaxed mb-2">
                <strong className="text-deep-blue">Vision Forward:</strong> "To lead enterprise-grade digital innovation where every solution isn't just deployed—but strategically adopted, scaled, and optimized to become a core business asset. I believe the right software is an enabler of business transformation, and I bring that philosophy to every line of code and every strategic conversation."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyLeadershipSection;

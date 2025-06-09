
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const FlagshipProjectsSection = () => {
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

  const projects = [
    {
      client: "Royal Malaysian Airbase",
      description: "Crew & resource task automation, logistics scheduling"
    },
    {
      client: "Malindo Airlines",
      description: "Real-time turnaround time calculation for flight operations"
    },
    {
      client: "Malaysia AIP",
      description: "Custom AI Rule Engine for incentive regulation & optimization"
    },
    {
      client: "Maersk",
      description: "Fleet/container management with real-time dashboards"
    },
    {
      client: "Westport, Penang, Kuantan Ports",
      description: "Smart port operations and logistics automation"
    },
    {
      client: "Maybank / CIMB / DBS",
      description: "Banking operations automation, KYC, risk engines"
    },
    {
      client: "Etiqa Insurance",
      description: "Complete insurance platform automation, claims to CRM"
    },
    {
      client: "Hill-Rom / Welch Allyn",
      description: "Brand analysis, prediction models using NLP and ML"
    },
    {
      client: "Wheels USA",
      description: "Manufacturing automation & centralized operations dashboard"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-deep-blue mb-4">
            FLAGSHIP PROJECTS & CLIENTS
          </h2>
          <div className="w-24 h-1 bg-light-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg hover:scale-105 transition-all duration-300 border-l-4 border-light-blue cursor-pointer delay-${(index + 1) * 100} ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
            >
              <CardContent className="p-6">
                <h3 className="font-poppins font-bold text-lg text-deep-blue mb-3">
                  {project.client}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlagshipProjectsSection;

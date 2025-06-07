
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      industry: "Defense & Aviation",
      description: "Comprehensive crew & resource task automation system with advanced logistics scheduling",
      impact: "75% reduction in manual scheduling time, 90% improvement in resource utilization",
      technologies: ["Java Spring", "React", "PostgreSQL", "AWS"],
      duration: "18 months",
      teamSize: "12 members"
    },
    {
      client: "Malindo Airlines",
      industry: "Aviation",
      description: "Real-time turnaround time calculation system for optimized flight operations",
      impact: "30% faster turnaround times, $2M annual savings in operational costs",
      technologies: ["Python", "TensorFlow", "MongoDB", "Kubernetes"],
      duration: "12 months",
      teamSize: "8 members"
    },
    {
      client: "Malaysia AIP",
      industry: "Aviation Authority",
      description: "Custom AI Rule Engine for airline incentive regulation & compliance optimization",
      impact: "95% accuracy in compliance checking, 60% reduction in processing time",
      technologies: ["Python", "ML Models", "Cassandra", "Docker"],
      duration: "15 months",
      teamSize: "10 members"
    },
    {
      client: "Maersk",
      industry: "Logistics & Shipping",
      description: "Enterprise fleet & container management platform with real-time dashboards",
      impact: "40% improvement in container tracking efficiency, $5M cost optimization",
      technologies: ["Java", "Angular", "MySQL", "AWS"],
      duration: "24 months",
      teamSize: "15 members"
    },
    {
      client: "Westport, Penang & Kuantan Ports",
      industry: "Port Operations",
      description: "Smart port operations automation and integrated logistics management system",
      impact: "50% faster cargo processing, 35% reduction in waiting times",
      technologies: ["Spring Boot", "React", "Oracle", "Microservices"],
      duration: "20 months",
      teamSize: "18 members"
    },
    {
      client: "Maybank / CIMB / DBS",
      industry: "Banking & Finance",
      description: "Banking operations automation, KYC processes, and intelligent risk assessment engines",
      impact: "80% faster KYC processing, 99.5% fraud detection accuracy",
      technologies: ["Java", "Python", "MongoDB", "AI/ML"],
      duration: "16 months",
      teamSize: "20 members"
    },
    {
      client: "Etiqa Insurance",
      industry: "Insurance",
      description: "Complete insurance platform automation from claims processing to CRM integration",
      impact: "70% reduction in claims processing time, 95% customer satisfaction",
      technologies: ["Spring Framework", "Angular", "PostgreSQL", "AWS"],
      duration: "22 months",
      teamSize: "14 members"
    },
    {
      client: "Hill-Rom / Welch Allyn",
      industry: "Healthcare Technology",
      description: "AI-powered brand analysis and prediction models using advanced NLP and ML techniques",
      impact: "85% improvement in market prediction accuracy, $3M marketing optimization",
      technologies: ["Python", "TensorFlow", "NLP", "OpenCV"],
      duration: "14 months",
      teamSize: "9 members"
    },
    {
      client: "Wheels USA",
      industry: "Manufacturing",
      description: "Manufacturing automation system with centralized operations dashboard and analytics",
      impact: "45% increase in production efficiency, 25% reduction in operational costs",
      technologies: ["Java", "React", "MySQL", "IoT Integration"],
      duration: "18 months",
      teamSize: "12 members"
    }
  ];

  const industryStats = [
    { industry: "Banking & Finance", projects: "15+", value: "$50M+" },
    { industry: "Logistics & Ports", projects: "12+", value: "$30M+" },
    { industry: "Aviation", projects: "8+", value: "$25M+" },
    { industry: "Healthcare", projects: "6+", value: "$15M+" }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-deep-blue mb-4">
            FLAGSHIP PROJECTS & SUCCESS STORIES
          </h2>
          <div className="w-24 h-1 bg-light-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming enterprises across industries with measurable results and lasting impact
          </p>
        </div>

        {/* Industry Statistics */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                <h3 className="font-poppins font-bold text-lg text-deep-blue mb-2">{stat.industry}</h3>
                <div className="text-2xl font-bold text-light-blue">{stat.projects}</div>
                <div className="text-sm text-gray-600">Projects</div>
                <div className="text-lg font-semibold text-green-600 mt-2">{stat.value}</div>
                <div className="text-xs text-gray-500">Value Delivered</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-light-blue cursor-pointer h-full delay-${(index + 1) * 100} ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-poppins font-bold text-lg text-deep-blue leading-tight">
                      {project.client}
                    </h3>
                    <Badge variant="outline" className="text-xs border-light-blue text-light-blue">
                      {project.industry}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="bg-green-50 p-3 rounded-lg mb-4">
                    <h4 className="font-semibold text-green-800 text-sm mb-1">Impact Delivered:</h4>
                    <p className="text-green-700 text-sm">{project.impact}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-deep-blue text-sm mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-gray-100 text-gray-700"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between text-xs text-gray-500 pt-3 border-t">
                  <span>📅 {project.duration}</span>
                  <span>👥 {project.teamSize}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-deep-blue text-white p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="font-poppins font-bold text-2xl mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="mb-6">
              Let's discuss how we can transform your business with proven technology solutions.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-deep-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Schedule a Strategic Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlagshipProjectsSection;


import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DomainExpertiseSection = () => {
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

  const domains = [
    {
      id: "logistics",
      title: "Logistics, Ports & Fleet",
      icon: "🚢",
      content: "Engineered real-time container/fleet platforms for Maersk, Westport, Penang Port, Kuantan Port, KPK. Designed port automation dashboards, customs tracking, berth scheduling modules."
    },
    {
      id: "aviation",
      title: "Airbase & Aviation",
      icon: "✈️",
      content: "Built tactical logistics software for Royal Malaysian Airbase. Developed precision turnaround time & ground crew coordination tools for Malindo Airlines."
    },
    {
      id: "banking",
      title: "Banking & Insurance",
      icon: "🏦",
      content: "Risk intelligence and automation solutions for Maybank, CIMB, DBS Bank Singapore. Workflow automation and CRM integration for Etiqa Insurance Malaysia."
    },
    {
      id: "healthcare",
      title: "Healthcare & Analytics",
      icon: "🏥",
      content: "Created AI-based sentiment & adoption analysis engines for Hill-Rom & Welch Allyn. Designed brand awareness & patient engagement modeling using predictive analytics."
    },
    {
      id: "incentive",
      title: "Airline Incentive Systems",
      icon: "🎯",
      content: "Developed an AI-powered Rule Engine for Malaysia AIP, optimizing airline incentives and compliance."
    }
  ];

  return (
    <section ref={sectionRef} id="expertise" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-deep-blue mb-4">
            DOMAIN EXPERTISE & INDUSTRY FOCUS
          </h2>
          <div className="w-24 h-1 bg-light-blue mx-auto"></div>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <Accordion type="single" collapsible className="space-y-4">
            {domains.map((domain, index) => (
              <AccordionItem
                key={domain.id}
                value={domain.id}
                className={`border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 delay-${(index + 1) * 100}`}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl group-hover:animate-bounce transition-all duration-300">
                      {domain.icon}
                    </span>
                    <span className="font-poppins font-semibold text-lg text-deep-blue group-hover:text-light-blue transition-colors">
                      {domain.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {domain.content}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default DomainExpertiseSection;

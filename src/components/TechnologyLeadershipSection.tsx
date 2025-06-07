
import { useEffect, useRef, useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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

  const technicalExpertise = {
    "Programming Languages & Frameworks": [
      "Java (Spring Boot, Spring Security, Hibernate)",
      "Python (Django, Flask, FastAPI, TensorFlow, PyTorch)",
      "JavaScript/TypeScript (React, Angular, Node.js, Vue.js)",
      "C# (.NET Core, ASP.NET, Entity Framework)",
      "Go (Microservices, APIs)",
      "Scala (Big Data Processing)"
    ],
    "Cloud & Infrastructure": [
      "AWS (Solutions Architect Professional)",
      "Microsoft Azure (Certified)",
      "Google Cloud Platform",
      "Docker & Kubernetes",
      "Terraform & Infrastructure as Code",
      "CI/CD (Jenkins, GitLab, GitHub Actions)"
    ],
    "Databases & Data Management": [
      "MySQL, PostgreSQL, Oracle",
      "MongoDB, Cassandra, DynamoDB",
      "Redis, Elasticsearch",
      "Data Warehousing (Snowflake, BigQuery)",
      "Apache Kafka, RabbitMQ",
      "ETL/ELT Pipelines"
    ],
    "AI/ML & Advanced Analytics": [
      "Machine Learning (Scikit-learn, TensorFlow, PyTorch)",
      "Natural Language Processing (NLTK, spaCy)",
      "Computer Vision (OpenCV, YOLO)",
      "Deep Learning & Neural Networks",
      "Predictive Analytics & Forecasting",
      "Real-time Decision Engines"
    ],
    "Security & Compliance": [
      "OAuth 2.0, JWT, SAML",
      "SSL/TLS, PKI Management",
      "GDPR, SOC 2, ISO 27001 Compliance",
      "Penetration Testing",
      "Secure Coding Practices",
      "Risk Assessment & Mitigation"
    ],
    "Architecture & Design Patterns": [
      "Microservices Architecture",
      "Event-Driven Architecture",
      "Domain-Driven Design",
      "CQRS & Event Sourcing",
      "API Gateway & Service Mesh",
      "Serverless Computing"
    ]
  };

  const certifications = [
    { name: "AWS Solutions Architect Professional", issuer: "Amazon Web Services", year: "2023" },
    { name: "Microsoft Azure Solutions Architect Expert", issuer: "Microsoft", year: "2023" },
    { name: "Certified Kubernetes Administrator (CKA)", issuer: "Cloud Native Computing Foundation", year: "2022" },
    { name: "Google Cloud Professional Cloud Architect", issuer: "Google Cloud", year: "2022" },
    { name: "Certified Information Systems Security Professional (CISSP)", issuer: "ISC2", year: "2021" },
    { name: "PMP - Project Management Professional", issuer: "PMI", year: "2020" }
  ];

  const leadershipAchievements = [
    {
      title: "Global Team Leadership",
      description: "Successfully led distributed teams of 100+ engineers across 15 countries, delivering complex enterprise solutions",
      impact: "Achieved 98% on-time delivery rate with 40% cost optimization"
    },
    {
      title: "Digital Transformation Strategy",
      description: "Architected and executed digital transformation roadmaps for Fortune 500 companies",
      impact: "Generated $100M+ in business value through strategic technology initiatives"
    },
    {
      title: "Innovation & R&D Leadership",
      description: "Established AI/ML centers of excellence and innovation labs within organizations",
      impact: "15+ patents filed, 50+ proof-of-concepts converted to production systems"
    },
    {
      title: "Mentorship & Talent Development",
      description: "Mentored 200+ engineers and architects, building high-performing technology teams",
      impact: "95% of mentees achieved senior technical roles within 2 years"
    }
  ];

  const methodologies = [
    "Agile & Scrum Mastery",
    "DevOps & GitOps",
    "Site Reliability Engineering (SRE)",
    "Test-Driven Development (TDD)",
    "Behavior-Driven Development (BDD)",
    "Lean Software Development"
  ];

  return (
    <section ref={sectionRef} id="leadership" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-deep-blue mb-4">
            TECHNOLOGY MASTERY & LEADERSHIP EXCELLENCE
          </h2>
          <div className="w-24 h-1 bg-light-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining deep technical expertise with proven leadership to drive enterprise transformation
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Technical Expertise */}
          <div className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="font-poppins font-bold text-3xl text-deep-blue mb-8 text-center">
              Technical Proficiency & Expertise
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {Object.entries(technicalExpertise).map(([category, skills], index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-poppins font-bold text-xl text-deep-blue mb-4">
                      {category}
                    </h4>
                    <div className="space-y-2">
                      {skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex items-center p-2 bg-gray-50 rounded hover:bg-light-blue hover:text-white transition-all duration-300 group"
                        >
                          <div className="w-2 h-2 bg-light-blue rounded-full mr-3 group-hover:bg-white"></div>
                          <span className="text-sm font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className={`mb-16 transition-all duration-1000 delay-400 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="font-poppins font-bold text-2xl text-deep-blue mb-8 text-center">
              Professional Certifications & Credentials
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-deep-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">🏆</span>
                    </div>
                    <h4 className="font-poppins font-bold text-lg text-deep-blue mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                    <Badge className="bg-light-blue text-white">{cert.year}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Leadership Achievements */}
          <div className={`mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="font-poppins font-bold text-2xl text-deep-blue mb-8 text-center">
              Leadership Achievements & Impact
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {leadershipAchievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-light-blue">
                  <CardContent className="p-6">
                    <h4 className="font-poppins font-bold text-xl text-deep-blue mb-3">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-green-800 font-semibold text-sm">
                        📈 {achievement.impact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Methodologies & Best Practices */}
          <div className={`mb-16 transition-all duration-1000 delay-800 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="font-poppins font-bold text-2xl text-deep-blue mb-8 text-center">
              Methodologies & Best Practices
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {methodologies.map((methodology, index) => (
                <Badge
                  key={index}
                  className="px-4 py-2 text-sm bg-white border-2 border-light-blue text-light-blue hover:bg-light-blue hover:text-white transition-all duration-300 hover:scale-105"
                >
                  {methodology}
                </Badge>
              ))}
            </div>
          </div>

          {/* Vision Statement */}
          <div className={`transition-all duration-1000 delay-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <Card className="bg-deep-blue text-white">
              <CardContent className="p-8 text-center">
                <h3 className="font-poppins font-bold text-2xl mb-6">
                  Leadership Philosophy & Vision
                </h3>
                <blockquote className="text-lg md:text-xl leading-relaxed italic mb-6">
                  "Technology leadership isn't about knowing every framework or having the most certifications. 
                  It's about translating complex technical possibilities into clear business value, 
                  building teams that can execute at scale, and creating solutions that stand the test of time. 
                  I lead by empowering others to exceed their potential while never losing sight of the business impact."
                </blockquote>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div>
                    <div className="text-3xl font-bold">100+</div>
                    <div className="text-blue-200">Engineers Mentored</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">$100M+</div>
                    <div className="text-blue-200">Business Value Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-blue-200">Patents & Innovations</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyLeadershipSection;

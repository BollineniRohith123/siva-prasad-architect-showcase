
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import DomainExpertiseSection from '@/components/DomainExpertiseSection';
import FlagshipProjectsSection from '@/components/FlagshipProjectsSection';
import BrandingMarketingSection from '@/components/BrandingMarketingSection';
import CallToActionSection from '@/components/CallToActionSection';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white font-opensans">
      <Navigation />
      
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <DomainExpertiseSection />
        <FlagshipProjectsSection />
        <BrandingMarketingSection />
        <CallToActionSection />
      </main>

      {/* Footer */}
      <footer className="bg-deep-blue text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2024 Siva Prasad Muppala | All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

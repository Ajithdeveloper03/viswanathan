'use client';
import { Hero } from './Hero';
import { TrustIndicators } from './TrustIndicators';
import { Industries } from './Industries';
import { AboutPreview } from './AboutPreview';
import { OurServicesSection } from './OurServicesSection';
import { Testimonials } from './Testimonials';
import { CTABanner } from './CTABanner';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <TrustIndicators />
      <AboutPreview />
      <Industries />
      
      <OurServicesSection />
      <Testimonials />
      <CTABanner />
    </main>
  );
};

export default HomePage;

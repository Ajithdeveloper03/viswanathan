import { Metadata } from 'next';
import { AboutHero } from '../components/about/AboutHero';
import { FounderQualifications } from '../components/home/FounderQualifications';
import { WhatWeDoSection } from '../components/about/WhatWeDoSection';
import { OurApproachSection } from '../components/about/OurApproachSection';
import { VisionMissionSection } from '../components/about/VisionMissionSection';
import { WhyChooseUsSection } from '../components/about/WhyChooseUsSection';
import { AboutCTA } from '../components/about/AboutCTA';

export const metadata: Metadata = {
  title: 'About Us | Viswanathan R Associates',
  description: 'Transforming financial insight into measurable business value. Learn more about our expertise in finance, costing, valuation, and governance.',
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <FounderQualifications />
      <WhatWeDoSection />
      <OurApproachSection />
      <VisionMissionSection />
      <WhyChooseUsSection />
      <AboutCTA />
    </div>
  );
}


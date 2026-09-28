'use client';
import dynamic from 'next/dynamic';
import { Hero } from './Hero';

const TrustIndicators = dynamic(() => import('./TrustIndicators').then(mod => mod.TrustIndicators), { ssr: true });
const Industries = dynamic(() => import('./Industries').then(mod => mod.Industries), { ssr: true });
const AboutPreview = dynamic(() => import('./AboutPreview').then(mod => mod.AboutPreview), { ssr: true });
const OurServicesSection = dynamic(() => import('./OurServicesSection').then(mod => mod.OurServicesSection), { ssr: true });
const Testimonials = dynamic(() => import('./Testimonials').then(mod => mod.Testimonials), { ssr: true });
const CTABanner = dynamic(() => import('./CTABanner').then(mod => mod.CTABanner), { ssr: true });
const ClientLogos = dynamic(() => import('../ui/ClientLogos'), { ssr: true });

const HomePage = () => {
  return (
    <main>
      <Hero />
      <TrustIndicators />
      <AboutPreview />
      <Industries />
      
      <OurServicesSection />
      <ClientLogos />
      <Testimonials />
      <CTABanner />
    </main>
  );
};

export default HomePage;

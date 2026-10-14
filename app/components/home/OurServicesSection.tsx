'use client';
import { ArrowRight, Plus } from 'lucide-react';
import Link from 'next/link';

import { useRef, useEffect } from 'react';

const servicesData = [
  {
    title: 'Business Valuation',
    description: 'Accurate valuation services for businesses to ensure informed decision-making.',
    image: '/Business Valuation.jpeg',
    href: '/business-valuation',
  },
  {
    title: 'Cost Management & Audit',
    description: 'In-depth analysis to identify inefficiencies, setup costing systems, and implement strategic savings.',
    image: '/What We Do 1.png',
    href: '/cost-management-audit',
  },
  {
    title: 'Internal Audit',
    description: 'Robust internal controls and risk management frameworks for sustainable growth.',
    image: '/Internal Audit banner.png',
    href: '/internal-audit',
  },
  {
    title: 'Independent Director',
    description: 'Strategic advisory and independent governance oversight for your board of directors.',
    image: '/images/independent/hero.png',
    href: '/independent-director',
  },
  {
    title: 'Business Restructuring',
    description: 'Expertly crafted business restructuring for equity funding, debt syndication, M&A, and partnerships.',
    image: '/images/business-proposals/hero.png',
    href: '/business-proposals',
  },
  {
    title: 'Insolvency & Bankruptcy',
    description: 'Comprehensive resolution services under the IBC code for distressed assets and businesses.',
    image: '/Insolvency & Bankruptcy.jpeg',
    href: '/insolvency-bankruptcy',
  }
];

export function OurServicesSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative pt-8 md:pt-12 pb-8 bg-[#fcfcfc] overflow-hidden">
      <div ref={ref} className="container-custom relative z-10">
        
        {/* Header Section */}
        <div className="mb-14 text-center max-w-3xl mx-auto flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-secondary-900 leading-[1.2] tracking-tight mb-5">
            <Link href="/services" className="hover:text-primary-700 transition-colors">
              Our Services
            </Link>
          </h2>
          <p className="text-secondary-600 text-[15px] md:text-base leading-relaxed">
            Explore our comprehensive suite of professional services designed to optimize your operations, ensure compliance, and drive sustainable financial growth for your business.
          </p>
        </div>

        {/* Cards Grid - 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-secondary-100 hover:shadow-[0_15px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 reveal-up flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-32 w-11/12 mx-auto mt-4 rounded-xl overflow-hidden group/img">
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 via-secondary-900/10 to-transparent group-hover/img:from-secondary-900/80 transition-colors duration-500 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Title inside Image */}
                <div className="absolute bottom-5 left-5 right-12 z-20">
                  <h3 className="text-[17px] font-bold text-white drop-shadow-md leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Floating Plus Button */}
                <div className="absolute -bottom-5 right-5 z-30">
                  <Link href={service.href} className="w-10 h-10 bg-primary-600 rounded-full shadow-lg flex items-center justify-center transform group-hover:rotate-90 group-hover:bg-primary-700 transition-all duration-300 cursor-pointer text-white">
                    <Plus strokeWidth={2.5} className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-6 pt-6 flex-1 flex flex-col bg-white rounded-b-2xl">
                <p className="text-secondary-600 text-[15px] leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
                <Link href={service.href} className="mt-auto self-start flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA Button */}
        <div className="mt-10 flex justify-center reveal-up">
          <Link href="/services" className="btn-primary py-2.5 px-6 text-sm group inline-flex items-center gap-2">
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
      </div>
    </section>
  );
}

export default OurServicesSection;

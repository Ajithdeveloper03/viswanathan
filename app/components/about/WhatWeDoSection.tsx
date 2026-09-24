'use client';

import { useRef, useEffect } from 'react';
import { 
  LineChart, 
  Calculator, 
  Settings, 
  Shield, 
  User, 
  Scale, 
  Briefcase, 
  LayoutDashboard, 
  Cog, 
  ClipboardCheck, 
  Lightbulb, 
  Handshake,
  ArrowRight
} from 'lucide-react';

export function WhatWeDoSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach((el, i) => {
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

  const services = [
    {
      title: "Business valuation service in Chennai",
      description: "and enterprise valuation with 1,000+ valuations covering wide range of businesses and valuation purposes",
      linkText: "Learn More",
      icon: LineChart
    },
    {
      title: "Cost Optimization",
      description: "through Cost Drivers, Cost Reporting and profitability analysis",
      linkText: "Learn More",
      icon: Calculator
    },
    {
      title: "Costing system Design and Setup",
      description: "Cost Elements and Cost Drivers",
      linkText: "Learn More",
      icon: Settings
    },
    {
      title: "Internal Audit",
      description: "controls, risk management, and business process improvement",
      linkText: "Learn More",
      icon: Shield
    },
    {
      title: "Independent Director",
      description: "",
      linkText: "Learn More",
      icon: User
    },
    {
      title: "Insolvency",
      description: "restructuring, and resolution-related advisory",
      linkText: "Learn More",
      icon: Scale
    },
    {
      title: "Virtual CFO",
      description: "and Financial Management support",
      linkText: "",
      icon: Briefcase
    },
    {
      title: "Financial planning",
      description: "budgeting, management reporting, and business performance dashboards.",
      linkText: "",
      icon: LayoutDashboard
    },
    {
      title: "Standard Operating Procedure",
      description: "implementation and business process automation.",
      linkText: "",
      icon: Cog
    },
    {
      title: "Corporate governance",
      description: "company secretarial matters, and statutory compliance.",
      linkText: "",
      icon: ClipboardCheck
    },
    {
      title: "Strategic investment analysis",
      description: "and business planning",
      linkText: "",
      icon: Lightbulb
    },
    {
      title: "Mergers and Acquisitions",
      description: "Private Equity, Venture Capital., Debt Funding, within and outside India, through Strategic Business Partner",
      linkText: "",
      icon: Handshake
    }
  ];

  return (
    <section ref={ref} className="relative bg-secondary-50 py-16 lg:py-24">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label reveal inline-flex mb-4">Our Services</div>
          <h2 className="section-title mb-6 reveal">What We Do</h2>
          <p className="section-subtitle mx-auto reveal">
            We support Promoters, Boards, Leadership teams, Investors, and Growing businesses through services including:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl border border-secondary-200 p-6 xl:p-8 flex flex-col text-left hover:shadow-soft hover:border-primary-200 hover:-translate-y-1 transition-all duration-300 reveal h-full">
              
              <div className="flex gap-4 items-start mb-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl border-2 border-secondary-100 flex items-center justify-center bg-secondary-50/50">
                  <service.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-secondary-900 leading-tight pt-1">{service.title}</h3>
              </div>

              {service.description && (
                <p className="text-secondary-600 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
              )}
              
              {service.linkText && (
                <a href="#" className="inline-flex items-center gap-2 mt-auto text-sm font-bold text-secondary-900 hover:text-primary-600 transition-colors group w-fit">
                  {service.linkText} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center p-8 bg-white rounded-2xl shadow-soft border border-primary-100 reveal">
          <p className="text-secondary-700 text-lg leading-relaxed">
            With more than 1,000+ valuation assignments completed in India and overseas, Cost Audit & Cost Optimization for wide range of Industries in India and Overseas, Internal Audit, Governance, and Financial Leadership, vast experience in Insolvency, we bring a broad perspective to every engagement.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;

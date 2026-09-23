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
      title: "Business valuation and enterprise valuation",
      description: "with 1,000+ valuations covering wide range of businesses and valuation purposes",
      linkText: "(Link to Valuation Page)",
      icon: LineChart
    },
    {
      title: "Cost Optimization",
      description: "through Cost Drivers, Cost Reporting and profitability analysis",
      linkText: "(Link to Costing Page)",
      icon: Calculator
    },
    {
      title: "Costing system Design and Setup",
      description: "Cost Elements and Cost Drivers",
      linkText: "(Link to Costing Page)",
      icon: Settings
    },
    {
      title: "Internal Audit",
      description: "controls, risk management, and business process improvement",
      linkText: "(Link to Internal Audit Page)",
      icon: Shield
    },
    {
      title: "Independent Director",
      description: "",
      linkText: "(Link to Independent Director Page)",
      icon: User
    },
    {
      title: "Insolvency",
      description: "restructuring, and resolution-related advisory",
      linkText: "(Link to IBC Page)",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="card-interactive reveal">
              <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">{service.title}</h3>
              {service.description && (
                <p className="text-secondary-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              )}
              {service.linkText && (
                <a href="#" className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors mt-auto">
                  {service.linkText} <ArrowRight className="w-4 h-4 ml-1" />
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

'use client';
import { LineChart, Calculator, Settings, Shield, User, Scale, Briefcase, LayoutDashboard, Cog, ClipboardCheck, Lightbulb, Handshake, ArrowRight } from 'lucide-react';
import Link from 'next/link';


import { useRef, useEffect } from 'react';

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
      title: "Business & Enterprise Valuation",
      description: "Business valuation service in Chennai and enterprise valuation with 1,000+ valuations covering wide range of businesses and valuation purposes.",
      linkText: "Learn More",
      href: "/business-valuation",
      icon: LineChart
    },
    {
      title: "Cost Optimization",
      description: "Cost Optimization through Cost Drivers, Cost Reporting and profitability analysis.",
      linkText: "Learn More",
      href: "/cost-management-audit",
      icon: Calculator
    },
    {
      title: "Costing System Design",
      description: "Costing system Design and Setup, Cost Elements and Cost Drivers.",
      linkText: "Learn More",
      href: "/cost-management-audit",
      icon: Settings
    },
    {
      title: "Internal Audit",
      description: "Internal Audit, controls, risk management, and business process improvement.",
      linkText: "Learn More",
      href: "/internal-audit",
      icon: Shield
    },
    {
      title: "Independent Director",
      description: "Providing objective governance, strategic oversight, and board-level advisory.",
      linkText: "Learn More",
      href: "/independent-director",
      icon: User
    },
    {
      title: "Insolvency Advisory",
      description: "Insolvency, restructuring, and resolution-related advisory.",
      linkText: "Learn More",
      href: "/insolvency-bankruptcy",
      icon: Scale
    },
    {
      title: "Virtual CFO",
      description: "Virtual CFO and Financial Management support.",
      linkText: "",
      icon: Briefcase
    },
    {
      title: "Financial Planning",
      description: "Financial planning, budgeting, management reporting, and business performance dashboards.",
      linkText: "",
      icon: LayoutDashboard
    },
    {
      title: "SOP Implementation",
      description: "Standard Operating Procedure implementation and business process automation.",
      linkText: "",
      icon: Cog
    },
    {
      title: "Corporate Governance",
      description: "Corporate governance, company secretarial matters, and statutory compliance.",
      linkText: "",
      icon: ClipboardCheck
    },
    {
      title: "Strategic Investment",
      description: "Strategic investment analysis and business planning.",
      linkText: "",
      icon: Lightbulb
    },
    {
      title: "Mergers and Acquisitions",
      description: "Mergers and Acquisitions, Private Equity, Venture Capital, Debt Funding, within and outside India, through Strategic Business Partner.",
      linkText: "",
      icon: Handshake
    }
  ];
  return (
    <section ref={ref} className="relative bg-white py-8 lg:py-12">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label reveal inline-flex mb-4">Our Services</div>
          <h2 className="section-title mb-6 reveal">What <span className="text-accent-500">We Do</span></h2>
          <p className="section-subtitle mx-auto reveal">
            We support Promoters, Boards, Leadership teams, Investors, and Growing businesses through services including:
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl border border-secondary-200 p-6 xl:p-8 flex flex-col text-left hover:shadow-soft hover:border-primary-200 hover:-translate-y-1 transition-all duration-300 reveal h-full">
              <div className="flex gap-4 items-start mb-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl border-2 border-secondary-100 flex items-center justify-center bg-secondary-50/50">
                  <service.icon className="w-6 h-6 text-accent-500" />
                </div>
                <h3 className="text-lg font-bold text-secondary-900 leading-tight pt-1">{service.title}</h3>
              </div>
              {service.description && (
                <div className="flex-grow flex items-center mb-2">
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              )}
            
              {service.href && (
                <Link href={service.href} className="inline-flex items-center gap-2 mt-auto pt-4 text-sm font-bold text-secondary-900 hover:text-accent-500 transition-colors group w-fit">
                  {service.linkText || "Learn More"} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
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

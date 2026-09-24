import { Building2, Briefcase, Globe, Users, HeartHandshake, UserCheck, ArrowRight, CheckCircle2, ChevronRight, FileText, BarChart, Phone, Search, FileSpreadsheet, LineChart, BarChart3, ClipboardCheck, ShieldCheck, Scale } from 'lucide-react';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import ProcessFlow from '../components/ui/ProcessFlow';
import WhyChooseUs from '../components/ui/WhyChooseUs';

import ModalTriggerButton from '../components/ui/ModalTriggerButton';

const BusinessValuation = () => {
  const services = [
    {
      title: "Corporate Transactions",
      subtitle: "M&A, Demergers, Reorganizations",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200",
      items: [
        "Mergers and acquisitions.",
        "Demergers and business reorganizations.",
        "Private placements & investors.",
        "Buyback of shares.",
        "Preferential allotments.",
        "Conversion to private limited.",
        "Valuation for decision-making."
      ]
    },
    {
      title: "Intangible Assets & IP",
      subtitle: "Brand, Goodwill, Tech Valuation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      items: [
        "Intellectual property valuation.",
        "Brand valuation.",
        "Goodwill valuation.",
        "Patent valuation.",
        "Copyright valuation.",
        "Technology & software valuation."
      ]
    },
    {
      title: "Regulatory & Cross-Border",
      subtitle: "FDI, ODI, Rule 11UA",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200",
      items: [
        "Rule 11UA (Income-tax Rules).",
        "Foreign Direct Investment (FDI).",
        "Overseas Direct Investment (ODI).",
        "Cross-border investments.",
        "Purchasing Power Parity (PPP)."
      ]
    },
    {
      title: "Specialised Valuation",
      subtitle: "Startups & Fundraising",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      items: [
        "Startup valuation.",
        "Mining business lifecycle.",
        "Strategic investment & fundraising.",
        "Ownership restructuring.",
        "Financial reporting & planning."
      ]
    },
    {
      title: "Securities & Financial",
      subtitle: "Equity, Preference Shares",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
      items: [
        "Valuation of equity shares.",
        "Valuation of preference shares.",
        "Valuation of all debentures.",
        "Valuation of investments.",
        "Regulatory & strategic purposes."
      ]
    },
    {
      title: "Mining Valuation",
      subtitle: "Full Project Lifecycle",
      image: "https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?auto=format&fit=crop&q=80&w=1200",
      items: [
        "All types of mining.",
        "Valuation across every stage of the project lifecycle."
      ]
    }
  ];

  return (
    <div className="bg-[#f8f9fa] text-secondary-900 font-sans">
      
      {/* 1. HERO SECTION (Texon Style: Centered, Large Padding, Pill Breadcrumb) */}
      <section className="relative pt-56 pb-48 flex items-center justify-center bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            fill
            className="object-cover opacity-30 mix-blend-luminosity scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/60 via-primary-900/40 to-primary-950/70"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full text-sm font-medium mb-8 border border-white/20">
            <Link href="/" className="hover:text-accent-400 transition-colors duration-300">Home</Link>
            <span className="w-1 h-1 bg-accent-500 rounded-full mx-1"></span>
            <span className="hover:text-accent-400 transition-colors duration-300 cursor-pointer">Services</span>
            <span className="w-1 h-1 bg-accent-500 rounded-full mx-1"></span>
            <span className="text-accent-400">Business Valuation</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Business Valuation <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Services in Chennai</span>
          </h1>
        </div>
      </section>

      {/* Overlapping Info Box (Texon Signature) */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-20 -mt-16 lg:-mt-24 mb-12 lg:mb-16 lg:mb-24">
        <div className="bg-white rounded-3xl p-6 md:p-10 lg:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row gap-8 lg:p-12 items-center justify-between border border-secondary-100">
           <div className="lg:w-1/2">
             <div className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 font-bold text-sm tracking-wider uppercase rounded-full mb-6">
               Valuation Expertise
             </div>
             <h2 className="text-4xl lg:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2]">
               Clear, Supportable <br/>
               <span className="text-secondary-400 font-light">Numbers & Reasoning</span>
             </h2>
           </div>
           <div className="lg:w-1/2">
             <p className="text-secondary-600 text-lg leading-relaxed mb-6 border-l-4 border-accent-500 pl-6">
                With 1,000+ valuations completed across entity types, deal structures, and industries, we provide business valuation service in Chennai and deliver defensible, well-documented valuations that stand up to scrutiny from investors, regulators, tax authorities, and auditors.
             </p>
             <p className="text-secondary-500 leading-relaxed pl-6">
                Whether you are raising capital, restructuring, merging, or reporting, we give you a clear, supportable number and the reasoning behind it.
             </p>
           </div>
        </div>
      </div>

      {/* 3. BUSINESS STRUCTURES (Texon Card Grid with Image Top) */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 font-bold text-sm tracking-wider uppercase rounded-full mb-4">
                Entity Types
              </div>
              <h2 className="text-4xl md:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900">Valuation for Every <br/>Business Structure</h2>
            </div>
            <p className="text-secondary-600 max-w-md text-lg leading-relaxed border-l-2 border-secondary-200 pl-6">
              Our approach is tailored to specific circumstances, objectives, and stages of development across all major entity types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Listed Companies", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", icon: Building2 },
              { title: "Private Limited", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800", icon: Briefcase },
              { title: "Unlisted Public", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800", icon: Globe },
              { title: "LLPs", img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800", icon: Users },
              { title: "Partnership Firms", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800", icon: HeartHandshake },
              { title: "Sole Proprietorships", img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800", icon: UserCheck }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="group bg-white rounded-3xl lg:rounded-[2.5rem] overflow-hidden hover:-translate-y-4 transition-all duration-500 ease-in-out shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]">
                  <div className="w-full relative h-64 overflow-hidden">
                    <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="p-10 relative bg-white">
                    <div className="absolute -top-10 right-10 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 group-hover:bg-accent-500 group-hover:text-white transition-all duration-500 text-primary-900">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="block text-accent-500 font-bold mb-3 tracking-wide uppercase text-sm">Structure</span>
                    <h5 className="text-2xl font-extrabold text-primary-900 mb-4 group-hover:text-accent-600 transition-colors duration-300">
                      <Link href="#contact">{item.title}</Link>
                    </h5>
                    <div className="w-12 h-1 bg-secondary-200 group-hover:w-full group-hover:bg-accent-500 transition-all duration-500"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES (Texon Interactive Cards) */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 font-bold text-sm tracking-wider uppercase rounded-full mb-6">
               Our Expertise
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2]">
              Specialized Business Valuation <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-900">Services in Chennai</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group bg-[#f8f9fa] rounded-3xl lg:rounded-[2.5rem] p-10 hover:-translate-y-3 transition-all duration-500 ease-in-out border border-secondary-100 hover:border-transparent hover:bg-primary-900 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] flex flex-col h-full relative overflow-hidden">

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-900 shadow-sm mb-8 group-hover:scale-110 transition-transform duration-500 border border-secondary-100 group-hover:border-transparent">
                    <BarChart className="w-7 h-7" />
                  </div>
                  
                  <h5 className="text-2xl font-extrabold text-primary-900 group-hover:text-white leading-tight mb-3 transition-colors duration-300">
                    {service.title}
                  </h5>
                  <span className="text-accent-600 group-hover:text-accent-400 font-bold block mb-6 text-sm tracking-wide uppercase transition-colors duration-300">
                    {service.subtitle}
                  </span>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {service.items.slice(0, 4).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-secondary-600 group-hover:text-secondary-200 text-[15px] transition-colors duration-300">
                        <CheckCircle2 className="w-5 h-5 text-primary-900 group-hover:text-accent-400 flex-shrink-0 opacity-60 transition-colors duration-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                    {service.items.length > 4 && (
                      <li className="text-sm font-semibold text-secondary-400 group-hover:text-secondary-400/80 italic transition-colors duration-300">
                        + {service.items.length - 4} more capabilities...
                      </li>
                    )}
                  </ul>

                  <Link href="#contact" className="mt-auto inline-flex items-center gap-2 text-primary-900 group-hover:text-white font-bold transition-colors duration-300">
                    Discuss Requirements <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VALUATION APPROACH (Texon Large Interactive Layout) */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left: Image Grid (Texon Style Collage) */}
            <div className="relative h-[700px] w-full">
              <div className="absolute top-0 left-0 w-4/5 h-[300px] lg:h-[500px] rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl z-10 hover:z-30 transition-all duration-500 group">
                <Image src="https://images.unsplash.com/photo-1542744094-24638ea0b3b5?auto=format&fit=crop&q=80&w=1200" alt="Approach 1" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute bottom-0 right-0 w-3/5 h-[250px] lg:h-[400px] rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl z-20 border-8 border-[#f8f9fa] group">
                <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=800" alt="Approach 2" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              {/* Decorative Element */}
              <div className="absolute top-1/2 -right-8 w-32 h-32 bg-accent-500 rounded-full blur-3xl opacity-20"></div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col">
              <div className="mb-12">
                <div className="inline-block px-4 py-1.5 bg-white text-primary-700 font-bold text-sm tracking-wider uppercase rounded-full mb-6 shadow-sm">
                   Our Process
                </div>
                <h2 className="text-4xl md:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2]">
                  A Meticulous <br/><span className="text-secondary-400 font-light">Valuation Approach</span>
                </h2>
              </div>
              
              <div className="space-y-8">
                {[
                  { title: "Purpose & Structure", desc: "Understanding intended use, nature, scale, and structure of the transaction." },
                  { title: "Financial Performance", desc: "Analyzing historical revenue, profitability, cash flow, and key drivers." },
                  { title: "Industry & Risk", desc: "Evaluating macroeconomic conditions, competition, and growth prospects." },
                  { title: "Methodology", desc: "Applying the most appropriate valuation methodologies and assumptions." }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 text-xl font-extrabold text-secondary-300 group-hover:bg-primary-900 group-hover:text-white transition-all duration-300">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors duration-300">{step.title}</h4>
                      <p className="text-secondary-600 leading-relaxed text-lg">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CTA Section (Texon Large Banner) */}
      <section id="contact" className="py-12 md:py-16 lg:py-24 relative bg-primary-900">

        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt="CTA Background"
            fill
            className="object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-primary-900/80"></div>
        </div>

<div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[250px] lg:h-[400px] lg:h-[600px] bg-accent-500 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Valuations That Support <br/> <span className="text-accent-400">Better Decisions</span>
            </h2>
            <p className="text-xl md:text-2xl text-secondary-300 leading-relaxed font-light">
              We help clients understand the key factors influencing business value, identify opportunities, and make informed decisions with greater confidence.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
              <ModalTriggerButton className="flex items-center justify-center gap-3 bg-white text-primary-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-accent-500 hover:text-white transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_-10px_rgba(245,177,51,0.4)]">
                <FileText className="w-6 h-6" />
                Email Our Team
              </ModalTriggerButton>
              <a href="tel:+916379252059" className="flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300">
                <Phone className="w-6 h-6" /> +91-6379252059
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessValuation;

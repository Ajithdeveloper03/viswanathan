"use client";

import React, { useState } from 'react';
import { 
  BarChart, Briefcase, Building2, CheckCircle2, ChevronRight, 
  FileText, Gem, Globe, Lightbulb, LineChart, PieChart, 
  ShieldCheck, Target, TrendingUp, Users, ArrowRight, HeartHandshake, UserCheck
} from 'lucide-react';
import Image from 'next/image';

const BusinessValuation = () => {
  const [activeTab, setActiveTab] = useState('corporate');

  const services = {
    corporate: {
      title: "Corporate Transactions",
      icon: <Briefcase className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200",
      items: [
        "Mergers and acquisitions",
        "Demergers and business reorganizations",
        "Private placements and admission of new investors",
        "Buyback of shares",
        "Preferential allotments",
        "Conversion of partnership firms into private limited companies",
        "Valuation for management and investor decision-making"
      ]
    },
    intangible: {
      title: "Intangible Assets & IP",
      icon: <Gem className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      items: [
        "Intellectual property valuation",
        "Brand valuation",
        "Goodwill valuation",
        "Patent valuation",
        "Copyright valuation",
        "Valuation of technology, software, and other identifiable intangible assets"
      ]
    },
    regulatory: {
      title: "Regulatory & Cross-Border",
      icon: <Globe className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200",
      items: [
        "Valuation under Rule 11UA of the Income-tax Rules",
        "Foreign Direct Investment (FDI) transactions",
        "Overseas Direct Investment (ODI) transactions",
        "Valuation related to cross-border investments and corporate transactions",
        "Purchasing Power Parity (PPP) analysis"
      ]
    },
    specialised: {
      title: "Specialised Valuation",
      icon: <Target className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      items: [
        "Startup valuation",
        "Mining business valuation at different stages of the lifecycle",
        "Valuation for strategic investment and fundraising",
        "Valuation for ownership restructuring and succession planning",
        "Valuation for financial reporting and management planning"
      ]
    },
    securities: {
      title: "Securities & Financial",
      icon: <PieChart className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
      items: [
        "Valuation of equity shares",
        "Valuation of preference shares",
        "Valuation of all types of debentures",
        "Valuation of investments",
        "Valuation for regulatory, tax, accounting, transaction, and strategic purposes"
      ]
    },
    mining: {
      title: "Mining",
      icon: <ShieldCheck className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?auto=format&fit=crop&q=80&w=1200",
      items: [
        "All types of mining, across every stage of the project lifecycle"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-primary-50 text-primary-900 font-sans overflow-hidden">
      
      {/* 1. HERO SECTION WITH ANIMATED SHAPES */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-primary-900 text-white">
        {/* Animated Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-[-100px] w-[600px] h-[600px] bg-primary-500/30 rounded-full blur-[120px] animate-float"></div>
        
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-900/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/20 border border-accent-500/30 text-accent-400">
                <span className="w-2 h-2 rounded-full bg-accent-400 animate-ping"></span>
                Viswanathan R Associates
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Business <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-200">Valuation Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-secondary-200 font-light max-w-xl leading-relaxed border-l-4 border-accent-500 pl-6">
                Valuation Expertise Built on Experience in Chennai.
              </p>
              <div className="pt-4 flex items-center gap-6">
                <a href="#services" className="bg-accent-500 hover:bg-accent-400 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(197,158,94,0.3)] flex items-center gap-2 group">
                  Explore Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            
            {/* Hero Image Card */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-primary-700 shadow-2xl">
                 <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
                    alt="Valuation Report"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-transparent"></div>
                  
                  {/* Floating Stat inside Image */}
                  <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0 text-white shadow-glow">
                        <TrendingUp className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-white mb-1">1,000+</div>
                        <div className="text-secondary-200 text-sm font-medium uppercase tracking-wider">Valuations Completed</div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION WITH SPLIT LAYOUT */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent-100 rounded-[2.5rem] transform -rotate-3 z-0"></div>
              <div className="relative z-10 rounded-[2rem] overflow-hidden aspect-square shadow-soft-lg border-8 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                  alt="Team discussion"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-900 leading-tight">
                Clear, Supportable <br/>
                <span className="text-accent-500">Numbers.</span>
              </h2>
              <div className="w-20 h-2 bg-accent-500 rounded-full"></div>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Whether you are raising capital, restructuring, merging, or reporting, we give you a clear, supportable number and the reasoning behind it. 
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Our valuation practice serves a broad range of business entities and industries. We combine financial analysis, industry understanding, commercial judgment, and transaction insight to deliver valuation reports that are clear, practical, and fit for their intended purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUSINESS STRUCTURES */}
      <section className="py-24 bg-secondary-50 relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent-200 rounded-full opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent-300 rounded-full opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Valuation for Every Business Structure</h2>
            <p className="text-xl text-secondary-600">
              Tailored to your specific circumstances, objectives, and stage of development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                { title: "Listed companies", icon: Building2 },
                { title: "Private limited companies", icon: Briefcase },
                { title: "Unlisted public companies", icon: Globe },
                { title: "Limited Liability Partnerships", icon: Users },
                { title: "Partnership firms", icon: HeartHandshake },
                { title: "Sole proprietorships", icon: UserCheck }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-soft-lg transition-all border border-secondary-100 group flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex flex-shrink-0 items-center justify-center group-hover:bg-accent-500 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="pt-2 font-semibold text-primary-900">{item.title}</div>
                  </div>
                )
              })}
            </div>
            
            <div className="relative h-full min-h-[300px] rounded-3xl overflow-hidden shadow-soft-lg">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                alt="Corporate Office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-900/40 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES TABS SECTION */}
      <section id="services" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">Our Business Valuation Services</h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Comprehensive valuation solutions tailored to your specific transaction, compliance, or strategic needs.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Tabs List */}
            <div className="lg:w-1/3 flex flex-col gap-3">
              {Object.entries(services).map(([key, service]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 border-2 ${
                    activeTab === key 
                      ? 'border-accent-500 bg-accent-50 text-primary-900 shadow-sm' 
                      : 'border-transparent bg-secondary-50 text-secondary-600 hover:bg-secondary-100 hover:text-primary-800'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${activeTab === key ? 'bg-accent-500 text-white' : 'bg-white text-secondary-500'}`}>
                    {service.icon}
                  </div>
                  <span className="font-bold text-lg">{service.title}</span>
                  {activeTab === key && <ChevronRight className="w-5 h-5 ml-auto text-accent-500" />}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="lg:w-2/3">
              <div className="bg-primary-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden min-h-[500px] flex flex-col justify-center">
                {/* Background Image for Active Tab */}
                <div className="absolute inset-0 opacity-20 transition-opacity duration-500">
                  <Image
                    src={services[activeTab as keyof typeof services].image}
                    alt={services[activeTab as keyof typeof services].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-950 to-primary-900/50"></div>
                </div>

                <div className="relative z-10 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-500 mb-8 shadow-glow">
                    {React.cloneElement(services[activeTab as keyof typeof services].icon as React.ReactElement, { className: 'w-8 h-8 text-white' })}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                    {services[activeTab as keyof typeof services].title}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {services[activeTab as keyof typeof services].items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                        <CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                        <span className="text-secondary-100 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. APPROACH VISUALIZATION */}
      <section className="py-24 bg-primary-900 relative overflow-hidden text-white">
        {/* Background shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-500/10 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">Our Valuation Approach</h2>
              <p className="text-xl text-secondary-300 font-light leading-relaxed">
                A reliable valuation requires more than applying a formula. It requires an understanding of the business, its industry, its financial performance, its future prospects, and the purpose for which the valuation is required.
              </p>
              
              <div className="space-y-6 pt-4">
                {[
                  { title: "Understand", desc: "Purpose, structure, and historical performance" },
                  { title: "Analyze", desc: "Industry conditions, risks, and growth prospects" },
                  { title: "Select", desc: "Income-based, market-based, or asset-based approaches" }
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-full border-2 border-accent-500 flex items-center justify-center text-2xl font-bold text-accent-400 group-hover:bg-accent-500 group-hover:text-white transition-all shadow-[0_0_15px_rgba(197,158,94,0.2)]">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-1">{step.title}</h4>
                      <p className="text-secondary-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-500 to-primary-500 rounded-[2rem] transform rotate-6 opacity-50 blur-lg"></div>
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1542744094-24638ea0b3b5?auto=format&fit=crop&q=80&w=1200"
                  alt="Valuation Approach"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRY EXPERIENCE GRID WITH IMAGES */}
      <section className="py-24 bg-secondary-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">Industry Experience</h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Our experience covers businesses across specialised and dynamic sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Mining", "Power Generation", "Solar Power", "Oil and Gas", "Airlines", 
              "Automotive", "Manufacturing", "FMCG", "Sports Clubs", "Healthcare", 
              "Hospitality", "Food", "Textiles", "Education", 
              "Logistics", "Software/SaaS", "Robotics/AI", "FinTech", 
              "Real Estate", "NBFCs", "Service", "Listed Cos"
            ].map((industry, i) => (
              <div key={i} className="bg-white py-6 px-4 rounded-xl text-center shadow-sm border border-secondary-100 hover:border-accent-400 hover:shadow-md transition-all group flex flex-col items-center justify-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-secondary-50 flex items-center justify-center group-hover:bg-accent-50 transition-colors">
                    <Building2 className="w-5 h-5 text-secondary-400 group-hover:text-accent-500" />
                 </div>
                <span className="text-sm font-bold text-primary-800">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US ACCORDION-STYLE LIST */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-12">
                     <div className="relative h-64 rounded-3xl overflow-hidden shadow-soft">
                       <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=600" alt="Meeting" fill className="object-cover" />
                     </div>
                     <div className="relative h-48 rounded-3xl overflow-hidden shadow-soft">
                       <Image src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600" alt="Analysis" fill className="object-cover" />
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="relative h-80 rounded-3xl overflow-hidden shadow-soft">
                       <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600" alt="Office" fill className="object-cover" />
                     </div>
                     <div className="bg-accent-500 rounded-3xl p-8 text-white shadow-soft flex flex-col justify-center items-center text-center">
                        <ShieldCheck className="w-12 h-12 mb-4" />
                        <h4 className="font-bold text-xl mb-2">Trusted Experts</h4>
                        <p className="text-accent-100 text-sm">Independent, objective support.</p>
                     </div>
                  </div>
                </div>
             </div>

             <div className="order-1 lg:order-2 space-y-8">
               <h2 className="text-4xl md:text-5xl font-bold text-primary-900">Why Clients Choose Us</h2>
               <div className="space-y-4">
                 {[
                    "More than 1,000 valuations completed across sectors.",
                    "Exposure to domestic and cross-border transactions.",
                    "Understanding of operating businesses and specialised assets.",
                    "Practical knowledge of corporate transactions & regulatory needs.",
                    "Clear documentation of methodologies and conclusions.",
                    "Valuation insights presented to assist all stakeholders."
                 ].map((reason, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-secondary-50 border border-secondary-100 hover:border-accent-300 hover:bg-white transition-all shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <p className="text-primary-800 font-medium text-lg">{reason}</p>
                    </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION WITH BACKGROUND IMAGE */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt="Cityscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-950/90 backdrop-blur-sm"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10 bg-primary-900/60 p-12 rounded-[3rem] border border-white/10 backdrop-blur-md shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Valuations That Support Better Decisions</h2>
            <p className="text-xl text-secondary-300 font-light leading-relaxed">
              Whether you require a valuation for an acquisition, investment, fundraising, regulatory compliance, or strategic planning, we provide a structured and purpose-driven business valuation service in Chennai.
            </p>
            
            <div className="pt-8">
              <h3 className="text-2xl font-bold mb-8 text-accent-400">Start a Conversation</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a href="mailto:vishu@viswanathanrassociates.com" className="flex items-center gap-3 bg-white text-primary-900 px-8 py-5 rounded-2xl font-bold hover:bg-accent-50 transition-colors w-full md:w-auto justify-center shadow-lg group">
                  <FileText className="w-6 h-6 text-accent-500 group-hover:scale-110 transition-transform" />
                  Email Us
                </a>
                <a href="tel:+916379252059" className="flex items-center gap-3 bg-accent-500 text-white px-8 py-5 rounded-2xl font-bold hover:bg-accent-400 transition-colors w-full md:w-auto justify-center shadow-lg group">
                  <span className="text-2xl group-hover:scale-110 transition-transform">📞</span> +91-6379252059
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessValuation;

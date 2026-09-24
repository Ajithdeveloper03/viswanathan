import { Mountain, Zap, Monitor, Cloud, BrainCircuit, CreditCard, Landmark, Plane, Hotel, Utensils, Stethoscope, HeartPulse, Factory, ShoppingCart, Briefcase, Train, Ship, Droplet, Sun, Car, Home, ArrowRight } from 'lucide-react';
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

const IndustriesPage = () => {
  const industries = [
    { name: "Mining Industry", icon: Mountain, img: "https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?auto=format&fit=crop&w=600" },
    { name: "Power Plants", icon: Zap, img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=600" },
    { name: "Software", icon: Monitor, img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600" },
    { name: "SAAS", icon: Cloud, img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600" },
    { name: "Artificial Intelligence", icon: BrainCircuit, img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600" },
    { name: "FinTech", icon: CreditCard, img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600" },
    { name: "NBFC", icon: Landmark, img: "https://images.unsplash.com/photo-1507675920774-4f05e0c8b389?auto=format&fit=crop&w=600" },
    { name: "Airlines", icon: Plane, img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600" },
    { name: "Hotels", icon: Hotel, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600" },
    { name: "Restaurant", icon: Utensils, img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600" },
    { name: "Hospitals", icon: Stethoscope, img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600" },
    { name: "Healthcare", icon: HeartPulse, img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600" },
    { name: "Manufacturing", icon: Factory, img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600" },
    { name: "FMCG", icon: ShoppingCart, img: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=600" },
    { name: "Service", icon: Briefcase, img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600" },
    { name: "Rail", icon: Train, img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600" },
    { name: "Port", icon: Ship, img: "https://images.unsplash.com/photo-1586528116311-ad8ed7fc30a0?auto=format&fit=crop&w=600" },
    { name: "Fuel", icon: Droplet, img: "https://images.unsplash.com/photo-1605142859862-386be456208a?auto=format&fit=crop&w=600" },
    { name: "Solar Plant", icon: Sun, img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600" },
    { name: "Automotive", icon: Car, img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600" },
    { name: "Real Estate", icon: Home, img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600" },
  ];

  return (
    <div className="bg-[#f8f9fa] text-secondary-900 font-sans">
      
      {/* 1. HERO SECTION (Texon Style) */}
      <section className="relative pt-56 pb-48 flex items-center justify-center bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507208773393-40d9fc670acf?auto=format&fit=crop&q=80&w=2000"
            alt="Industries Background"
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
            <span className="text-accent-400">Industries We Serve</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Specialized Knowledge for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Every Major Sector</span>
          </h1>
        </div>
      </section>

      {/* 2. OVERLAPPING INTRO BOX & COLLAGE */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-20 -mt-16 lg:-mt-24 mb-12 lg:mb-16 lg:mb-24">
        <div className="bg-white rounded-3xl p-6 md:p-10 lg:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row gap-16 items-center justify-between border border-secondary-100">
           
           <div className="lg:w-1/2 relative z-10">
             <div className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 font-bold text-sm tracking-wider uppercase rounded-full mb-6">
               Cross-Industry Expertise
             </div>
             <h2 className="text-4xl lg:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2] mb-8">
               Tailored Financial <br/>
               <span className="text-secondary-400 font-light">Solutions & Advisory</span>
             </h2>
             <p className="text-secondary-600 text-lg leading-relaxed mb-6 border-l-4 border-accent-500 pl-6">
               Different industries face entirely unique financial challenges, regulatory landscapes, and market dynamics. Our team brings deep domain expertise across a wide spectrum of sectors.
             </p>
             <p className="text-secondary-500 leading-relaxed pl-6">
               Whether you are valuing a mining operation, auditing a SaaS startup, or restructuring a manufacturing giant, we apply industry-specific methodologies to ensure our financial solutions are precise, relevant, and actionable.
             </p>
           </div>

           <div className="lg:w-1/2 relative h-[300px] lg:h-[500px] w-full group hidden lg:block">
             <div className="absolute top-0 right-0 w-[70%] h-[350px] rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl z-20 group-hover:-translate-y-4 transition-all duration-700">
               <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" alt="Industry 1" fill className="object-cover" />
             </div>
             <div className="absolute bottom-0 left-0 w-[60%] h-[300px] rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl z-10 border-8 border-white group-hover:translate-x-4 transition-all duration-700">
                <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800" alt="Industry 2" fill className="object-cover" />
             </div>
           </div>

        </div>
      </div>

      {/* 3. INDUSTRIES GRID (Texon Hover Color/Image Reveal Cards) */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#f8f9fa] relative">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <div className="inline-block px-4 py-1.5 bg-white text-primary-700 font-bold text-sm tracking-wider uppercase rounded-full mb-6 shadow-sm border border-secondary-100">
                Our Reach
             </div>
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 mb-6 leading-[1.2]">Sectors We Empower</h2>
             <p className="text-secondary-600 text-xl font-light">We provide tailored valuation and auditing services across these key industries.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div key={idx} className="group bg-white h-48 rounded-2xl lg:rounded-[2rem] p-6 flex flex-col justify-end overflow-hidden hover:-translate-y-2 transition-all duration-500 ease-in-out border border-secondary-100 hover:border-transparent hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] relative">
                  
                  {/* Background Image that fades in on hover */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <Image src={ind.img} alt={ind.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-primary-900/80"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#f8f9fa] text-primary-700 flex items-center justify-center mb-4 group-hover:bg-accent-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-[0_10px_20px_rgba(245,177,51,0.3)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-extrabold text-primary-900 text-xl leading-tight group-hover:text-white transition-colors duration-500">
                      {ind.name}
                    </h3>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-accent-50 rounded-bl-full z-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CTA (Texon Massive Banner) */}
      <section id="contact" className="py-12 md:py-16 lg:py-24 bg-primary-900 text-white relative overflow-hidden">

        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt="CTA Background"
            fill
            className="object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-primary-900/80"></div>
        </div>

<div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[250px] lg:h-[400px] lg:h-[600px] bg-accent-500 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Need Expertise in <br/><span className="text-accent-400">Your Industry?</span>
            </h2>
            <p className="text-xl md:text-2xl text-secondary-300 leading-relaxed font-light">
              Contact us today to discuss how our specialized sector knowledge can help you make better financial decisions.
            </p>
            <div className="pt-8">
              <Link href="/contact" className="inline-flex items-center gap-4 bg-accent-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)]">
                Discuss Your Sector <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;

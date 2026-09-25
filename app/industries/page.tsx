import { Mountain, Zap, Monitor, Cloud, BrainCircuit, CreditCard, Landmark, Plane, Hotel, Utensils, Stethoscope, HeartPulse, Factory, ShoppingCart, Briefcase, Train, Ship, Droplet, Sun, Car, Home, ArrowRight, Globe } from 'lucide-react';
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

      {/* 3. ECOSYSTEM REACH (Branching Layout) */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <style>{`
          @keyframes flowLine {
            to { stroke-dashoffset: -40; }
          }
          .flowing-line {
            stroke-dasharray: 6 6;
            animation: flowLine 2s linear infinite;
          }
          @keyframes floatCard {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          .float-card {
            animation: floatCard 4s ease-in-out infinite;
          }
          @keyframes pulseSoft {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
          }
        `}</style>

        {/* Faint Grid Background - Ultra Clean */}
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#f8fafc 1px, transparent 1px), linear-gradient(90deg, #f8fafc 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24 relative z-20">
             <h2 className="text-4xl md:text-5xl lg:text-[54px] font-medium text-primary-900 leading-[1.2] tracking-tight">
               A Comprehensive Ecosystem <br className="hidden md:block"/> Empowering <span className="text-accent-500">Global Industries</span>
             </h2>
             <p className="text-secondary-600 text-lg mt-6 max-w-2xl mx-auto">
               Our multi-sector reach enables us to deploy specialized financial frameworks tailored exactly to the unique operational and regulatory demands of your industry.
             </p>
          </div>

          {/* Desktop Branching Layout */}
          <div className="relative max-w-[1400px] mx-auto hidden lg:flex items-stretch justify-center h-[700px] xl:h-[800px]">
             
             {/* LEFT COLUMN */}
             <div className="flex-1 relative h-full">
               {[
                 { cat: "ENERGY", items: [{n: "Mining", i: Mountain}, {n: "Power", i: Zap}, {n: "Solar", i: Sun}, {n: "Fuel", i: Droplet}] },
                 { cat: "TECH", items: [{n: "Software", i: Monitor}, {n: "SAAS", i: Cloud}, {n: "AI", i: BrainCircuit}] },
                 { cat: "FINANCE", items: [{n: "FinTech", i: CreditCard}, {n: "NBFC", i: Landmark}] },
                 { cat: "HEALTH", items: [{n: "Hospitals", i: Stethoscope}, {n: "Healthcare", i: HeartPulse}] },
               ].map((category, idx) => {
                 const top = 12.5 + idx * 25;
                 return (
                   <div key={idx} className="absolute w-full flex items-center justify-end gap-4 xl:gap-6 pr-4" style={{ top: `${top}%`, transform: 'translateY(-50%)' }}>
                     <div className="flex flex-wrap justify-end gap-3 w-[300px] xl:w-[400px]">
                       {category.items.map((item, i) => (
                         <div key={i} className="float-card flex items-center gap-2 xl:gap-3 px-4 xl:px-5 py-2.5 xl:py-3 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:bg-primary-900 hover:border-primary-900 hover:-translate-y-1 transition-all duration-300 cursor-pointer group" style={{ animationDelay: `${(idx * 0.3) + (i * 0.2)}s` }}>
                           <item.i className="w-6 h-6 xl:w-7 xl:h-7 text-accent-500 group-hover:text-accent-400 transition-colors" strokeWidth={2} />
                           <span className="text-xs xl:text-sm font-bold tracking-wide whitespace-nowrap text-primary-900 group-hover:text-white transition-colors">{item.n}</span>
                         </div>
                       ))}
                     </div>
                     <span className="text-accent-600 font-bold text-xs xl:text-sm tracking-[0.2em] uppercase w-28 text-right bg-white px-2 py-1 z-10">{category.cat}</span>
                     <div className="w-2.5 h-2.5 rounded-sm absolute right-0 translate-x-1/2 bg-accent-500 shadow-[0_0_10px_rgba(178,143,82,0.6)] animate-[pulseSoft_2s_ease-in-out_infinite]"></div>
                   </div>
                 );
               })}
             </div>

             {/* CENTER SVG & LOGO */}
             <div className="w-48 xl:w-64 relative flex-shrink-0 z-0">
               {/* SVG Paths */}
               <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <defs>
                   {/* Gradient: Navy to Gold */}
                   <linearGradient id="navyToGoldLeft" x1="1" y1="0" x2="0" y2="0">
                     <stop offset="0%" stopColor="#1F2C50"/>
                     <stop offset="100%" stopColor="#C59E5E"/>
                   </linearGradient>
                   <linearGradient id="navyToGoldRight" x1="0" y1="0" x2="1" y2="0">
                     <stop offset="0%" stopColor="#1F2C50"/>
                     <stop offset="100%" stopColor="#C59E5E"/>
                   </linearGradient>
                 </defs>
                 
                 {/* Left paths */}
                 <path d="M 0 12.5 C 40 12.5, 20 50, 50 50" fill="none" stroke="url(#navyToGoldLeft)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" className="flowing-line" />
                 <path d="M 0 37.5 C 40 37.5, 20 50, 50 50" fill="none" stroke="url(#navyToGoldLeft)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" className="flowing-line" />
                 <path d="M 0 62.5 C 40 62.5, 20 50, 50 50" fill="none" stroke="url(#navyToGoldLeft)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" className="flowing-line" />
                 <path d="M 0 87.5 C 40 87.5, 20 50, 50 50" fill="none" stroke="url(#navyToGoldLeft)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" className="flowing-line" />
                 
                 {/* Right paths */}
                 <path d="M 100 12.5 C 60 12.5, 80 50, 50 50" fill="none" stroke="url(#navyToGoldRight)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" className="flowing-line" style={{ animationDirection: 'reverse' }} />
                 <path d="M 100 37.5 C 60 37.5, 80 50, 50 50" fill="none" stroke="url(#navyToGoldRight)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" className="flowing-line" style={{ animationDirection: 'reverse' }} />
                 <path d="M 100 62.5 C 60 62.5, 80 50, 50 50" fill="none" stroke="url(#navyToGoldRight)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" className="flowing-line" style={{ animationDirection: 'reverse' }} />
                 <path d="M 100 87.5 C 60 87.5, 80 50, 50 50" fill="none" stroke="url(#navyToGoldRight)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" className="flowing-line" style={{ animationDirection: 'reverse' }} />
               </svg>
               
               {/* Center Logo - Clean & Premium */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 xl:w-44 xl:h-44 bg-white rounded-3xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-center z-20 hover:scale-110 transition-transform duration-500 cursor-pointer">
                 <div className="relative w-24 h-24 xl:w-32 xl:h-32 flex items-center justify-center">
                   <Image src="/vr-logo.png" alt="VR Logo" fill className="object-contain p-2" />
                 </div>
               </div>
             </div>

             {/* RIGHT COLUMN */}
             <div className="flex-1 relative h-full">
               {[
                 { cat: "HOSPITALITY", items: [{n: "Hotels", i: Hotel}, {n: "Restaurant", i: Utensils}, {n: "FMCG", i: ShoppingCart}] },
                 { cat: "TRANSPORT", items: [{n: "Airlines", i: Plane}, {n: "Rail", i: Train}, {n: "Port", i: Ship}, {n: "Auto", i: Car}] },
                 { cat: "INFRA", items: [{n: "Real Estate", i: Home}, {n: "Manufacturing", i: Factory}] },
                 { cat: "SERVICES", items: [{n: "Service", i: Briefcase}] },
               ].map((category, idx) => {
                 const top = 12.5 + idx * 25;
                 return (
                   <div key={idx} className="absolute w-full flex items-center justify-start gap-4 xl:gap-6 pl-4" style={{ top: `${top}%`, transform: 'translateY(-50%)' }}>
                     <div className="w-2.5 h-2.5 rounded-sm absolute left-0 -translate-x-1/2 bg-accent-500 shadow-[0_0_10px_rgba(178,143,82,0.6)] animate-[pulseSoft_2s_ease-in-out_infinite]"></div>
                     <span className="text-accent-600 font-bold text-xs xl:text-sm tracking-[0.2em] uppercase w-28 text-left bg-white px-2 py-1 z-10">{category.cat}</span>
                     <div className="flex flex-wrap justify-start gap-3 w-[300px] xl:w-[400px]">
                       {category.items.map((item, i) => (
                         <div key={i} className="float-card flex items-center gap-2 xl:gap-3 px-4 xl:px-5 py-2.5 xl:py-3 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:bg-primary-900 hover:border-primary-900 hover:-translate-y-1 transition-all duration-300 cursor-pointer group" style={{ animationDelay: `${(idx * 0.3) + (i * 0.2)}s` }}>
                           <item.i className="w-6 h-6 xl:w-7 xl:h-7 text-accent-500 group-hover:text-accent-400 transition-colors" strokeWidth={2} />
                           <span className="text-xs xl:text-sm font-bold tracking-wide whitespace-nowrap text-primary-900 group-hover:text-white transition-colors">{item.n}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                 );
               })}
             </div>
          </div>
          
          {/* MOBILE FALLBACK (Grid) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:hidden relative z-10">
             {industries.map((ind, idx) => (
               <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                 <ind.icon className="w-8 h-8 text-accent-500 mb-4" />
                 <span className="text-sm font-bold text-primary-900">{ind.name}</span>
               </div>
             ))}
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
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

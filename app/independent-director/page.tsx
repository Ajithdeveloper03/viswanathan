import { Users, Target, ShieldCheck, Scale, AlertTriangle, Handshake, CheckCircle2, ArrowRight, Building2, Cpu, Plane, Mail, Phone, Linkedin, FileCheck } from 'lucide-react';
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import ProcessFlow from '../components/ui/ProcessFlow';
import ModalTriggerButton from '../components/ui/ModalTriggerButton';

const IndependentDirectorPage = () => {
  const areasOfContribution = [
    {
      title: "Board & Strategy",
      icon: Target,
      items: [
        "Provide independent, unbiased views on strategy, expansion, and major decisions",
        "Challenge assumptions constructively and bring an outside perspective",
        "Support long-term planning in capital-intensive and technology-driven businesses"
      ]
    },
    {
      title: "Audit Committee & Finance",
      icon: ShieldCheck,
      items: [
        "Review financial statements, disclosures, and audit findings",
        "Evaluate internal financial controls, internal audit, and statutory audit quality",
        "Bring cost, valuation, and financial-reporting depth to committee discussions"
      ]
    },
    {
      title: "Risk Management",
      icon: AlertTriangle,
      items: [
        "Assess enterprise risks, including credit, operational, technology, and compliance risks",
        "Review the effectiveness of risk frameworks and controls",
        "Support fraud-risk vigilance and whistle-blower mechanisms"
      ]
    },
    {
      title: "Corporate Governance",
      icon: Scale,
      items: [
        "Uphold governance standards and board processes",
        "Review related-party transactions and conflict-of-interest situations",
        "Support compliance with the Companies Act, SEBI, and sector regulators"
      ]
    },
    {
      title: "Stakeholder Protection",
      icon: Handshake,
      items: [
        "Represent the interests of minority shareholders, lenders, and other stakeholders",
        "Support fair, transparent, and ethical decision-making"
      ]
    },
    {
      title: "Committee Participation",
      icon: Users,
      items: [
        "Audit Committee",
        "Nomination & Remuneration Committee",
        "Risk Management Committee",
        "Stakeholders' Relationship and other committees"
      ]
    }
  ];

  const sectorExperience = [
    {
      title: "Non-Banking Finance Companies (NBFCs)",
      icon: Building2,
      desc: "Governance, credit and risk oversight, regulatory compliance, and financial reporting quality in a regulated lending environment."
    },
    {
      title: "Semiconductor Manufacturing",
      icon: Cpu,
      desc: "Capital-intensive, technology-led operations, with focus on cost structures, project economics, and long-horizon investment decisions."
    },
    {
      title: "Drones Manufacturing & Services",
      icon: Plane,
      desc: "A fast-growing, regulated, innovation-driven sector, with focus on scaling, compliance, pricing, and unit economics."
    }
  ];

  return (
    <div className="bg-[#f8f9fa] text-secondary-900 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-56 pb-48 flex items-center justify-center bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
            alt="Board Room Background"
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
            <span className="text-accent-400">Independent Director</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-tight">
            Independent Director <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Services</span>
          </h1>
        </div>
      </section>

      {/* 2. OVERLAPPING INTRO BOX */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-20 -mt-24 mb-32">
        <div className="bg-white rounded-3xl lg:rounded-[3rem] p-6 md:p-10 lg:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row gap-8 lg:p-12 items-center justify-between border border-secondary-100">
           
           <div className="lg:w-1/2">
             <div className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 font-bold text-sm tracking-wider uppercase rounded-full mb-6">
               Objective Oversight
             </div>
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2] mb-6">
               Independent Judgement. <br/>
               <span className="text-secondary-400 font-light">Strong Governance.</span>
             </h2>
             <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-2xl mb-6">
               <p className="text-primary-900 font-medium">
                 We have completed the proficiency self-assessment test and hold a life time registration under the Independent Directors Databank under the Ministry of Corporate Affairs (MCA).
               </p>
             </div>
           </div>
           
           <div className="lg:w-1/2">
             <p className="text-secondary-600 text-lg leading-relaxed mb-6 border-l-4 border-accent-500 pl-6">
               Good governance protects a company's reputation, its investors, and its long-term value. As a practising Cost Accountant with board experience, I bring an independent, finance-driven perspective to boards of companies in India.
             </p>
             <p className="text-secondary-500 leading-relaxed pl-6">
               An Independent Director is more than a compliance requirement. The role offers objective oversight, a check on conflicts of interest, and experienced counsel on strategy, risk, and financial integrity under the Companies Act, 2013 and applicable SEBI and RBI norms.
             </p>
           </div>
           
        </div>
      </div>

      {/* 3. AREAS OF CONTRIBUTION (Cards Grid) */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 font-bold text-sm tracking-wider uppercase rounded-full mb-6">
               Board Contributions
            </div>
            <h2 className="text-5xl font-extrabold text-primary-900 leading-[1.2]">
              Areas of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-900">Contribution</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areasOfContribution.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div key={idx} className="group bg-[#f8f9fa] rounded-3xl lg:rounded-[2.5rem] p-10 hover:-translate-y-3 transition-all duration-500 ease-in-out border border-secondary-100 hover:border-transparent hover:bg-primary-900 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] flex flex-col h-full relative overflow-hidden">
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-900 shadow-sm mb-8 group-hover:scale-110 transition-transform duration-500 border border-secondary-100 group-hover:border-transparent">
                      <Icon className="w-7 h-7" />
                    </div>
                    
                    <h5 className="text-2xl font-extrabold text-primary-900 group-hover:text-white leading-tight mb-8 transition-colors duration-300">
                      {area.title}
                    </h5>

                    <ul className="space-y-4 mb-8 flex-grow">
                      {area.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-secondary-600 group-hover:text-secondary-200 text-[15px] transition-colors duration-300">
                          <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. SECTOR EXPERIENCE & WHY IT HELPS (Split Layout) */}
      <section className="py-32 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left: Sector Experience Collage */}
            <div>
               <div className="inline-block px-4 py-1.5 bg-white text-primary-700 font-bold text-sm tracking-wider uppercase rounded-full mb-6 shadow-sm border border-secondary-100">
                 Domain Knowledge
               </div>
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2] mb-12">
                 Specialized <br/><span className="text-secondary-400 font-light">Sector Experience</span>
               </h2>
               
               <div className="space-y-6">
                 {sectorExperience.map((sector, idx) => {
                   const Icon = sector.icon;
                   return (
                     <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-secondary-100 flex gap-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                       <div className="w-16 h-16 bg-[#f8f9fa] rounded-2xl flex items-center justify-center text-accent-500 flex-shrink-0">
                         <Icon className="w-8 h-8" />
                       </div>
                       <div>
                         <h4 className="text-xl font-bold text-primary-900 mb-2">{sector.title}</h4>
                         <p className="text-secondary-600 leading-relaxed">{sector.desc}</p>
                       </div>
                     </div>
                   )
                 })}
               </div>
            </div>

            {/* Right: Why This Experience Helps */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary-900 rounded-3xl lg:rounded-[3rem] transform rotate-3 scale-105 opacity-10"></div>
              <div className="bg-primary-900 text-white rounded-3xl lg:rounded-[3rem] p-8 lg:p-12 relative z-10 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/20 blur-3xl rounded-full"></div>
                
                <h3 className="text-3xl lg:text-4xl font-extrabold mb-10 leading-tight">Why This Experience <br/><span className="text-accent-400">Helps a Board</span></h3>
                
                <ul className="space-y-8 relative z-10">
                  <li className="flex gap-5">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 text-accent-400 border border-white/10">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Finance & Cost Expertise</h4>
                      <p className="text-secondary-300">Cost accounting, valuation, internal audit, and controls all under one roof.</p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 text-accent-400 border border-white/10">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Cross-Sector Exposure</h4>
                      <p className="text-secondary-300">Regulated financial services alongside advanced manufacturing and emerging technology.</p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 text-accent-400 border border-white/10">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Practical, Independent Voice</h4>
                      <p className="text-secondary-300">Balanced, well-prepared, and sharply focused on the company's long-term health.</p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 text-accent-400 border border-white/10">
                      4
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Governance Discipline</h4>
                      <p className="text-secondary-300">Strong grounding in board processes, committee work, and regulatory compliance.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

            {/* NEW PROCESS STRIP */}
      <ProcessFlow 
        subtitle="Governance Approach"
        title="Our proven oversight process for"
        highlightText="board excellence"
        steps={[
          { title: "Review", desc: "Analyze board materials and financial statements.", icon: FileCheck },
          { title: "Advise", desc: "Provide independent perspective on strategy.", icon: Target },
          { title: "Monitor", desc: "Oversee risk management and internal controls.", icon: ShieldCheck },
          { title: "Uphold", desc: "Ensure strict compliance and stakeholder protection.", icon: Scale }
        ]}
      />

{/* 5. CTA SECTION (Texon Banner) */}
      <section id="contact" className="py-32 relative bg-primary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-white rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[250px] lg:h-[400px] lg:h-[600px] bg-accent-500 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Open to Independent <br/> <span className="text-accent-400">Director Appointments</span>
            </h2>
            <p className="text-xl md:text-2xl text-secondary-300 leading-relaxed font-light">
              I am open to board advisory roles with companies in India that value independent oversight and strong governance.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
               <ModalTriggerButton className="flex items-center justify-center gap-3 bg-[#f8f9fa] border border-secondary-100 text-primary-900 px-8 py-5 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-sm hover:scale-105">
                 <Mail className="w-6 h-6 text-accent-500" />
                 Email Me Directly
               </ModalTriggerButton>
               <a href="tel:+916379252059" className="flex items-center justify-center gap-3 bg-[#f8f9fa] border border-secondary-100 text-primary-900 px-8 py-5 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-sm hover:scale-105">
                 <Phone className="w-6 h-6 text-accent-500" />
                 +91-6379252059
               </a>
               <a href="https://www.linkedin.com/in/viswanathan-rajagopalan-13106838/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-[#0a66c2] text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-[#084e96] transition-all duration-300 shadow-lg hover:scale-105">
                 <Linkedin className="w-6 h-6" />
                 View LinkedIn Profile
               </a>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IndependentDirectorPage;

import { CheckCircle2, ShieldCheck, Globe, LineChart, ShieldAlert, FileCheck, Calculator, Server, ArrowRight, Phone, Mail, Linkedin, Target, ClipboardCheck } from 'lucide-react';
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import ProcessFlow from '../components/ui/ProcessFlow';
import GSAPScrollSection from '../components/ui/GSAPScrollSection';
import ModalTriggerButton from '../components/ui/ModalTriggerButton';

const InternalAuditPage = () => {
  const auditTypes = [
    {
      title: "Financial & Operational",
      icon: LineChart,
      items: [
        "Financial Controls Audit: accuracy of records, reconciliations, and reporting",
        "Operational Audit: efficiency and effectiveness of processes",
        "Process Audit: procure-to-pay, order-to-cash, hire-to-retire, and inventory",
        "Cash & Treasury Audit: cash handling, bank operations, and fund management"
      ]
    },
    {
      title: "Risk & Controls",
      icon: ShieldAlert,
      items: [
        "Risk-Based Internal Audit: audit plans built around your key risks",
        "Internal Financial Controls (IFC): design and operating effectiveness",
        "Fraud Risk & Forensic Review: red-flag analysis and control weaknesses",
        "Enterprise Risk Assessment: identification and ranking of business risks"
      ]
    },
    {
      title: "Compliance",
      icon: FileCheck,
      items: [
        "Statutory & Regulatory Audit: Companies Act, tax, labor, and sector laws",
        "Policy & Procedure Compliance: adherence to delegated authority",
        "Contract & Vendor Compliance: terms, pricing, and payments"
      ]
    },
    {
      title: "Cost & Performance",
      icon: Calculator,
      items: [
        "Cost Audit & Control Review: records, allocation, and leakage",
        "Inventory & Fixed Asset Audit: verification, valuation, and controls",
        "Project & Contract Audit: budgets, cost overruns, and milestones",
        "Procurement & Supply Chain: sourcing, vendor selection, value for money"
      ]
    },
    {
      title: "Systems & Governance",
      icon: Server,
      items: [
        "IT & ERP Controls Review: access, data integrity, and system controls",
        "Corporate Governance Review: board processes, delegation, reporting",
        "Related Party Transactions: approval, disclosure, and arm's-length checks",
        "Follow-up & Assurance: confirming that recommendations were implemented"
      ]
    }
  ];

  return (
    <div className="bg-[#f8f9fa] text-secondary-900 font-sans">
      
      {/* 1. HERO SECTION (Texon Style) */}
      <section className="relative pt-40 pb-32 flex items-center justify-center bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000"
            alt="Internal Audit Background"
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
            <span className="text-accent-400">Internal Audit</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Internal Audit <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Services</span>
          </h1>
        </div>
      </section>

      {/* 2. Overlapping Intro Box (Texon Signature) */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-20 -mt-16 lg:-mt-24 mb-12 lg:mb-16">
        <div className="bg-white rounded-3xl p-6 md:p-10 lg:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row gap-8 lg:p-12 items-center justify-between border border-secondary-100 relative overflow-hidden">
           {/* Decorative Background Image for uniqueness */}
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
             <Image src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200" alt="bg" fill className="object-cover" />
           </div>
           
           <div className="lg:w-1/2 relative z-10">
             <div className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 font-bold text-sm tracking-wider uppercase rounded-full mb-6">
               Beyond Compliance
             </div>
             <h2 className="text-4xl lg:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2]">
               Stronger Controls. <br/>
               <span className="text-secondary-400 font-light">Fewer Surprises.</span>
             </h2>
           </div>
           <div className="lg:w-1/2 relative z-10">
             <p className="text-secondary-600 text-lg leading-relaxed mb-6 border-l-4 border-accent-500 pl-6">
               Internal audit is more than a compliance exercise. It is an independent check that your processes work, your risks are managed, and your numbers can be trusted.
             </p>
             <p className="text-secondary-500 leading-relaxed pl-6">
               Led by a practising Cost Accountant, we provide risk-based internal audit services for organizations in India and overseas, tailored to your industry, size, and regulatory environment.
             </p>
           </div>
        </div>
      </div>

      {/* 3. IN INDIA VS OUTSIDE INDIA (Alternating Split Layouts - Texon style) */}
      <section className="py-12 md:py-16 lg:py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 space-y-32 relative z-10">
          
          {/* Internal Audit in India */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 font-bold text-sm tracking-wider uppercase rounded-full mb-6">
                 Domestic Focus
              </div>
              <h3 className="text-4xl md:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 mb-8 leading-[1.2]">Internal Audit in India</h3>
              <p className="text-secondary-600 mb-8 leading-relaxed text-lg border-l-2 border-secondary-200 pl-6">
                Indian businesses operate under a demanding compliance framework. Under Section 138 of the Companies Act, 2013, certain classes of companies must appoint an internal auditor, and boards expect a strong internal audit function.
              </p>
              <ul className="space-y-5">
                {[
                  "Risk-based internal audit plans approved by management",
                  "Reviews aligned with the Companies Act & ICAI standards",
                  "Support for IFC assessment and documentation",
                  "Independent reporting to the Board and audit committee"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-secondary-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-accent-50 text-accent-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="order-1 lg:order-2 relative h-[250px] lg:h-[400px] lg:h-[600px] w-full group">
              <div className="absolute top-0 right-0 w-4/5 h-[300px] lg:h-[500px] rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl z-20 group-hover:-translate-y-4 transition-all duration-700">
                <Image src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200" alt="Audit in India" fill className="object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 w-3/5 h-[250px] lg:h-[400px] rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl z-10 border-8 border-white group-hover:translate-x-4 transition-all duration-700">
                 <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800" alt="Audit Details" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Internal Audit Outside India */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            <div className="relative h-[250px] lg:h-[400px] lg:h-[600px] w-full group">
              <div className="absolute bottom-0 left-0 w-4/5 h-[300px] lg:h-[500px] rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl z-20 group-hover:-translate-y-4 transition-all duration-700">
                <Image src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200" alt="Audit Outside India" fill className="object-cover" />
              </div>
              <div className="absolute top-0 right-0 w-3/5 h-[250px] lg:h-[400px] rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl z-10 border-8 border-white group-hover:-translate-x-4 transition-all duration-700">
                 <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800" alt="Global Audit" fill className="object-cover" />
              </div>
            </div>

            <div>
              <div className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 font-bold text-sm tracking-wider uppercase rounded-full mb-6">
                 Global Reach
              </div>
              <h3 className="text-4xl md:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 mb-8 leading-[1.2]">Internal Audit <br/>Outside India</h3>
              <p className="text-secondary-600 mb-8 leading-relaxed text-lg border-l-2 border-secondary-200 pl-6">
                Companies with overseas subsidiaries, branches, or operations need consistent controls across borders. We support Indian groups with foreign operations, and multinational entities.
              </p>
              <ul className="space-y-5 mb-8">
                {[
                  "Audit programs designed around globally recognized frameworks (IIA, COSO)",
                  "Cross-border reviews of subsidiaries, JVs, and project sites",
                  "Group-level reporting and consolidated audit findings",
                  "Alignment of local practices with the parent's policies"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-secondary-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-accent-50 text-accent-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-secondary-100 text-sm text-secondary-600 shadow-inner">
                Note: the extent of overseas work depends on local licensing and legal requirements, which we assess with each engagement.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. TYPES OF INTERNAL AUDIT SERVICES (GSAP Scroll Section) */}
      <GSAPScrollSection theme="light" 
        title="Types of Internal Audit Services"
        items={auditTypes.map(item => ({
          ...item,
          icon: item.icon ? <item.icon className="w-8 h-8" /> : undefined
        }))}
      />

      {/* 6. WHAT YOU GAIN & CTA (Texon Massive Footer Banner) */}
      <section id="contact" className="py-12 md:py-16 lg:py-24 relative bg-primary-900 overflow-hidden">

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
        
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* What you gain list */}
            <div>
              <div className="inline-block px-4 py-1.5 bg-white/10 text-white font-bold text-sm tracking-wider uppercase rounded-full mb-6 border border-white/20">
                 Benefits
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-10 leading-[1.2]">What You Gain</h2>
              <ul className="space-y-6">
                {[
                  "Early detection of errors, leakage, and fraud risk",
                  "Stronger controls and smoother statutory audits",
                  "Confidence for the Board, lenders, and investors",
                  "Consistent governance across locations and countries"
                ].map((gain, i) => (
                  <li key={i} className="flex items-center gap-5 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-xl bg-accent-500/20 text-accent-400 flex items-center justify-center flex-shrink-0">
                       <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-medium text-white">{gain}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Box (Floating White Card) */}
            <div className="bg-white rounded-3xl lg:rounded-[3rem] p-8 lg:p-12 text-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative group">
               <h3 className="text-4xl font-extrabold text-primary-900 mb-6 leading-[1.2]">Talk to Us About <br/>Internal Audit</h3>
               <p className="text-secondary-600 mb-10 text-lg leading-relaxed">
                 Connect with our expert team to strengthen your controls, manage risks, and ensure compliance.
               </p>
               
               <div className="flex flex-col gap-4 max-w-sm mx-auto">
                 <ModalTriggerButton className="flex items-center justify-center gap-3 bg-[#f8f9fa] border border-secondary-100 text-primary-900 px-8 py-5 rounded-full font-bold text-lg hover:bg-primary-900 hover:text-white transition-all duration-300 shadow-sm">
                   <Mail className="w-6 h-6 text-accent-500" />
                   Email Our Team
                 </ModalTriggerButton>
                 <a href="tel:+916379252059" className="flex items-center justify-center gap-3 bg-[#f8f9fa] border border-secondary-100 text-primary-900 px-8 py-5 rounded-full font-bold text-lg hover:bg-primary-900 hover:text-white transition-all duration-300 shadow-sm">
                   <Phone className="w-6 h-6 text-accent-500" />
                   +91-6379252059
                 </a>
                 <a href="https://www.linkedin.com/in/viswanathan-rajagopalan-13106838/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-[#0a66c2] text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-[#084e96] transition-all duration-300 shadow-lg mt-2">
                   <Linkedin className="w-6 h-6" />
                   Connect on LinkedIn
                 </a>
               </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default InternalAuditPage;



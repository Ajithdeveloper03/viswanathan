import { Briefcase, BarChart, ShieldCheck, Lock, TrendingUp, Landmark, Replace, Globe, CheckCircle2, ArrowRight, Mail, Phone, Linkedin, Target, FileCheck, Handshake } from 'lucide-react';
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import ProcessFlow from '../components/ui/ProcessFlow';
import GSAPScrollSection from '../components/ui/GSAPScrollSection';

import ModalTriggerButton from '../components/ui/ModalTriggerButton';
const BusinessProposalsPage = () => {
  const whatWeDo = [
    {
      title: "Equity Funding",
      desc: "Raise capital from the right investors, on sound terms.",
      icon: TrendingUp,
      items: [
        "Prepare investor-ready business plans, financial models, and pitch material",
        "Support valuation and deal structuring (private placement, preferential allotment)",
        "Identify suitable investors: angels, venture funds, PE, strategic partners, and family offices",
        "Assist with due diligence preparation, term-sheet review, and negotiation",
        "Advise on shareholder agreements and dilution planning"
      ]
    },
    {
      title: "Debt Syndication",
      desc: "Secure the right funding at the right cost.",
      icon: Landmark,
      items: [
        "Assess your funding requirement and repayment capacity",
        "Prepare credit proposals, project reports, and Detailed Project Reports (DPRs)",
        "Structure term loans, working capital, and project finance facilities",
        "Approach banks, NBFCs, and financial institutions in India and overseas",
        "Support documentation, sanction follow-up, and lender queries"
      ]
    },
    {
      title: "Mergers & Acquisitions",
      desc: "Buy, sell, merge, or restructure with confidence.",
      icon: Replace,
      items: [
        "Valuation and fair-price assessment for both buyers and sellers",
        "Target identification and strategic-fit evaluation",
        "Financial and cost due diligence support",
        "Deal structuring, including mergers, demergers, and share swaps",
        "Assistance with negotiation and transaction documentation"
      ]
    },
    {
      title: "International Trade",
      desc: "Expand across borders without losing track of compliance and cost.",
      icon: Globe,
      items: [
        "Cross-border investment structuring: inbound (FDI) and outbound (ODI)",
        "Market-entry and joint-venture proposals",
        "Pricing, landed-cost, and profitability analysis for export and import",
        "Support with regulatory and valuation requirements under foreign exchange rules",
        "Introductions and coordination with overseas partners and advisors"
      ]
    }
  ];

  return (
    <div className="bg-[#f8f9fa] text-secondary-900 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-56 pb-48 flex items-center justify-center bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000"
            alt="Business Proposals Background"
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
            <span className="text-accent-400">Business Proposals</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-tight">
            Strategic Transactions <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">& Capital Structuring</span>
          </h1>
        </div>
      </section>

      {/* 2. OVERLAPPING INTRO BOX */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-20 -mt-16 lg:-mt-24 mb-12 lg:mb-16 lg:mb-24">
        <div className="bg-white rounded-3xl lg:rounded-[3rem] p-6 md:p-10 lg:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row gap-8 lg:p-12 items-center justify-between border border-secondary-100">
           
           <div className="lg:w-1/2">
             <div className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 font-bold text-sm tracking-wider uppercase rounded-full mb-6">
               Advisory Services
             </div>
             <h2 className="text-4xl lg:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2] mb-6">
               Data-Driven <br/>
               <span className="text-secondary-400 font-light">Financial Engineering.</span>
             </h2>
             <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-2xl mb-6">
               <p className="text-primary-900 font-medium">
                 We offer these services through our Business Partner, present in India and the United Kingdom, bringing vast global experience.
               </p>
             </div>
           </div>
           
           <div className="lg:w-1/2">
             <p className="text-secondary-600 text-lg leading-relaxed mb-6 border-l-4 border-accent-500 pl-6">
               Securing capital, executing complex transactions, and expanding across borders require more than a vision; they demand rigorous financial engineering and compelling narratives. 
             </p>
             <p className="text-secondary-500 leading-relaxed pl-6">
               We specialize in structuring high-impact business proposals and executing strategic financial transactions that unlock growth, both within the dynamic Indian market and across the global economic landscape. We ensure that your enterprise is optimally positioned for growth, acquisition, or expansion.
             </p>
           </div>
           
        </div>
      </div>

      {/* 3. WHAT WE DO (GSAP Scroll Section) */}
      <GSAPScrollSection 
        title="Our Focus Areas"
        subtitle="Core Expertise"
        items={whatWeDo.map(item => ({
          ...item,
          icon: item.icon ? <item.icon className="w-8 h-8" /> : undefined
        }))}
      />

      {/* 4. GLOBAL PERSPECTIVE (Texon Collage Layout) */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left: Content */}
            <div className="flex flex-col">
              <div className="mb-12">
                <div className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 font-bold text-sm tracking-wider uppercase rounded-full mb-6">
                   Deep Local Expertise
                </div>
                <h2 className="text-4xl md:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2]">
                  A Global <br/><span className="text-secondary-400 font-light">Perspective</span>
                </h2>
                <p className="text-secondary-600 leading-relaxed text-lg mt-6 border-l-2 border-secondary-200 pl-6">
                  Capital flows and strategic partnerships are no longer confined by geography. Our financial advisory practice seamlessly bridges domestic and international markets to fuel your growth trajectory.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="w-16 h-16 bg-[#f8f9fa] border border-secondary-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-accent-500 group-hover:bg-primary-900 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Globe className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors duration-300">India Operations</h4>
                    <p className="text-secondary-600 leading-relaxed">
                      We expertly navigate the intricate financial and regulatory landscape of India, ensuring alignment with local statutory frameworks, capital market regulations, and the unique dynamics of the Indian banking sector for domestic funding and M&A.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-16 h-16 bg-[#f8f9fa] border border-secondary-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-accent-500 group-hover:bg-primary-900 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Globe className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors duration-300">Global Operations</h4>
                    <p className="text-secondary-600 leading-relaxed">
                      For cross-border transactions and international trade, we apply globally recognized financial frameworks, harmonizing financial reporting and capital structuring to meet the stringent demands of international investors, foreign regulatory bodies, and global trade partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[700px] w-full hidden lg:block">
              <div className="absolute top-0 right-0 w-[80%] h-[300px] lg:h-[500px] rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl z-10 hover:z-30 transition-all duration-500 group">
                <Image src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200" alt="Global Trade" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute bottom-0 left-0 w-[60%] h-[250px] lg:h-[400px] rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl z-20 border-8 border-white group">
                <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" alt="Corporate" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute top-1/2 -left-8 w-32 h-32 bg-accent-500 rounded-full blur-3xl opacity-20 z-0"></div>
            </div>

          </div>
        </div>
      </section>

            {/* 5. PROCESS STRIP */}
      <ProcessFlow 
        subtitle="Deal Execution"
        title="Our proven transaction process for"
        highlightText="securing capital"
        steps={[
          { title: "Understand", desc: "Understand your business, goals, and funding objective.", icon: Target },
          { title: "Prepare", desc: "Prepare the proposal and financial models.", icon: FileCheck },
          { title: "Position", desc: "Position the opportunity for the right investors.", icon: Globe },
          { title: "Negotiate", desc: "Support due diligence and contract negotiation.", icon: Handshake },
          { title: "Close", desc: "Follow through until the transaction closes successfully.", icon: CheckCircle2 }
        ]}
      />

{/* 6. WHY WORK WITH US & CTA (Texon Split Banner) */}
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
            
            {/* Why Work With Us */}
            <div>
              <div className="inline-block px-4 py-1.5 bg-white/10 text-white font-bold text-sm tracking-wider uppercase rounded-full mb-6 border border-white/20">
                 Our Advantage
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-10 leading-[1.2]">Why Choose Us</h2>
              <ul className="space-y-6">
                {[
                  "Numbers that stand up to scrutiny: valuation, costing, and audit expertise built in",
                  "Board-level perspective: we know what investors, lenders, and audit committees ask",
                  "Sector range: NBFCs, manufacturing, technology, healthcare, infrastructure, and more",
                  "End-to-end support: from the first business plan to a completed transaction",
                  "Strict Confidentiality: your information and deal plans are handled with absolute discretion"
                ].map((gain, i) => (
                  <li key={i} className="flex items-center gap-5 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-xl bg-accent-500/20 text-accent-400 flex items-center justify-center flex-shrink-0">
                       <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-medium text-white">{gain}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Box (Floating White Card) */}
            <div className="bg-white rounded-3xl lg:rounded-[3rem] p-8 lg:p-12 text-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative group">
               <h3 className="text-4xl font-extrabold text-primary-900 mb-6 leading-[1.2]">Let&apos;s Discuss <br/>Your Proposal</h3>
               <p className="text-secondary-600 mb-10 text-lg leading-relaxed">
                 Tell us about your funding need, acquisition plan, or cross-border opportunity, and we&apos;ll suggest the right approach.
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

export default BusinessProposalsPage;

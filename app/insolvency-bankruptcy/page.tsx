import { Building2, Briefcase, FileCheck, Landmark, Users, ArrowRight, ShieldCheck, Mail, Phone, Linkedin, CheckCircle2 } from 'lucide-react';
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import ProcessFlow from '../components/ui/ProcessFlow';
import ModalTriggerButton from '../components/ui/ModalTriggerButton';

const IBCPage = () => {
  const sections = [
    {
      id: "Section 7",
      title: "Financial Creditor (CIRP)",
      icon: Landmark,
      desc: "A financial creditor (bank, institution, or lender) may apply to the NCLT to begin CIRP when a corporate debtor defaults on a financial debt. Once admitted, control of the company's affairs passes to the insolvency professional.",
      how: "Managing the CIRP as Interim Resolution Professional (IRP) or Resolution Professional (RP), running the Committee of Creditors, and guiding the resolution plan process."
    },
    {
      id: "Section 9",
      title: "Operational Creditor (CIRP)",
      icon: Briefcase,
      desc: "A supplier, contractor, or operational creditor with unpaid dues may start the process after serving a demand notice under Section 8. If the debtor neither pays nor disputes the debt, the creditor can apply to the NCLT.",
      how: "Supporting the process after admission, verifying operational creditors' claims, and running the CIRP fairly for all stakeholders."
    },
    {
      id: "Section 10",
      title: "Corporate Applicant (CIRP)",
      icon: Building2,
      desc: "The corporate debtor itself, acting through its board or members, can apply to the NCLT to begin insolvency resolution when it has defaulted, seeking an orderly, court-supervised resolution instead of waiting for creditor action.",
      how: "Assisting the company in preparation, acting as IRP or RP, and steering the company toward revival where possible."
    },
    {
      id: "Section 59",
      title: "Voluntary Liquidation",
      icon: FileCheck,
      desc: "A solvent company that has not defaulted and wishes to close its business may liquidate voluntarily, requiring a declaration of solvency, member approval, and the appointment of a liquidator following IBBI regulations.",
      how: "Acting as Liquidator, realizing assets, settling liabilities in the proper order, distributing balance proceeds, and completing the closure with full documentation."
    },
    {
      id: "Section 95",
      title: "Personal Guarantors",
      icon: Users,
      desc: "Personal guarantors to corporate debtors can face insolvency proceedings when the guaranteed debt is in default. A creditor applies to the NCLT, and a Resolution Professional examines the application.",
      how: "Acting as Resolution Professional, examining applications, verifying claims, coordinating with creditors, and supporting a repayment plan or other settlement for the guarantor."
    }
  ];

  const services = [
    "Interim Resolution Professional (IRP) and Resolution Professional (RP) for corporate CIRP and personal guarantors",
    "Committee of Creditors (CoC) coordination, meetings, and reporting",
    "Claims collection and verification from all classes of creditors",
    "Management of the corporate debtor as a going concern during CIRP",
    "Resolution plan process: information memorandum, invitation of plans, evaluation, and NCLT approval support",
    "Repayment plan support for personal guarantors",
    "Liquidator services for voluntary liquidation",
    "Compliance and reporting to the NCLT, IBBI, and stakeholders"
  ];

  return (
    <div className="bg-[#f8f9fa] text-secondary-900 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-56 pb-48 flex items-center justify-center bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2000"
            alt="Law & Justice Background"
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
            <span className="text-accent-400">Insolvency & Bankruptcy Code</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-tight">
            Insolvency & Bankruptcy <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Services</span>
          </h1>
        </div>
      </section>

      {/* 2. OVERLAPPING INTRO BOX */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-20 -mt-16 lg:-mt-24 mb-12 lg:mb-16 lg:mb-24">
        <div className="bg-white rounded-3xl lg:rounded-[3rem] p-6 md:p-10 lg:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row gap-8 lg:p-12 items-center justify-between border border-secondary-100">
           
           <div className="lg:w-1/2">
             <div className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 font-bold text-sm tracking-wider uppercase rounded-full mb-6">
               Registered Professional
             </div>
             <h2 className="text-4xl lg:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2] mb-6">
               Transparency. <br/>
               <span className="text-secondary-400 font-light">Timely Execution.</span>
             </h2>
             <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-2xl mb-6 flex items-start gap-4">
               <ShieldCheck className="w-8 h-8 text-primary-900 flex-shrink-0 mt-1" />
               <p className="text-primary-900 font-medium leading-relaxed">
                 Successfully completed 16 comprehensive assignments across various categories of the Insolvency and Bankruptcy Code (IBC), 2016.
               </p>
             </div>
           </div>
           
           <div className="lg:w-1/2">
             <p className="text-secondary-600 text-lg leading-relaxed mb-6 border-l-4 border-accent-500 pl-6">
               As a registered Insolvency Professional, I support creditors, operational creditors, promoters, guarantors, and companies under Sections 7, 9, 10, 59 and 95 of the IBC with fairness to all stakeholders.
             </p>
             <p className="text-secondary-500 leading-relaxed pl-6">
               With a proven track record of executing complex insolvency proceedings, we bring hands-on experience in managing corporate distress and liquidation. Our practice covers the full spectrum of insolvency initiations and voluntary closures, ensuring objective and highly structured resolution services.
             </p>
           </div>
           
        </div>
      </div>

      {/* 3. SECTIONS WE WORK UNDER (Grid of Large Cards) */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#f8f9fa] relative">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block px-4 py-1.5 bg-white text-primary-700 font-bold text-sm tracking-wider uppercase rounded-full mb-6 shadow-sm border border-secondary-100">
               IBC Frameworks
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2] mb-6">
              Sections We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-900">Work Under</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sections.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div key={idx} className="group bg-white rounded-3xl lg:rounded-[2.5rem] p-10 hover:-translate-y-3 transition-all duration-500 ease-in-out border border-secondary-100 hover:border-transparent hover:bg-primary-900 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] flex flex-col h-full relative overflow-hidden">
                  
                  <div className="relative z-10 flex flex-col h-full">
                    
                    <div className="flex items-center justify-between mb-8">
                       <div className="w-16 h-16 bg-[#f8f9fa] rounded-2xl flex items-center justify-center text-primary-900 shadow-sm group-hover:scale-110 transition-transform duration-500 border border-secondary-100 group-hover:border-transparent group-hover:bg-accent-500 group-hover:text-white">
                         <Icon className="w-7 h-7" />
                       </div>
                       <span className="px-4 py-2 bg-primary-50 text-primary-900 font-bold rounded-full text-sm group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
                         {sec.id}
                       </span>
                    </div>
                    
                    <h5 className="text-2xl font-extrabold text-primary-900 group-hover:text-white leading-tight mb-4 transition-colors duration-300">
                      {sec.title}
                    </h5>
                    <p className="text-secondary-600 group-hover:text-secondary-200 mb-8 font-medium transition-colors duration-300 leading-relaxed">
                      {sec.desc}
                    </p>

                    <div className="mt-auto bg-[#f8f9fa] p-5 rounded-2xl group-hover:bg-primary-950 transition-colors duration-300 border border-secondary-100 group-hover:border-white/10">
                      <span className="block text-accent-600 font-bold text-sm uppercase tracking-wide mb-2">How We Help</span>
                      <p className="text-secondary-700 text-sm leading-relaxed group-hover:text-secondary-300 transition-colors duration-300">
                        {sec.how}
                      </p>
                    </div>
                    
                  </div>
                  
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES (Texon Split Layout) */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left: Image Collage */}
            <div className="relative h-[700px] w-full hidden lg:block">
              <div className="absolute top-0 left-0 w-[80%] h-[300px] lg:h-[500px] rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl z-10 hover:z-30 transition-all duration-500 group">
                <Image src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200" alt="Consulting" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute bottom-0 right-0 w-[60%] h-[250px] lg:h-[400px] rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl z-20 border-8 border-white group">
                <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" alt="Reporting" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute top-1/2 -right-8 w-32 h-32 bg-accent-500 rounded-full blur-3xl opacity-20 z-0"></div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col">
              <div className="mb-12">
                <div className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 font-bold text-sm tracking-wider uppercase rounded-full mb-6">
                   Comprehensive Support
                </div>
                <h2 className="text-4xl md:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2]">
                  Our Resolution <br/><span className="text-secondary-400 font-light">Services</span>
                </h2>
              </div>
              
              <ul className="space-y-6">
                 {services.map((service, idx) => (
                   <li key={idx} className="flex gap-5 group">
                     <div className="w-10 h-10 rounded-full bg-[#f8f9fa] border border-secondary-100 flex items-center justify-center flex-shrink-0 text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300 shadow-sm mt-1">
                       <CheckCircle2 className="w-5 h-5" />
                     </div>
                     <span className="text-lg text-secondary-700 font-medium leading-relaxed group-hover:text-primary-900 transition-colors duration-300">
                       {service}
                     </span>
                   </li>
                 ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

            {/* NEW PROCESS STRIP */}
      <ProcessFlow 
        subtitle="Resolution Pathway"
        title="Our proven insolvency process for"
        highlightText="corporate distress"
        steps={[
          { title: "Initiate", desc: "File application and commence CIRP proceedings.", icon: FileCheck },
          { title: "Assume", desc: "Take control as IRP/RP and collate claims.", icon: Briefcase },
          { title: "Convene", desc: "Form the Committee of Creditors and hold meetings.", icon: Users },
          { title: "Resolve", desc: "Evaluate resolution plans and seek NCLT approval.", icon: CheckCircle2 }
        ]}
      />

{/* 5. CTA (Texon Banner) */}
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
        
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Require Insolvency <br/> <span className="text-accent-400">Resolution Assistance?</span>
            </h2>
            <p className="text-xl md:text-2xl text-secondary-300 leading-relaxed font-light">
              Connect with us for highly structured, objective, and strictly regulated insolvency and voluntary closure services.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
               <ModalTriggerButton className="flex items-center justify-center gap-3 bg-white text-primary-900 px-8 py-5 rounded-full font-bold text-lg hover:bg-accent-500 hover:text-white transition-all duration-300 shadow-xl hover:scale-105">
                 <Mail className="w-6 h-6" />
                 Email Our Office
               </ModalTriggerButton>
               <a href="tel:+916379252059" className="flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105">
                 <Phone className="w-6 h-6" />
                 +91-6379252059
               </a>
               <a href="https://www.linkedin.com/in/viswanathan-rajagopalan-13106838/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-[#0a66c2] text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-[#084e96] transition-all duration-300 shadow-lg hover:scale-105">
                 <Linkedin className="w-6 h-6" />
                 Connect on LinkedIn
               </a>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IBCPage;

import { Building2, Briefcase, FileCheck, Landmark, Users, ShieldCheck, Mail, Phone, Linkedin, CheckCircle2 } from 'lucide-react';
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import ProcessFlow from '../components/ui/ProcessFlow';
import GSAPScrollSection from '../components/ui/GSAPScrollSection';
import ModalTriggerButton from '../components/ui/ModalTriggerButton';
import WhyChooseUsSection from '../components/ui/WhyChooseUsSection';

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
    <div className="bg-white text-secondary-900 font-sans">

      {/* 1. HERO */}
      <section className="relative pt-40 pb-32 flex items-center justify-center bg-primary-900 text-white overflow-hidden">
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

      {/* 2. OVERLAPPING INTRO BOX (white) */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-20 mt-5 lg:mt-0 mb-0">
        <div className="bg-white rounded-3xl lg:rounded-[3rem] p-6 md:p-10 lg:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row gap-8 items-center justify-between border border-secondary-100">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 font-bold text-sm tracking-wider uppercase rounded-full mb-6">
              Registered Professional
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2] mb-6">
              Transparency. <br/>
              <em className="not-italic text-secondary-400 font-light">Timely Execution.</em>
            </h2>
            <div className="bg-primary-50 border-l-4 border-primary-500 p-5 rounded-r-2xl flex items-start gap-4">
              <ShieldCheck className="w-7 h-7 text-primary-900 flex-shrink-0 mt-0.5" />
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
              With a proven track record of executing complex insolvency proceedings, we bring hands-on experience in managing corporate distress and liquidation, covering the full spectrum of insolvency initiations and voluntary closures.
            </p>
          </div>
        </div>
      </div>

      {/* 3. SECTIONS WE WORK UNDER — GSAP Scroll (gray-50 bg) */}
      <GSAPScrollSection
        bg="bg-gray-50"
        title="Sections We Work Under"
        subtitle="IBC Frameworks"
        items={sections.map(s => ({
          title: s.title,
          desc: s.id,
          icon: s.icon ? <s.icon className="w-8 h-8" /> : undefined,
          items: [s.desc, `How We Help: ${s.how}`]
        }))}
      />

      {/* 4. OUR SERVICES — WhyChooseUsSection with gold theme */}
      <WhyChooseUsSection
        heading="Our Resolution Services"
        subheading="Comprehensive Support"
        imageUrl="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Consulting"
        theme="gold"
        items={services.map(service => ({
          icon: <CheckCircle2 className="w-5 h-5" />,
          title: service
        }))}
      />

      {/* 5. PROCESS FLOW — gray-50 bg */}
      <ProcessFlow
        bg="bg-gray-50"
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

      {/* 6. CTA — unchanged bg-primary-900 */}
      <section id="contact" className="py-16 lg:py-24 relative bg-primary-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" alt="CTA Background" fill className="object-cover opacity-30 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-primary-900/80"></div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Require Insolvency <br/> <span className="text-accent-400">Resolution Assistance?</span>
            </h2>
            <p className="text-xl md:text-2xl text-secondary-300 leading-relaxed font-light">
              Connect with us for highly structured, objective, and strictly regulated insolvency and voluntary closure services.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 pt-4">
              <ModalTriggerButton className="flex items-center justify-center gap-3 bg-white text-primary-900 px-8 py-4 rounded-full font-bold text-base hover:bg-accent-500 hover:text-white transition-all duration-300 shadow-xl hover:scale-105">
                <Mail className="w-5 h-5" /> Email Our Office
              </ModalTriggerButton>
              <a href="tel:+916379252059" className="flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105">
                <Phone className="w-5 h-5" /> +91-6379252059
              </a>
              <a href="https://www.linkedin.com/in/viswanathan-rajagopalan-13106838/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-[#0a66c2] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#084e96] transition-all duration-300 shadow-lg hover:scale-105">
                <Linkedin className="w-5 h-5" /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IBCPage;

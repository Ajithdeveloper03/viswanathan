import { Users, Target, ShieldCheck, Scale, AlertTriangle, Handshake, CheckCircle2, Building2, Cpu, Plane, Mail, Phone, Linkedin, FileCheck } from 'lucide-react';
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import ProcessFlow from '../components/ui/ProcessFlow';
import GSAPScrollSection from '../components/ui/GSAPScrollSection';
import ModalTriggerButton from '../components/ui/ModalTriggerButton';
import WhyChooseUsSection from '../components/ui/WhyChooseUsSection';

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

  const whyHelps = [
    { icon: <ShieldCheck className="w-5 h-5" />, title: "Finance & Cost Expertise", desc: "Cost accounting, valuation, internal audit, and controls all under one roof." },
    { icon: <ShieldCheck className="w-5 h-5" />, title: "Cross-Sector Exposure", desc: "Regulated financial services alongside advanced manufacturing and emerging technology." },
    { icon: <Target className="w-5 h-5" />,      title: "Practical, Independent Voice", desc: "Balanced, well-prepared, and sharply focused on the company's long-term health." },
    { icon: <FileCheck className="w-5 h-5" />,   title: "Governance Discipline", desc: "Strong grounding in board processes, committee work, and regulatory compliance." }
  ];

  return (
    <div className="bg-white text-secondary-900 font-sans">

      {/* 1. HERO */}
      <section className="relative pt-40 pb-32 flex items-center justify-center bg-primary-900 text-white overflow-hidden">
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

      {/* 2. OVERLAPPING INTRO BOX (white) */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-20 mt-5 lg:mt-0 mb-0">
        <div className="bg-white rounded-3xl lg:rounded-[3rem] p-6 md:p-10 lg:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row gap-8 items-center justify-between border border-secondary-100">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 font-bold text-sm tracking-wider uppercase rounded-full mb-6">
              Objective Oversight
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2] mb-6">
              Independent Judgement. <br/>
              <em className="not-italic text-secondary-400 font-light">Strong Governance.</em>
            </h2>
            <div className="bg-primary-50 border-l-4 border-primary-500 p-5 rounded-r-2xl">
              <p className="text-primary-900 font-medium">
                We have completed the proficiency self-assessment test and hold a lifetime registration under the Independent Directors Databank under the Ministry of Corporate Affairs (MCA).
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <p className="text-secondary-600 text-lg leading-relaxed mb-6 border-l-4 border-accent-500 pl-6">
              Good governance protects a company&apos;s reputation, its investors, and its long-term value. As a practising Cost Accountant with board experience, I bring an independent, finance-driven perspective to boards of companies in India.
            </p>
            <p className="text-secondary-500 leading-relaxed pl-6">
              An Independent Director is more than a compliance requirement. The role offers objective oversight, a check on conflicts of interest, and experienced counsel on strategy, risk, and financial integrity under the Companies Act, 2013 and applicable SEBI and RBI norms.
            </p>
          </div>
        </div>
      </div>

      {/* 3. AREAS OF CONTRIBUTION — GSAP Scroll (gray-50 bg) */}
      <GSAPScrollSection
        bg="bg-gray-50"
        title="Areas of Contribution"
        subtitle="Board Contributions"
        items={areasOfContribution.map(item => ({
          ...item,
          icon: item.icon ? <item.icon className="w-8 h-8" /> : undefined
        }))}
      />

      {/* 4. SECTOR EXPERIENCE — white bg, Finor split layout */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Full-width: Sector Experience Cards */}
            <div className="lg:col-span-2">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 border border-secondary-200 text-secondary-500 font-bold text-xs tracking-[0.18em] uppercase px-4 py-2 rounded-full mb-6">
                  Domain Knowledge
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-primary-900 leading-[1.2]">
                  Specialized <br className="md:hidden" /><em className="not-italic text-secondary-400 font-light">Sector Experience</em>
                </h2>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                {sectorExperience.map((sector, idx) => {
                  const Icon = sector.icon;
                  return (
                    <div key={idx} className="flex-1 min-w-[280px] max-w-md bg-gray-50 p-7 rounded-2xl border border-secondary-100 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 hover:border-accent-200 transition-all duration-300">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent-500 flex-shrink-0 shadow-sm border border-secondary-100">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-primary-900 mb-2">{sector.title}</h4>
                        <p className="text-secondary-600 leading-relaxed text-sm">{sector.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUsSection
        heading="Why This Experience Helps a Board"
        subheading="Board Value"
        imageUrl="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Independent Director"
        items={whyHelps}
      />

      {/* 5. PROCESS FLOW — gray-50 bg */}
      <ProcessFlow
        bg="bg-gray-50"
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

      {/* 6. CTA — unchanged bg-primary-900 */}
      <section id="contact" className="py-16 lg:py-24 relative bg-primary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-white rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-500 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Open to Independent <br/> <span className="text-accent-400">Director Appointments</span>
            </h2>
            <p className="text-xl md:text-2xl text-secondary-300 leading-relaxed font-light">
              I am open to board advisory roles with companies in India that value independent oversight and strong governance.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 pt-4">
              <ModalTriggerButton className="flex items-center justify-center gap-3 bg-gray-50 border border-secondary-100 text-primary-900 px-8 py-4 rounded-full font-bold text-base hover:bg-white transition-all duration-300 shadow-sm hover:scale-105">
                <Mail className="w-5 h-5 text-accent-500" /> Email Me Directly
              </ModalTriggerButton>
              <a href="tel:+916379252059" className="flex items-center justify-center gap-3 bg-gray-50 border border-secondary-100 text-primary-900 px-8 py-4 rounded-full font-bold text-base hover:bg-white transition-all duration-300 shadow-sm hover:scale-105">
                <Phone className="w-5 h-5 text-accent-500" /> +91-6379252059
              </a>
              <a href="https://www.linkedin.com/in/viswanathan-rajagopalan-13106838/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-[#0a66c2] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#084e96] transition-all duration-300 shadow-lg hover:scale-105">
                <Linkedin className="w-5 h-5" /> View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndependentDirectorPage;

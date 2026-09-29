import {
  Building2, Briefcase, Globe, Users, HeartHandshake, UserCheck,
  ArrowRight, BarChart, Phone, Search, FileText, FileSpreadsheet,
  Gem, ShieldCheck, Layers, Scale, TrendingUp
} from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProcessFlow from '../components/ui/ProcessFlow';
import GSAPScrollSection from '../components/ui/GSAPScrollSection';
import ModalTriggerButton from '../components/ui/ModalTriggerButton';
import WhyChooseUsSection from '../components/ui/WhyChooseUsSection';

const BusinessValuation = () => {

  const entityTypes = [
    { title: "Listed Companies",           icon: Building2 },
    { title: "Private Limited Companies",  icon: Briefcase },
    { title: "Unlisted Public Companies",  icon: Globe },
    { title: "LLPs",                       icon: Users },
    { title: "Partnership Firms",          icon: HeartHandshake },
    { title: "Sole Proprietorships",       icon: UserCheck },
  ];

  const services = [
    {
      title: "Corporate Transactions",
      desc: "M&A, demergers, private placements, buyback, preferential allotments, and management decision-making.",
      icon: <TrendingUp className="w-8 h-8" />,
      items: [
        "Mergers and acquisitions.",
        "Demergers and business reorganizations.",
        "Private placements and admission of new investors.",
        "Buyback of shares.",
        "Preferential allotments.",
        "Conversion of partnership firms into private limited companies.",
        "Valuation for management and investor decision-making.",
      ]
    },
    {
      title: "Mining",
      desc: "All types of mining, across every stage of the project lifecycle.",
      icon: <Layers className="w-8 h-8" />,
      items: [
        "All types of mining, across every stage of the project lifecycle.",
      ]
    },
    {
      title: "Intangible Assets & Intellectual Property",
      desc: "Brand, goodwill, patent, copyright, technology, and software valuation.",
      icon: <Gem className="w-8 h-8" />,
      items: [
        "Intellectual property valuation.",
        "Brand valuation.",
        "Goodwill valuation.",
        "Patent valuation.",
        "Copyright valuation.",
        "Valuation of technology, software, and other identifiable intangible assets.",
      ]
    },
    {
      title: "Regulatory & Cross-Border Valuation",
      desc: "Rule 11UA, FDI, ODI, cross-border investments, and PPP analysis.",
      icon: <Globe className="w-8 h-8" />,
      items: [
        "Valuation under Rule 11UA of the Income-tax Rules.",
        "Foreign Direct Investment (FDI) transactions.",
        "Overseas Direct Investment (ODI) transactions.",
        "Valuation related to cross-border investments and corporate transactions.",
        "Purchasing Power Parity (PPP) analysis, where relevant to business or investment assessment.",
      ]
    },
    {
      title: "Specialised Valuation",
      desc: "Startups, fundraising, ownership restructuring, financial reporting, and management planning.",
      icon: <BarChart className="w-8 h-8" />,
      items: [
        "Startup valuation.",
        "Mining business valuation at different stages of the lifecycle.",
        "Valuation for strategic investment and fundraising.",
        "Valuation for ownership restructuring and succession planning.",
        "Valuation for financial reporting and management planning.",
      ]
    },
    {
      title: "Securities & Financial Instruments",
      desc: "Equity, preference shares, debentures, and investments for regulatory, tax, and strategic purposes.",
      icon: <Scale className="w-8 h-8" />,
      items: [
        "Valuation of equity shares.",
        "Valuation of preference shares.",
        "Valuation of all types of debentures.",
        "Valuation of investments.",
        "Valuation for regulatory, tax, accounting, transaction, and strategic purposes.",
      ]
    },
  ];

  const approachSteps = [
    { title: "Purpose & Structure",       desc: "Understanding the purpose, nature, scale, and structure of the business and the engagement.",          icon: Search },
    { title: "Financial Performance",     desc: "Analysing historical revenue, profitability, cash flow, and key operating drivers.",                   icon: BarChart },
    { title: "Industry & Risk",           desc: "Evaluating industry conditions, competitive position, business risks, and growth prospects.",           icon: Globe },
    { title: "Methodology & Assumptions", desc: "Applying appropriate valuation methodologies aligned with the nature of the asset and the assignment.", icon: FileSpreadsheet },
  ];

  const whyChooseUsSection = [
    { icon: <BarChart className="w-5 h-5" />,        title: "More than 1,000 valuations completed." },
    { icon: <Briefcase className="w-5 h-5" />,       title: "Experience across a wide range of business entities and industries." },
    { icon: <Globe className="w-5 h-5" />,           title: "Exposure to domestic and cross-border transactions." },
    { icon: <Building2 className="w-5 h-5" />,       title: "Understanding of both operating businesses and specialised assets." },
    { icon: <FileText className="w-5 h-5" />,        title: "Practical knowledge of corporate transactions, investments, and regulatory requirements." },
    { icon: <FileSpreadsheet className="w-5 h-5" />, title: "Clear documentation of assumptions, methodologies, and conclusions." },
    { icon: <ShieldCheck className="w-5 h-5" />,     title: "Independent, objective, and confidential professional support." },
    { icon: <Users className="w-5 h-5" />,           title: "Valuation insights presented in a manner that assists management, investors, boards, lenders, and other stakeholders." },
  ];

  return (
    <div className="bg-white text-secondary-900 font-sans">

      {/* ── 1. HERO ── */}
      <section className="relative pt-40 pb-32 flex items-center justify-center bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000"
            alt="Business Valuation"
            fill
            className="object-cover opacity-30 mix-blend-luminosity scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/60 via-primary-900/40 to-primary-950/70" />
        </div>
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full text-sm font-medium mb-8 border border-white/20 mx-auto">
            <Link href="/" className="hover:text-accent-400 transition-colors duration-300">Home</Link>
            <span className="w-1 h-1 bg-accent-500 rounded-full mx-1" />
            <span className="text-accent-400">Business Valuation</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight mb-6">
            Business Valuation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Services</span>
          </h1>
          {/* <p className="text-xl text-secondary-200 max-w-2xl mx-auto font-light">Valuation Expertise Built on Experience</p> */}
        </div>
      </section>

      {/* ── 2. OVERLAPPING INTRO BOX (white) ── */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-20 mt-5 lg:mt-0 mb-0">
        <div className="bg-white rounded-3xl p-6 md:p-10 lg:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row gap-10 items-start border border-secondary-100">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 font-bold text-sm tracking-wider uppercase rounded-full mb-6">
              Valuation Expertise
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2] mb-6">
              Clear, Supportable <br />
              <em className="not-italic text-secondary-400 font-light">Numbers & Reasoning</em>
            </h2>
            <div className="bg-primary-50 border-l-4 border-primary-500 p-5 rounded-r-2xl">
              <p className="text-primary-900 font-semibold leading-relaxed">
                With 1,000+ valuations completed across entity types, deal structures, and industries, we deliver defensible, well-documented valuations that stand up to scrutiny from investors, regulators, tax authorities, and auditors.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-5">
            <p className="text-secondary-600 text-lg leading-relaxed border-l-4 border-accent-500 pl-6">
              Whether you are raising capital, restructuring, merging, or reporting, we give you a clear, supportable number and the reasoning behind it.
            </p>
            <p className="text-secondary-500 leading-relaxed pl-6">
              Our valuation practice serves a broad range of business entities and industries. We combine financial analysis, industry understanding, commercial judgment, and transaction insight to deliver valuation reports that are clear, practical, and fit for their intended purpose.
            </p>
          </div>
        </div>
      </div>

      {/* ── 3. VALUATION FOR EVERY BUSINESS STRUCTURE — dark bg, left text + right 2×3 cards ── */}
      <section className="py-16 lg:py-24 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left */}
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 border border-accent-500/40 text-accent-400 font-bold text-xs tracking-[0.18em] uppercase px-4 py-2 rounded-full mb-6">
                Entity Types
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.15] mb-6">
                Valuation for Every <br />
                <em className="not-italic text-accent-400 font-light">Business Structure</em>
              </h2>
              <p className="text-secondary-300 text-lg leading-relaxed mb-6 border-l-2 border-accent-500/50 pl-6">
                We value all types of business entities. Whether the business is an established enterprise, a growing start-up, a family-owned company, or an organization preparing for a transaction, our approach is tailored to its specific circumstances, objectives, and stage of development.
              </p>
              <ModalTriggerButton className="inline-flex items-center gap-3 bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white hover:text-primary-900 transition-all duration-300 shadow-lg">
                Get a Valuation <ArrowRight className="w-5 h-5" />
              </ModalTriggerButton>
            </div>

            {/* Right: 2×3 card grid */}
            <div className="grid grid-cols-2 gap-4">
              {entityTypes.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-accent-500 hover:border-accent-500 transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(245,177,51,0.25)]"
                  >
                    <div className="w-12 h-12 bg-white/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-accent-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h5 className="text-white font-bold text-base leading-tight">{item.title}</h5>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. OUR VALUATION SERVICES — GSAP scroll stack (white bg) ── */}
      <GSAPScrollSection
        bg="bg-white"
        title="Our Valuation Services"
        subtitle="Specialized Services"
        items={services}
      />
 {/* ── 6. WHY CLIENTS CHOOSE US — white bg, Finor icon+title+desc rows ── */}
      <WhyChooseUsSection
        heading="Why Clients Choose Us"
        subheading="Our Advantage"
        imageUrl="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Valuation Professional"
        items={whyChooseUsSection}
      />
      {/* ── 5. OUR VALUATION APPROACH — ProcessFlow (gray-50 bg) ── */}
      <ProcessFlow
        bg="bg-gray-50"
        title="Our"
        highlightText="Valuation Approach"
        subtitle="Methodology"
        steps={approachSteps}
      />

     

      {/* ── 7. CTA — unchanged bg-primary-900 ── */}
      <section id="contact" className="py-16 lg:py-24 relative bg-primary-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt="CTA Background"
            fill
            className="object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Valuations That Support <br />
              <span className="text-accent-400">Better Decisions</span>
            </h2>
            <p className="text-xl md:text-2xl text-secondary-300 leading-relaxed font-light">
              Our objective is to provide more than a valuation figure. We help clients understand the key factors influencing business value, identify opportunities and risks, and make informed decisions with greater confidence.
            </p>
           
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 pt-4">
              <ModalTriggerButton className="flex items-center justify-center gap-3 bg-white text-primary-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-accent-500 hover:text-white transition-all duration-300 shadow-xl">
                <FileText className="w-6 h-6" />
                Start a Conversation
              </ModalTriggerButton>
              <a
                href="tel:+916379252059"
                className="flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                <Phone className="w-6 h-6" /> +91-6379252059
              </a>
            </div>
             <p className="text-secondary-400 text-base">
              Whether for an acquisition, fundraising, regulatory compliance, tax purposes, financial reporting, restructuring, or strategic planning — we provide a structured, purpose-driven valuation service.
            </p>
            <p className="text-secondary-400 text-sm pt-2">
              Email: <a href="mailto:vishu@viswanathanrassociates.com" className="text-accent-400 hover:underline">vishu@viswanathanrassociates.com</a>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/viswanathan-rajagopalan-13106838/" target="_blank" rel="noreferrer" className="text-accent-400 hover:underline">LinkedIn Profile</a>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BusinessValuation;


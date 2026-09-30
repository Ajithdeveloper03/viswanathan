import { Briefcase, BarChart, ShieldCheck, Globe, TrendingUp, Landmark, Replace, CheckCircle2, ArrowRight, Mail, Phone, Linkedin, Target, FileCheck, Handshake } from 'lucide-react';
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import ProcessFlow from '../components/ui/ProcessFlow';
import GSAPScrollSection from '../components/ui/GSAPScrollSection';
import ModalTriggerButton from '../components/ui/ModalTriggerButton';
import WhyChooseUsSection from '../components/ui/WhyChooseUsSection';

const BusinessProposalsPage = () => {
  const whatWeDo = [
    {
      title: "Equity Funding",
      desc: "Raise capital from the right investors, on sound terms.",
      icon: TrendingUp,
      image: "/vrassociates/images/business-proposals/equity-funding.png",
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
      image: "/vrassociates/images/business-proposals/debt.png",
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
      image: "/vrassociates/images/business-proposals/mergers.png",
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
      image: "/vrassociates/images/business-proposals/trade.png",
      items: [
        "Cross-border investment structuring: inbound (FDI) and outbound (ODI)",
        "Market-entry and joint-venture proposals",
        "Pricing, landed-cost, and profitability analysis for export and import",
        "Support with regulatory and valuation requirements under foreign exchange rules",
        "Introductions and coordination with overseas partners and advisors"
      ]
    }
  ];

  const whyUs = [
    { icon: <BarChart className="w-5 h-5" />,    title: "Numbers that stand up to scrutiny: valuation, costing, and audit expertise built in." },
    { icon: <ShieldCheck className="w-5 h-5" />, title: "Board-level perspective: we know what investors, lenders, and audit committees ask." },
    { icon: <Globe className="w-5 h-5" />,       title: "Sector range: NBFCs, manufacturing, technology, healthcare, infrastructure, and more." },
    { icon: <Handshake className="w-5 h-5" />,   title: "End-to-end support: from the first business plan to a completed transaction." },
    { icon: <Briefcase className="w-5 h-5" />,   title: "Strict Confidentiality: your information and deal plans are handled with absolute discretion." },
  ];

  return (
    <div className="bg-white text-secondary-900 font-sans">

      {/* 1. HERO */}
      <section className="relative pt-40 pb-32 flex items-center justify-center bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/vrassociates/images/business-proposals/hero.png"
            alt="Business Proposals Background"
            fill
            className="object-cover opacity-70 mix-blend-luminosity scale-105"
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

      {/* 2. OVERLAPPING INTRO BOX (white) */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-20 mt-5 lg:mt-0 mb-0">
        <div className="bg-white rounded-3xl lg:rounded-[3rem] p-6 md:p-10 lg:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row gap-8 items-center justify-between border border-secondary-100">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 font-bold text-sm tracking-wider uppercase rounded-full mb-6">
              Advisory Services
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2] mb-6">
              Data-Driven <br/>
              <em className="not-italic text-secondary-400 font-light">Financial Engineering.</em>
            </h2>
            <div className="bg-primary-50 border-l-4 border-primary-500 p-5 rounded-r-2xl">
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
              We specialize in structuring high-impact business proposals and executing strategic financial transactions that unlock growth, both within the dynamic Indian market and across the global economic landscape.
            </p>
          </div>
        </div>
      </div>

      {/* 3. WHAT WE DO â€” GSAP Scroll (gray-50 bg) */}
      <GSAPScrollSection
        bg="bg-gray-50"
        title="Our Focus Areas"
        subtitle="Core Expertise"
        items={whatWeDo.map(item => ({
          ...item,
          icon: item.icon ? <item.icon className="w-8 h-8" /> : undefined
        }))}
      />

      {/* 4. GLOBAL PERSPECTIVE â€” white bg, Finor split layout */}
      <section className="py-8 lg:py-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-50/50 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-50/50 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/3"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="flex flex-col">
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 border border-secondary-200 text-secondary-500 font-bold text-xs tracking-[0.18em] uppercase px-4 py-2 rounded-full mb-6">
                  Deep Local Expertise
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-primary-900 leading-[1.2] mb-6">
                  A Global <br/><em className="not-italic text-secondary-400 font-light">Perspective</em>
                </h2>
                <p className="text-secondary-600 leading-relaxed text-lg border-l-2 border-secondary-200 pl-6">
                  Capital flows and strategic partnerships are no longer confined by geography. Our financial advisory practice seamlessly bridges domestic and international markets to fuel your growth trajectory.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { title: "India Operations", desc: "We expertly navigate the intricate financial and regulatory landscape of India, ensuring alignment with local statutory frameworks, capital market regulations, and the unique dynamics of the Indian banking sector." },
                  { title: "Global Operations", desc: "For cross-border transactions and international trade, we apply globally recognized financial frameworks, harmonizing financial reporting and capital structuring to meet the stringent demands of international investors and global trade partners." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group p-5 rounded-2xl border border-secondary-100 hover:border-accent-200 hover:bg-accent-50/30 transition-all duration-300">
                    <div className="w-14 h-14 bg-gray-50 border border-secondary-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-accent-500 group-hover:bg-primary-900 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Globe className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors duration-300">{item.title}</h4>
                      <p className="text-secondary-600 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: Image collage */}
            <div className="relative h-[500px] w-full hidden lg:block">
              <div className="absolute top-0 right-0 w-[80%] h-[320px] rounded-3xl overflow-hidden shadow-2xl z-10 hover:-translate-y-3 transition-all duration-500">
                <Image src="/vrassociates/images/business-proposals/trade.png" alt="Global Trade" fill className="object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 w-[60%] h-[260px] rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-white">
                <Image src="/vrassociates/images/business-proposals/mergers.png" alt="Corporate" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

  <WhyChooseUsSection
        heading="Why Choose Us"
        subheading="Our Advantage"
        imageUrl="/vrassociates/images/business-proposals/why-choose-us.png"
        imageAlt="Business Advisors"
        items={whyUs}
      />

      {/* 5. PROCESS FLOW â€” gray-50 bg */}
      <ProcessFlow
        bg="bg-gray-50"
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

    

      {/* CTA â€” unchanged bg-primary-900 */}
      <section id="contact" className="py-8 lg:py-12 relative bg-primary-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/vrassociates/images/business-proposals/equity-funding.png" alt="CTA Background" fill className="object-cover opacity-30 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-primary-900/80"></div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Let&apos;s Discuss <br/><span className="text-accent-400">Your Proposal</span>
            </h3>
            <p className="text-xl md:text-2xl text-secondary-300 leading-relaxed font-light">
              Tell us about your funding need, acquisition plan, or cross-border opportunity.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              <ModalTriggerButton className="inline-flex items-center justify-center gap-3 bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white hover:text-primary-900 transition-all duration-300 shadow-xl">
                <Mail className="w-5 h-5" /> Email Our Team
              </ModalTriggerButton>
              <a href="tel:+916379252059" className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white hover:text-primary-900 transition-all duration-300 shadow-xl">
                <Phone className="w-5 h-5" /> +91-6379252059
              </a>
              <a href="https://www.linkedin.com/in/viswanathan-rajagopalan-13106838/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#0a66c2] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#084e96] transition-all duration-300 shadow-xl">
                <Linkedin className="w-5 h-5" /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessProposalsPage;


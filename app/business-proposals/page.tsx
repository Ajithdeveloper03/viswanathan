import {
  Briefcase,
  BarChart,
  ShieldCheck,
  Globe,
  TrendingUp,
  Landmark,
  Replace,
  CheckCircle2,
  Mail,
  Phone,
  Linkedin,
  Target,
  FileText,
  Handshake,
  Compass,
  Layers,
  Search,
  Building2,
  Users,
  Lock,
  ArrowRight,
  FileCheck,
} from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProcessFlow from '../components/ui/ProcessFlow';
import GSAPScrollSection from '../components/ui/GSAPScrollSection';
import ModalTriggerButton from '../components/ui/ModalTriggerButton';

export const metadata = {
  title: 'Business Restructuring & Strategic Transactions | Viswanathan R Associates',
  description:
    'Business restructuring in India and Outside India. Equity funding, debt syndication, mergers & acquisitions, listing under SEBI & LSE, and international trade investments.',
};

const BusinessProposalsPage = () => {
  const whatWeDo = [
    {
      title: 'Equity Funding',
      desc: 'Raise capital from the right investors, on sound terms.',
      icon: TrendingUp,
      image: '/images/business-proposals/equity-funding.png',
      items: [
        'Prepare investor-ready business plans, financial models, and pitch material',
        'Support valuation and deal structuring (private placement, preferential allotment, and more)',
        'Identify suitable investors: angels, venture funds, private equity, strategic partners, and family offices',
        'Assist with due diligence preparation, term-sheet review, and negotiation support',
        'Advise on shareholder agreements and dilution planning',
      ],
    },
    {
      title: 'Debt Syndication',
      desc: 'Secure the right funding at the right cost.',
      icon: Landmark,
      image: '/images/business-proposals/debt.png',
      items: [
        'Assess your funding requirement and repayment capacity',
        'Prepare credit proposals, project reports, and Detailed Project Reports (DPRs)',
        'Structure term loans, working capital, project finance, and other facilities',
        'Approach banks, NBFCs, and financial institutions, in India and overseas',
        'Support documentation, sanction follow-up, and lender queries',
      ],
    },
    {
      title: 'Mergers & Acquisitions',
      desc: 'Buy, sell, merge, or restructure with confidence.',
      icon: Replace,
      image: '/images/business-proposals/mergers.png',
      items: [
        'Valuation and fair-price assessment for both buyers and sellers',
        'Target identification and strategic-fit evaluation',
        'Financial and cost due diligence support',
        'Deal structuring, including mergers, demergers, and share swaps',
        'Assistance with negotiation and transaction documentation',
      ],
    },
    {
      title: 'Listing under SEBI & LSE',
      desc: 'Listing under SEBI (India) and London Stock Exchange (LSE).',
      icon: Compass,
      image: '/images/business-proposals/equity-funding.png',
      items: [
        'Initial Public Offer (IPO)',
        'Secondary Markets',
        'MSME Listing',
        'NSE Emerge',
        'Services under London Stock Exchange (LSE)',
      ],
    },
    {
      title: 'International Trade & Investments',
      desc: 'Expand across borders without losing track of compliance and cost.',
      icon: Globe,
      image: '/images/business-proposals/trade.png',
      items: [
        'Cross-border investment structuring: inbound (FDI) and outbound (ODI)',
        'Market-entry and joint-venture proposals',
        'Pricing, landed-cost, and profitability analysis for export and import',
        'Support with regulatory and valuation requirements under the applicable foreign exchange rules',
        'Introductions and coordination with overseas partners and advisors',
      ],
    },
  ];

  const whyWorkWithUs = [
    {
      icon: BarChart,
      title: 'Numbers that stand up to scrutiny',
      desc: 'Valuation, costing, and audit expertise built into every proposal.',
    },
    {
      icon: ShieldCheck,
      title: 'Board-level perspective',
      desc: 'We know what investors, lenders, and audit committees ask.',
    },
    {
      icon: Building2,
      title: 'Broad sector range',
      desc: 'NBFCs, manufacturing, technology, healthcare, infrastructure, energy, real estate, and more.',
    },
    {
      icon: Handshake,
      title: 'End-to-end support',
      desc: 'From the first business plan to a completed, closed transaction.',
    },
    {
      icon: Lock,
      title: 'Strict confidentiality',
      desc: 'Your information and deal plans are handled with rigorous discretion.',
    },
  ];

  const transactionProcessSteps = [
    {
      title: 'Understand Business Requirement',
      desc: 'Comprehensive appraisal of commercial needs, capital objectives, and deal milestones.',
      icon: Target,
    },
    {
      title: 'Relevant Funding Sources',
      desc: 'Strategic mapping to suitable institutional investors, banks, NBFCs, or equity partners.',
      icon: Landmark,
    },
    {
      title: 'Non Disclosure Agreement',
      desc: 'Bilateral confidentiality protocols ensuring discreet and protected data exchange.',
      icon: Lock,
    },
    {
      title: 'Proposal & Negotiate',
      desc: 'Structuring pitch materials, financial models, and negotiating high-value commercial terms.',
      icon: Handshake,
    },
    {
      title: 'Term Sheet Signature',
      desc: 'Finalizing agreement on capital valuation, transaction structures, and governing covenants.',
      icon: FileCheck,
    },
    {
      title: 'Due Diligence',
      desc: 'Rigorous legal, financial, accounting, and compliance verification across all parameters.',
      icon: Search,
    },
    {
      title: 'Final Signed Contract',
      desc: 'Definitive contract execution and smooth transaction closing and funding deployment.',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="bg-white text-secondary-900 font-sans">
      {/* 1. HERO */}
      <section className="relative pt-40 pb-32 flex items-center justify-center bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/business-proposals/hero.png"
            alt="Business Restructuring Background"
            fill
            className="object-cover opacity-70 mix-blend-luminosity scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/70 via-primary-900/50 to-primary-950/80" />
        </div>
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full text-sm font-medium mb-8 border border-white/20">
            <Link href="/" className="hover:text-accent-400 transition-colors duration-300">
              Home
            </Link>
            <span className="w-1 h-1 bg-accent-500 rounded-full mx-1" />
            <Link href="/services" className="hover:text-accent-400 transition-colors duration-300">
              Services
            </Link>
            <span className="w-1 h-1 bg-accent-500 rounded-full mx-1" />
            <span className="text-accent-400">Business Restructuring</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-tight mb-6">
            Business Restructuring in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-accent-300 to-accent-600">
              India / Outside India
            </span>
          </h1>

          {/* Key tags pill strip */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto mt-4 text-xs sm:text-sm font-semibold">
            {[
              'Equity Funding',
              'Debt Syndication',
              'Mergers & Acquisitions',
              'Listing under SEBI & LSE',
              'International Trade & Investments',
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. OVERLAPPING INTRO BOX */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-20 mt-5 lg:mt-0 mb-0">
        <div className="bg-white rounded-3xl lg:rounded-[3rem] p-6 md:p-10 lg:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row gap-10 items-center justify-between border border-secondary-100">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 font-bold text-sm tracking-wider uppercase rounded-full mb-6">
              Strategic Transactions
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2] mb-6">
              Business Restructuring &amp; <br />
              <em className="not-italic text-secondary-400 font-light">Strategic Transactions.</em>
            </h2>
            <div className="bg-primary-50 border-l-4 border-primary-500 p-5 rounded-r-2xl">
              <p className="text-primary-900 font-semibold text-sm sm:text-base leading-relaxed">
                We offer these services through our Business Partner, present in India and United Kingdom, with vast experience.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-5">
            <div className="border-l-4 border-accent-500 pl-6">
              <p className="text-secondary-700 text-base md:text-lg leading-relaxed">
                Securing capital, executing complex transactions, and expanding across borders require more than a vision; they demand rigorous financial engineering and compelling, data-driven narratives.
              </p>
            </div>
            <p className="text-secondary-600 text-sm md:text-base leading-relaxed pl-6">
              We specialize in high-impact business restructuring and executing strategic financial transactions that unlock growth, both within the dynamic Indian market and across the global economic landscape.
            </p>
            <p className="text-secondary-600 text-sm md:text-base leading-relaxed pl-6">
              We provide an integrated suite of transaction advisory and capital structuring services, ensuring that your enterprise is optimally positioned for growth, acquisition, or global expansion.
            </p>
          </div>
        </div>
      </div>

      {/* 3. WHAT WE DO IN India / Outside India — GSAP Scroll */}
      <GSAPScrollSection
        bg="bg-gray-50"
        title="What We Do in India / Outside India"
        subtitle="Global Coverage"
        items={whatWeDo.map((item) => ({
          ...item,
          icon: item.icon ? <item.icon className="w-8 h-8" /> : undefined,
        }))}
      />

      {/* 4. WHY CHOOSE US — Editorial dark band (no cards) */}
      <section className="relative py-20 lg:py-28 bg-primary-950 text-white overflow-hidden">
        {/* Background image + overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/business-proposals/trade.png"
            alt=""
            fill
            className="object-cover opacity-[0.12] mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900/95 to-primary-950" />
          <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-accent-500/10 rounded-full blur-[140px]" />
          <div className="absolute -bottom-40 -left-40 w-[460px] h-[460px] bg-primary-400/10 rounded-full blur-[140px]" />
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          {/* Header — split layout */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 lg:mb-20 max-w-7xl mx-auto">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-accent-400" />
                <span className="text-accent-400 font-bold text-xs tracking-[0.25em] uppercase">
                  The VR Advantage
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500">Choose Us</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-secondary-300 text-base md:text-lg leading-relaxed lg:border-l lg:border-white/15 lg:pl-8">
                Strategic capital structuring, robust cross-border execution, and deep regulatory insight for high-stakes corporate transactions.
              </p>
            </div>
          </div>

          {/* Three numbered columns separated by divider lines */}
          <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto border-t border-white/15">
            {[
              {
                no: '01',
                icon: TrendingUp,
                label: 'Capital Foundation',
                title: 'Strategic Vision to Reality',
                paras: [
                  'Transform your strategic vision into a fully capitalized reality. Let us architect the financial foundation for your next major corporate transaction.',
                ],
              },
              {
                no: '02',
                icon: Landmark,
                label: 'Domestic & Regional',
                title: 'Global Perspective with Deep Local Expertise',
                paras: [
                  'Capital flows and strategic partnerships are no longer confined by geography. Our financial advisory practice seamlessly bridges domestic and international markets to fuel your growth trajectory.',
                  'We expertly navigate the intricate financial and regulatory landscape of India, ensuring domestic funding and M&A. Alignment with local statutory frameworks, capital market regulations, and the unique dynamics of the Indian banking sector.',
                ],
              },
              {
                no: '03',
                icon: Globe,
                label: 'Cross-Border Trade',
                title: 'Global Financial Frameworks',
                paras: [
                  'For cross-border transactions and international trade, we apply globally recognized financial frameworks.',
                  'Harmonizing financial reporting and capital structuring to meet the stringent demands of international investors, foreign regulatory bodies, and global trade partners.',
                ],
              },
            ].map((col, idx) => {
              const Icon = col.icon;
              return (
                <div
                  key={col.no}
                  className={`group relative pt-10 pb-10 lg:pb-4 lg:px-10 ${idx === 0 ? 'lg:pl-0' : ''} ${idx === 2 ? 'lg:pr-0' : ''} ${idx > 0 ? 'border-t lg:border-t-0 lg:border-l border-white/15' : ''}`}
                >
                  {/* Accent line that grows on hover */}
                  <span className="absolute top-[-1px] left-0 lg:left-auto h-[2px] w-0 bg-accent-400 transition-all duration-500 group-hover:w-24" />

                  <div className="flex items-start justify-between mb-8">
                    <span className="text-6xl lg:text-7xl font-extrabold leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.28)] group-hover:[-webkit-text-stroke:1.5px_rgb(var(--tw-accent-400,251_191_36))] transition-all duration-500">
                      {col.no}
                    </span>
                    <Icon className="w-8 h-8 text-accent-400 opacity-70 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300" strokeWidth={1.5} />
                  </div>

                  <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-accent-400 mb-3">
                    {col.label}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-white leading-snug mb-5">
                    {col.title}
                  </h3>
                  <div className="space-y-4 text-secondary-300 text-sm sm:text-[15px] leading-relaxed">
                    {col.paras.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Compact capability strip — inline, no boxes */}
          <div className="max-w-7xl mx-auto mt-14 lg:mt-16 pt-8 border-t border-white/15">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-secondary-400 mb-6">
              Core Execution Capabilities
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-5 lg:divide-x lg:divide-white/10">
              {whyWorkWithUs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li
                    key={idx}
                    className={`flex items-start gap-3 group ${idx === 0 ? 'lg:pr-5' : 'lg:px-5'}`}
                  >
                    <Icon className="w-5 h-5 mt-0.5 text-accent-400 shrink-0 group-hover:scale-110 transition-transform" strokeWidth={1.75} />
                    <div>
                      <h4 className="text-[13px] font-semibold text-white leading-snug mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[11.5px] text-secondary-400 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. OUR PROVEN TRANSACTION PROCESS (7-Step Process) */}
      <ProcessFlow
        bg="bg-white"
        subtitle="Transaction Process"
        title="Our Proven"
        highlightText="Transaction Process"
        steps={transactionProcessSteps}
      />

      {/* 7. LET'S DISCUSS YOUR PROPOSAL (CTA) */}
      <section id="contact" className="py-16 lg:py-24 relative bg-primary-900 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/business-proposals/equity-funding.png"
            alt="CTA Background"
            fill
            className="object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-primary-950/85" />
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="inline-block px-4 py-1.5 bg-white/10 text-accent-400 font-bold text-xs tracking-widest uppercase rounded-full border border-white/20 backdrop-blur-sm">
              Confidential Discussion
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Let&apos;s Discuss <br />
              <span className="text-accent-400">Your Restructuring Mandate</span>
            </h2>

            <p className="text-lg md:text-xl text-secondary-300 leading-relaxed font-normal">
              Tell us about your funding need, acquisition plan, or cross-border opportunity, and we&apos;ll suggest the right approach.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              <ModalTriggerButton className="inline-flex items-center justify-center gap-3 bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white hover:text-primary-900 transition-all duration-300 shadow-xl">
                <Mail className="w-5 h-5" /> Email Our Team
              </ModalTriggerButton>
              <a
                href="tel:+916379252059"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white hover:text-primary-900 transition-all duration-300 shadow-xl"
              >
                <Phone className="w-5 h-5 text-accent-400" /> +91-6379252059
              </a>
              <a
                href="https://www.linkedin.com/in/viswanathan-rajagopalan-13106838/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#0a66c2] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#084e96] transition-all duration-300 shadow-xl"
              >
                <Linkedin className="w-5 h-5" /> Connect on LinkedIn
              </a>
            </div>

            <div className="pt-4 text-xs sm:text-sm text-secondary-400 flex flex-wrap items-center justify-center gap-6">
              <span>Email: vishu@viswanathanrassociates.com</span>
              <span>&bull;</span>
              <span>Phone: +91-6379252059</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessProposalsPage;
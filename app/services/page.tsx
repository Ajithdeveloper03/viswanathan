import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  TrendingUp,
  Calculator,
  ShieldCheck,
  Scale,
  ArrowLeftRight,
  FileSpreadsheet,
  ArrowRight,
  CheckCircle2,
  Award,
  Clock,
  Building2,
  ChevronRight,
  Phone,
  Layers,
  Sparkles,
} from 'lucide-react';
import ModalTriggerButton from '../components/ui/ModalTriggerButton';

export const metadata: Metadata = {
  title: 'Our Services | Viswanathan R Associates',
  description:
    'Comprehensive corporate finance advisory, IBBI business valuation, cost management audit, internal audit, independent directorship, restructuring, funding, and insolvency resolution.',
};

const practiceAreas = [
  {
    number: '01',
    id: 'business-valuation',
    title: 'Business Valuation',
    href: '/business-valuation',
    tag: 'IBBI Registered Valuer',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    icon: TrendingUp,
    description:
      'Defensible, accurate, and multi-methodology valuations for M&A, regulatory compliance (Companies Act, SEBI, FEMA, Income Tax), and boardroom strategy.',
    features: [
      'Mergers, acquisitions & demergers',
      'Valuation reports delivered in quickest possible time',
      'Regulatory compliance (FEMA, RBI, SEBI, MCA)',
      'Intangible assets, patents, brands & goodwill',
      'Fairness opinions & purchase price allocations',
    ],
  },
  {
    number: '02',
    id: 'cost-management-audit',
    title: 'Cost Management Audit',
    href: '/cost-management-audit',
    tag: 'Operational Optimization',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: Calculator,
    description:
      'Forensic cost audits, activity-based costing, and profitability architectures spanning heavy engineering, robotics, healthcare, and complex manufacturing.',
    features: [
      'Statutory & management cost audits',
      'Marginal costing & product profitability review',
      'Waste, yield loss & capacity utilization analysis',
      'Forensic cost control & budgeting systems',
      'Strategic cost rationalization for manufacturing',
    ],
  },
  {
    number: '03',
    id: 'internal-audit',
    title: 'Internal Audit & Risk Controls',
    href: '/internal-audit',
    tag: 'Risk & Governance',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    icon: ShieldCheck,
    description:
      'Risk-based internal audits, evaluation of Internal Financial Controls (IFC), and corporate process re-engineering to protect enterprise assets.',
    features: [
      'Internal Financial Controls (IFC) testing & design',
      'Enterprise risk management & process mapping',
      'Standard Operating Procedure (SOP) design & review',
      'Fraud risk assessment & forensic examination',
      'Comprehensive ERP & workflow audits',
    ],
  },
  {
    number: '04',
    id: 'independent-director',
    title: 'Independent Director Advisory',
    href: '/independent-director',
    tag: 'Boardroom Leadership',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    icon: Scale,
    description:
      'Seasoned boardroom oversight and audit committee stewardship providing governance discipline, minority shareholder protection, and strategic counsel.',
    features: [
      'Governance discipline & fiduciary stewardship',
      'Audit Committee & Nomination Committee leadership',
      'Independent regulatory compliance monitoring',
      'Crisis management & stakeholder mediation',
      'Strategic advisory on board policy & disclosures',
    ],
  },
  {
    number: '05',
    id: 'business-proposals',
    title: 'Business Restructuring, Funding & Listing',
    href: '/business-proposals',
    tag: 'SEBI & LSE Advisory',
    badgeColor: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    icon: ArrowLeftRight,
    description:
      'Turnkey capital syndication, detailed project reports (DPR), joint ventures, and stock exchange listing advisory in India and outside India (SEBI & LSE).',
    features: [
      'Comprehensive debt & equity syndication',
      'Domestic & cross-border joint venture structuring',
      'Exchange listing guidance under SEBI and LSE',
      'Bankable Detailed Project Reports (DPR)',
      'Strategic corporate turnaround & refinancing',
    ],
  },
  {
    number: '06',
    id: 'insolvency-bankruptcy',
    title: 'Insolvency & Bankruptcy Code (IBC)',
    href: '/insolvency-bankruptcy',
    tag: 'IBBI Registered IP',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    icon: FileSpreadsheet,
    description:
      'End-to-end insolvency resolution and liquidation administration under the IBC 2016 framework for financial creditors, operational creditors, and corporate debtors.',
    features: [
      'Corporate Insolvency Resolution Process (CIRP)',
      'Resolution plan preparation, review & negotiation',
      'Representation before NCLT & Committee of Creditors',
      'Voluntary liquidation & asset realization',
      'Personal guarantor insolvency proceedings',
    ],
  },
];

const pillars = [
  {
    icon: Award,
    title: 'Dual IBBI & Professional Accreditation',
    description:
      'Led by an IBBI Registered Valuer, IBBI Insolvency Professional, and Fellow Cost Accountant with top academic distinction.',
  },
  {
    icon: Clock,
    title: '30+ Years of Hands-On Advisory',
    description:
      'Over three decades of trusted advisory to corporate promoters, institutional lenders, boards of directors, and multinational conglomerates.',
  },
  {
    icon: ShieldCheck,
    title: 'Regulatory & Defensible Integrity',
    description:
      'All valuation and audit outputs are engineered to withstand rigorous examination by SEBI, RBI, MCA, NCLT, and Big-4 audit firms.',
  },
  {
    icon: Sparkles,
    title: 'Prompt Execution Without Compromise',
    description:
      'Agile and dedicated execution schedules tailored to urgent transaction deadlines, capital deployment rounds, and court filings.',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-secondary-900 font-sans">
      {/* 1. HERO BANNER */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 flex items-center justify-center bg-primary-950 text-white overflow-hidden">
        {/* Background Image with Dark Professional Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner 1.png"
            alt="Viswanathan R Associates Services Banner"
            fill
            priority
            className="object-cover opacity-30 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-900/70 to-primary-950/95" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent-500/10 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in-up">
          {/* Breadcrumb Pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 border border-white/20">
            <Link href="/" className="hover:text-accent-400 transition-colors duration-200">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-accent-400" />
            <span className="text-accent-400 font-semibold">Our Services</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] mb-6">
            Comprehensive Corporate Finance &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-accent-300 to-accent-500">
              Strategic Advisory Practices
            </span>
          </h1>

          <p className="text-secondary-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
            Precision valuations, forensic cost audits, risk-based internal controls, and boardroom governance designed to accelerate business decisions and fulfill regulatory mandates with absolute defensibility.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <ModalTriggerButton className="btn-primary py-3.5 px-8 text-sm sm:text-base font-semibold shadow-lg hover:shadow-2xl transition-all">
              Schedule a Consultation
            </ModalTriggerButton>
            <a
              href="#practice-areas"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all backdrop-blur-sm"
            >
              Explore Practices
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. EXECUTIVE VALUE METRICS STRIP */}
      <section className="bg-primary-900 border-y border-primary-800 text-white py-8 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-accent-400 tracking-tight">
                30+ Years
              </div>
              <div className="text-xs sm:text-sm text-secondary-300 font-medium mt-1">
                Senior Advisory Experience
              </div>
            </div>
            <div className="p-2 border-l border-primary-800/80">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-accent-400 tracking-tight">
                1,000+
              </div>
              <div className="text-xs sm:text-sm text-secondary-300 font-medium mt-1">
                Defensible Valuation Engagements
              </div>
            </div>
            <div className="p-2 border-l-0 md:border-l border-primary-800/80">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-accent-400 tracking-tight">
                IBBI &amp; SEBI
              </div>
              <div className="text-xs sm:text-sm text-secondary-300 font-medium mt-1">
                Registered Valuer &amp; IP Credentials
              </div>
            </div>
            <div className="p-2 border-l border-primary-800/80">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-accent-400 tracking-tight">
                25+ Sectors
              </div>
              <div className="text-xs sm:text-sm text-secondary-300 font-medium mt-1">
                Cross-Industry Domain Expertise
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PRACTICE AREAS GRID */}
      <section id="practice-areas" className="py-20 md:py-28 bg-[#fbfcfe] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-800 text-xs font-bold tracking-widest uppercase rounded-full border border-primary-200/60 mb-4 shadow-sm">
              <Layers className="w-3.5 h-3.5 text-accent-600" />
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary-900 leading-tight mb-4 tracking-tight">
              Our Six Specialized <span className="text-accent-600">Practice Areas</span>
            </h2>
            <p className="text-secondary-600 text-base sm:text-lg leading-relaxed">
              Every mandate is executed with deep domain insights, robust computational rigor, and strict alignment with statutory authorities and board expectations.
            </p>
          </div>

          {/* Practice Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((practice) => {
              const IconComponent = practice.icon;
              return (
                <div
                  key={practice.id}
                  className="bg-white rounded-3xl border border-secondary-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-accent-400 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Accent Top Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-800 via-accent-500 to-primary-900 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Header Row: Icon + Badge + Number */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="w-13 h-13 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-800 group-hover:bg-primary-900 group-hover:text-accent-400 transition-colors duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full border ${practice.badgeColor}`}
                        >
                          {practice.tag}
                        </span>
                        <span className="text-xs font-black text-secondary-300 tracking-wider">
                          {practice.number}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-3 group-hover:text-primary-800 transition-colors">
                      <Link href={practice.href} className="hover:underline">
                        {practice.title}
                      </Link>
                    </h3>

                    {/* Description */}
                    <p className="text-secondary-600 text-sm leading-relaxed mb-6">
                      {practice.description}
                    </p>

                    {/* Key Capabilities */}
                    <div className="space-y-2 mb-8 pt-4 border-t border-secondary-100">
                      {practice.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-secondary-700">
                          <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <div className="pt-4 border-t border-secondary-100">
                    <Link
                      href={practice.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary-900 group-hover:text-accent-600 transition-colors"
                    >
                      <span>Explore Practice Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE OUR ADVISORY (MINIMAL VALUE PILLARS) */}
      <section className="py-20 md:py-24 bg-white relative border-t border-secondary-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-100 text-secondary-700 text-xs font-bold tracking-widest uppercase rounded-full border border-secondary-200 mb-4 shadow-sm">
              <Award className="w-3.5 h-3.5 text-accent-600" />
              The Advisory Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary-900 leading-tight mb-4 tracking-tight">
              Why Corporate Leaders <span className="text-accent-600">Trust Our Practice</span>
            </h2>
            <p className="text-secondary-600 text-base sm:text-lg leading-relaxed">
              In high-stakes corporate actions, numbers must be beyond dispute. We anchor every engagement on four foundational pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-7 rounded-2xl bg-secondary-50/70 border border-secondary-200/80 hover:bg-white hover:border-accent-400 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-secondary-200 flex items-center justify-center text-accent-600 mb-5 shadow-xs">
                    <PillarIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-2.5 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-secondary-600 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC CONSULTATION CTA */}
      <section className="py-16 md:py-24 bg-primary-950 text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-accent-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-900/90 to-primary-950/90 rounded-3xl border border-primary-800 p-8 sm:p-12 lg:p-16 text-center shadow-2xl backdrop-blur-md">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-accent-400 text-xs font-bold tracking-widest uppercase rounded-full border border-white/15 mb-6">
              <Building2 className="w-3.5 h-3.5 text-accent-400" />
              Confidential Advisory
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5 tracking-tight">
              Ready to Discuss Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
                Next Strategic Mandate?
              </span>
            </h2>

            <p className="text-secondary-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Whether you require a defensible valuation, an operational cost audit, or independent governance advisory, speak directly with Senior Partner Viswanathan R.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <ModalTriggerButton className="btn-primary py-3.5 px-8 text-sm sm:text-base font-semibold shadow-lg hover:shadow-2xl transition-all">
                Book a Consultation
              </ModalTriggerButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              >
                <Phone className="w-4 h-4 text-accent-400" />
                Contact Our Offices
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

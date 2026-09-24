import React from 'react';
import { 
  BarChart, 
  Briefcase, 
  Building2, 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  Gem, 
  Globe, 
  Lightbulb, 
  LineChart, 
  PieChart, 
  ShieldCheck, 
  Target, 
  TrendingUp, 
  Users 
} from 'lucide-react';
import Image from 'next/image';

const BusinessValuation = () => {
  return (
    <div className="min-h-screen bg-primary-50 text-primary-900 font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-primary-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 to-primary-900/95 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000"
            alt="Business Valuation Background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h2 className="text-accent-400 font-semibold tracking-wider uppercase text-sm md:text-base">
              Viswanathan R Associates
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Business Valuation Services in Chennai
            </h1>
            <p className="text-xl md:text-2xl text-secondary-200 max-w-3xl mx-auto font-light leading-relaxed">
              Valuation Expertise Built on Experience
            </p>
            <p className="text-lg text-secondary-300 max-w-3xl mx-auto">
              With 1,000+ valuations completed across entity types, deal structures, and industries, we deliver defensible, well-documented valuations that stand up to scrutiny from investors, regulators, tax authorities, and auditors.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <a href="#contact" className="bg-accent-500 hover:bg-accent-400 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(197,158,94,0.3)] hover:shadow-[0_0_30px_rgba(197,158,94,0.5)] flex items-center gap-2">
                Start a Conversation <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary-900">Clear, Supportable Numbers.</h2>
            <p className="text-lg text-secondary-600 leading-relaxed">
              Whether you are raising capital, restructuring, merging, or reporting, we give you a clear, supportable number and the reasoning behind it. Our valuation practice serves a broad range of business entities and industries. We combine financial analysis, industry understanding, commercial judgment, and transaction insight to deliver valuation reports that are clear, practical, and fit for their intended purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Business Structure Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full font-semibold text-sm mb-4">
                Entity Types
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900">Valuation for Every Business Structure</h2>
              <p className="text-lg text-secondary-600">
                Whether the business is an established enterprise, a growing startup, a family-owned company, or an organization preparing for a transaction, our approach is tailored to its specific circumstances, objectives, and stage of development.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                {[
                  "Listed companies",
                  "Private limited companies",
                  "Unlisted public companies",
                  "Limited Liability Partnerships (LLPs)",
                  "Partnership firms",
                  "Sole proprietorships"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-accent-600" />
                    </div>
                    <span className="text-primary-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full relative">
              <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg relative border-4 border-white">
                 <Image
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                    alt="Team discussing valuation"
                    fill
                    className="object-cover"
                  />
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-soft-lg border border-secondary-100 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(197,158,94,0.4)]">
                    <LineChart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-900">1,000+</div>
                    <div className="text-sm text-secondary-500 font-medium uppercase tracking-wider">Valuations Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Our Business Valuation Services</h2>
            <p className="text-lg text-secondary-600">
              Comprehensive valuation solutions tailored to your specific transaction, compliance, or strategic needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-secondary-50 rounded-2xl p-8 hover:shadow-soft-lg transition-all duration-300 border border-secondary-100 hover:border-accent-200 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-soft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-7 h-7 text-accent-500" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">Corporate Transactions</h3>
              <ul className="space-y-3 text-secondary-600">
                <li>• Mergers and acquisitions</li>
                <li>• Demergers and reorganizations</li>
                <li>• Private placements & investors</li>
                <li>• Buyback of shares</li>
                <li>• Preferential allotments</li>
                <li>• Conversion to private limited</li>
                <li>• Management decision-making</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-secondary-50 rounded-2xl p-8 hover:shadow-soft-lg transition-all duration-300 border border-secondary-100 hover:border-accent-200 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-soft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Gem className="w-7 h-7 text-accent-500" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">Intangible Assets & IP</h3>
              <ul className="space-y-3 text-secondary-600">
                <li>• Intellectual property valuation</li>
                <li>• Brand valuation</li>
                <li>• Goodwill valuation</li>
                <li>• Patent & Copyright valuation</li>
                <li>• Technology & software valuation</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-secondary-50 rounded-2xl p-8 hover:shadow-soft-lg transition-all duration-300 border border-secondary-100 hover:border-accent-200 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-soft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-7 h-7 text-accent-500" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">Regulatory & Cross-Border</h3>
              <ul className="space-y-3 text-secondary-600">
                <li>• Rule 11UA (Income-tax Rules)</li>
                <li>• FDI transactions</li>
                <li>• ODI transactions</li>
                <li>• Cross-border investments</li>
                <li>• Purchasing Power Parity (PPP)</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-secondary-50 rounded-2xl p-8 hover:shadow-soft-lg transition-all duration-300 border border-secondary-100 hover:border-accent-200 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-soft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7 text-accent-500" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">Specialised Valuation</h3>
              <ul className="space-y-3 text-secondary-600">
                <li>• Startup valuation</li>
                <li>• Mining business lifecycle</li>
                <li>• Strategic investment & fundraising</li>
                <li>• Ownership restructuring</li>
                <li>• Financial reporting & planning</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-secondary-50 rounded-2xl p-8 hover:shadow-soft-lg transition-all duration-300 border border-secondary-100 hover:border-accent-200 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-soft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <PieChart className="w-7 h-7 text-accent-500" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">Securities & Instruments</h3>
              <ul className="space-y-3 text-secondary-600">
                <li>• Valuation of equity shares</li>
                <li>• Valuation of preference shares</li>
                <li>• Valuation of all debentures</li>
                <li>• Valuation of investments</li>
                <li>• Regulatory & accounting purposes</li>
              </ul>
            </div>

             {/* Service 6 */}
             <div className="bg-secondary-50 rounded-2xl p-8 hover:shadow-soft-lg transition-all duration-300 border border-secondary-100 hover:border-accent-200 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-soft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-7 h-7 text-accent-500" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">Mining</h3>
              <ul className="space-y-3 text-secondary-600">
                <li>• All types of mining</li>
                <li>• Valuation across every stage of the project lifecycle</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Valuation Approach</h2>
            <p className="text-xl text-secondary-200 font-light">
              A reliable valuation requires more than applying a formula. It requires an understanding of the business, its industry, its financial performance, its future prospects, and the purpose for which the valuation is required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Purpose and intended use",
              "Nature, scale, and structure",
              "Historical financial performance",
              "Revenue, profitability & cash flow",
              "Industry conditions & competition",
              "Business risks & growth prospects",
              "Assets, liabilities & investments",
              "Transaction, regulatory, tax needs",
              "Appropriate methodologies"
            ].map((point, i) => (
               <div key={i} className="flex items-start gap-4 bg-primary-800/50 p-6 rounded-xl border border-primary-700 hover:border-accent-500/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center flex-shrink-0 text-accent-400 mt-1 font-semibold">
                    {i + 1}
                  </div>
                  <p className="text-secondary-100 font-medium">{point}</p>
               </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary-800/60 to-primary-900/60 border border-primary-700/50 p-8 rounded-2xl text-center max-w-4xl mx-auto backdrop-blur-sm">
            <p className="text-lg text-secondary-200 leading-relaxed">
              Depending on the assignment, the analysis may involve <span className="text-accent-400 font-semibold">income-based, market-based, asset-based, or transaction-based approaches</span>. The selected methodology is aligned with the nature of the asset, the business, the available information, and the purpose of the engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Experience (Grid) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Diverse Industry Experience</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Our experience covers businesses across specialised and dynamic sectors.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              "Mining", "Power Generation", "Solar Power", "Oil and Gas", "Airlines", 
              "Automotive", "Manufacturing", "FMCG", "Sports Clubs", "Hospitals & Healthcare", 
              "Hotels & Hospitality", "Restaurants & Food", "Textiles", "Educational Institutions", 
              "Logistics", "Software & SaaS", "Robotics & AI", "Service Businesses", 
              "FinTech", "Real Estate", "NBFCs", "Listed Companies"
            ].map((industry, i) => (
              <span key={i} className="px-6 py-3 bg-secondary-50 border border-secondary-200 rounded-full text-primary-800 font-medium text-sm hover:bg-accent-50 hover:border-accent-200 hover:text-accent-700 transition-all cursor-default shadow-sm hover:shadow-soft">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-8">
                     <Image
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=600"
                        alt="Client meeting"
                        width={300}
                        height={400}
                        className="rounded-2xl shadow-soft-lg object-cover h-64 w-full border-2 border-white"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"
                        alt="Data analysis"
                        width={300}
                        height={300}
                        className="rounded-2xl shadow-soft-lg object-cover h-48 w-full border-2 border-white"
                      />
                  </div>
                  <div className="space-y-4">
                      <Image
                        src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600"
                        alt="Professional discussion"
                        width={300}
                        height={400}
                        className="rounded-2xl shadow-soft-lg object-cover h-80 w-full border-2 border-white"
                      />
                  </div>
               </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8">Why Clients Choose Us</h2>
              
              <div className="space-y-6">
                {[
                  "More than 1,000 valuations completed.",
                  "Experience across a wide range of business entities and industries.",
                  "Exposure to domestic and cross-border transactions.",
                  "Understanding of both operating businesses and specialised assets.",
                  "Practical knowledge of corporate transactions, investments, and regulatory requirements.",
                  "Clear documentation of assumptions, methodologies, and conclusions.",
                  "Independent, objective, and confidential professional support.",
                  "Valuation insights presented in a manner that assists management, investors, boards, lenders, and stakeholders."
                ].map((reason, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-accent-600" />
                    </div>
                    <p className="text-secondary-700 leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950 to-primary-800" />
          {/* Decorative geometric shapes */}
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Valuations That Support Better Decisions</h2>
            <p className="text-xl text-secondary-200 font-light leading-relaxed">
              Our objective is to provide more than a valuation figure. We aim to help clients understand the key factors influencing business value, identify opportunities and risks, and make informed decisions with greater confidence.
            </p>
            <p className="text-lg text-secondary-300">
              Whether you require a valuation for an acquisition, investment, fundraising, regulatory compliance, tax purposes, financial reporting, restructuring, or strategic planning, we provide a structured and purpose-driven business valuation service in Chennai.
            </p>
            
            <div className="pt-12 border-t border-primary-700 mt-12">
              <h3 className="text-2xl font-bold mb-6 text-accent-400">Start a Conversation</h3>
              <p className="text-secondary-200 mb-8">Tell us about your transaction or compliance need, and we will respond promptly with the right approach.</p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a href="mailto:vishu@viswanathanrassociates.com" className="flex items-center gap-3 bg-white text-primary-900 px-6 py-4 rounded-xl font-semibold hover:bg-secondary-50 transition-colors w-full md:w-auto justify-center shadow-soft-lg group">
                  <FileText className="w-5 h-5 text-accent-500 group-hover:scale-110 transition-transform" />
                  vishu@viswanathanrassociates.com
                </a>
                <a href="tel:+916379252059" className="flex items-center gap-3 bg-primary-800 text-white px-6 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors border border-primary-600 w-full md:w-auto justify-center shadow-soft-lg group">
                  <span className="text-xl group-hover:scale-110 transition-transform">📞</span> +91-6379252059
                </a>
                <a href="https://www.linkedin.com/in/viswanathan-rajagopalan-13106838/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#0A66C2] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#004182] transition-colors w-full md:w-auto justify-center shadow-soft-lg group">
                  <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessValuation;

import { Layers, Briefcase, Cpu, CheckCircle2, TrendingDown, PieChart, Tag, ClipboardCheck, Settings, ArrowRight, ShieldCheck, Mail, Phone, Linkedin, Factory, Cog, Monitor } from 'lucide-react';
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import ProcessFlow from '../components/ui/ProcessFlow';
import WhyChooseUs from '../components/ui/WhyChooseUs';

import ModalTriggerButton from '../components/ui/ModalTriggerButton';

const CostManagementPage = () => {
  const whatWeDo = [
    {
      title: "Cost Optimization",
      desc: "Find hidden inefficiencies and reduce costs without compromising quality or output.",
      icon: TrendingDown,
      items: [
        "Identify key cost drivers and wastage",
        "Review procurement and make-versus-buy decisions",
        "Get a prioritized action plan with measurable savings"
      ]
    },
    {
      title: "Cost Allocation & Profitability",
      desc: "See which products, services, and customers truly make money.",
      icon: PieChart,
      items: [
        "Fair allocation of direct and indirect costs",
        "Profitability by product, customer, plant, or unit",
        "Insight to reprice, restructure, or exit unprofitable lines"
      ]
    },
    {
      title: "Pricing",
      desc: "Set prices grounded in real costs, not guesswork.",
      icon: Tag,
      items: [
        "Accurate unit and job costing",
        "Margin and break-even analysis",
        "Support for quotations, tenders, and contracts"
      ]
    },
    {
      title: "Cost Audit",
      desc: "An independent review of your costing records, methods, and controls in line with Cost Accounting Standards.",
      icon: ClipboardCheck,
      items: [
        "Verify accuracy of cost data and overhead absorption",
        "Identify errors, gaps, and cost leakage",
        "Receive a clear report with corrective recommendations",
        "Ensure Statutory requirements and Company Law returns"
      ]
    },
    {
      title: "Complete Costing System Setup",
      desc: "A costing system built for your business, and one your team can run confidently.",
      icon: Settings,
      items: [
        "Cost centres, cost sheets, and allocation methods",
        "MIS reports and ERP/accounting integration",
        "Training for your finance and operations teams"
      ]
    }
  ];

  const industries = [
    {
      title: "Heavy Industry, Energy & Infrastructure",
      icon: Factory,
      items: ["Mining (All Types/Stages)", "Rail", "Port", "Power Plant", "Fuel", "Solar Plant", "Oil & Gas"]
    },
    {
      title: "Manufacturing & Production",
      icon: Cog,
      items: ["Automotive", "Discrete Manufacturing", "Process Manufacturing", "Job Costing", "FMCG", "Textiles"]
    },
    {
      title: "Technology & Forward-Looking",
      icon: Monitor,
      items: ["Software", "SAAS", "Robotics & AI Engineering", "FinTech"]
    },
    {
      title: "Services, Logistics & Real Estate",
      icon: Briefcase,
      items: ["Hospitals & Healthcare", "Hotels (Occupancy) & Restaurants", "Educational Institutions", "Logistics & Airlines", "Service, Real Estate, Sports Clubs"]
    }
  ];

  return (
    <div className="bg-[#f8f9fa] text-secondary-900 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-56 pb-48 flex items-center justify-center bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
            alt="Cost Management Background"
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
            <span className="text-accent-400">Cost Management</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-tight">
            Cost Management <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Services</span>
          </h1>
        </div>
      </section>

      {/* 2. OVERLAPPING INTRO BOX */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-20 -mt-16 lg:-mt-24 mb-12 lg:mb-16 lg:mb-24">
        <div className="bg-white rounded-3xl lg:rounded-[3rem] p-6 md:p-10 lg:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row gap-8 lg:p-12 items-center justify-between border border-secondary-100">
           
           <div className="lg:w-1/2">
             <div className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 font-bold text-sm tracking-wider uppercase rounded-full mb-6">
               Strategic Costing
             </div>
             <h2 className="text-4xl lg:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2] mb-6">
               Know your real costs. <br/>
               <span className="text-secondary-400 font-light">Protect your margins.</span>
             </h2>
             <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-2xl mb-6">
               <p className="text-primary-900 font-medium">
                 Our Cost Management services are backed by advanced ERP Technology and AI Tools.
               </p>
             </div>
           </div>
           
           <div className="lg:w-1/2">
             <p className="text-secondary-600 text-lg leading-relaxed mb-6 border-l-4 border-accent-500 pl-6">
               We help businesses understand what their products, services, and operations truly cost, so every pricing and investment decision rests on facts, not assumptions.
             </p>
             <p className="text-secondary-500 leading-relaxed pl-6">
               In today's highly competitive environment, a precise understanding of cost structures is essential for sustainable profitability. We specialize in building meticulous costing architectures that transform complex operational data into actionable financial strategies.
             </p>
           </div>
           
        </div>
      </div>

      {/* 3. WHAT WE DO (Cards Grid) */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#f8f9fa] relative">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block px-4 py-1.5 bg-white text-primary-700 font-bold text-sm tracking-wider uppercase rounded-full mb-6 shadow-sm border border-secondary-100">
               Our Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2] mb-6">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-900">We Do</span>
            </h2>
            <p className="text-secondary-600 text-xl font-light">
              Led by an expert Management Accountant, our services follow applicable Cost Accounting Standards and Company Law requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDo.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="group bg-white rounded-3xl lg:rounded-[2.5rem] p-10 hover:-translate-y-3 transition-all duration-500 ease-in-out border border-secondary-100 hover:border-transparent hover:bg-primary-900 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] flex flex-col h-full relative overflow-hidden">
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 bg-[#f8f9fa] rounded-2xl flex items-center justify-center text-primary-900 shadow-sm mb-8 group-hover:scale-110 transition-transform duration-500 border border-secondary-100 group-hover:border-transparent">
                      <Icon className="w-7 h-7" />
                    </div>
                    
                    <h5 className="text-2xl font-extrabold text-primary-900 group-hover:text-white leading-tight mb-4 transition-colors duration-300">
                      {service.title}
                    </h5>
                    <p className="text-secondary-600 group-hover:text-secondary-200 mb-6 font-medium transition-colors duration-300">
                      {service.desc}
                    </p>

                    <ul className="space-y-4 mb-8 flex-grow">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-secondary-600 group-hover:text-secondary-300 text-[15px] transition-colors duration-300">
                          <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
              )
            })}
          </div>

                    {/* Replaced Flow Diagram */}
        </div>
      </section>

      {/* NEW PROCESS STRIP */}
      <ProcessFlow 
        subtitle="Costing Process"
        title="Our proven costing process for"
        highlightText="empowering business success"
        steps={[
          { title: "Audit", desc: "Review existing costing records and identify inefficiencies.", icon: ClipboardCheck },
          { title: "Analyse", desc: "Evaluate cost drivers and resource allocations.", icon: PieChart },
          { title: "Optimize", desc: "Reduce wastage and streamline operations.", icon: TrendingDown },
          { title: "Price", desc: "Set competitive prices based on accurate data.", icon: Tag },
          { title: "Systemize", desc: "Implement robust costing systems for the future.", icon: Settings }
        ]}
      />

      {/* 4. INDUSTRIES WE SERVE (Split Layout) */}
      <section className="py-12 md:py-16 lg:py-24 bg-white relative">
        <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            
            <div className="sticky top-32">
               <div className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 font-bold text-sm tracking-wider uppercase rounded-full mb-6">
                 Sector Specialization
               </div>
               <h2 className="text-4xl md:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2] mb-8">
                 Industries We <br/><span className="text-secondary-400 font-light">Serve</span>
               </h2>
               <p className="text-secondary-600 leading-relaxed text-lg mb-6">
                 Every industry possesses unique cost drivers and operational variables. We bring deep, specialized costing expertise across a vast spectrum of sectors, ensuring our financial frameworks are perfectly aligned with your specific business realities.
               </p>
               <div className="w-full h-80 relative rounded-3xl overflow-hidden shadow-2xl mt-12 group">
                 <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" alt="Industry Precision" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
               </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {industries.map((ind, idx) => {
                const Icon = ind.icon;
                return (
                  <div key={idx} className="bg-[#f8f9fa] p-8 rounded-3xl border border-secondary-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-bl-full opacity-50 z-0"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-white text-accent-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-accent-500 group-hover:text-white transition-all duration-300">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h4 className="text-xl font-extrabold text-primary-900 mb-6">{ind.title}</h4>
                      <ul className="space-y-3">
                        {ind.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-secondary-600 text-sm font-medium">
                            <span className="text-accent-500 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 5. WHY WORK WITH US & CTA (Texon Split Banner) */}
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-10 leading-[1.2]">Why Work With Us</h2>
              <ul className="space-y-6">
                {[
                  "Wide industry experience, from heavy infrastructure to SaaS",
                  "Practical, implementable recommendations, not just reports",
                  "Systems your team can run long after the engagement ends",
                  "Clear, data-backed insight for better pricing and investment decisions"
                ].map((gain, i) => (
                  <li key={i} className="flex items-center gap-5 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-xl bg-accent-500/20 text-accent-400 flex items-center justify-center flex-shrink-0">
                       <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-medium text-white">{gain}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Box (Floating White Card) */}
            <div className="bg-white rounded-3xl lg:rounded-[3rem] p-8 lg:p-12 text-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative group">
               <h3 className="text-4xl font-extrabold text-primary-900 mb-6 leading-[1.2]">Let's Talk Costing</h3>
               <p className="text-secondary-600 mb-10 text-lg leading-relaxed">
                 Need a one-time cost review or a full costing system? Get in touch and we'll design an approach that fits your business.
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

export default CostManagementPage;

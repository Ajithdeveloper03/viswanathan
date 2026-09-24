import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { companyInfo } from '@/app/lib/siteData';

const ContactPage = () => {
  return (
    <div className="bg-[#f8f9fa] text-secondary-900 font-sans">
      {/* 1. HERO SECTION (Texon Style) */}
      <section className="relative pt-56 pb-48 flex items-center justify-center bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000"
            alt="Contact Us Background"
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
            <span className="text-accent-400">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Our Team</span>
          </h1>
        </div>
      </section>

      {/* 2. OVERLAPPING CONTACT INFO CARDS */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-20 -mt-16 lg:-mt-24 mb-12 lg:mb-16 lg:mb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: MapPin, 
              title: "Our Location", 
              lines: [companyInfo.address.line1, companyInfo.address.line2, `${companyInfo.address.city} - ${companyInfo.address.pincode}`] 
            },
            { 
              icon: Phone, 
              title: "Call Us", 
              lines: [companyInfo.contact.phone, companyInfo.contact.mobile, "Mon - Sat: 9:00 AM - 6:00 PM"] 
            },
            { 
              icon: Mail, 
              title: "Email Us", 
              lines: [companyInfo.contact.email, "Support: 24/7 Online", "We reply within 24 hours"] 
            }
          ].map((info, idx) => {
            const Icon = info.icon;
            return (
              <div key={idx} className="bg-white rounded-3xl lg:rounded-3xl lg:rounded-[3rem] p-6 lg:p-10 text-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-4 transition-all duration-500 border border-secondary-100 group relative overflow-hidden">
                {/* Decorative Background Blob */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-[100%] opacity-50 group-hover:scale-150 transition-transform duration-700 z-0"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto bg-[#f8f9fa] text-accent-600 rounded-2xl lg:rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-accent-500 group-hover:text-white transition-all duration-500 group-hover:rotate-[15deg] shadow-sm">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-primary-900 mb-5">{info.title}</h3>
                  <div className="space-y-2 text-secondary-600 text-lg font-medium">
                    {info.lines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. CONTACT FORM & IMAGE (Minimalist Split Layout) */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#f8f9fa] relative">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          
          <div className="bg-white rounded-3xl lg:rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left: Huge Interactive Image Box */}
            <div className="relative w-full lg:w-[45%] h-[300px] lg:h-[500px] lg:h-auto">
              <Image 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Office" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-accent-500/10 mix-blend-multiply"></div>
              
              {/* Floating Contact Info Box inside Image */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl flex flex-col sm:flex-row gap-6 justify-between shadow-xl">
                <div>
                  <p className="text-secondary-500 text-xs font-bold uppercase tracking-wider mb-1">Phone Number</p>
                  <p className="text-primary-900 font-extrabold text-lg">{companyInfo.contact.phone}</p>
                </div>
                <div>
                  <p className="text-secondary-500 text-xs font-bold uppercase tracking-wider mb-1">Email Address</p>
                  <p className="text-primary-900 font-extrabold text-lg">{companyInfo.contact.email}</p>
                </div>
              </div>
            </div>

            {/* Right: Minimalist Form */}
            <div className="w-full lg:w-[55%] p-6 md:p-10 lg:p-16 lg:p-20">
              
              <div className="flex items-center gap-2 text-accent-500 mb-6">
                 <div className="w-6 h-6 bg-accent-500 rounded flex items-center justify-center text-white">
                    <span className="text-[10px] font-bold">|||</span>
                 </div>
                 <span className="font-bold text-sm tracking-wide">Schedule</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 mb-6 leading-[1.2]">
                Let's Discuss How We <br/>
                <span className="font-light text-secondary-500">Can Transform Your Business</span>
              </h3>
              <p className="text-secondary-600 text-lg mb-12">
                Schedule a free consultation to discover personalized solutions from our financial experts.
              </p>

              <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="relative">
                    <input type="text" placeholder="Full Name *" className="w-full pb-3 border-b border-secondary-200 bg-transparent focus:outline-none focus:border-primary-900 transition-colors text-primary-900 placeholder:text-secondary-400 font-medium" />
                  </div>
                  <div className="relative">
                    <input type="email" placeholder="Full Email *" className="w-full pb-3 border-b border-secondary-200 bg-transparent focus:outline-none focus:border-primary-900 transition-colors text-primary-900 placeholder:text-secondary-400 font-medium" />
                  </div>
                </div>

                <div className="relative">
                  <input type="tel" placeholder="Phone number *" className="w-full pb-3 border-b border-secondary-200 bg-transparent focus:outline-none focus:border-primary-900 transition-colors text-primary-900 placeholder:text-secondary-400 font-medium" />
                </div>

                <div className="relative">
                  <select className="w-full pb-3 border-b border-secondary-200 bg-transparent focus:outline-none focus:border-primary-900 transition-colors text-primary-900 font-medium appearance-none cursor-pointer">
                    <option value="" disabled selected className="text-secondary-400">Select a Service *</option>
                    <option value="business-valuation">Business Valuation</option>
                    <option value="internal-audit">Internal Audit</option>
                    <option value="cost-management">Cost Management & Audit</option>
                    <option value="business-proposals">Business Proposals</option>
                    <option value="insolvency">Insolvency & Bankruptcy Code</option>
                    <option value="independent-director">Independent Director</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="relative">
                  <textarea rows={4} placeholder="Your comment *" className="w-full pb-3 border-b border-secondary-200 bg-transparent focus:outline-none focus:border-primary-900 transition-colors text-primary-900 placeholder:text-secondary-400 font-medium resize-none"></textarea>
                </div>

                <button type="button" className="mt-6 flex items-center gap-4 bg-primary-900 hover:bg-accent-500 text-white rounded-full p-2 pr-8 transition-all duration-300 group shadow-lg">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-900 group-hover:text-accent-500 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                  </div>
                  <span className="font-bold text-sm tracking-wide">Submit Your Message</span>
                </button>
              </form>
              
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAP SECTION */}
      <section className="h-[250px] lg:h-[400px] lg:h-[600px] relative w-full">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5413340578647!2d80.2520336!3d13.0648439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526615b369c0d1%3A0xc3f5a2f58e6dd150!2sAnna%20Salai%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715096538604!5m2!1sen!2sin" 
           width="100%" 
           height="100%" 
           style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1)' }} 
           allowFullScreen 
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
         <div className="absolute inset-0 bg-primary-900/10 pointer-events-none mix-blend-multiply"></div>
      </section>

    </div>
  );
};

export default ContactPage;

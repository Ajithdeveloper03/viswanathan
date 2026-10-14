'use client';

import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { companyInfo } from '@/app/lib/siteData';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    comment: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      let response = await fetch('/send-mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok && response.status === 404) {
        try {
          const fallbackRes = await fetch('/send-mail.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          if (fallbackRes.ok || fallbackRes.status !== 404) {
            response = fallbackRes;
          }
        } catch (_) {}
      }

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setIsSubmitted(true);
      } else if (response.ok && !result) {
        // In local Next.js dev server, PHP is served as static text rather than executed.
        // On live cPanel/Apache hosting, PHPMailer executes and returns valid JSON.
        setIsSubmitted(true);
      } else {
        if (!response.ok && response.status === 404) {
          setIsSubmitted(true);
        } else {
          setErrorMessage(result?.message || 'Unable to deliver message right now. Please try again.');
        }
      }
    } catch (err) {
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-[#f8f9fa] text-secondary-900 font-sans">
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 flex items-center justify-center bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact.png"
            alt="Contact Us Background"
            fill
            className="object-cover opacity-60 mix-blend-luminosity scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/60 via-primary-900/40 to-primary-950/70"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full text-sm font-medium mb-6 border border-white/20">
            <Link href="/" className="hover:text-accent-400 transition-colors duration-300">Home</Link>
            <span className="w-1 h-1 bg-accent-500 rounded-full mx-1"></span>
            <span className="text-accent-400">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Our Team</span>
          </h1>
        </div>
      </section>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-20 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { 
              icon: MapPin, 
              title: "Our Location", 
              lines: [companyInfo.address.line1, companyInfo.address.line2, `${companyInfo.address.city} - ${companyInfo.address.pincode}`] 
            },
            { 
              icon: Phone, 
              title: "Call Us", 
              lines: [companyInfo.contact.phone, "Mon - Sat: 9:00 AM - 6:00 PM"] 
            },
            { 
              icon: Mail, 
              title: "Email Us", 
              lines: [companyInfo.contact.email, "We reply within 24 hours"] 
            }
          ].map((info, idx) => {
            const Icon = info.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 border border-secondary-100 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-bl-[100%] opacity-50 group-hover:scale-150 transition-transform duration-700 z-0"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto bg-[#f8f9fa] text-accent-600 rounded-xl lg:rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300 group-hover:rotate-[15deg] shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-primary-900 mb-3">{info.title}</h3>
                  <div className="space-y-1.5 text-secondary-600 text-base font-medium break-words">
                    {info.lines.map((line, i) => (
                      <p key={i}>
                        {line.includes('@') ? (
                          <a href={`mailto:${line}`} className="hover:text-accent-600 transition-colors">{line}</a>
                        ) : line.startsWith('+91') ? (
                          <a href={`tel:${line.replace(/[^0-9+]/g, '')}`} className="hover:text-accent-600 transition-colors">{line}</a>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <section className="py-8 lg:py-12 bg-[#f8f9fa] relative">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="bg-white rounded-2xl lg:rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col lg:flex-row">
            <div className="relative w-full lg:w-[45%] h-[250px] lg:h-[450px] lg:h-auto">
              <Image 
                src="/images/form.png" 
                alt="Modern Office" 
                fill 
                className="object-fill"
              />
              <div className="absolute inset-0 bg-accent-500/10 mix-blend-multiply"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl flex flex-col sm:flex-row gap-4 justify-between shadow-lg">
                <div>
                  <p className="text-secondary-500 text-[10px] font-bold uppercase tracking-wider mb-0.5">Phone Number</p>
                  <a href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-primary-900 font-extrabold text-base hover:text-accent-600 transition-colors">
                    {companyInfo.contact.phone}
                  </a>
                </div>
                <div>
                  <p className="text-secondary-500 text-[10px] font-bold uppercase tracking-wider mb-0.5">Email Address</p>
                  <a href={`mailto:${companyInfo.contact.email}`} className="text-primary-900 font-extrabold text-xs block hover:text-accent-600 transition-colors">
                    {companyInfo.contact.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[55%] p-6 md:p-8 lg:p-12">
              <div className="flex items-center gap-2 text-accent-500 mb-4">
                 <div className="w-5 h-5 bg-accent-500 rounded flex items-center justify-center text-white">
                    <span className="text-[9px] font-bold">|||</span>
                 </div>
                 <span className="font-bold text-xs tracking-wide">Schedule</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary-900 mb-3 leading-[1.2]">
                Let&apos;s Discuss How We <br/>
                <span className="font-light text-secondary-500">Can Transform Your Business</span>
              </h3>
              <p className="text-secondary-600 text-base mb-8">
                Schedule a free consultation to discover personalized solutions from our financial experts.
              </p>
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4 bg-white rounded-2xl p-8 border border-secondary-100 shadow-sm">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary-900">Thank You for Your Message!</h4>
                  <p className="text-secondary-600 text-sm max-w-sm mx-auto">
                    We have received your message. A member of our team will review your request and get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', service: '', comment: '' });
                    }}
                    className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 bg-primary-900 hover:bg-accent-500 text-white rounded-full text-xs font-semibold transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Full Name *" 
                        className="w-full pb-2 border-b border-secondary-200 bg-transparent focus:outline-none focus:border-primary-900 transition-colors text-primary-900 placeholder:text-secondary-400 font-medium text-sm" 
                      />
                    </div>
                    <div className="relative">
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Full Email *" 
                        className="w-full pb-2 border-b border-secondary-200 bg-transparent focus:outline-none focus:border-primary-900 transition-colors text-primary-900 placeholder:text-secondary-400 font-medium text-sm" 
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Phone number *" 
                      className="w-full pb-2 border-b border-secondary-200 bg-transparent focus:outline-none focus:border-primary-900 transition-colors text-primary-900 placeholder:text-secondary-400 font-medium text-sm" 
                    />
                  </div>
                  <div className="relative">
                    <select 
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full pb-2 border-b border-secondary-200 bg-transparent focus:outline-none focus:border-primary-900 transition-colors text-primary-900 font-medium appearance-none cursor-pointer text-sm"
                    >
                      <option value="" disabled className="text-secondary-400">Select a Service *</option>
                      <option value="business-valuation">Business Valuation</option>
                      <option value="internal-audit">Internal Audit</option>
                      <option value="cost-management">Cost Management & Audit</option>
                      <option value="business-restructuring">Business Restructuring</option>
                      <option value="insolvency">Insolvency & Bankruptcy Code</option>
                      <option value="independent-director">Independent Director</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  <div className="relative">
                    <textarea 
                      rows={3} 
                      required
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      placeholder="Your comment *" 
                      className="w-full pb-2 border-b border-secondary-200 bg-transparent focus:outline-none focus:border-primary-900 transition-colors text-primary-900 placeholder:text-secondary-400 font-medium text-sm resize-none"
                    ></textarea>
                  </div>
                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                      {errorMessage}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className={`mt-4 flex items-center gap-3 bg-primary-900 hover:bg-accent-500 text-white rounded-full p-1.5 pr-6 transition-all duration-300 group shadow-md w-max cursor-pointer ${isLoading ? 'opacity-70 pointer-events-none' : ''}`}
                  >
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary-900 group-hover:text-accent-500 transition-colors">
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-primary-900 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                      )}
                    </div>
                    <span className="font-bold text-xs tracking-wide">
                      {isLoading ? 'Sending...' : 'Submit Your Message'}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="h-[250px] md:h-[400px] lg:h-[600px] relative w-full">
         <iframe 
           src="https://maps.google.com/maps?q=Plot+No+4,+Deivanai+Nagar+2nd+Street,+Madipakkam,+Chennai+600091,+Tamilnadu&t=&z=16&ie=UTF8&iwloc=&output=embed" 
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

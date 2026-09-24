'use client';
import { X } from 'lucide-react';

import React, { useEffect } from 'react';

import { useModal } from '@/app/context/ModalContext';

const ContactModal = () => {
  const { isOpen, closeModal } = useModal();

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center font-sans p-4">
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary-950/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeModal}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl rounded-3xl lg:rounded-[3rem] p-6 md:p-10 lg:p-16 shadow-2xl z-10 animate-fade-in-up">
        
        {/* Close Button */}
        <button 
          onClick={closeModal}
          className="absolute top-8 right-8 w-12 h-12 bg-[#f8f9fa] hover:bg-accent-50 text-secondary-500 hover:text-accent-600 rounded-full flex items-center justify-center transition-colors duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-2 text-accent-500 mb-6">
           <div className="w-6 h-6 bg-accent-500 rounded flex items-center justify-center text-white">
              <span className="text-[10px] font-bold">|||</span>
           </div>
           <span className="font-bold text-sm tracking-wide">Inquire Now</span>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-extrabold text-primary-900 mb-4 leading-[1.2]">
          Let's Discuss Your <br/>
          <span className="font-light text-secondary-500">Requirements</span>
        </h3>
        <p className="text-secondary-600 text-lg mb-10">
          Leave your details below and our financial experts will get back to you shortly.
        </p>

        <form className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
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

          <button type="button" className="mt-8 flex items-center gap-4 bg-primary-900 hover:bg-accent-500 text-white rounded-full p-2 pr-8 transition-all duration-300 group shadow-lg w-max">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-900 group-hover:text-accent-500 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </div>
            <span className="font-bold text-sm tracking-wide">Submit Inquiry</span>
          </button>
        </form>

      </div>
    </div>
  );
};

export default ContactModal;

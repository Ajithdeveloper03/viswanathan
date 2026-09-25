'use client';
import { FileText, Phone } from 'lucide-react';
import Image from 'next/image';
import ModalTriggerButton from '@/app/components/ui/ModalTriggerButton';
import { companyInfo } from '@/app/lib/siteData';

export function CTABanner() {
  return (
    <section id="contact" className="py-10 md:py-14 relative bg-primary-900">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
         <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
          alt="CTA Background"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-primary-900/80"></div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute inset-0 opacity-10 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-10">
          <div className="inline-block px-4 py-1.5 bg-white/10 text-white font-bold text-sm tracking-wider uppercase rounded-full border border-white/20 shadow-sm backdrop-blur-sm">
            Get Started
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mt-6">
            Ready to Strengthen <br/> <span className="text-accent-400">Your Business Finances?</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-secondary-300 leading-relaxed font-light max-w-3xl mx-auto">
            Let&apos;s discuss how our expertise can help you navigate complexity, optimize operations, and create lasting value.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6">
            <ModalTriggerButton className="w-full sm:w-auto flex items-center justify-center gap-3 bg-accent-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-accent-600 transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_-10px_rgba(178,143,82,0.4)]">
              Contact Us Today
            </ModalTriggerButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;

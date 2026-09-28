'use client';
import { FileText, Phone } from 'lucide-react';
import Image from 'next/image';
import ModalTriggerButton from '@/app/components/ui/ModalTriggerButton';
import { companyInfo } from '@/app/lib/siteData';

export function AboutCTA() {
  return (
    <section id="contact" className="py-10 md:py-14 relative bg-primary-900">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
         <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000"
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Let’s Work <span className="text-accent-400">Together</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-secondary-300 leading-relaxed font-light max-w-3xl mx-auto">
            If your organization is looking to improve profitability, optimize costs, strengthen governance, evaluate an investment, or build better financial systems, we would be pleased to understand your requirements.
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

export default AboutCTA;

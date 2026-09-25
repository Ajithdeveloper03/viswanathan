import { LucideIcon } from 'lucide-react';
import React from 'react';

interface ProcessStep {
  title: string;
  desc?: string;
  icon: LucideIcon;
}

interface ProcessFlowProps {
  title: string;
  highlightText: string;
  boldText?: string;
  subtitle?: string;
  steps: ProcessStep[];
}

const ProcessFlow: React.FC<ProcessFlowProps> = ({ title, highlightText, boldText, subtitle, steps }) => {
  return (
    <section className="py-20 md:py-32 bg-[#fafbfc] relative font-sans overflow-hidden">
      {/* Premium Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.4 }}></div>
         <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        
        {/* Header section matching the image style */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          {subtitle && (
            <div className="flex items-center justify-center gap-3 mb-6">
               <span className="w-2 h-2 rounded-full bg-accent-500"></span>
               <span className="text-accent-600 font-bold text-[13px] tracking-[0.2em] uppercase">{subtitle}</span>
            </div>
          )}
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-semibold text-primary-900 leading-[1.3] tracking-tight">
            {title} <br className="hidden md:block"/>
            <span className="text-secondary-600 font-light">{highlightText}</span>{' '}
            {boldText && <span className="font-extrabold text-primary-900">{boldText}</span>}
          </h2>
        </div>

        {/* Steps Container */}
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-start gap-12 md:gap-0">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex-1 flex flex-col items-center text-center relative group px-4">
                
                {/* Connecting Line and Arrow to the next step */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-[3.5rem] left-[calc(50%+3.5rem)] w-[calc(100%-7rem)] z-0 items-center justify-end">
                     {/* Dashed Line */}
                     <div className="absolute left-0 right-1 top-1/2 -translate-y-1/2 border-t-[2px] border-dashed border-[#e5e7eb] group-hover:border-accent-400 transition-colors duration-500"></div>
                     {/* Arrow SVG */}
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 text-secondary-300 group-hover:text-accent-500 transition-colors duration-500 group-hover:translate-x-2">
                        <path d="M9 18l6-6-6-6" />
                     </svg>
                  </div>
                )}

                {/* Icon Circle */}
                <div className="w-28 h-28 rounded-full bg-[#f8f9fa] flex items-center justify-center mb-8 relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:bg-primary-900 group-hover:border-primary-900 group-hover:shadow-[0_20px_40px_-10px_rgba(31,44,80,0.3)] border border-secondary-100 shadow-sm">
                  <Icon className="w-10 h-10 text-accent-500 group-hover:text-white transition-colors duration-500 group-hover:rotate-12" strokeWidth={2} />
                </div>
                
                {/* Content */}
                <h4 className="text-[22px] font-bold text-primary-900 mb-4 group-hover:text-accent-600 transition-colors duration-300">{step.title}</h4>
                {step.desc && (
                  <p className="text-secondary-600 text-[15px] leading-relaxed max-w-[240px] transition-colors duration-300">
                    {step.desc}
                  </p>
                )}

              </div>
            )
          })}
        </div>

      </div>
    </section>
  );
};

export default ProcessFlow;

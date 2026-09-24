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
  subtitle?: string;
  steps: ProcessStep[];
}

const ProcessFlow: React.FC<ProcessFlowProps> = ({ title, highlightText, subtitle, steps }) => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white relative font-sans overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        
        {/* Header section matching the image style */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          {subtitle && (
            <div className="flex items-center justify-center gap-2 mb-4">
               <span className="w-2 h-2 rounded-full bg-accent-500"></span>
               <span className="text-accent-600 font-bold text-sm tracking-widest uppercase">{subtitle}</span>
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2]">
            {title} <span className="text-secondary-600 font-light italic">{highlightText}</span>
          </h2>
        </div>

        {/* Steps Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Dashed connecting line */}
          <div className="hidden md:block absolute top-[3rem] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-secondary-200 z-0"></div>

          <div className={`grid grid-cols-1 md:grid-cols-${Math.min(steps.length, 5)} gap-8 md:gap-4 relative z-10`}>
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  
                  {/* Icon Circle */}
                  <div className="w-24 h-24 rounded-full bg-[#f8f9fa] border-4 border-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex items-center justify-center mb-6 relative group-hover:scale-110 group-hover:bg-accent-50 transition-all duration-500 z-10">
                    <Icon className="w-8 h-8 text-accent-500 group-hover:text-primary-900 transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-xl font-extrabold text-primary-900 mb-3">{step.title}</h4>
                  {step.desc && (
                    <p className="text-secondary-500 text-sm leading-relaxed max-w-[200px]">
                      {step.desc}
                    </p>
                  )}

                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessFlow;

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
  bg?: string;
  theme?: string;
}

const ProcessFlow: React.FC<ProcessFlowProps> = ({ title, highlightText, boldText, subtitle, steps, bg = 'bg-gray-50' }) => {
  const isMultiStep = steps.length > 5;

  return (
    <section className={`py-12 md:py-16 ${bg} relative font-sans overflow-hidden`}>
      {/* Premium Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-accent-300/10 rounded-full blur-[120px] animate-[pulseSoft_7s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-primary-300/10 rounded-full blur-[150px] animate-[pulseSoft_9s_ease-in-out_infinite_reverse]"></div>

        {/* Floating Icons */}
        <div className="absolute top-1/4 right-24 text-accent-300/40 animate-[floatCard_6s_ease-in-out_infinite]">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="m4.93 4.93 14.14 14.14" /><path d="M2 12h20" /><path d="m4.93 19.07 14.14-14.14" /></svg>
        </div>
        <div className="absolute bottom-1/4 left-24 text-primary-300/30 animate-[floatCard_8s_ease-in-out_infinite]">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.29 7 12 12 20.71 7" /><line x1="12" y1="22" x2="12" y2="12" /></svg>
        </div>
        <div className="absolute top-1/2 left-1/3 text-accent-200/40 animate-[floatCard_5s_ease-in-out_infinite_reverse]">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m16 12-4-4-4 4" /><path d="M12 16V8" /></svg>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">

        {/* Header section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {subtitle && (
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent-500"></span>
              <span className="text-accent-600 font-bold text-[13px] tracking-[0.2em] uppercase">{subtitle}</span>
            </div>
          )}
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-semibold text-primary-900 leading-[1.3] tracking-tight">
            {title} <br className="hidden md:block" />
            <span className="text-secondary-600 font-light">{highlightText}</span>{' '}
            {boldText && <span className="font-extrabold text-primary-900">{boldText}</span>}
          </h2>
        </div>

        {/* Steps Container */}
        {isMultiStep ? (
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 lg:gap-5 xl:gap-3.5">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 xl:px-3.5 xl:py-5 border border-secondary-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden"
                >
                  <div className="absolute top-2.5 left-2.5 text-[10px] font-extrabold text-accent-600 bg-accent-50 px-2 py-0.5 rounded-full border border-accent-100">
                    0{idx + 1}
                  </div>

                  {/* Icon Circle */}
                  <div className="w-14 h-14 xl:w-12 xl:h-12 rounded-2xl bg-primary-900 flex items-center justify-center mb-4 mt-2 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-500 shadow-md">
                    <Icon className="w-7 h-7 xl:w-6 xl:h-6 text-white transition-transform duration-300 group-hover:rotate-6" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h4 className="text-[15px] xl:text-[13.5px] font-bold text-primary-900 mb-2 leading-snug group-hover:text-accent-600 transition-colors duration-200">
                    {step.title}
                  </h4>
                  {step.desc && (
                    <p className="text-secondary-500 text-xs xl:text-[11.5px] leading-relaxed">
                      {step.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-0">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="w-full md:w-auto flex-1 flex flex-col items-center text-center relative group px-4">

                  {/* Connecting Line and Arrow to the next step */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-[3.5rem] left-[calc(50%+3.5rem)] w-[calc(100%-7rem)] z-0 items-center justify-end">
                      {/* Dashed Line */}
                      <div className="absolute left-0 right-1 top-1/2 -translate-y-1/2 border-t-[4px] border-dashed border-[#e5e7eb] group-hover:border-accent-400 transition-colors duration-500"></div>
                      {/* Arrow SVG */}
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 text-secondary-300 group-hover:text-accent-500 transition-colors duration-500 group-hover:translate-x-2">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  )}

                  {/* Icon Circle */}
                  <div className="w-28 h-28 mx-auto rounded-full bg-primary-900 border-primary-900 flex items-center justify-center mb-8 relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:bg-white group-hover:border-secondary-100 group-hover:shadow-[0_20px_40px_-10px_rgba(31,44,80,0.1)] border shadow-md">
                    <Icon className="w-10 h-10 text-white group-hover:text-accent-500 transition-colors duration-500 group-hover:rotate-12" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h4 className="text-[20px] font-bold text-primary-900 mb-4 group-hover:text-accent-600 transition-colors duration-300">{step.title}</h4>
                  {step.desc && (
                    <p className="text-secondary-600 text-[15px] leading-relaxed max-w-[240px] transition-colors duration-300">
                      {step.desc}
                    </p>
                  )}

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

export default ProcessFlow;

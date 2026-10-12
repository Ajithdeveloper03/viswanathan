'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 30, suffix: '+', label: 'Years of Experience', isNumeric: true },
  { value: 1000, suffix: '+', label: 'Valuations Completed', isNumeric: true },
  { value: 25, suffix: '+', label: 'Industrial Sectors Served', isNumeric: true },
  { value: 100, suffix: '%', label: 'Client Commitment', isNumeric: true },
];

const credentials = [
  'Business Valuation',
  'Costing System Setup & Cost Audit',
  'Internal Audit',
  'Independent Director',
  'Business Restructuring &Debt Funding & SEBI Listing',
  'Insolvency & Bankruptcy (IBC)',
];

const globalExperience = ['India', 'UAE', 'U.S.', 'Kuwait', 'Egypt', 'Liberia'];

function CountUp({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return <>{count}{suffix}</>;
}

export function TrustIndicators() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-10 md:py-16 overflow-hidden border-y border-secondary-100">
      {/* Fixed Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=2000")' }}
      />
      
      {/* Light Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/95 z-0" />

      {/* Subtle Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #0f172a 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div ref={ref} className="container-custom relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 tracking-tight">
            Why Businesses <span className="text-accent-600">Trust Us</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center py-2 relative group ${
                i !== stats.length - 1 ? 'border-r border-secondary-100' : ''
              }`}
            >
              <div className="absolute inset-0 bg-primary-50/0 group-hover:bg-primary-50/50 transition-colors duration-300 rounded-xl" />
              <div className="text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-1 relative">
                <span className="bg-gradient-to-br from-secondary-900 to-primary-700 bg-clip-text text-transparent">
                  <CountUp target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                </span>
              </div>
              <div className="text-secondary-500 text-[10px] sm:text-[11px] font-semibold tracking-wide">{stat.label}</div>
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary-500 transition-all duration-500 ${isVisible ? 'w-8' : 'w-0'}`} style={{ transitionDelay: `${i * 150}ms` }} />
            </div>
          ))}
        </div>

        <div className="border-t border-secondary-100 pt-5">
          <p className="text-center text-secondary-500 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase mb-3">
            Professional Credentials
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-3">
            {credentials.map((cred, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-secondary-200 hover:border-primary-400 hover:bg-primary-50 transition-all duration-300 shadow-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                <span className="text-secondary-800 text-[11px] sm:text-xs font-semibold">{cred}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-center">
            <span className="text-secondary-600 text-xs font-bold tracking-wide">
              Global Experience:
            </span>
            <span className="text-secondary-700 text-xs font-medium">
              India; UAE; U.S.; Kuwait; Egypt; Liberia;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustIndicators;

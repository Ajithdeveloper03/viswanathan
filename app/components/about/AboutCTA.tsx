'use client';
import { ArrowRight, Mail } from 'lucide-react';



import { useRef, useEffect } from 'react';

export function AboutCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-scale').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 lg:py-24 relative overflow-hidden bg-white">
      <div className="container-custom relative z-10">
        
        <div className="bg-white rounded-[2.5rem] p-10 md:p-14 lg:p-20 shadow-soft border border-secondary-200 relative reveal-scale">

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            
            {/* Left Content */}
            <div className="text-center lg:text-left max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
                Let’s Work Together
              </h2>
              <p className="text-lg md:text-xl text-secondary-600 leading-relaxed">
                If your organization is looking to improve profitability, optimize costs, strengthen governance, evaluate an investment, or build better financial systems, we would be pleased to understand your requirements.
              </p>
            </div>
            
            {/* Right Button */}
            <div className="flex-shrink-0">
              <a href="#" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-2xl hover:bg-primary-700 hover:scale-[1.02] transition-all shadow-lg group">
                <Mail className="w-6 h-6" />
                Contact Us Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          <div className="w-full h-px bg-secondary-200 my-10 lg:my-12 relative z-10" />

          {/* Bottom Branding */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-secondary-900">
              Viswanathan R Associates
            </h3>
            <p className="text-primary-700 font-bold tracking-widest uppercase text-xs md:text-sm">
              Finance <span className="text-secondary-300 mx-2">•</span> Cost Management <span className="text-secondary-300 mx-2">•</span> Valuation <br className="hidden md:block lg:hidden" />
              <span className="hidden lg:inline text-secondary-300 mx-2">•</span> Governance <span className="text-secondary-300 mx-2">•</span> Business Value
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutCTA;

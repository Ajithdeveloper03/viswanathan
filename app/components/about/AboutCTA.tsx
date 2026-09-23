'use client';

import { useRef, useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

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
    <section ref={ref} className="py-20 lg:py-32 relative overflow-hidden bg-primary-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-100/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6 reveal">
            Let’s Work Together
          </h2>
          
          <p className="text-xl text-secondary-700 leading-relaxed mb-10 reveal max-w-3xl mx-auto">
            If your organization is looking to improve profitability, optimize costs, strengthen governance, evaluate an investment, or build better financial systems, we would be pleased to understand your requirements.
          </p>
          
          <div className="reveal-scale mb-16">
            <a href="#" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2 group">
              <Mail className="w-5 h-5" />
              Contact Us Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="reveal">
            <h3 className="text-2xl font-bold text-secondary-900 mb-3">
              Viswanathan R Associates
            </h3>
            <p className="text-primary-700 font-semibold tracking-wide uppercase text-sm md:text-base">
              Finance. Cost Management. Valuation. Governance. Business Value.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutCTA;

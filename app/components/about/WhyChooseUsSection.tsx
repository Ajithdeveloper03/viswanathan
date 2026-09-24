'use client';
import { CheckCircle } from 'lucide-react';



import { useRef, useEffect } from 'react';

export function WhyChooseUsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach((el, i) => {
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

  const reasons = [
    "Deep finance, costing, valuation, and governance expertise.",
    "Experience across multiple industries and international markets.",
    "Understanding of both boardroom priorities and operational realities.",
    "Ability to work with promoters, management teams, investors, and professional advisers.",
    "Practical recommendations supported by analysis and implementation focus.",
    "A professional commitment to confidentiality, independence, and integrity."
  ];

  return (
    <section ref={ref} className="relative bg-white py-12 md:py-16 lg:py-24">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="section-label reveal inline-flex mb-4">Our Differentiators</div>
            <h2 className="section-title mb-6 reveal">Why Choose Us?</h2>
            <p className="section-subtitle mx-auto reveal text-secondary-700">
              Clients choose Viswanathan R Associates for our combination of:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4 items-start reveal bg-secondary-50 p-6 rounded-2xl border border-secondary-100 hover:border-primary-200 transition-colors">
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                <p className="text-secondary-800 font-medium leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary-900 to-slate-900 rounded-2xl lg:rounded-[2rem] p-8 md:p-8 lg:p-12 text-center shadow-2xl reveal-scale relative overflow-hidden">
            <div className="absolute inset-0 noise-bg opacity-30" />
            <p className="text-xl md:text-2xl text-white leading-relaxed font-serif relative z-10">
              Whether you are evaluating a business, improving cost performance, strengthening controls, planning an investment, managing compliance, or navigating financial and operational complexity, Viswanathan R Associates can help turn information into action and action into measurable value.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;

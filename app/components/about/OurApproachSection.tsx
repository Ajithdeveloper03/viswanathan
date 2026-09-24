'use client';

import { useRef, useEffect } from 'react';
import { Eye, Settings2, ShieldCheck, Target, TrendingUp } from 'lucide-react';

export function OurApproachSection() {
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

  const approaches = [
    {
      title: 'Clarity',
      description: 'Converting complex financial and operational information into clear insights.',
      icon: Eye
    },
    {
      title: 'Practicality',
      description: 'Designing solutions that can be implemented and sustained.',
      icon: Settings2
    },
    {
      title: 'Integrity',
      description: 'Providing objective, transparent, and professionally responsible advice.',
      icon: ShieldCheck
    },
    {
      title: 'Business focus',
      description: 'Connecting financial analysis with operational performance and strategic goals.',
      icon: Target
    },
    {
      title: 'Measurable value',
      description: 'Identifying opportunities to improve profitability, efficiency, control, and long-term enterprise value.',
      icon: TrendingUp
    }
  ];

  return (
    <section ref={ref} className="relative bg-white py-16 lg:py-24 overflow-x-clip">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          <div className="lg:sticky lg:top-32">
            <div className="reveal-left">
              <div className="section-label inline-flex mb-4">Methodology</div>
              <h2 className="section-title mb-6">Our Approach</h2>
              <div className="text-secondary-600 text-lg leading-relaxed mb-8 space-y-4">
                <p>
                  Every organization has different goals, challenges, and operating realities. We begin by understanding the business—not just its financial statements.
                </p>
                <p className="font-medium text-secondary-800">
                  Our approach is based on:
                </p>
              </div>
              
              <div className="hidden lg:block">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {approaches.map((item, index) => (
              <div key={index} className="flex gap-4 card !p-5 hover:-translate-y-1 transition-transform reveal">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center border border-primary-100 mt-0.5">
                  <item.icon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-1">{item.title}:</h3>
                  <p className="text-secondary-600 leading-snug text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default OurApproachSection;

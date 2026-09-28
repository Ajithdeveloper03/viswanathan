'use client';

import { useRef, useEffect } from 'react';
import { Award, Globe, Target, Users, Settings, ShieldCheck } from 'lucide-react';

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
    {
      title: "Expertise",
      description: "Deep finance, costing, valuation, and governance expertise.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
      icon: Award
    },
    {
      title: "Experience",
      description: "Experience across multiple industries and international markets.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
      icon: Globe
    },
    {
      title: "Understanding",
      description: "Understanding of both boardroom priorities and operational realities.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600",
      icon: Target
    },
    {
      title: "Collaboration",
      description: "Ability to work with promoters, management teams, investors, and professional advisers.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600",
      icon: Users
    },
    {
      title: "Practicality",
      description: "Practical recommendations supported by analysis and implementation focus.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      icon: Settings
    },
    {
      title: "Integrity",
      description: "A professional commitment to confidentiality, independence, and integrity.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600",
      icon: ShieldCheck
    }
  ];

  return (
    <section ref={ref} className="relative bg-white py-8 lg:py-12">
      <div className="container-custom relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="section-label reveal inline-flex mb-4">Our Differentiators</div>
          <h2 className="section-title mb-6 reveal">
            Why Choose Us for Business <br /> Valuation Service in Chennai?
          </h2>
          <p className="section-subtitle mx-auto reveal text-secondary-700">
            Clients choose Viswanathan R Associates for our combination of:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div key={index} className={`group relative bg-white rounded-2xl overflow-hidden border border-secondary-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 reveal ${index === 4 ? 'lg:col-start-2' : ''}`}>
              {/* Image Header */}
              <div className="relative h-56 w-full overflow-hidden">
                <img src={reason.image} alt={reason.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Title over image */}
                <div className="absolute bottom-5 left-6 pr-20">
                  <h3 className="text-2xl font-bold text-white tracking-wide">{reason.title}</h3>
                </div>
              </div>

              {/* Overlapping Plus Button */}
              <div className="absolute top-[200px] right-6 z-10">
                <button className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-lg hover:bg-primary-700 hover:scale-110 transition-all cursor-default">
                  <reason.icon className="w-6 h-6" />
                </button>
              </div>

              {/* Content area */}
              <div className="p-6 pt-10 bg-white">
                <p className="text-secondary-600 text-[15px] leading-relaxed font-medium">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-900 to-slate-900 rounded-[2rem] p-8 md:p-12 text-center shadow-2xl reveal-scale relative overflow-hidden">
            <div className="absolute inset-0 noise-bg opacity-30" />
            <p className="text-xl md:text-2xl text-white leading-relaxed font-serif relative z-10">
              Whether you are seeking a business valuation service in Chennai, evaluating a business, improving cost performance, strengthening controls, planning an investment, managing compliance, or navigating financial and operational complexity, Viswanathan R Associates can help turn information into action and action into measurable value.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;

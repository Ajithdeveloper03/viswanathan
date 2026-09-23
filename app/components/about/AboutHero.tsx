'use client';

import { useRef, useEffect } from 'react';
import { Linkedin } from 'lucide-react';

export function AboutHero() {
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

  return (
    <section ref={ref} className="relative bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-white z-0" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary-50/50 to-transparent z-0" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="section-label reveal inline-flex mb-6">About Us</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight mb-6 reveal">
            Viswanathan R Associates
          </h1>
          <p className="text-xl md:text-2xl font-medium text-primary-700 italic reveal">
            “Transforming financial insight into measurable business value.”
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-secondary-700 text-lg leading-relaxed text-justify sm:text-left">
          <p className="reveal">
            At Viswanathan R Associates, we help businesses make better financial decisions, improve operational performance, manage risk, and create sustainable value.
          </p>
          <p className="reveal">
            Founded by Viswanathan Rajagopalan, a Finance, Cost Management and Corporate Secretary professional, with more than 30 years of cross-functional and international experience, our firm combines financial expertise, commercial insight, Governance knowledge, and practical business understanding.
          </p>
          <p className="reveal">
            Our professional experience spans Manufacturing, Mining, Automotive, Healthcare, Information Technology, Pharmaceuticals, Logistics, and other operationally complex industries.{' '}
            <a href="#" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-semibold hover:underline transition-colors">
              (Link to LinkedIn Profile) <Linkedin className="w-4 h-4" />
            </a>
          </p>
          <p className="reveal">
            Our international experience includes India, Kuwait, the UAE, Egypt, Liberia, and other business environments. This enables us to understand the financial, operational, regulatory, and cultural factors that influence business performance across markets.
          </p>
          <p className="reveal">
            We believe Finance should go beyond accounting and reporting. It should provide clear insight, support confident decision-making, and help organizations improve profitability. Our approach is therefore practical, analytical, and focused on measurable business outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;

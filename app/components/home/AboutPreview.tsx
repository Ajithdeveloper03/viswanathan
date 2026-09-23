'use client';

import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { companyInfo } from '@/app/lib/siteData';

export function AboutPreview() {
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
    <section className="relative bg-white overflow-hidden">
      <div ref={ref} className="grid lg:grid-cols-2 min-h-[90vh]">
        <div className="flex flex-col justify-center px-6 lg:px-10 py-10 lg:py-16 reveal-left h-full w-full">
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-end px-6 lg:px-10 pt-16 pb-8 min-h-[350px] md:min-h-[500px]">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200"
                alt="Our Story"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 brightness-110 contrast-125 saturate-150"
              />
              <div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
            </div>

            <div className="absolute inset-0 opacity-[0.05] z-0"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />

            <div className="relative z-10">
              <div className="section-label-dark reveal">About Us</div>
              <h2 className="text-[1.9rem] font-bold text-white leading-[1.1] mt-4 mb-8 reveal">
                Viswanathan R Associates<br />
                <span className="text-white/60 text-xl font-medium mt-2 block">“Transforming financial insight into measurable business value.”</span>
              </h2>

              <div className="mb-10 reveal">
                <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed max-w-sm text-justify sm:text-left">
                  At Viswanathan R Associates, we help businesses make better financial decisions, improve operational performance, manage risk, and create sustainable value.
                </p>
              </div>


            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center px-6 md:px-10 lg:px-16 py-12 md:py-16 lg:py-24 h-full">
          <div className="w-full xl:pr-10">
            <div className="section-label reveal">Our Story</div>
            <div className="text-secondary-700 text-base md:text-lg leading-relaxed mb-10 reveal space-y-5 text-justify sm:text-left">
              <p>
                Founded by Viswanathan Rajagopalan—a Finance and Corporate Secretary professional with over 30 years of global experience—our firm blends financial expertise, commercial insight, and governance knowledge.
              </p>
              <p>
                Our experience spans operationally complex industries like Manufacturing, Mining, Automotive, Healthcare, IT, Pharmaceuticals, and Logistics. <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-semibold hover:underline transition-colors">(View LinkedIn Profile)</a>
              </p>
              <p>
                Our international footprint across India, the Middle East, and Africa enables us to navigate the unique financial, regulatory, and cultural factors that drive performance in diverse markets.
              </p>
              <p>
                We believe finance must go beyond accounting to provide clear insights, support confident decisions, and improve profitability. Our approach is highly practical, analytical, and focused on measurable business outcomes.
              </p>
            </div>

            <span className="btn-primary group cursor-pointer reveal">
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;

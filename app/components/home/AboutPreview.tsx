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
                Building Stronger Businesses Through<br />
                <span className="text-white/60">Finance, Governance & Innovation</span>
              </h2>

              <div className="mb-10 reveal">
                <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed max-w-sm">
                  Viswanathan R Associates is a professional consulting firm providing end-to-end financial advisory, business consulting, valuation, insolvency support, governance, and strategic finance services.
                </p>
              </div>

              <div className="flex flex-wrap gap-8 reveal">
                <div>
                  <div className="text-3xl font-bold text-white">25+</div>
                  <div className="text-white/50 text-xs mt-1 uppercase tracking-wider font-semibold">Years Experience</div>
                </div>
                <div className="hidden sm:block w-px bg-white/20" />
                <div>
                  <div className="text-3xl font-bold text-white">970+</div>
                  <div className="text-white/50 text-xs mt-1 uppercase tracking-wider font-semibold">Valuations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center px-10 lg:px-16 py-24 h-full">
          <div className="w-full xl:pr-10">
            <p className="text-base font-semibold tracking-widest text-primary-600 uppercase mb-4 reveal">
              Our Story
            </p>
            <div className="text-secondary-700 text-base leading-relaxed mb-8 reveal space-y-4">
              <p>Our firm believes that sustainable business success is achieved through strong financial controls, effective governance, technology adoption, and continuous improvement.</p>
              <p>We partner with businesses to enhance profitability, improve operational efficiency, ensure regulatory compliance, and support long-term growth.</p>
              <p>Whether it is a startup, MSME, multinational corporation, or financial institution, we deliver practical solutions tailored to business objectives.</p>
            </div>

            <div className="space-y-4 mb-10">
              <div className="p-2 rounded-xl border-l-4 border-primary-600 bg-white shadow-soft reveal">
                <div className="text-xs font-bold tracking-widest text-primary-600 uppercase mb-2">Vision</div>
                <p className="text-secondary-700 text-sm leading-relaxed">
                  To be one of India's most trusted corporate advisory firms, delivering innovative, ethical, and technology-driven financial solutions that create lasting business value.
                </p>
              </div>
              <div className="p-2 rounded-xl border-l-4 border-secondary-400 bg-white shadow-soft reveal">
                <div className="text-xs font-bold tracking-widest text-secondary-500 uppercase mb-2">Mission</div>
                <p className="text-secondary-700 text-sm leading-relaxed">
                  To empower businesses with strategic financial, governance, technology, and operational solutions while upholding integrity, professionalism, and client commitment.
                </p>
              </div>
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

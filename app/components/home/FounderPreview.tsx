'use client';
import { CheckCircle2, ArrowRight } from 'lucide-react';



import { useRef, useEffect } from 'react';

import { founder } from '@/app/lib/siteData';

export function FounderPreview() {
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
    <section className="relative bg-white overflow-hidden section-padding">
      <div ref={ref} className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:p-12 items-center">
          {/* Left Side: Content */}
          <div className="lg:col-span-7 lg:pr-8">
            <div className="section-label reveal">Leadership</div>
            <h2 className="section-title mt-4 mb-6 reveal">
              Meet Our <span className="gradient-text">Founder</span>
            </h2>
            <div className="text-secondary-600 text-lg leading-relaxed mb-8 reveal space-y-5 text-justify sm:text-left">
              <p className="text-xl font-medium text-secondary-800 border-l-4 border-primary-500 pl-4 py-1 mb-6">
                “Transforming financial insight into measurable business value.”
              </p>
              <p>
                Viswanathan Rajagopalan is a Finance, Cost Management, and Corporate Secretary professional with over 30 years of cross-functional and global experience.
              </p>
              <p>
                His expertise spans operationally complex industries—including Manufacturing, Mining, Automotive, Healthcare, IT, and Logistics—across India, Kuwait, the UAE, Egypt, and Liberia. <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-semibold hover:underline transition-colors whitespace-nowrap">(View LinkedIn Profile)</a>
              </p>
              <p>
                This deep understanding of diverse financial, regulatory, and cultural environments enables him to help businesses make better decisions, improve operational performance, and manage risk.
              </p>
              <p>
                He believes finance must go beyond reporting to provide clear insights and drive profitability, focusing on practical, analytical, and measurable business outcomes.
              </p>
            </div>

          </div>

          {/* Right Side: Image Card */}
          <div className="lg:col-span-5 reveal-scale h-full">
            <div className="relative h-full min-h-[350px] lg:min-h-[450px]">
              {/* Offset Border Background */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary-300 rounded-2xl lg:rounded-[2rem]" />

              {/* Main Card */}
              <div className="relative h-full rounded-2xl lg:rounded-[2rem] overflow-hidden bg-white flex flex-col items-center shadow-soft-xl border border-secondary-100">
                
                {/* Full Container Image */}
                <img 
                  src="/founder.png" 
                  alt={founder.name} 
                  className="absolute inset-0 w-full h-full object-cover object-top z-0"
                />

                {/* Bottom Gradient for Text Readability */}
                <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 25%, transparent 45%)' }} />

                {/* Animated Scrolling Text (Overlay) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center opacity-30 select-none mix-blend-overlay z-0">
                  <div className="whitespace-nowrap animate-marquee flex text-white/50">
                    <span className="text-[4rem] sm:text-[6rem] lg:text-[8rem] font-bold uppercase mx-8">VR Associates</span>
                    <span className="text-[4rem] sm:text-[6rem] lg:text-[8rem] font-bold uppercase mx-8">VR Associates</span>
                    <span className="text-[4rem] sm:text-[6rem] lg:text-[8rem] font-bold uppercase mx-8">VR Associates</span>
                    <span className="text-[4rem] sm:text-[6rem] lg:text-[8rem] font-bold uppercase mx-8">VR Associates</span>
                  </div>
                </div>

                {/* Bottom Name & Title */}
                <div className="relative z-10 w-full text-center pb-10 px-6 mt-auto">
                  <h3 className="text-3xl font-bold text-white tracking-wide mb-1.5 drop-shadow-sm">{founder.name}</h3>
                  <p className="text-primary-300 text-sm font-bold tracking-wider drop-shadow-sm">{founder.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderPreview;

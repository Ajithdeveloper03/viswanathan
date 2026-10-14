'use client';

import { ArrowRight, Layers, ShieldCheck, CheckCircle2, Globe, Building2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const keySectors = [
  'Energy, Oil & Mining',
  'Technology, SaaS & AI',
  'FinTech, Banking & NBFC',
  'Healthcare & Pharma',
  'Heavy Engineering & Infra',
  'Real Estate & Hospitality',
];

export function Industries() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), (i % 4) * 100);
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
    <section className="py-20 md:py-28 bg-[#fbfcfe] relative overflow-hidden" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-primary-100/40 rounded-full blur-[140px] pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-accent-100/30 rounded-full blur-[130px] pointer-events-none -z-0"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Content */}
          <div className="lg:col-span-6 xl:col-span-7 reveal-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-800 text-xs font-bold tracking-widest uppercase rounded-full border border-primary-200/80 mb-5 shadow-sm">
              <Layers className="w-3.5 h-3.5 text-accent-600" />
              Cross-Industry Expertise
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary-900 leading-[1.18] mb-6 tracking-tight">
              Industries <span className="text-accent-600">We Serve</span>
            </h2>

            <p className="text-secondary-600 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Every sector operates under distinct regulatory mandates, asset compositions, and capital dynamics. We provide precision financial advisory, independent valuations, cost audits, and strategic restructuring tailored strictly to the operational realities of your industry.
            </p>

            {/* Sector tags grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8">
              {keySectors.map((sector) => (
                <div
                  key={sector}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-secondary-200/80 text-secondary-700 text-xs sm:text-sm font-semibold shadow-xs hover:border-accent-400 hover:text-primary-800 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-600 shrink-0" />
                  <span className="truncate">{sector}</span>
                </div>
              ))}
            </div>

            {/* Trust highlights */}
            <div className="flex flex-wrap items-center gap-6 pt-2 pb-8 border-t border-secondary-200/60 text-xs sm:text-sm text-secondary-600">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary-700" />
                <span><strong>25+ Sectors</strong> Advised</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent-600" />
                <span><strong>IBBI, SEBI & Global</strong> Compliance</span>
              </div>
            </div>

            <div>
              <Link
                href="/industries"
                className="btn-primary py-3.5 px-8 text-sm sm:text-base group inline-flex items-center gap-3 shadow-md hover:shadow-xl transition-all"
              >
                Explore All Industries We Serve
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="lg:col-span-6 xl:col-span-5 relative reveal-up">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-secondary-200/80 bg-white group">
                <div className="relative h-[340px] sm:h-[400px] w-full overflow-hidden">
                  <Image
                    src="/images/industries1.png"
                    alt="Industries We Serve - Cross-sector financial advisory"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent"></div>
                  
                  {/* Bottom overlay title on image */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs uppercase tracking-widest font-semibold text-accent-400 mb-1">
                      Sector Focus
                    </p>
                    <p className="text-lg sm:text-xl font-bold">
                      Mining, Technology, Manufacturing & Beyond
                    </p>
                  </div>
                </div>
              </div>

              {/* Overlapping secondary decorative badge / card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-secondary-200/80 max-w-[240px] z-20 hidden sm:flex items-center gap-3.5 animate-float">
                <div className="w-11 h-11 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-secondary-900 leading-none">25+</div>
                  <div className="text-xs text-secondary-600 font-medium mt-1">Specialized Sectors Covered</div>
                </div>
              </div>

              {/* Top floating badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-primary-900 text-white rounded-2xl px-4 py-3 shadow-xl border border-primary-800 z-20 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-accent-400" />
                <span className="text-xs font-bold tracking-wide">Multi-Domain Expertise</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Industries;

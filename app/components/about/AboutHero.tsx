'use client';
import { Linkedin, ArrowDown } from 'lucide-react';



import { useRef, useEffect } from 'react';

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

  const scrollToContent = () => {
    const content = document.getElementById('about-content');
    if (content) {
      content.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={ref}>
      {/* Banner Section (Full Height) */}
      <section className="relative min-h-[100dvh] flex flex-col overflow-hidden pt-28 sm:pt-32 lg:pt-36">
        
        {/* Static Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/banner2.png"
            alt="About Us Banner"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Light overlay for contrast */}
        <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 40%, transparent 60%)' }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Content */}
        <div className="container-custom w-full relative z-10 flex-1 flex flex-col justify-center pb-24">
          <div className="max-w-3xl w-full flex flex-col items-center sm:items-start text-center sm:text-left">
            
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-secondary-200 mb-6 lg:mb-8 shadow-sm reveal">
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-secondary-600 uppercase">
                Discover Our Journey
              </span>
            </div>

            {/* Main headline */}
            <div className="mb-6 w-full">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-secondary-900 leading-[1.1] drop-shadow-md text-center sm:text-left reveal">
                Building Sustainable <span className="gradient-text block mt-2">Business Value</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-secondary-600 font-medium max-w-xl mb-8 lg:mb-10 leading-relaxed text-center sm:text-left px-4 sm:px-0 reveal">
              A trusted partner providing end-to-end corporate finance, cost management, and governance advisory services for global enterprises.
            </p>
            
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={scrollToContent}>
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary-600 mb-2">Read More</span>
          <div className="w-8 h-12 rounded-full border-2 border-secondary-400 flex items-start justify-center p-1">
            <ArrowDown className="w-4 h-4 text-secondary-600 animate-bounce mt-1" />
          </div>
        </div>
      </section>

      {/* Text Content Section */}
      <section id="about-content" className="relative bg-white pt-8 pb-4">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:p-12 lg:gap-16 items-stretch">
            
            {/* Left Side: Content */}
            <div className="flex flex-col justify-center text-secondary-700 text-lg leading-relaxed text-justify sm:text-left h-full">
              <div className="mb-10 text-center sm:text-left">
                <div className="section-label reveal inline-flex mb-4">About Us &ndash; Business Valuation Service in Chennai</div>
                <h2 className="text-3xl md:text-5xl font-bold text-secondary-900 mb-6 reveal">
                  Viswanathan R Associates
                </h2>
                <p className="text-xl md:text-2xl font-medium text-primary-700 italic reveal">
                  “Transforming financial insight into measurable business value.”
                </p>
              </div>

              <div className="space-y-6">
                <p className="reveal">
                  At Viswanathan R Associates, we help businesses make better financial decisions, improve operational performance, manage risk, and create sustainable value.
                </p>
                <p className="reveal">
                  Founded by Viswanathan Rajagopalan, a Finance, Cost Management and Corporate Secretary professional, with more than 30 years of cross-functional and international experience, our firm combines financial expertise, commercial insight, Governance knowledge, and practical business understanding.
                </p>
                <p className="reveal">
                  Our professional experience spans Manufacturing, Mining, Automotive, Healthcare, Information Technology, Pharmaceuticals, Logistics, and other operationally complex industries.
                </p>
                <p className="reveal">
                  Our international experience includes India, Kuwait, the UAE, Egypt, Liberia, and other business environments. This enables us to understand the financial, operational, regulatory, and cultural factors that influence business performance across markets.
                </p>
                <p className="reveal">
                  We believe Finance should go beyond accounting and reporting. It should provide clear insight, support confident decision-making, and help organizations improve profitability. Our approach is therefore practical, analytical, and focused on measurable business outcomes.
                </p>
                <div className="reveal mt-4">
                  <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0a66c2] text-white font-semibold rounded-xl hover:bg-[#004182] transition-colors shadow-sm w-fit">
                    <Linkedin className="w-5 h-5" /> View LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="reveal-scale h-full min-h-[250px] lg:h-[400px] lg:min-h-full">
              <div className="relative w-full h-full rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200" 
                  alt="Viswanathan R Associates Team" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutHero;

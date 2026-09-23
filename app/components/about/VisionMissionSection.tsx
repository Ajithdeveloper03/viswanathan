'use client';

import { useRef, useEffect } from 'react';
import { Compass, Rocket, CheckCircle2 } from 'lucide-react';

export function VisionMissionSection() {
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

  const missionPoints = [
    "Understand the true drivers of cost and profitability.",
    "Make informed strategic and investment decisions.",
    "Strengthen financial controls and corporate governance.",
    "Improve business processes and management reporting.",
    "Build resilient, efficient, and value-driven enterprises."
  ];

  return (
    <section ref={ref} className="relative py-16 lg:py-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-slate-900 z-0">
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }}
        />
        <div className="absolute inset-0 noise-bg" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Vision Box */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 lg:p-12 reveal-left">
            <div className="w-14 h-14 rounded-2xl bg-primary-500/20 flex items-center justify-center mb-8 border border-primary-400/30">
              <Compass className="w-7 h-7 text-primary-300" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-xl text-white/80 leading-relaxed font-medium">
              To be a trusted partner for businesses seeking stronger financial visibility, better cost discipline, effective governance, and sustainable growth.
            </p>
          </div>

          {/* Mission Box */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 lg:p-12 reveal">
            <div className="w-14 h-14 rounded-2xl bg-accent-500/20 flex items-center justify-center mb-8 border border-accent-400/30">
              <Rocket className="w-7 h-7 text-accent-300" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-white/90 mb-6 font-medium">To help organizations:</p>
            <ul className="space-y-4">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default VisionMissionSection;

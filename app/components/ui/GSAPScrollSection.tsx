"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ScrollItem {
  title: string;
  desc?: string;
  items: string[];
  icon?: React.ReactNode;
}

interface GSAPScrollSectionProps {
  title: string;
  subtitle?: string;
  items: ScrollItem[];
}

const defaultImages = [
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
];

export default function GSAPScrollSection({ title, subtitle, items }: GSAPScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.stacked-card') as HTMLElement[];
      if(cards.length === 0) return;

      // Only apply ScrollTrigger and stacking animations on desktop (min-width: 1024px)
      let mm = gsap.matchMedia();
      
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: () => {
               const h = containerRef.current?.offsetHeight || 0;
               const wh = window.innerHeight;
               return h > wh ? "bottom bottom" : "top 40px";
            },
            end: `+=${cards.length * 100}%`,
            pin: true,
            scrub: 1, 
            markers: false
          }
        });

        cards.forEach((card, i) => {
          if (i === 0) {
            gsap.set(card, { y: 0, scale: 1, transformOrigin: "top center" });
            return;
          }

          gsap.set(card, { y: "150vh", scale: 1, transformOrigin: "top center" });

          tl.to(card, {
            y: i * 20, 
            duration: 1,
            ease: "none"
          }, i);

          for (let j = 0; j < i; j++) {
            tl.to(cards[j], {
              scale: 1 - ((i - j) * 0.04), 
              duration: 1,
              ease: "none"
            }, i);
          }
        });
      });

    }, containerRef); 

    return () => ctx.revert(); 
  }, []);

  return (
    <section className="bg-white relative overflow-hidden" ref={containerRef}>
      {/* Abstract Background Design */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #f8f9fa 0, #f8f9fa 2px, transparent 2px, transparent 12px)', opacity: 0.8 }}></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-100/30 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div className="w-full flex flex-col justify-center items-center relative z-10 px-4 md:px-8 lg:px-16 py-8 lg:py-12 lg:min-h-screen">
        
        {/* Header */}
        <div className="text-center w-full max-w-4xl mx-auto mb-12 relative z-10">
          {subtitle && (
            <div className="inline-block px-4 py-1.5 bg-white text-primary-700 font-bold text-sm tracking-wider uppercase rounded-full mb-4 shadow-sm border border-secondary-100">
              {subtitle}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2]">
            {title}
          </h2>
        </div>

        {/* Stacked Cards Wrapper: Flex column on mobile, CSS Grid on desktop for overlapping */}
        <div className="relative w-full max-w-6xl mx-auto flex flex-col gap-8 lg:grid lg:grid-cols-1 lg:grid-rows-1 lg:perspective-[1000px] lg:pb-24">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="stacked-card lg:col-start-1 lg:row-start-1 w-full flex flex-col lg:flex-row bg-white rounded-3xl lg:rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.08)] lg:shadow-[0_-10px_40px_rgba(0,0,0,0.15)] border border-secondary-100 overflow-hidden transform-gpu"
              style={{ zIndex: idx, backfaceVisibility: 'hidden' }}
            >
              
              {/* Left Image Side */}
              <div className="w-full lg:w-[40%] relative min-h-[250px] lg:min-h-[400px]">
                <Image 
                  src={defaultImages[idx % defaultImages.length]}
                  alt={`Slide ${idx+1}`}
                  fill
                  className="object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply"></div>
              </div>

              {/* Right Content Side - Compacted Spacing */}
              <div className="w-full lg:w-[60%] p-6 lg:p-10 flex flex-col justify-center bg-white">
                {item.icon && (
                  <div className="w-10 h-10 bg-accent-50 rounded-xl flex items-center justify-center text-accent-600 mb-4 shadow-sm border border-accent-100">
                    {item.icon}
                  </div>
                )}
                <h3 className="text-2xl lg:text-3xl font-extrabold text-primary-900 mb-2">{item.title}</h3>
                {item.desc && <p className="text-secondary-600 text-base lg:text-lg mb-5 leading-relaxed font-medium">{item.desc}</p>}
                
                <ul className="space-y-3">
                  {item.items.map((point, i) => {
                    const splitIndex = point.indexOf(': ');
                    const hasColon = splitIndex !== -1;
                    const boldText = hasColon ? point.substring(0, splitIndex) : point;
                    const restText = hasColon ? point.substring(splitIndex + 2) : '';

                    return (
                      <li key={i} className="flex items-start gap-4 text-secondary-600 font-medium text-[15px] lg:text-base">
                        <div className="mt-1 flex-shrink-0">
                           <CheckCircle2 className="w-5 h-5 text-accent-500 fill-accent-50" />
                        </div>
                        <span className="leading-relaxed">
                          {hasColon ? (
                            <>
                              <strong className="text-primary-900">{boldText}: </strong>
                              {restText}
                            </>
                          ) : (
                            point
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

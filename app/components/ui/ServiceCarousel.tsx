'use client';
import { ArrowLeft, ArrowRight, LucideIcon } from 'lucide-react';

import React, { useRef } from 'react';

interface CarouselCard {
  tag?: string; // e.g. "01", "New", "Core" (placed above the dot)
  title: string;
  desc: React.ReactNode;
  icon?: LucideIcon;
}

interface ServiceCarouselProps {
  title?: string;
  cards: CarouselCard[];
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ title, cards }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-primary-900 py-24 overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-16 flex justify-between items-end relative z-10">
        {title && (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] max-w-2xl">
            {title}
          </h2>
        )}
        
        {/* Navigation Arrows */}
        <div className="hidden md:flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="w-14 h-14 rounded-full bg-white text-primary-900 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-all shadow-lg z-20 relative"
            aria-label="Scroll Left"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-14 h-14 rounded-full bg-white text-primary-900 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-all shadow-lg z-20 relative"
            aria-label="Scroll Right"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* The Continuous Track Line */}
      <div className="absolute top-[280px] md:top-[260px] left-0 w-full h-px bg-white/20 z-0"></div>

      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-16 px-4 md:px-8 lg:px-16 gap-6 md:gap-8 relative z-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div key={idx} className="min-w-[85vw] md:min-w-[400px] max-w-[450px] snap-start flex flex-col relative group">
              
              {/* Timeline Marker */}
              <div className="flex flex-col items-center mb-10 h-20 justify-end relative">
                {card.tag && (
                  <div className="px-5 py-1.5 rounded-full border border-white/20 text-white/80 text-sm font-bold tracking-widest uppercase mb-4 group-hover:border-accent-500 group-hover:text-accent-500 transition-colors">
                    {card.tag}
                  </div>
                )}
                {/* The Dot */}
                <div className="w-4 h-4 rounded-full bg-white group-hover:bg-accent-500 transition-colors relative z-10 shadow-[0_0_0_4px_rgba(31,44,80,1)]"></div>
              </div>

              {/* The Card */}
              <div className="bg-primary-950/50 backdrop-blur-md border border-white/10 rounded-2xl lg:rounded-[2rem] p-10 flex-grow hover:bg-primary-800 transition-colors duration-300 shadow-xl group-hover:-translate-y-2 group-hover:border-accent-500/50">
                {Icon && (
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent-400 mb-8 border border-white/5 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                )}
                <h4 className="text-2xl font-extrabold text-white mb-4 leading-tight">{card.title}</h4>
                <p className="text-secondary-300 leading-relaxed text-sm md:text-base">
                  {card.desc}
                </p>
              </div>

            </div>
          );
        })}
      </div>

      {/* Mobile Nav (Visible only on small screens) */}
      <div className="flex md:hidden justify-center gap-6 mt-4 relative z-20">
        <button 
          onClick={() => scroll('left')}
          className="w-14 h-14 rounded-full bg-white text-primary-900 flex items-center justify-center hover:bg-accent-500 transition-all shadow-lg"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="w-14 h-14 rounded-full bg-white text-primary-900 flex items-center justify-center hover:bg-accent-500 transition-all shadow-lg"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

    </section>
  );
};

export default ServiceCarousel;

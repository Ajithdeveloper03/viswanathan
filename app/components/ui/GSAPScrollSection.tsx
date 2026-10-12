"use client";

import React, { useState } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export interface ScrollItem {
  title: string;
  desc?: string;
  items: string[];
  icon?: React.ReactNode;
  image?: string;
}

interface GSAPScrollSectionProps {
  title: string;
  subtitle?: string;
  items: ScrollItem[];
  bg?: string;
  theme?: string;
}

const defaultImages = [
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
];

export default function GSAPScrollSection({ title, subtitle, items, bg = 'bg-white' }: GSAPScrollSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!items || items.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const currentItem = items[currentIndex];

  return (
    <section className={`${bg} relative overflow-hidden py-16 md:py-24`}>
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-200/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-200/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div className="w-full flex flex-col justify-center items-center relative z-10 px-4 md:px-8 lg:px-16">
        
        {/* Header with Title and Prev/Next Navigation Controls */}
        <div className="w-full max-w-6xl mx-auto mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-3xl">
            {subtitle && (
              <div className="inline-block px-4 py-1.5 bg-white text-primary-700 font-bold text-sm tracking-wider uppercase rounded-full mb-4 shadow-sm border border-secondary-100">
                {subtitle}
              </div>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2]">
              {title}
            </h2>
          </div>

          {/* Desktop/Tablet Prev & Next Buttons */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <span className="text-sm font-semibold text-secondary-500 mr-2">
              {currentIndex + 1} / {items.length}
            </span>
            <button
              onClick={handlePrev}
              aria-label="Previous service slide"
              className="w-12 h-12 rounded-full bg-white text-primary-900 border border-secondary-200 shadow-md hover:bg-primary-900 hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next service slide"
              className="w-12 h-12 rounded-full bg-white text-primary-900 border border-secondary-200 shadow-md hover:bg-primary-900 hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Active Card Slider */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="w-full flex flex-col lg:flex-row bg-white rounded-3xl lg:rounded-[2.5rem] shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-secondary-100 overflow-hidden transition-all duration-500">
            
            {/* Card Image */}
            <div className="w-full lg:w-[45%] relative min-h-[280px] lg:min-h-[460px] overflow-hidden">
              <Image
                key={currentItem.image || currentIndex}
                src={currentItem.image || defaultImages[currentIndex % defaultImages.length]}
                alt={currentItem.title}
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary-900/15 mix-blend-multiply"></div>
            </div>

            {/* Card Content */}
            <div className="w-full lg:w-[55%] p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-white">
              {currentItem.icon && (
                <div className="w-12 h-12 bg-accent-50 rounded-2xl flex items-center justify-center text-accent-600 mb-5 shadow-sm border border-accent-100">
                  {currentItem.icon}
                </div>
              )}
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-primary-900 mb-3 leading-snug">
                {currentItem.title}
              </h3>
              
              {currentItem.desc && (
                <p className="text-secondary-600 text-base sm:text-lg mb-6 leading-relaxed font-medium">
                  {currentItem.desc}
                </p>
              )}

              <ul className="space-y-3.5 mb-6">
                {currentItem.items.map((point, i) => {
                  const splitIndex = point.indexOf(': ');
                  const hasColon = splitIndex !== -1;
                  const boldText = hasColon ? point.substring(0, splitIndex) : point;
                  const restText = hasColon ? point.substring(splitIndex + 2) : '';

                  return (
                    <li key={i} className="flex items-start gap-3.5 text-secondary-600 font-medium text-[15px] sm:text-base">
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

              {/* Mobile pagination indicators */}
              <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
                <div className="flex gap-2">
                  {items.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrentIndex(dotIdx)}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        dotIdx === currentIndex ? 'w-8 bg-primary-900' : 'w-2.5 bg-secondary-200 hover:bg-secondary-400'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-2 md:hidden">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous slide"
                    className="w-10 h-10 rounded-full bg-white text-primary-900 border border-secondary-200 shadow-sm flex items-center justify-center"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="w-10 h-10 rounded-full bg-white text-primary-900 border border-secondary-200 shadow-sm flex items-center justify-center"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

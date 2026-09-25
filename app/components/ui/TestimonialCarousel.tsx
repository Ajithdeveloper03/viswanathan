'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Every industry possesses unique cost drivers and operational variables. They bring deep, specialized costing expertise across a vast spectrum of sectors, ensuring our financial frameworks are perfectly aligned with our specific business realities.",
    name: "Viswanathan R.",
    title: "Senior Partner",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    quote: "Their meticulous approach to cost management audit has completely transformed how we view our operational efficiencies. We are now able to pinpoint exact wastage areas and streamline everything.",
    name: "Sarah L.",
    title: "Operations Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
  },
  {
    quote: "With their deep dive into our manufacturing costs, we identified key pricing strategies that significantly boosted our margins without alienating our core customer base.",
    name: "David M.",
    title: "Chief Financial Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 md:py-32 bg-[#f8f9fa] relative font-sans overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Section Title */}
        <div className="text-center mb-16 relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-50 text-accent-600 font-bold text-sm tracking-widest uppercase mb-4">
            Client Success
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-900 tracking-tight">
            Trusted by <span className="text-accent-500">Industry Leaders</span>
          </h2>
        </div>

        <div className="relative rounded-3xl lg:rounded-[3rem] bg-primary-900 text-white overflow-hidden shadow-2xl">
          
          {/* Subtle Background Gradient for the dark container */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 opacity-80 pointer-events-none"></div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 relative z-10">
            
            {/* Left: Large Image area */}
            <div className="lg:col-span-5 relative">
              <div className="w-full h-[400px] lg:h-[600px] relative bg-gray-200 lg:rounded-br-[4rem] overflow-hidden">
                <Image 
                  key={current.image}
                  src={current.image} 
                  alt={current.name} 
                  fill 
                  className="object-cover animate-fade-in"
                />
                
                {/* Decorative Frosted Triangles (as seen in the design) */}
                <div className="absolute bottom-8 right-8 flex gap-2 mix-blend-overlay opacity-60">
                   <div className="w-16 h-16 bg-white/30 backdrop-blur-md rotate-45 transform origin-bottom-left"></div>
                   <div className="w-16 h-16 bg-white/30 backdrop-blur-md rotate-45 transform origin-bottom-left -ml-8 mt-8"></div>
                   <div className="w-16 h-16 bg-white/30 backdrop-blur-md rotate-45 transform origin-bottom-left -ml-8 -mt-8"></div>
                </div>
              </div>
            </div>

            {/* Right: Content Area */}
            <div className="lg:col-span-7 p-8 lg:p-16 lg:pl-0 flex flex-col justify-center">
              
              <Quote className="w-16 h-16 text-white/10 mb-8" />
              
              <div className="min-h-[160px]">
                <p 
                  key={current.quote}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white mb-10 animate-fade-in"
                >
                  "{current.quote}"
                </p>
              </div>
              
              <div className="animate-fade-in" key={current.name}>
                <h4 className="text-xl font-bold text-accent-400 mb-1">{current.name}</h4>
                <p className="text-secondary-300 font-medium">{current.title}</p>
              </div>

            </div>
          </div>

          {/* Bottom Right Cutout for Controls */}
          <div className="absolute bottom-0 right-0 lg:w-[45%] bg-[#f8f9fa] rounded-tl-[3rem] lg:rounded-tl-[4rem] flex flex-col sm:flex-row items-center justify-between p-6 lg:px-12 lg:py-8 z-20">
             
             {/* Small Avatars Stack */}
             <div className="flex -space-x-4 mb-4 sm:mb-0 relative z-30">
                {testimonials.map((t, idx) => (
                  <div 
                    key={idx} 
                    className={`relative w-14 h-14 rounded-xl overflow-hidden border-4 border-[#f8f9fa] shadow-md transition-all duration-300 ${idx === currentIndex ? 'scale-110 z-10 ring-2 ring-accent-500 ring-offset-2 ring-offset-[#f8f9fa]' : 'opacity-60 scale-90 hover:opacity-100 cursor-pointer'}`}
                    onClick={() => setCurrentIndex(idx)}
                  >
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                ))}
             </div>

             {/* Arrows */}
             <div className="flex items-center gap-4 text-primary-900">
                <button 
                  onClick={handlePrev}
                  className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
             </div>
             
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
